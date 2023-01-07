import React from 'react'

const Resume = () => {
    return (
        <section id="resume" class="resume">
            <div class="container" data-aos="fade-up">

                <div className="col-md-12 pb-5">
                    <h4>03</h4>
                    <h1 className="size-50">My <br />Resume</h1>
                </div>
                <div className='container'>
                    <div class="row">
                        <div class="col-lg-6">
                            <h3 class="resume-title">Sumary</h3>
                            <div class="resume-item pb-0">
                                <h4>Manish Singh</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 1+ years of working experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <ul>
                                    <li>Dombivli ,Maharashtra 421202</li>
                                    <li>8591071831</li>
                                    <li>manish.singh21@comp.sce.edu.in</li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Education</h3>
                            <div class="resume-item">
                                <h4>Bachelor of Engineering in Data science</h4>
                                <h5>2020-2024</h5>
                                <p><em>Sarawati Collage of Engineering(Navi-Mumbai Maharashtra)</em></p>
                            </div>
                            <div class="resume-item">
                                <h4>HSC in Science stream</h4>
                                <h5>2019-2020</h5>
                                <p><em>E B madhavi college (Mumbai Maharashtra)</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume