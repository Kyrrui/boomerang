import backoff from 'backoff';
import kudosContract from "../services/KudosContractService";

export default class IsBusinessRequester {

  async makeRequest(addressArg) {

    return new Promise((resolve, reject) => {

      this.call = backoff.call(kudosContract.methods.isBusiness(addressArg).call, (error, result) => {

        if (error) {
          return reject(error);
        } else {
          return resolve(result);
        }
      });

      this.call.setStrategy(new backoff.ExponentialStrategy());
      this.call.failAfter(12);
      this.call.start();
    });
  }

  async cancel() {

    if (this.call == undefined || this.call.abort == undefined) {
      return;
    }

    this.call.abort();
  }
}