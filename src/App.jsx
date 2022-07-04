import { Fragment } from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer  from './containers/ItemListContainer';
import WelcomePage from './containers/welcomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <NavBar/>
        <Routes>
          <Route 
            path='/' 
            element={<WelcomePage 
            welcome="welcome!" 
            gretting="we're glad you're here" 
            note="we're working on something special" 
            /> 
          }>
          </Route>
        </Routes>
        <ItemListContainer />
        <ItemDetailContainer/>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
