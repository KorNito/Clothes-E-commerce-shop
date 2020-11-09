import logo from './logo.svg';
import './App.css';

function App() {
    const openSidebar = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeSidebar = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (
<div className="grid-container">
  <header className="header">
      <div className="brand">
          <button onClick={openSidebar}>
              &#9776;
          </button>
          <a href="index.html">Drabužių parduotuvė</a>
      </div>
      <div className="header-links">
          <a href="cart">Krepšelis</a>
          <a href="signin">Prisijungti</a>
      </div>
  </header>
  <aside className="sidebar">
      <h3>Drabužių kategorijos</h3>
    <button className="sidebar-close-button" onClick={closeSidebar}>X</button>
      <ul>
          <li>
              <a href="index.html">Kelnės</a>
          </li>
          <li>
              <a href="index.html">Marškiniai</a>
          </li>
      </ul>
  </aside>
  <main className="main">
      <div className="content">
          <ul className="products">
              <li>
                  <div className="product">
                      <img className="product-image" src="/images/d1.jpg" alt="product"/>
                      <div className="product-name">
                          <a href="product.html">Slim Shirt</a>
                      </div>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">$60</div>
                      <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
              </li>
              <li>
                  <div className="product">
                      <img className="product-image" src="/images/d1.jpg" alt="product"/>
                      <div className="product-name">
                          <a href="product.html">Slim Shirt</a>
                      </div>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">$60</div>
                      <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
              </li>
              <li>
                  <div className="product">
                      <img className="product-image" src="/images/d1.jpg" alt="product"/>
                      <div className="product-name">
                          <a href="product.html">Slim Shirt</a>
                      </div>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">$60</div>
                      <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
              </li>
              <li>
                  <div className="product">
                      <img className="product-image" src="/images/d1.jpg" alt="product"/>
                      <div className="product-name">
                          <a href="product.html">Slim Shirt</a>
                      </div>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">$60</div>
                      <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
              </li>
              <li>
                  <div className="product">
                      <img className="product-image" src="/images/d1.jpg" alt="product"/>
                      <div className="product-name">
                          <a href="product.html">Slim Shirt</a>
                      </div>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">$60</div>
                      <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
              </li>
              <li>
                  <div className="product">
                      <img className="product-image" src="/images/d1.jpg" alt="product"/>
                      <div className="product-name">
                          <a href="product.html">Slim Shirt</a>
                      </div>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">$60</div>
                      <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
              </li>
          </ul>
      </div>
  </main>
  <footer className="footer">
      All rights reserved.
  </footer>
</div>
    );
}

export default App;
