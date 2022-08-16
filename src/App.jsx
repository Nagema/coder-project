import { Fragment } from 'react';
import './App.css';
import { NavBar } from './containers/NavBar/NavBar';
import { NotFound } from './components/NotFound/NotFound';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer  from './containers/ItemListContainer';
import Cart from './containers/Cart';
import WelcomePage from './containers/welcomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopProvider from './context/ShopContext';
import constants from './utils/constants';
import Checkout from './containers/Checkout/Checkout';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <ShopProvider>
        <BrowserRouter>
          <Fragment>
            <NavBar/>
            <Routes>
              <Route 
                path='/' 
                element={<WelcomePage 
                  welcome={constants.welcome} 
                  gretting={constants.gretting}
                  note={constants.note} 
                  /> 
                }>
              </Route>
              <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
              <Route path='*' element={<NotFound />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/checkout-process' element={<Checkout />}></Route>
            </Routes>
          </Fragment>
        </BrowserRouter>
      </ShopProvider>
    </SearchProvider>
  );
}

export default App;
