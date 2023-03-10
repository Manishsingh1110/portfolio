import React from 'react'

function Contact() {
  return (
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

      <div className="col-md-12">
                    <h4>06</h4>
                    <h1 className="size-50">Contact <br /> Me</h1>
                    <div className="hh-50"></div>
                </div>

        <div class="row mt-1">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <h5>Location:</h5>
                <p>15 Gajanan Smruti Nemade road ,dombivli mumbai maharashtra 421202</p>
              </div>

              <div class="email">
                <h5>Email:</h5>
                <p>manish.singh21@comp.sce.edu.in</p>
              </div>

              <div class="phone">
                <h5>Call:</h5>
                <p>8591071831</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact