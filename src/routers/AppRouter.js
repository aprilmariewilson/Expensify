import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import PublicRoute from './PublicRoute';
import NotFoundPage from '../components/NotFound';
import LogInPage from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();


//if you use router instead of browserrouter you can manipulate history
const AppRouter = () => (
<Router history={history}>
<div>
<Switch>
<PublicRoute path="/" component={LogInPage} exact={true}/>
<PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
<PrivateRoute path="/create" component={AddExpensePage}/>
<PrivateRoute path="/edit/:id" component={EditExpensePage}/>
<Route component={NotFoundPage}/>
</Switch>
</div>
</Router>
);

export default AppRouter;