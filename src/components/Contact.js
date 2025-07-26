
function Contact() {
  return (
    <section id="contact" class="contact">
      <div class="container pt-5 pb-5 mb-5 mt-5" >

      <div className="col-md-12">
                    <h4>06</h4>
                    <h2 className="size-50">Contact <br /> Me</h2>
                    <div className="hh-50"></div>
                </div>

        <div class="row px-5">

          <div class="col-lg-6">
            <div class="info">
              <div class="address">
                <h5>Location:</h5>
                <p>15 Gajanan Smruti Nemade road ,dombivli mumbai maharashtra 421202</p>
              </div>

              <div class="email">
                <h5>Email:</h5>
                <p>dsmanishsingh@gmail.com</p>
              </div>
            </div>

          </div>

          <div class="col-lg-6 mt-5 mt-lg-0">

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