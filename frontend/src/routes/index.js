import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/register" exact component={Home}/>
                <Route path="/room/:roomId"  component={Home}/>
            </Switch>
        </Router>
    );
  }
  