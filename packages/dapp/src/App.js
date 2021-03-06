import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserPage from "./pages/user/UserPage";
import WorkerPage from "./pages/worker/WorkerPage";
import BusinessPage from "./pages/business/BusinessPage";

class App extends Component {

  render() {

    return (
      <div className="App">

        <Router>

          {/*<div>*/}
          {/*<Route exact={true} path="/" component={IntroPage} />*/}
          {/*<Route path="/createWallet" component={CreateWalletPage} />*/}
          {/*<Route path="/importWallet" component={ImportWalletPage} />*/}
          {/*</div>*/}

          <div>
            <Route path="/" component={UserPage} />
            <Route path="/workerPage" component={WorkerPage} />
            <Route path="/businessPage" component={BusinessPage} />
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
