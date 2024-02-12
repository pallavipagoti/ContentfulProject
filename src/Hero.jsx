import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return <section className="hero">
    <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Voluptates recusandae, 
                cupiditate, eos dolores explicabo doloremque officia 
                est nesciunt voluptatum, mollitia sequi magnam? Quo 
                sapiente cum commodi neque cumque, vel aperiam.
                </p>

        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img'/>
        </div>
        
    </div>
  </section>

}

export default Hero
