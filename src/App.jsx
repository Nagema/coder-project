import { Fragment } from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer  from './containers/ItemListContainer';
import WelcomePage from './containers/welcomePage';
import example from '../src/assets/example.png';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <WelcomePage 
        welcome="welcome!" 
        gretting="we're glad you're here" 
        note="we're working on something special" 
      /> 
      <ItemListContainer
        stock={3}
        price={10.00}
        currency='€'
        title="Example"
        image={example}
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        items={12}
     />
    </Fragment>
  );
}

export default App;
