import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Spinner from './components/Spinner';

const CheckCustomerEligibility = lazy(() => import('./features/CheckCustomerEligibility'))
const Disqualification = lazy(() => import('./features/Disqualification/index.jsx'))
const Register = lazy(() => import('./features/Register'))


function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Router>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={CheckCustomerEligibility} />
            <Route exact path="/disqualification" component={Disqualification} />
            <Route exact path="/register" component={Register} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
