import React from 'react';
import './Dash.css';

export default function DashBoard() {
  return (
    <div className='dash'>
      <div className='row'>
        <div className='col'>
          <div className='container2'>
            <h3 className='h3'>Hi User,</h3>
            <h1 className='h1'>What will you learn today?</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card mb-3" style={{ maxWidth: "700px", backgroundColor: '#624EDA', height: '350px', borderRadius: '50px' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="./Rectangle 1.png" className="img-fluid rounded-start" style={{ width: '400px', height: '300px', margin: '10px' }} alt="First slide" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h6 className="card-title" style={{ fontSize: '40px', color: "#FFFFFF" }}>Artificial Intelligence</h6>
                          <p className="card-text" style={{ fontSize: '28px', color: "#FFFFFF", fontFamily: "sans-serif" }}>Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations..</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="https://via.placeholder.com/150" className="img-fluid rounded-start" alt="Second slide" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p className="card-text"><small className="text-muted">Last updated 5 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="https://via.placeholder.com/150" className="img-fluid rounded-start" alt="Third slide" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <h4 className='h3'>Courses in progress</h4>
              <div className="container">
                <div className="row">
                  <div className="col-2"><img src='Rectangle 5.png' alt="course 1" /></div>
                  <div className="col-4"><img src='Rectangle 6.png' alt="course 2" style={{ marginLeft: '290px' ,width:'260px',height:'200px'}} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='con'>
            <div className="container-fluid">
              <form className="d-flex">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <a className="nav-link active" aria-current="page" href="#"><img src='vector.png' alt="icon 2"style={{marginLeft:"100px"}} /></a>
              </form>
            </div>
            <br></br><br></br>
            <div class='rowk'>
    <h4>course in progress</h4>
    <button class='btn info'>Time spent</button>
</div>

            
            <br></br><br></br><br></br>
            <img src='./image 12.png'style={{  width:'360px',height:'200px'}}></img>
            <br>
            </br>
            <div className='quizzee'>
    <div className='row'>
        <div className='col' style={{marginTop:"20px"}}>
        <div class="card text-end" style={{width: "30rem;", backgroundColor:'transparent',border:'none'}}>
  <div class="card-body">
    <h5 class="card-title">Make your learning better</h5>
    <p class="card-text">Attempt QUIZZES for better
    learning experience </p>
    <a href="#" class="btn btn-primary" style={{width:'150px' ,marginLeft:'10px'}}>Quizze</a>
  </div>
</div>
        </div>
        <div className='col'>
            <img src='./quize.png'style={{width:'150px' ,marginTop:'20px',height:'270px'}} alt='Quiz Image'/>
        </div>
    </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
