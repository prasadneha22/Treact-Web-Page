import React from 'react'
import './MainPage.css'

function MainPage() {
  return (
    <div className='main-container'>
        <div className="container">
        <nav>
            <div className='logo'>
                <img className='logo-img' src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
                Treact
            </div>
            <div className='list-item'>
                <a href="#"><div className='item'>About</div></a>
                <a href="#"><div className='item'>Blog</div></a>
                <a href="#"><div className='item'>Pricing</div></a>
                <a href="#"><div className='item'>Login</div></a>
            </div>
        </nav>
        <div className="content">
            <div className="heading">
                <h1>Find Perfect Hotels <br /> <span>anywhere you go.</span></h1>
            </div>
            <div className="para">
                <p>We've been in the hotels business across the world <br /> for 5 years now. We assure you that you will always <br /> enjoy your stay with us.</p>
            </div>
            <div className="btns">
                <button id='sign'>Sign Up</button>
                <button id='search'>Search Hotels</button>
            </div>
        </div>
        </div>
        <div className="hero-image">
            <img className='heroImage' src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75" alt="" />
        </div>
    </div>
  )
}

export default MainPage