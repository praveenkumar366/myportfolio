import React, { Component } from 'react';
import '../Home/Home.css';
import avatar from '../images/super_s.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.main_div = React.createRef();
        this.card = React.createRef();
        this.info = React.createRef();
        this.supersaiyan = React.createRef();
        this.saiyan = React.createRef();
    }
   
    
//      card = document.querySelector('.card');
// container = document.querySelector('.main_div');


    mouseEnter = (e) => {
        this.card.current.style.transition = 'none';
    this.info.current.style.transform = "translateZ(50px)";
    // desc.style.transform = "translateZ(75px)";
    this.saiyan.current.style.transform = "rotateZ(-45deg)";
    // sizes.style.transform = "translateZ(75px)";
    // turn.style.transform = "translateZ(75px)";
    };

    mouseLeave = (e) => {
        this.card.current.style.transition = 'all 0.5s ease'
        this.card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        this.info.current.style.transform = "translateZ(0px)";
        this.saiyan.current.style.transform = "rotateZ(0deg)";
    };

    mouseMove =(e) => {
        let Xaxis = (window.innerWidth / 2 - e.pageX) / 25;
    let Yaxis = (window.innerHeight / 2 - e.pageY) / 25; 
    this.card.current.style.transform = `rotateY(${Xaxis}deg) rotateX(${Yaxis}deg)`;
    }
    render() {
        return (
            <>
            <div className="main_div" ref={this.main_div} onMouseEnter={this.mouseEnter} onMouseMove={this.mouseMove} onMouseLeave={this.mouseLeave}>
            <div className="card_i" ref={this.card}>
                <div className="supersaiyan" ref={this.supersaiyan}>
                    <div className="circle"></div>
                    <img src={avatar} alt="saiyan" ref={this.saiyan} />
                </div>
                <div className="info" ref={this.info}>
                    <h1 className="title" ref={this.title}>Praveen Kumar</h1>
                    <h3>I'm a Developer</h3>
                    <div className="sizes">
                        <button><FontAwesomeIcon icon={faLinkedinIn} id="iconic" /></button>
                        <button><FontAwesomeIcon icon={faTwitter} id="iconic" /></button>
                        <button className="active"><FontAwesomeIcon icon={faInstagram} id="iconic" /></button>
                        <button><FontAwesomeIcon icon={faFacebook} id="iconic" /></button>
                    </div>
                    <div className="transform" ref={this.transform}>
                        {/* <button className="turn">r4praveen121@gmail.com</button> */}
                        <a className="turn" href="mailto:r4praveen121@gmail.com">r4praveen121@gmail.com</a>
                    </div> 
                </div>
            </div>
        </div>
        </>
        )
    }
}
