import './App.css';
import {Provider} from 'react-redux'
// import CakeContainer from './Components/CakeContainer'
import store from './Redux/store'
import UserContainer from './Components/UserContainer';
// import HooksCakeContainer from './Components/HooksCakeContainer';
// import IceCreamContainer from './Components/iceCreamContainer';
// import NewCakeContainer from './Components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/> */}
        {/* <NewCakeContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
