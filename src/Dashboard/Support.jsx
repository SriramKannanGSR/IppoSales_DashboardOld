import React from 'react';
import './dashboard.css';

const Support = () => {
  return (
    <div className="divbox">

      <div className="reporttitle">
        <p className='reportdata'>Help</p>
      </div>

      <div className="reportcontent">
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Support Assistance</h3>
            <p class="text">
                      Hi..! We are truly excited to introduce ourselves as the team passionately developing the Ippo Sales Chat Bot. 
                  Our main moto is to thoughtfully design this chatbot to help our customers work incredibly efficiently. 
                  However, we can only successfully achieve this through your valuable feedback, which we eagerly anticipate. 
                  We are absolutely thrilled to hear your comments and suggestions!
            </p>           

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61561402156283" className="social-icon" id='fb' target='blank'>
                  <img src="/img/facebook.png" alt="" srcset=""  className='fbicon'/>
                </a>

                <a href="https://www.instagram.com/ipposales/" className="social-icon" id='gh' target='blank'>
                  <img src="/img/instagram.png" alt="" srcset=""  className='fbicon'/>
                </a>

                <a href="https://www.linkedin.com/showcase/ippo-sales/" className="social-icon" id='gg' target='blank'>
                  <img src="/img/linkedin.png" alt="" srcset=""  className='fbicon'/>
                </a>

                <a href="http://www.youtube.com/@ipposales" className="social-icon" id='ln' target='blank'>
                  <img src="/img/whatsapp.png" alt="" srcset=""  className='fbicon'/>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 class="title">Contact us</h3>

              <div className='input-container'>

              </div>


              <div className='input-container'>

              </div>

              <div className='input-container'>

              </div>

              <div className='input-container'>

              </div>

              <input type="submit" value="Call Here" class="btn" />
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Support;