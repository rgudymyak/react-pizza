import './scss/app.scss';
import React from 'react';


import {
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header'
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';

export const SearchContext = React.createContext();

function App() {

  

  const [searchText, setSearchText] = React.useState('');  

  return (
    <div className="wrapper">
     <SearchContext.Provider value={{searchText, setSearchText}} >
     <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
     </SearchContext.Provider>
    </div>
  );
}

export default App;
