import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row foot1">
            <div className="col-md-5">
              <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" />
            </div>
            <div className="col-md-7">
              <h2 className="mt-4 foot"><b style={{ color: "orange" }}>CONTACT</b> US</h2>
              <p className="footP">We're a team focusing on redefining the way the hospitality industry works by bringing in concept based restaurants across India. We are truly committed to catering to the ever-changing cosmopolitan taste of the customer and revolutioning the F & B industry!</p>
              <div className="row foothead">
                <div className="col-md-6">
                  <h2>ADDRESS</h2>
                  <p>S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi 110017</p>
                </div>
                <div className="col-md-1">
                  <h2>ENQUIRY</h2>
                  <p>Email: customercare@firstfiddle.in</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="container-fluid" style={{backgroundColor:'black;'}}>
          <div className="row">
            <div className='col-md-3'></div>
            <div className="col-md-6 align text-light">
              <p className="mt-3">EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG | APP <b style={{marginLeft:50}}>COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED</b></p>
            </div>
          </div>
        </div>
      </footer>
    </>


  )
}

export default Footer
