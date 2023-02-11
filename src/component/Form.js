import React from 'react';
import logo from '../images/Min-Logo.png';
const Form = ()=>{
    return(
      <section id="Form-section">
        <div class="container">
        <form action="" className='row'>
          <div className="d-flex align-items-center">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <h2>Plan Your Journey</h2>
          </div>
       <div className="col-12">
        <label htmlFor="From">From:</label>
        <input type="text" className='form-control' id='From' placeholder='Type station name' />
       </div>
       <div className="col-12">
        <label htmlFor="From">To:</label>
        <input type="text" className='form-control ' id='From' placeholder='Type station name' />
       </div>
       <div className="col-12">
       <div class="d-grid">
        <input type="submit" value="Show Route & Fare" className='btn btn-danger' id='From'/>
       </div>
       <div className="reset text-center">
       <button className='fs-1 bg-transparent border-0 text-white text-decoration-underline' type='reset'>Reset</button>
       </div>
       
       </div>
      </form>
        </div>
     
    </section>
    )
  }
export default Form;