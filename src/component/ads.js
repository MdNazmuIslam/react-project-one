import React from 'react';
import logo from '../images/Min-Logo.png';
import asddiv from '../images/ads-div.png';
import adlong from '../images/ad-long.png';

const Ads =() =>{
    return(
  <section className="Ads">
      <div className="container">
      <div className="barnd-logo text-center">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="row g-5">
      <div className="row">
<div className="col-md-6">
          <img src={asddiv} className="img-fluid" alt="ads"/>
        </div>
        <div className="col-md-6">
          <img src={asddiv} className="img-fluid" alt="ads"/>
        </div>
</div>
        <div className="col-12">
          <img src={adlong} className="img-fluid" alt="ads"/>
        </div>
      </div>
      </div>
      </section>
    )
  };

export default Ads;