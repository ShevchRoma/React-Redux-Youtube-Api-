import './App.css';
import Login from './components/Login/Login';
import {BrowserRouter,Route} from 'react-router-dom';
import ChanellList from './components/ChanellList/ChanellList';
import WatchScreen from './components/watchScreen/WatchScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Route path='/' component={Login} exact />
      <div className="app__homescreen">
      <Route path='/chanelllist' component={ChanellList} exact />
      <Route path='/watch/:id' component={WatchScreen}  />
            
      
      </div>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
