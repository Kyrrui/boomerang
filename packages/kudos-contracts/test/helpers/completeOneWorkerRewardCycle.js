import { ipfsHash, rewardSystem } from './mockData';

export default async function completeOneWorkerRewardCycle(kudos, userAddress, workerAddress, businessAddress) {

  for (let i = 0; i < rewardSystem.numberOfRewardSteps; i++) {
    const workerRating = 5;
    const businessRating = 3;
    await kudos.rateExperience(userAddress, workerAddress, businessAddress, workerRating, businessRating, ipfsHash);
  }
}