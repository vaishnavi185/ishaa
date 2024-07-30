import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className='homes'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <form className="d-flex">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <br></br>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav ">
              <li className="nav-item">
                <a className="nav-link" href="#"><img src='image 8.png' alt="icon 1" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><img src='vector.png' alt="icon 2" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='courses'>
        <p className='p2'>Current Courses</p>
        <div className="container">
          <div className="row">
            <div className="col-4"><img src='Rectangle 5.png' alt="course 1" /></div>
            <div className="col-8"><img src='Rectangle 6.png' alt="course 2" /></div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      
        <p className='p2'>Popular Courses</p>
        <div class='row'>
          
        <div class="col">
          <div className="card mb-3 shadow p-3 mb-5 bg-body rounded" style={{ maxWidth: '540px' }}>
            <div className="row g-0 ">
              <div className="col-md-4">
                <img src="./Rectangle.png" className="imo" alt="course 3" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">DSA</h5>
                  <p className="card-text">By Love babar</p>
                  <p className="card-text"><small className="text-muted">2:30hrs</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 shadow p-3 mb-5 bg-body rounded" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./Rectangle.png" className="imo" alt="course 3" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">GO</h5>
                  <p className="card-text">By </p>
                  <p className="card-text"><small className="text-muted">2:30hrs</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 shadow p-3 mb-5 bg-body rounded" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./Rectangle.png" className="imo" alt="course 3" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">DSA</h5>
                  <p className="card-text">By Love babar</p>
                  <p className="card-text"><small className="text-muted">2:30hrs</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col'>

 <div className='box shadow p-3 mb-5 bg-body rounded'>
  <h4 className='jj'>Completitions</h4>
  <div class="position-relative m-4">
  <div className="progress" style={{ height: "10px" }}>
  <div className="progress-bar" role="progressbar" style={{ width: '50%', color: "#624EDA" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
 
</div>
<br></br>
<p>🤩🤩🤩Congratulations on completing the following badges! ⭐⭐⭐⭐⭐showcasing your commitment to continuous learning and skill development. Keep up the great work, and continue striving for excellence in all your endeavors. 🎉🎉Your achievements are truly commendable!</p>
<div className='row'>
<div className='col'>
  
  <img src='./image 6.png'></img>

</div>
<div className='col'>
  
  <img src='./image 5.png'></img>
  
</div>

</div>
  
</div>
 </div>

 
          </div>
      </div>
    </div>
  )
}
