import { NavLink as Link, Route, Switch } from "react-router-dom";
import BasicSetting from "./settings/BasicSetting";
import HTTPSetting from "./settings/HTTPSetting";
import FTPSetting from "./settings/FTPSetting";

export default function Setting() {
  return (
    <div>
      <nav>
        <Link to="/setting/basic">基本设置</Link>
        <span> | </span>
        <Link to="/setting/http">HTTP设置</Link>
        <span> | </span>
        <Link to="/setting/ftp">FTP设置</Link>
      </nav>

      <main>
        <Switch>
          <Route path="/setting/basic">
            <BasicSetting></BasicSetting>
          </Route>

          <Route path="/setting/http">
            <HTTPSetting></HTTPSetting>
          </Route>

          <Route path="/setting/ftp">
            <FTPSetting></FTPSetting>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
