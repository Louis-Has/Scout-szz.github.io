import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import moment from "moment";
// import "moment/locale/zh-cn";
// import axios from "axios";

import All from "./TasksPages/All";
// import { useInput } from "../hooks";

export default function Q() {
  let scopeAll = () => true;

  let scopeToday = (todo) => {
    let date = moment().format("YYYY-M-D");
    return todo.date === date;
  };

  let scopeRecent = (todo) => {
    let date = moment().format("YYYY-M-D");
    let dateLater = moment().add(7, "days").format("YYYY-MM-D");
    return todo.date >= date && todo.date <= dateLater;
  };

  let match = useRouteMatch();

  return (
    <Router>
      <div className="side nav">
        <span></span>
        <NavLink to={`${match.url}/all`}>所有</NavLink>
        <NavLink to={`${match.url}/today`}>今天</NavLink>
        <NavLink to={`${match.url}/recent`}>最近7天</NavLink>
      </div>

      <Switch>
        <Route path={`${match.url}/`} exact>
          <Redirect to={`${match.url}/all`}></Redirect>
        </Route>
        <Route path={`${match.url}/all`}>
          <All scope={scopeAll} tip={"所有"}></All>
        </Route>
        <Route path={`${match.url}/today`}>
          <All scope={scopeToday} tip={"今天"}></All>
        </Route>
        <Route path={`${match.url}/recent`}>
          <All scope={scopeRecent} tip={"最近7天"}></All>
        </Route>
      </Switch>
    </Router>
  );
}
