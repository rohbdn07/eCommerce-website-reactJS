import React from "react";

const NavMenu = () => {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <a href='index.html' className='navbar-brand home'>
            <img
              src='img/logo.png'
              alt='Obaju logo'
              className='d-none d-md-inline-block'
            />
            <img
              src='img/logo-small.png'
              alt='Obaju logo'
              className='d-inline-block d-md-none'
            />
            <span className='sr-only'>Obaju - go to homepage</span>
          </a>
          <div className='navbar-buttons'>
            <button
              type='button'
              data-toggle='collapse'
              data-target='#navigation'
              className='btn btn-outline-secondary navbar-toggler'
            >
              <span className='sr-only'>Toggle navigation</span>
              <i className='fa fa-align-justify'></i>
            </button>
            <button
              type='button'
              data-toggle='collapse'
              data-target='#search'
              className='btn btn-outline-secondary navbar-toggler'
            >
              <span className='sr-only'>Toggle search</span>
              <i className='fa fa-search'></i>
            </button>
            <a
              href='basket.html'
              className='btn btn-outline-secondary navbar-toggler'
            >
              <i className='fa fa-shopping-cart'></i>
            </a>
          </div>
          <div id='navigation' className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a href='#' className='nav-link active'>
                  Home
                </a>
              </li>
              <li className='nav-item dropdown menu-large'>
                <a
                  href='#'
                  data-toggle='dropdown'
                  data-hover='dropdown'
                  data-delay='200'
                  className='dropdown-toggle nav-link'
                >
                  Men<b className='caret'></b>
                </a>
                <ul className='dropdown-menu megamenu'>
                  <li>
                    <div className='row'>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Clothing</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              T-shirts
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Shirts
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Pants
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Accessories
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Shoes</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Trainers
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Sandals
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Casual
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Accessories</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Trainers
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Sandals
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Casual
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Casual
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Featured</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Trainers
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Sandals
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                        </ul>
                        <h5>Looks and trends</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Trainers
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Sandals
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown menu-large'>
                <a
                  href='#'
                  data-toggle='dropdown'
                  data-hover='dropdown'
                  data-delay='200'
                  className='dropdown-toggle nav-link'
                >
                  Ladies<b className='caret'></b>
                </a>
                <ul className='dropdown-menu megamenu'>
                  <li>
                    <div className='row'>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Clothing</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              T-shirts
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Shirts
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Pants
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Accessories
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Shoes</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Trainers
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Sandals
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Casual
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Accessories</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Trainers
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Sandals
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Casual
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Casual
                            </a>
                          </li>
                        </ul>
                        <h5>Looks and trends</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Trainers
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Sandals
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Hiking shoes
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <div className='banner'>
                          <a href='#'>
                            <img
                              src='img/banner.jpg'
                              alt=''
                              className='img img-fluid'
                            />
                          </a>
                        </div>
                        <div className='banner'>
                          <a href='#'>
                            <img
                              src='img/banner2.jpg'
                              alt=''
                              className='img img-fluid'
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown menu-large'>
                <a
                  href='#'
                  data-toggle='dropdown'
                  data-hover='dropdown'
                  data-delay='200'
                  className='dropdown-toggle nav-link'
                >
                  Template<b className='caret'></b>
                </a>
                <ul className='dropdown-menu megamenu'>
                  <li>
                    <div className='row'>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Shop</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='index.html' className='nav-link'>
                              Homepage
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category.html' className='nav-link'>
                              Category - sidebar left
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category-right.html' className='nav-link'>
                              Category - sidebar right
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='category-full.html' className='nav-link'>
                              Category - full width
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='detail.html' className='nav-link'>
                              Product detail
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <h5>User</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='register.html' className='nav-link'>
                              Register / login
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='customer-orders.html' className='nav-link'>
                              Orders history
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='customer-order.html' className='nav-link'>
                              Order history detail
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a
                              href='customer-wishlist.html'
                              className='nav-link'
                            >
                              Wishlist
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a
                              href='customer-account.html'
                              className='nav-link'
                            >
                              Customer account / change password
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Order process</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='basket.html' className='nav-link'>
                              Shopping cart
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='checkout1.html' className='nav-link'>
                              Checkout - step 1
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='checkout2.html' className='nav-link'>
                              Checkout - step 2
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='checkout3.html' className='nav-link'>
                              Checkout - step 3
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='checkout4.html' className='nav-link'>
                              Checkout - step 4
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6 col-lg-3'>
                        <h5>Pages and blog</h5>
                        <ul className='list-unstyled mb-3'>
                          <li className='nav-item'>
                            <a href='blog.html' className='nav-link'>
                              Blog listing
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='post.html' className='nav-link'>
                              Blog Post
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='faq.html' className='nav-link'>
                              FAQ
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='text.html' className='nav-link'>
                              Text page
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='text-right.html' className='nav-link'>
                              Text page - right sidebar
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='404.html' className='nav-link'>
                              404 page
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a href='contact.html' className='nav-link'>
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <div className='navbar-buttons d-flex justify-content-end'>
              {/* <!-- /.nav-collapse--> */}
              <div
                id='search-not-mobile'
                className='navbar-collapse collapse'
              ></div>
              <a
                data-toggle='collapse'
                href='#search'
                className='btn navbar-btn btn-primary d-none d-lg-inline-block'
              >
                <span className='sr-only'>Toggle search</span>
                <i className='fa fa-search'></i>
              </a>
              <div
                id='basket-overview'
                className='navbar-collapse collapse d-none d-lg-block'
              >
                <a href='basket.html' className='btn btn-primary navbar-btn'>
                  <i className='fa fa-shopping-cart'></i>
                  <span>3 items in cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id='search' class='collapse'>
        <div class='container'>
          <form role='search' class='ml-auto'>
            <div class='input-group'>
              <input type='text' placeholder='Search' class='form-control' />
              <div class='input-group-append'>
                <button type='button' class='btn btn-primary'>
                  <i class='fa fa-search'></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default NavMenu;
