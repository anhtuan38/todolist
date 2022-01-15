
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import TodoDetail from './pages/TodoDetail';
import TodoList from './pages/TodoList';
import history from './utils/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            
            <Route exact path="/todo/:id">
              <TodoDetail />
            </Route>
            <Route exact path="/">
              <TodoList />
            </Route>
            <Route >
              <div>
                oops...not found page!
              </div>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
