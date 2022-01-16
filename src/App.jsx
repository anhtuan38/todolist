
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TodoDetail from './pages/TodoDetail';
import TodoList from './pages/TodoList';
import history from './utils/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
            <Route exact path="/todo/:id">
              <TodoDetail />
            </Route>
            <Route exact path="/">
              <TodoList />
            </Route>
        </div>
      </Router>

    </div>
  );
}

export default App;
