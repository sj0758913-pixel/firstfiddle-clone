import React from 'react'

function Contact() {
  return (
    <>
      <div className="container-fluid Ca">
        <h2 className="Ca1 text-center text-white">CONTACT US</h2>
      </div>

      <div className="container hgt">
        <div className="row">
          <div className="col-md-6 Cb">
            <h2 >SEND US MESSAGE</h2>
            <form>
              <input type="text" className="form-control" name="name" placeholder="NAME*" required />
              <br />
              <input type="email" className="form-control" name="email" placeholder="Email*" required />
              <br />
              <input type="number" className="form-control" name="phone" placeholder="Phone*" required />
              <br />
              <input type="text" className="form-control" name="mess" placeholder="Message*" required />
              <br />
              <button className="btn btn-warning btn-lg text-light">Submit</button>
            </form>
          </div>

          <div className="col-md-6 mb-3 Cb1" style={{marginTop:55}}>
            <h2>CONTACT INFO</h2>
            <h4 style={{marginTop:30}}>Address</h4>
            <p>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</p>
            <h4>For Franchise Enquiry</h4>
            <p>MOBILE: <b style={{color: "orange"}}>+91 9313663486</b></p>
            <p>EMAIL: <b style={{color: "orange"}}>franchise@firstfiddle.in</b></p>
            <h4>For HR Enquiry</h4>
            <p>MOBILE: <b style={{color: "orange"}}> +91 9999304427</b></p>
            <p>EMAIL: <b  style={{color: "orange"}}>hr@firstfiddle.in</b></p>
            <h4>For Other Enquiry</h4>
            <p>PHONE: <b style={{color: "orange"}}>7676380000</b></p>
            <p>EMAIL: <b style={{color: "orange"}}>customercare@firstfiddle.in</b></p>
            <p>Open: Monday - Saturday 10:30 - 19:30</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact
