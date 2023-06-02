import React, { useState } from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

function App(){
return<>
<Router>
<Nav/>
<Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/products'element={<Products/>}/>
        <Route path='/reports'element={<Reports/>}/>
</Routes>
</Router>
</>
}
export default App;

