import React from 'react'
import './Hero.css'
import crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='left'>
                <p>Buy & Sell crypto 24/7 using your retirement account </p>
            <h1>Invest in Cryptocurreny with your IRA</h1>
            <p>Buy, Sell and store hundreds of Cryptocurrenies</p>
            <p>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
            <div className='input-container'>
                <input type="email"placeholder='Enter you email' />
                <button className='btn'>Learn More</button>
            </div>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <img src={crypto} alt=""  />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero