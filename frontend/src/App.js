import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from '../src/pages/Home'
import ProductScreen from '../src/pages/Product';

function App() {
  return (
    <BrowserRouter>
    <div className='grid-container'>
            <header className='row'>
                <div>
                    <a className='brand' href='/'>KDRF</a>
                </div>
                <div>
                    <a href="/cart">Carrinho</a>
                    <a href="/signin">Sign In</a>
                </div>

            </header>
            <main>
              <Route path='/product/:id' component={ProductScreen}></Route>
              <Route path='/' exact component={HomeScreen}></Route>
                
            </main>
            <footer className='row center'>@2021 TODOS OS DIREITOS RESERVADOS</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
