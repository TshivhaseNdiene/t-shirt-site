<template>
    <div class="home-container">
      <!-- Main Slider Section -->
      <div class="main-slider slider slick-initialized slick-slider">
        <div class="slider-item" style="background-image:url('src/assets/images/slideshow1-2.jpg'); background-position:50%;background-repeat:no-repeat">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                <div class="slider-caption">
                  <span class="lead">Trendy dress</span>
                  <h1 class="mt-2 mb-5"><span class="text-color">Winter</span> Collection</h1>
                  <a href="#" class="btn btn-main">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Category Section -->
      <section class="category section pt-3 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item mb-4 mb-lg-0">
                <img src="src/assets/images/cat-1.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Stylish Leather watch</p>
                  <h4 class="mb-4">up to <strong>50%</strong> off</h4>
                  <a href="#" class="read-more">Shop now</a>
                </div>
              </div>
            </div>
  
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item mb-4 mb-lg-0">
                <img src="src/assets/images/cat-2.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Ladies hand bag</p>
                  <h4 class="mb-4">up to <strong>40%</strong> off</h4>
                  <a href="#" class="read-more">Shop now</a>
                </div>
              </div>
            </div>
  
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item">
                <img src="src/assets/images/cat-3.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Trendy shoe</p>
                  <h4 class="mb-4">up to <strong>50%</strong> off</h4>
                  <a href="#" class="read-more">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- New Arrivals Section -->
      <section class="section products-main">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="title text-center">
                <h2>New arrivals</h2>
                <p>The best Online sales to shop these weekend</p>
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/productdetails">
                    <img class="img-fluid w-100 mb-3 img-first" src="src/assets/images/322.jpg" alt="product-img" />
                  </a>
                  <a href="/productdetails">
                    <img class="img-fluid w-100 mb-3 img-second" src="src/assets/images/444.jpg" alt="product-img" />
                  </a>
                </div>
                <span class="onsale">Sale</span>
                <div class="product-hover-overlay">
                  <a href="#"><i class="tf-ion-android-cart"></i></a>
                  <a href="#"><i class="tf-ion-ios-heart"></i></a>
                </div>
                <div class="product-info">
                  <h2 class="product-title h5 mb-0"><a href="#">Floral Kirby</a></h2>
                  <span class="price">$329.10</span>
                </div>
              </div>
            </div>
  
            <!-- Repeat other product blocks as per your requirement -->
          </div>
        </div>
      </section>
  
      <!-- Ads Section -->
      <section class="ads section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 offset-lg-6">
              <div class="ads-content">
                <span class="h5 deal">Deal of the day 50% Off</span>
                <h2 class="mt-3 text-white">Trendy Suit</h2>
                <p class="text-md mt-3 text-white">Hurry up! Limited time offer. Grab it now!</p>
                <div id="simple-timer" class="syotimer mb-5"></div>
                <a href="#" class="btn btn-main"><i class="ti-bag mr-2"></i>Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Products List Section -->
      <section class="section products-list">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-12">
              <img src="src/assets/images/adsv.jpg" alt="Product big thumb" class="img-fluid w-100" />
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="widget-featured-entries mt-5 mt-lg-0">
                <h4 class="mb-4 pb-3">Best sellers</h4>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="/productdetails">
                    <img src="src/assets/images/p-1.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0"><a href="#">Keds - Kickstart Pom Pom</a></h6>
                    <p class="featured-entry-meta">$42.99</p>
                  </div>
                </div>
  
                <!-- Repeat for other best sellers -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  