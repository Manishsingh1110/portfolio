function Projects() {
    return (
        <div className="section" id="projects">
            <div className="container">
                <div className="col-md-12">
                    <h4>05</h4>
                    <h2 className="size-50">My <br /> Projects</h2>
                </div>
                <div className="main-container portfolio-inner clearfix">
                    <div className="portfolio-div">
                        <div className="portfolio">
                            <div className="no-padding row portfolio_container clearfix" data-aos="fade-up">
                                 <div className="col-md-4 col-sm-6 Entertainment">
                                    <a id="demo02" href="https://gowithglow.netlify.app/" className="portfolio_item"> 
                                    <img
                                        src="./assets/img/kennect.png" alt="/"  style={{height:"100%",width:"100%"}}/>
                                        <div className="portfolio_item_hover">
                                            <div className="portfolio-border clearfix">
                                                <div className="item_info"> <span>Kennect Technologies </span> <em>Website</em>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                               
                               
                                <div className="col-md-4 col-sm-6 Website">
                                    <a id="demo03" href="https://sastacommunity.netlify.app" className="portfolio_item"> <img
                                        src="./assets/project/02.png" alt="/" className="img-fluid" />
                                        <div className="portfolio_item_hover">
                                            <div className="portfolio-border clearfix">
                                                <div className="item_info"> <span>Comunnity Website</span> <em>Website</em> </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 fashion ads">
                                    <a id="demo04" href="https://dssa.engineer/" className="portfolio_item"> <img
                                        src="./assets/project/04.png" alt="/" className="img-fluid" />
                                        <div className="portfolio_item_hover">
                                            <div className="portfolio-border clearfix">
                                                <div className="item_info"> <span>Student association</span> <em>Website</em> </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
