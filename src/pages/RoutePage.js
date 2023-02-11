import React from 'react'
import HeaderMenu from '../component/HeaderMenu';
import asddiv from '../images/ads-div.png';
import logo from '../images/Min-Logo.png';
import Form from '../component/Form';

const RoutePage = () => {
  return (
    <>
    <HeaderMenu />
    
    <section className="Ads">
      <div className="container">
      <div className="barnd-logo text-center">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="row g-5">
        <div className="col-md-6">
          <img src={asddiv} className="img-fluid" alt="ads"/>
        </div>
        <div className="col-md-6">
          <img src={asddiv} className="img-fluid" alt="ads"/>
        </div>
        <div className="col-md-6">
          <img src={asddiv} className="img-fluid" alt="ads"/>
        </div>
        <div className="col-md-6">
          <img src={asddiv} className="img-fluid" alt="ads"/>
        </div>
      
      </div>
      </div>
      </section>
      <Form />
      
      <TerminalSection />
    
    </>
  )
}

const TerminalSection = () =>{
  
  return(
    <section className='Delhi-Metro-Route Rotepage'>
      <div className="container">
        <div className="Delhi-Metro-Route">
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
  
  <div className="row ">
    <div className="row justify-content-end">
    <div className="col-md-7 col-lg-9">
  <h2 className='text-center'>Delhi Metro Lines (Terminal Stations)</h2>
   {/* fly section start */}
  <div className="fly">
      <div className="fly-top">
        <div className='fly-name'>
        <i class="bi bi-airplane-fill"></i> Jaipur - New Delhi
        </div>
      
      <div>
        <div className="d-flex justify-content-between fly-pb">
          <div className='fly-price'><i class="bi bi-currency-rupee"></i>2,566</div>
          <div> <button className=' bg-transparent border-0 fw-bold'>BOOK NOW</button></div>
         
          </div>
         
        
        </div>
      </div>
      <hr />
      <div className="fly-top">
        <div className='fly-name'>
        <i class="bi bi-airplane-fill"></i> New Delhi - Leh
        </div>
      
      <div>
        <div className="d-flex justify-content-between fly-pb">
          <div className='fly-price'><i class="bi bi-currency-rupee"></i>8,338</div>
          <div> <button className=' bg-transparent border-0 fw-bold'>BOOK NOW</button></div>
         
          </div>
        </div>
      </div>
      <hr />
    </div>
     {/* fly section end */}
  </div>
    </div>
   
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
          <ul className='MetroLines-list'>
          <li > <span>Red Line</span> </li>
          <li > <span>Yellow Line</span> </li>
          <li > <span>Blue Main Line</span> </li>
          <li> <span>Blue Branch Line </span> </li>
          <li> <span>Green Main Line </span> </li>
          <li> <span>Green Branch Line </span> </li>
          <li> <span>Violet Line </span> </li>
          <li> <span>Orange Line  </span> </li>
          <li> <span>Violet Line </span> </li>
          <li> <span>Pink Main Line </span> </li>
          <li> <span>Pink Branch Line </span> </li>
          <li> <span>Magenta Line  </span> </li>
          <li> <span>Grey Line </span> </li>
          </ul>
          
        </div>
        <div className=" col-lg-6 col-xl-4  position-relative">
        <h4>Terminal Station</h4>
        <ul className='MetroLines-list'>
          <li > <span>Shaheed Sthal </span> </li>
          <li > <span>Samaypur Badli </span> </li>
          <li > <span>Noida Electronic City </span> </li>
          <li> <span>Vaishali  </span> </li>
          <li> <span>Inderlok  </span> </li>
          <li> <span>Kirti Nagar  </span> </li>
          <li> <span>Kashmere Gate  </span> </li>
          <li> <span>New Delhi Rail. Station  </span> </li>
          <li> <span>Maujpur Babarpur  </span> </li>
          <li> <span>Pink Main Line </span> </li>
          <li> <span>Shiv Vihar  </span> </li>
          <li> <span>Janakpuri West   </span> </li>
          <li> <span>Dwarka </span> </li>
          </ul>

        
        </div>
        <div className="col-lg-6 col-xl-4 position-relative">
        <h4>Terminal Station</h4>
        
        <ul className='MetroLines-list'>
          <li > <span>Rithala </span> </li>
          <li > <span>Huda City Centre </span> </li>
          <li > <span>Dwarka Sector 21 </span> </li>
          <li> <span>Dwarka Sector 21  </span> </li>
          <li> <span>Brigadier Hoshiyar Singh </span> </li>
          <li> <span>Raja Nahar Singh  </span> </li>
          <li> <span>Dwarka Sector 21  </span> </li>
          <li> <span>Majlis Park   </span> </li>
          <li> <span>Maujpur Babarpur  </span> </li>
          <li> <span>Botanical Garden </span> </li>
          <li> <span>Dhansa Bus Stand  </span> </li>
          </ul>

        </div>
        {/* fly section start */}
        <div className="fly mt-5">
      <div className="fly-top">
        <div className='fly-name'>
        <i class="bi bi-airplane-fill"></i> Jaipur - New Delhi
        </div>
      
      <div>
        <div className="d-flex justify-content-between fly-pb">
          <div className='fly-price'><i class="bi bi-currency-rupee"></i>2,566</div>
          <div> <button className=' bg-transparent border-0 fw-bold'>BOOK NOW</button></div>
         
          </div>
        </div>
      </div>
      <hr />
      <div className="fly-top">
        <div className='fly-name'>
        <i class="bi bi-airplane-fill"></i> New Delhi - Leh
        </div>
      
      <div>
        <div className="d-flex justify-content-between fly-pb">
          <div className='fly-price'><i class="bi bi-currency-rupee"></i>8,338</div>
          <div> <button className=' bg-transparent border-0 fw-bold'>BOOK NOW</button></div>
         
          </div>
        </div>
      </div>
      <hr />
    </div>
     {/* fly section end */}
      </div>
    </div>
  </div>
  </>
)
};

export default RoutePage;
