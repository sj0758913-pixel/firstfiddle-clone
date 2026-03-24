import React from 'react'

function Home() {
  return (
     <>
    <div>
        <img src="https://pn-paul.netlify.app/image/slider22.jpg" alt="" className="w-100 ss"/>
    </div>

    <div className="container">
        <h2 className="mb-3 Ha">Welcome To <b style={{color:"orange"}}>First Fiddle</b></h2>
        <div className="row">
            <div className="col-md-7 hha">
                <p>First Fiddle Restaurants, one of
                    India's most prominent F&B companies in the casual dining sector, is headed by Priyank Sukhija.
                    Starting the journey from Lazeez Affair in 1999 to Miso Sexy and Bougie in 2022, we have created
                    wave after wave in the industry with over 30+ restaurants, brands, and franchises across India.

                </p>
                <div className="text-center">
                    <button className="Hb btn btn-success">Read More...</button>
                </div>
            </div>
            <div className="col-md-5 text-center">
                <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" className="Himg12"/>

            </div>
        </div>
    </div>

    <div className="conatiner-fluid bg-dark Hc">
        <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-8 text-center text-white">
                <h2 className="Hd">MEDIA MENTIONS</h2>
                <p className="He">We've been making splashes and headlines since 1999 for our innovative concepts and
                    aesthetic ideations, experimental</p>
                <p className="He"> gastronomic affairs, and exotic mixology. We’ve made our way from
                    the heart of the country into the hearts of its</p>
                <p className="He"> people!</p>
            </div>
            <div className="text-center">
                <button className="Hb btn btn-info">Read more...</button>
            </div>
            <div className="col-md-2">

            </div>
        </div>
        {/* row end  */}
    </div>

     <div className="container Hq">
        <h2 className="mb-3 Hhello">EXPLORE <b style={{color: "orange"}}>OUR BRANDS</b>
        </h2>
        <div className="row ff">
            <div className="col-md-3 mb-3"><img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt=""/></div>
            <div className="col-md-3"><img src="https://pn-paul.netlify.app/image/ffpic2.jpg" alt=""/></div>
            <div className="col-md-3"><img src="https://pn-paul.netlify.app/image/ffpic3.jpg" alt=""/></div>
            <div className="col-md-3"><img src="https://pn-paul.netlify.app/image/ffpic4.jpg" alt=""/></div>
        </div>
    </div>

     <div className="conatiner-fluid bg-dark Hs">
        <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-8 text-center text-white">
                <h2>EXPERIENCE OUR CONCEPTS</h2>
                <p>Moving beyond just offering Indian, international, and fusion cuisines, our restaurants create magic with our special events, mood-setting music, Insta-worthy aesthetics, and tongue-tingling signatures! Head over to experience it for yourself!</p>
            </div>
            <div className="text-center">
                <button className="Hb btn btn-info">Read more...</button>
            </div>
            <div className="col-md-2">

            </div>
        </div>
        {/* row end  */}
    </div>
    </>
  )
}

export default Home
