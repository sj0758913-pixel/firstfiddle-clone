import React from 'react'

function Ourteam() {
    return (
        <>
            <div className="container-fluid OurA">
                <h2>MEET THE TEAM</h2>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-5 OurB">
                        <img src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg" alt="" />
                    </div>

                    <div className="col-md-7 OurB1">
                        <h2>Priyank Sukhija</h2>
                        <h4>C.E.O. & M.D.</h4>
                        <p>A 19-year-old dropout kid, who was just setting up his first venture, envisioned what nobody thought would make him a business tycoon in the hospitality industry. Once he began, there was no stopping this entrepreneur from reaching the heights he has reached today. It is the passion and creative streak of Priyank Sukhija that has made him the most watched-out restaurateur of today’s time. Coming from a family of lawyers, he ventured into the business world on his own with Lazeez Affaire in 1999 and has never looked back since.</p>

                        <div>
                            <button className="btn btn-warning btn-lg text-light  mb-3">Read More</button>
                        </div>
                    </div>


                </div>

            </div>

            <div className="container ">
                <div className="row" style={{ paddingLeft: 30 }}>
                    <div className="col-md-4 ms-2 mb-4  OurC">
                        <h2 className="text-center text-white" style={{ paddingTop: 250 }}>Y. P. ASHOK</h2>
                        <p className="text-center text-white">chairman</p>
                    </div>

                    <div className="col-md-4 ms-2 mb-4 OurC1">
                        <h2 className="text-center text-white" style={{ paddingTop: 250 }}>B.R. SACHDEVA</h2>
                        <p className="text-center text-white">Director Finance & Legal</p>
                    </div>

                    <div className="col-md-4 ms-2 mb-4 OurC2">
                        <h2 className="text-center text-white" style={{ paddingTop: 250 }}>SAGAR BAJAJ</h2>
                        <p className="text-center text-white">Corporate Chef</p>
                    </div>

                </div>

            </div>

            <div className="container">
                <div className="row" style={{ paddingLeft: 30 }}>
                    <div className="col-md-4 ms-2 mb-4 OurD">
                        <h2 className="text-center text-white" style={{ paddingTop: 250 }}>JAY SHANKAR NATRAJ</h2>
                        <p className="text-center text-white">Franchise Lead</p>
                    </div>

                    <div className="col-md-4 ms-2 mb-4 OurD1">
                        <h2 className="text-center text-white" style={{ paddingTop: 250 }}>VIBHUTI SOOD</h2>
                        <p className="text-center text-white">PR And Communications Head</p>
                    </div>

                    <div className="col-md-4">

                    </div>

                </div>

            </div>

        </>
    )
}

export default Ourteam
