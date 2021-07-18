import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';

function App() {
  return (
    <div className="flex justify-center">
      <Switch>
        <Route path="/country">
          <Country />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
