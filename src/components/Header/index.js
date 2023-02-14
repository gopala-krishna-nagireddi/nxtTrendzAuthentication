// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-logout-img-container">
      <img
        className="web-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <img
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
    </div>
    <ul className="nav-icon-container">
      <li>
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
        <p className="navigation-items">Home</p>
      </li>
      <li>
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
        <p className="navigation-items">Products</p>
      </li>
      <li>
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
        <p className="navigation-items">Cart</p>
      </li>
      <button className="logout-btn" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
