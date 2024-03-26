export default function ContactSection() {
  return (
    <div className="contact-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                width="100%"
                height="500px"
                frameBorder="0"
                style={{ border: "0", borderRadius: "10px", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
                allowFullScreen=""
              ></iframe>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="item phone">
                  <img src="/images/phone-icon.png" alt="" style={{ maxWidth: "52px" }} />
                  <h6>
                    +359 877 136 424
                    <br />
                    <span>Phone Number</span>
                  </h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item email">
                  <img src="/images/email-icon.png" alt="" style={{ maxWidth: "52px" }} />
                  <h6>
                    sv.stoichkov@yahoo.com
                    <br />
                    <span>Business Email</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <form id="contact-form" action="" method="post">
              <div className="row">
                <div className="col-lg-12">
                  <fieldset>
                    <label htmlFor="name">Full Name</label>
                    <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <label htmlFor="subject">Subject</label>
                    <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="orange-button">
                      Send Message
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
