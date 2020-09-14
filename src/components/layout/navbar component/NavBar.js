import React from "react";

const Navbar = () => {
  return (
    <header className='header mb-5'>
      <div id='top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offer mb-3 mb-lg-0'>
              <a href='#' className='btn btn-success btn-sm'>
                Offer of the day
              </a>
              <a href='#' className='ml-1'>
                Get flat 35% off on orders over $50!
              </a>
            </div>
            <div className='col-lg-6 text-center text-lg-right'>
              <ul className='menu list-inline mb-0'>
                <li className='list-inline-item'>
                  <a href='#' data-toggle='modal' data-target='#login-modal'>
                    Login
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='register.html'>Register</a>
                </li>
                <li className='list-inline-item'>
                  <a href='contact.html'>Contact</a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>Recently viewed</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id='login-modal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='Login'
          aria-hidden='true'
          className='modal fade'
        >
          <div className='modal-dialog modal-sm'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Customer login</h5>
                <button
                  type='button'
                  data-dismiss='modal'
                  aria-label='Close'
                  className='close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <form action='customer-orders.html' method='post'>
                  <div className='form-group'>
                    <input
                      id='email-modal'
                      type='text'
                      placeholder='email'
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      id='password-modal'
                      type='password'
                      placeholder='password'
                      className='form-control'
                    />
                  </div>
                  <p className='text-center'>
                    <button className='btn btn-primary'>
                      <i className='fa fa-sign-in'></i> Log in
                    </button>
                  </p>
                </form>
                <p className='text-center text-muted'>Not registered yet?</p>
                <p className='text-center text-muted'>
                  <a href='register.html'>
                    <strong>Register now</strong>
                  </a>
                  ! It is easy and done in 1 minute and gives you access to
                  special discounts and much more!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- *** TOP BAR END ***--> */}
      </div>
    </header>
  );
};

export default Navbar;
