import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css'
import logo from '../assets/Hero.png'

function Home() {
    return (
        <>
                <div className="row hero">
                    <div className="col-md-6">
                        <img src={logo} className="image m-0 p-0" alt="Responsive image"/>
                    </div>
                    <div className="col-md-6 mt-5 justify-content-md-center align-content-center">
                        <h1 className="display-4 fw-bold data">
                            <h4 className={"mt-5 justify-content-center align-content-center center"}>
                                Hi<br/>
                                <br/>
                                I am Moon Khan,
                            </h4>
                            <h2 className={"mt-3"}>I build value throw design.</h2>
                            <h5 className={"mt-3 text-danger"}>HTML/CSS/JAVASCRIPT/REACT.</h5>
                        </h1>
                        <div className={"button btn-default mt-5 align-content-between data"}>
                            <button className={""}>Download CV</button>
                            <button className={"ms-3 btn-danger"} >Hire Me</button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home;