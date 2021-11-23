import React from 'react';

function App() {
  return (
    <div className='grid-container'>
            <header className='row'>
                <div>
                    <a className='brand' href='index.html'>KDRF</a>
                </div>
                <div>
                    <a href="cart.html">Carrinho</a>
                    <a href="signin.html">Sign In</a>
                </div>

            </header>
            <main>
                <div className='row center'>
                  {
                    data.produtos.map(produtos =>(
                      <div className='card'>
                      <a href="product.html">
                          
                          <img className='medium' src='./images/p1.png' alt='product'/>
                      </a>
                      <div className='card-body'>
                          <a href="product.html">
                              <h2>{produtos.nome}</h2>
                          </a>
                          <div className='rating'>
                              <span> <i className='fa fa-star'></i> </span>                               
                              <span> <i className='fa fa-star'></i> </span>                                                                
                              <span>  <i className='fa fa-star'></i> </span>                               
                              <span> <i className='fa fa-star'></i> </span>                                                                  
                              <span> <i className='fa fa-star'></i> </span>                                                                    
                          </div>
                          <div className='price'>
                              $120
                          </div>
                    </div>     

                    ))
                  }
                                      
                </div>
                                                                                                            
            </main>
            <footer className='row center'>@2021 TODOS OS DIREITOS RESERVADOS</footer>
        </div>
   
  );
}

export default App;
