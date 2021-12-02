// import logo from './logo.svg';
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Downloading from "./views/Downloading";
import Completed from "./views/Completed";
import NewTask from "./views/NewTask";
import Setting from "./views/Setting";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <aside>
        <div>
          <Link to="/">正在下载</Link>
        </div>
        <div>
          <Link to="/completed">已完成</Link>
        </div>
        <div>
          <Link to="/new">新建下载</Link>
        </div>
        <div>
          <Link to="/setting">设置</Link>
        </div>
        <div>
          <Link to="/servers">服务器列表</Link>
        </div>
      </aside>

      <main>
        <Switch>
          <Route path="/completed">
            <Completed />
          </Route>

          <Route path="/new">
            <NewTask />
          </Route>

          <Route path="/setting">
            <Setting />
          </Route>

          <Route path="/">
            <Downloading />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
