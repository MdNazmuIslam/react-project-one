import React from "react";

const TerminalSection = () =>{
  
    return(
      <section className='Delhi-Metro-Route'>
        <div className="container">
          <div className="Delhi-Metro-Route-bg">
            <div className="topdiv-Route">
            <h1>Delhi Metro Route</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing layouts and visualmockups. Lorem ipsum is placeholder text commonly used inthe graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <div className="Operators">
            <Operator />
            </div>
            </div>
            <div className="bg-white lines">
            <MetroLine />
            </div>
            
          </div>
        </div>
  
      </section>
    )
  }

  const Operator = () =>{
    return(
     <>
      <div className="row">
        <div className="col-4">
          <p className='text-white  '>Operator</p>
        </div>
        <div className="col-8">
          <p className='text-white '>Delhi Metro Tail Corporation (DMRC)</p>
        </div>
        <div className="col-4">
          <p className='text-white  '>Operation</p>
        </div>
        <div className="col-8">
          <p className='text-white '>Start 24 December 2002.</p>
        </div>
        <div className="col-4">
          <p className='text-white  '>Operation Start</p>
        </div>
        <div className="col-8">
          <p className='text-white '>24 December 2002.</p>
        </div>
        <div className="col-4">
          <p className='text-white  '>Train Length</p>
        </div>
        <div className="col-8">
          <p className='text-white '>4/6/8 Coaches</p>
        </div>
        <div className="col-4">
          <p className='text-white  '>No. of Stations</p>
        </div>
        <div className="col-8">
          <p className='text-white '>230 Actives Stations</p>
        </div>
        <div className="col-4">
          <p className='text-white  '>MetroTimigs</p>
        </div>
        <div className="col-8">
          <p className='text-white '>Starting 05:00 AM End: 11:30 PM</p>
        </div>
      </div>
     </>
    )
  }
 
  
  const MetroLine = () =>{
  return(
    <>
    <h2 className='text-center'>Delhi Metro Lines (Terminal Stations)</h2>
    <div className="row">
    <div className="col-md-5 col-lg-3">
      <div className="line-map-chart">
        <button className='btn active'> Metro Line</button>
        <button className='btn'> Metro Map</button>
        <button className='btn'> Fare Chart</button>
      </div>
    </div>
    <div className="col-md-7 col-lg-9 list">
        <div className="row">
          <div className="col-lg-6 col-xl-4 ">
            <h4>Metro Lines</h4>
            <div className="d-flex align-items-center redline">
              <span></span> <p>Red Line</p>
            </div>
            <div className="d-flex align-items-center redline">
              <span></span> <p>Red Line</p>
            </div>
            <div className="d-flex align-items-center redline">
              <span></span> <p>Red Line</p>
            </div>
            <div className="d-flex align-items-center redline">
              <span></span> <p>Red Line</p>
            </div>
            <div className="d-flex align-items-center redline">
              <span></span> <p>Red Line</p>
            </div>
            <div className="d-flex align-items-center redline">
              <span></span> <p>Red Line</p>
            </div>
            <div className="d-flex align-items-center redline">
              <span></span> <p>Red Line</p>
            </div>
          </div>
          <div className=" col-lg-6 col-xl-4  position-relative">
          <h4>Terminal Station</h4>
          <div className="dost">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
  
          </div>
            <div className="d-flex align-items-center TS">
              <span></span> <p>Shaheed Sthal</p>
            </div>
            <div className="d-flex align-items-center TS">
              <span></span> <p>Sammatpur Badll</p>
            </div>
            <div className="d-flex align-items-center TS">
              <span></span> <p>Noida Electronic City</p>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 position-relative">
          <h4>Terminal Station</h4>
          <div className="dost">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
  
          </div>
            <div className="d-flex align-items-center TS">
              <span></span> <p>Shaheed Sthal</p>
            </div>
            <div className="d-flex align-items-center TS">
              <span></span> <p>Sammatpur Badll</p>
            </div>
            <div className="d-flex align-items-center TS">
              <span></span> <p>Noida Electronic City</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
  };
  
export default TerminalSection;
