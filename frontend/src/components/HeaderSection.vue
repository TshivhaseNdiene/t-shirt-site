<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
      <div class="container">
        <RouterLink class="navbar-brand font-weight-bold" to="/">T-shirt-store</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
          aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li><a class="dropdown-item" href="#">About Us</a></li>
                <li><a class="dropdown-item" href="#">Blog</a></li>
                <li><a class="dropdown-item" href="#">Blog Single</a></li>
                <li><a class="dropdown-item" href="#">Contact</a></li>
                <li><a class="dropdown-item" href="#">404 Page</a></li>
                <li><a class="dropdown-item" href="#">FAQ</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Shop
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><RouterLink class="dropdown-item" to="/shop">Shop Page</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/productdetails">Product Details</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/checkout">Checkout</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/cart">Cart</RouterLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Account
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
                <li><RouterLink class="dropdown-item" to="/login">Login</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/signup">SignUp</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/forgotpassword">Forgot Password</RouterLink></li>
              </ul>
            </li>
          </ul>
        </div>
        
        <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
          <li class="list-inline-item">
            <a href="#" class="search_toggle" id="search-icon"><i class="tf-ion-android-search"></i></a>
          </li>
          <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <a href="#" class="dropdown-toggle cart-icon" data-bs-toggle="dropdown">
              <i class="tf-ion-android-cart"></i>
            </a>
            <div class="dropdown-menu cart-dropdown">
              <div class="media">
                <a href="/product-single">
                  <img class="media-object img-fluid mr-3" src="src/assets/images/cart-1.jpg" alt="image" />
                </a>
                <div class="media-body">
                  <h6>Ladies Bag</h6>
                  <div class="cart-price">
                    <span>1 x</span>
                    <span>1250.00</span>
                  </div>
                </div>
                <a href="#" class="remove"><i class="tf-ion-close"></i></a>
              </div>
              <!-- More cart items -->
              <div class="cart-summary">
                <span class="h6">Total</span>
                <span class="total-price h6">$1799.00</span>
                <div class="text-center cart-buttons mt-3">
                  <a href="#" class="btn btn-small btn-transparent btn-block">View Cart</a>
                  <a href="#" class="btn btn-small btn-main btn-block">Checkout</a>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item"><a href="#"><i class="tf-ion-ios-person mr-3"></i></a></li>
        </ul>
      </div>
    </nav>
  </template>
  