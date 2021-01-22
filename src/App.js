import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import ROUTES from './routes';
//------variable global------//
import {UIStore} from './store/UIStore';
import {getPrueba} from './services/prueba';

function App() {
  console.log(UIStore.useState(s=>s.prueba))
  getPrueba(UIStore.useState(s=>s.prueba));
  return (
    <div className="App">
      <Router>
        <Switch>
          {ROUTES.map((route,idx)=>
            <Route key={idx}
            exact={route.exact}
            path={route.path}
            component={route.component}/>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
