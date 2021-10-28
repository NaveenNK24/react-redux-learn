
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './component/CakeContainer';
import HooksIceCreamContainer from './component/HookIceCreamContainer';
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import ItemContainer from './component/ItemContainer';
import NewCakeContainer from './component/NewCakeContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <HooksIceCreamContainer/>
        <NewCakeContainer/>
      </Provider>


    </div>
  );
}

export default App;
