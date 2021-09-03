import Main from "./Pages/Main/Main.jsx"
import Store from "./Pages/Store/Store.jsx"
import Mac from "./Pages/Mac/Mac.jsx";
import Layout from "./Components/Layout/Layout.jsx"
import './App.css';
import { Switch, Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route exact path="/mac">
            <Mac />
          </Route>
        </Switch>
      </BrowserRouter> 
    </Layout>
  );
}

export default App;
