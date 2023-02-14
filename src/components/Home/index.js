// Write your JS code here

import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="logo-description-container">
      <div className="web-info">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          className="clothes-you-get-img-sm"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p className="website-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exiting fashion in
          your own way.
        </p>
        <button className="shop-now-btn" type="button">
          Shop Now
        </button>
      </div>
      <img
        className="clothes-you-get-img-lg"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
