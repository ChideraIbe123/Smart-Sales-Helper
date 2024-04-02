import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Search' element={<Search></Search>}></Route> 

      </Routes>
      </BrowserRouter>
        <Header />
        <Cart />
      </Provider>
    </>
  );
};

export default App;

