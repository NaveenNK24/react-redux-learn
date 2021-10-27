
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './component/CakeContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer/>
      </Provider>


    </div>
  );
}

export default App;
