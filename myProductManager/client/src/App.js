import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import UpdateProduct from './views/UpdateProduct';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Remember that the path is the browswer URL */}
        <Main path="/" /> 
        <ProductDetail path="/:id" />
        <UpdateProduct path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
