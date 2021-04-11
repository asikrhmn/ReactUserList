import './App.css';
import { createBrowserHistory } from "history"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <div className="App">
                {}
                <Switch>
                    <Route path='/users/:id' component={UserDetails}/>

                    <Route path="/">
                        <UserList/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
