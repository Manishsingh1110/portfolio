import React from 'react';
// import img from './img/back.jpg';
function About() {
    return (
        <div className="section" id="about">
            <div className="container-fluid">
                <div className='row'>
                <div className="col-md-6 main" data-aos="fade-up" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <h4>01</h4>
                    <h1 className="size-50">Know <br /> About me</h1>
                    <div className="hh-50"></div>
                    <p>I as a frontend developer  specializes in the development of applications that run in a web browser or on a web server. I am capable of creating the user interface of a web application and ensuring that it is visually appealing and easy to use. I can also work closely with designers and back-end developers to implement the features and functions of the application. Frontend developers typically use HTML, CSS, and JavaScript to build the user interface and make it interactive. I am also responsible for testing the application and fixing any bugs or issues that arise.</p>
                    <p>Appropriately maintain standards compliant total linkage with cutting-edge action items.
                        Enthusiastically create seamless synergy rather than excellent value. Quickly promote premium
                        strategic theme areas vis-a-vis.</p>
                    <p>A fully enthusiastic and motivated person</p>
                    <div className="hh-50"></div>
                    <img src="./assets/img/signature.png" width="230" alt="" />
                    <div className="hh-50"></div>
                </div>
                <div className="col-md-6">
                    <img src="./assets/img/back.jpg" width="400" className="img-fluid" alt="hh" align="right"
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About