import React from "react";
import image1 from "../../../img/main-slider1.jpg";
import image2 from "../../../img/main-slider2.jpg";
import image3 from "../../../img/main-slider3.jpg";
import image4 from "../../../img/main-slider4.jpg";

const Carousel = () => {
  return (
    <div id='all'>
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={image1} class='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={image2} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={image3} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={image4} className='d-block w-100' alt='...' />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>

      {/* <!--
        *** ADVANTAGES HOMEPAGE ***
        _________________________________________________________
        --> */}
      <div id='advantages'>
        <div className='container'>
          <div className='row mb-4 mt-4'>
            <div className='col-md-4'>
              <div className='box clickable d-flex flex-column justify-content-center mb-0 h-100'>
                <div className='icon'>
                  <i className='fa fa-heart'></i>
                </div>
                <h3>
                  <a href='#' id='slogan'>
                    We love our customers
                  </a>
                </h3>
                <p className='mb-0'>
                  We are known to provide best possible service ever
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='box clickable d-flex flex-column justify-content-center mb-0 h-100'>
                <div className='icon'>
                  <i className='fa fa-tags'></i>
                </div>
                <h3>
                  <a href='#'>Best prices</a>
                </h3>
                <p className='mb-0'>
                  You can check that the height of the boxes adjust when longer
                  text like this one is used in one of them.
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='box clickable d-flex flex-column justify-content-center mb-0 h-100'>
                <div className='icon'>
                  <i className='fa fa-thumbs-up'></i>
                </div>
                <h3>
                  <a href='#'>100% satisfaction guaranteed</a>
                </h3>
                <p className='mb-0'>Free returns on everything for 3 months.</p>
              </div>
            </div>
          </div>
          {/* <!-- /.row--> */}
        </div>
        {/* <!-- /.container--> */}
      </div>
    </div>
  );
};

export default Carousel;
