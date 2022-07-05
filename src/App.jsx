import { Fragment } from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { NotFound } from './components/NotFound/NotFound';
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
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
