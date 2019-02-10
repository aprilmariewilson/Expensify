import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';
import LogInPage from '../components/Login';

export const history = createHistory();


//if you use router instead of browserrouter you can manipulate history
const AppRouter = () => (
<Router history={history}>
<div>
<Header />
<Switch>
<Route path="/" component={LogInPage} exact={true}/>
<Route path="/dashboard" component={ExpenseDashboardPage} />
<Route path="/create" component={AddExpensePage}/>
<Route path="/edit/:id" component={EditExpensePage}/>
<Route path="/help" component={HelpPage}/>
<Route component={NotFoundPage}/>
</Switch>
</div>
</Router>
);

export default AppRouter;