// we no need to install this package , its already install with main package
// use this to create our own history object instead of browser history object
// so easy to programmaticaly change the routing
//import createHistory from "history/createBrowserHistory";
const createHistory = require("history").createBrowserHistory;

export default createHistory();
