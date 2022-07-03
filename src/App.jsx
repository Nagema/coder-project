import { Fragment } from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer  from './containers/ItemListContainer';
import WelcomePage from './containers/welcomePage';


function App() {
  return (
      <Fragment>
        <NavBar/>
        <WelcomePage 
          welcome="welcome!" 
          gretting="we're glad you're here" 
          note="we're working on something special" 
          /> 
        <ItemListContainer />
        <ItemDetailContainer/>
      </Fragment>
  );
}

export default App;
