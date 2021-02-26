import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Router>
    );
  }
  