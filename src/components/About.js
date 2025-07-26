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
                        <h2 className="size-50">Know <br /> About me</h2>

                        <p className='py-3'>I’m Manish Singh, a passionate Full Stack Web Developer based in Mumbai with a strong foundation in both frontend and backend technologies.<br /> I specialize in building dynamic, responsive websites using the MERN stack (MongoDB, Express.js, React, Node.js) and have hands-on experience with platforms like WordPress, Webflow, and Wix.<br /> From contributing to SEO strategies and illustration design at Kennect Technologies to developing full-fledged web applications during multiple internships, I’ve embraced every opportunity to learn and grow. With a Bachelor’s degree in Computer Science from the University of Mumbai, I constantly strive to stay updated with the latest web trends and technologies to build impactful digital solutions.</p>
                        <img src="./assets/img/signature.png" width="230" alt="" />

                    </div>
                    <div className="col-md-6 d-flex px-5 py-4">
                        <div className=" back-img ms-auto"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About