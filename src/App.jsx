import React from 'react';
import CheckCustomerEligibility from './features/CheckCustomerEligibility';
import Disqualification from './features/Disqualification/index.jsx';
import Register from './features/Register';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Router>
        <Switch>
          <Route exact path="/" component={CheckCustomerEligibility} />
          <Route exact path="/disqualification" component={Disqualification} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
