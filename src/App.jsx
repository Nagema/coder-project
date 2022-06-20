import { Fragment } from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <ItemListContainer 
        welcome="welcome!" 
        gretting="we're glad you're here" 
        note="we're working on something special"> 
      </ItemListContainer>
    </Fragment>
  );
}

export default App;
