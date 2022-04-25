import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Shankee from './Shankee.pdf';

const Services = () => {
    return (
        <div className="services">
        
        {/* left side */}
        <div className="awesome">
        
        <span> My awesome</span>
        <span> Services</span>
            <spane>
                I am an Undergraduate student Of Uva Wellassa University
                <br />

                </spane>
                <a href={Shankee} download>
                <button className='button s-button'>Download CV</button>
                </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>


          {/* right side */}
            <div className="cards">
            <div style={{left: '14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
                    detail ={'Figma, Adobe XD'}
                    />
                    </div>
            </div> 

            <div className="cards">
            <div style={{top:"12rem", left: '-4rem'}}>
            <Card
            emoji={Glasses}
            heading={'Developer'}
                    detail ={'Html, Css, JavaScript, React, Nodejs, Express'}
                    />
                    </div>
            </div> 

            <div className="cards">
            <div style={{top:"19rem", left: '12rem'}}>
            <Card
            emoji={Humble}
            heading={'UI/UX'}
                    detail ={'Figma, Adobe XD'}
                    />
                    </div>
            </div> 
            <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
            
            
      </div>


  )
}

export default Services