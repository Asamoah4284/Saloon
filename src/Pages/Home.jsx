import ImageSwitcher from "../components/imageSwitcher";
import TeamSection from "../components/MySlider";

function Home() {
  return (
    <div>
      {/* sticky header */}
      <div class="">
        <div class="container position-relative">
          <div class="row align-items-center">
            <div class="col-5 col-md-3">
              <div class="logo">
                <img src="./images/logo.png" alt="jawed-habib" />
              </div>
            </div>
            <div class="col-7 col-md-9 text-right position-static">
              <nav class="main-menu menu-sticky1 d-none d-lg-block link-inherit">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>

                  <li class="mega-menu-wrap menu-item-has-children">
                    <a href="#">Services</a>
                    <ul class="mega-menu">
                      <li>
                        <a href="hair-details.html">Hair Style</a>
                        <ul>
                          <li>
                            <a href="hair-details.html">Hair Essentials</a>
                          </li>
                          <li>
                            <a href="hair-details.html">Hair Colouring</a>
                          </li>
                          <li>
                            <a href="hair-details.html">Hair Spa</a>
                          </li>
                          <li>
                            <a href="hair-details.html">Hair Smoothing </a>
                          </li>
                          <li>
                            <a href="hair-details.html">Hair Keratin </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="beauty-details.html">Beauty</a>
                        <ul>
                          <li>
                            <a href="beauty-details.html">Wax</a>
                          </li>
                          <li>
                            <a href="beauty-details.html">Facials</a>
                          </li>
                          <li>
                            <a href="beauty-details.html">
                              Menicure & Pedicure
                            </a>
                          </li>
                          <li>
                            <a href="beauty-details.html">Nail Art</a>
                          </li>

                          <li>
                            <a href="beauty-details.html">Threading</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="other-details.html">Others</a>
                        <ul>
                          <li>
                            <a href="other-details.html">Bridal</a>
                          </li>
                          <li>
                            <a href="other-details.html">Grooming</a>
                          </li>
                          <li>
                            <a href="other-details.html"> Makeup</a>
                          </li>
                          <li>
                            <a href="other-details.html#"> Mehandi</a>
                          </li>
                          <li>
                            <a href="other-details.html">Piercing</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="packages.html">Packages</a>
                  </li>
                  <li>
                    <a href="gallery.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="appointment.html">Appointment</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
              <button class="vs-menu-toggle text-theme border-theme d-inline-block d-lg-none">
                <i class="far fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="vs-menu-wrapper">
        <div class="vs-menu-area">
          <button class="vs-menu-toggle text-theme">
            <i class="fal fa-times"></i>
          </button>
          <div class="mobile-logo">
            <a href="index.html"></a>
          </div>
          <div class="vs-mobile-menu link-inherit"></div>
        </div>
      </div>
      {/* <header class="header-wrapper header-layout4">
        <div class="bg-theme header-top-layout1 py-2 ">
          <div class="container">
            <div class="row">
              <div class="col-md-7 d-none d-lg-block">
                <ul class="info-links list-style-none text-white">
                  <li>
                    <a href="tel:9949900777">
                      <i class="fas fa-phone-alt"></i>+91 9949900777
                    </a>
                  </li>
                  <li>
                    <i class="fas fa-map-marker-alt"></i>Ramanthapur, Hyderabad
                    - 500013
                  </li>
                </ul>
              </div>
              <div class="col-md-5">
                <ul class="social-links text-center text-lg-right text-white">
                  <li>
                    <a href="https://www.facebook.com/jawedhabib.ramanthapur/">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/jawedHabibramanthapur/">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://youtube.com/channel/UC0nxiQ-kAdvaG7FR6nYRe6A">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container position-relative py-3 py-lg-0">
          <div class="row align-items-center">
            <div class="col-8 col-lg-3">
              <div class="header-logo">
                <a href="index.html">
                  <img
                    src="assets/img/logo.png"
                    alt="Jawed Habib Hair & Beauty Ramanthapur"
                  />
                </a>
              </div>
            </div>
            <div class="col-4 col-lg-7 position-static text-right">
              <nav class="main-menu menu-style2 mobile-menu-active">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>

                  <li class="mega-menu-wrap menu-item-has-children">
                    <a href="#">Services</a>
                    <ul class="mega-menu">
                      <li>
                        <a href="hair-details.html">Hair Style</a>
                        <ul>
                          <li>
                            <a href="hair-details.html">Hair Essentials</a>
                          </li>
                          <li>
                            <a href="hair-details.html">Hair Colouring</a>
                          </li>
                          <li>
                            <a href="hair-details.html">Hair Spa</a>
                          </li>
                          <li>
                            <a href="hair-details.html">Hair Smoothing </a>
                          </li>
                          <li>
                            <a href="hair-details.html">Hair Keratin </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="beauty-details.html">Beauty</a>
                        <ul>
                          <li>
                            <a href="beauty-details.html">Wax</a>
                          </li>
                          <li>
                            <a href="beauty-details.html">Facials</a>
                          </li>
                          <li>
                            <a href="beauty-details.html">
                              Menicure & Pedicure
                            </a>
                          </li>
                          <li>
                            <a href="beauty-details.html">Nail Art</a>
                          </li>

                          <li>
                            <a href="beauty-details.html">Threading</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="other-details.html">Others</a>
                        <ul>
                          <li>
                            <a href="other-details.html">Bridal</a>
                          </li>
                          <li>
                            <a href="other-details.html">Grooming</a>
                          </li>
                          <li>
                            <a href="other-details.html"> Makeup</a>
                          </li>
                          <li>
                            <a href="other-details.html#"> Mehandi</a>
                          </li>
                          <li>
                            <a href="other-details.html">Piercing</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="packages.html">Packages</a>
                  </li>
                  <li>
                    <a href="gallery.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="appointment.html">Appointment</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
              <button
                type="button"
                class="vs-menu-toggle d-inline-block d-lg-none"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>
            <div class="col-lg-3 text-right d-none d-lg-block">
              <div class="header-btn"></div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Breadcrumb */}
      <div
        class="breadcumb-wrapper breadcumb-layout1 background-image link-inherit space mx-100"
        width="100%"
        data-overlay="black"
        data-opacity="3"
      >
        <div class="container z-index-common py-10">
          <div class="breadcumb-content">
            <h1 class="breadcumb-title sec-title-style1 text-white mt-0 mb-2">
              ABOUT US
            </h1>
            <ul class="breadcumb-menu-style1 text-white">
              <li>
                <a href="index.html">
                  <i class="fal fa-home text-theme"></i>Home
                </a>
              </li>
              <li class="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* section */}
      <section class="vs-about-wrapper vs-about-layout6 space">
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-lg-6 col-12 ">
              <ImageSwitcher />
            </div>
            <div
              class="col-12 col-lg-6 align-self-center pt-70  wow fadeInUp blinker"
              data-wow-delay="0.3s"
            >
              <div class="about-content-box1 text-left ">
                <p class="mb-30">
                  We Have <span class="inner-label">20 Years</span> Of
                  Experience
                </p>
                <h2 class="sec-title-style1">
                  Learn More{" "}
                  <span class="sec-subtitle-style1">
                    About <br /> Us
                  </span>
                </h2>
                <p class="text-font2 text-20 text-justify">
                  Jawed Habib Hair and Beauty Salon Ramanthapur is one of the
                  best salon in Hyderabad and is equipped with the latest
                  cutting edge equipment.
                </p>
                <div class="text-box1 py-0 d-block d-md-flex align-items-center">
                  <div class="media-body">
                    <p class="mb-0 text-justify">
                      Jawed Habib is an Indian hairstylist, businessman and
                      politician. Habib owns Jawed Habib Hair and Beauty Ltd.,
                      which operates across the country.
                    </p>
                  </div>
                </div>
                <div class="row gutters-20 justify-content-center justify-content-xl-end pb-4">
                  <div class="author-box1 d-sm-flex">
                    <div class="author-content text-center text-sm-left align-self-center">
                      <h3 class="author-name h5 mb-0">Mr. Sriinnu Nela</h3>
                      <strong class="author-degi text-theme">
                        Creative Director
                      </strong>
                    </div>
                  </div>
                </div>
                <a href="hair-details.html" class="vs-btn wave-style1">
                  Our Services<i class="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            class="skill-area px-100 space-top pt-95  pb-60  wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="row gutters-40">
              <div class="col-md-6">
                <div class="vs-skill-bar1 mb-35">
                  <div class="bar-head d-flex justify-content-between">
                    <h4 class="text-md mb-2">Hair Essentials</h4>
                    <span class="text-md text-font2">90%</span>
                  </div>
                  <div class="vs-progress">
                    <div class="progress-value" data-valuenow="90"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="vs-skill-bar1 mb-35">
                  <div class="bar-head d-flex justify-content-between">
                    <h4 class="text-md mb-2">Facial</h4>
                    <span class="text-md text-font2">85%</span>
                  </div>
                  <div class="vs-progress">
                    <div class="progress-value" data-valuenow="70"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="vs-skill-bar1 mb-35">
                  <div class="bar-head d-flex justify-content-between">
                    <h4 class="text-md mb-2">Hair Spa</h4>
                    <span class="text-md text-font2">85%</span>
                  </div>
                  <div class="vs-progress">
                    <div class="progress-value" data-valuenow="85"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="vs-skill-bar1 mb-35">
                  <div class="bar-head d-flex justify-content-between">
                    <h4 class="text-md mb-2">Menicure & Pedicure</h4>
                    <span class="text-md text-font2">75%</span>
                  </div>
                  <div class="vs-progress">
                    <div class="progress-value" data-valuenow="95"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Area */}

      <TeamSection />

      {/* footer Part */}
      <footer class="footer-wrapper footer-layout2 position-relative">
        <div class="footer-widget footer-widget-layout2 pt-100 pb-70">
          <div class="container">
            <div class="row gutters-40">
              <div class=" col-lg-4">
                <div class="widget  ">
                  <div class="vs-widget-about pr-lg-4">
                    <div class="widget-about-logo mb-20 mb-lg-25">
                      <a href="index.html">
                        <img
                          src="assets/img/logo-footer.png"
                          alt="jawed-habib"
                        />
                      </a>
                    </div>
                    <p class="widget-about-text text-white mb-20 text-justify">
                      Jawed Habib is an Indian hairstylist, businessman and
                      politician. Habib owns Jawed Habib Hair and Beauty Ltd.,
                      which operates across the country.
                    </p>
                    <p class="contact-info-style1 text-white">
                      <i class="far fa-phone text-theme"></i>
                      <a href="tel:+919121900999">040 49504171, 9121900999</a>
                    </p>
                    <p class="contact-info-style1 text-white">
                      <i class="fal fa-envelope text-theme"></i>
                      <a href="mailto:jawedhabib61@gmail.com">
                        jawedhabib61@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6  col-lg-4">
                <div class="widget widget_nav_menu   ">
                  <h3 class="widget_title text-white">Our Services</h3>
                  <div class="menu-all-pages-container style-white">
                    <ul class="menu">
                      <li>
                        <a href="hair-details.html">Hair Essentials</a>
                      </li>
                      <li>
                        <a href="hair-details.html">Hair Colouring</a>
                      </li>
                      <li>
                        <a href="hair-details.html">Hair Spa</a>
                      </li>
                      <li>
                        <a href="hair-details.html">Hair Smoothing </a>
                      </li>
                      <li>
                        <a href="hair-details.html">Hair Keratin </a>
                      </li>
                      <li>
                        <a href="beauty-details.html">Facials</a>
                      </li>
                      <li>
                        <a href="beauty-details.html">Menicure & Pedicure</a>
                      </li>
                      <li>
                        <a href="beauty-details.html">Wax</a>
                      </li>
                      <li>
                        <a href="beauty-details.html">Threading</a>
                      </li>
                      <li>
                        <a href="beauty-details.html">Nail Art</a>
                      </li>
                      <li>
                        <a href="other-details.html">Bridal</a>
                      </li>
                      <li>
                        <a href="other-details.html">Grooming</a>
                      </li>
                      <li>
                        <a href="other-details.html">Piercing</a>
                      </li>
                      <li>
                        <a href="other-details.html">Mehandi</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-6  col-lg-4">
                <div class="widget widget_nav_menu   ">
                  <h3 class="widget_title text-white">Quick Links</h3>
                  <div class="menu-all-pages-container style-white">
                    <ul class="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>

                      <li>
                        <a href="appointment.html">appointment</a>
                      </li>

                      <li>
                        <a href="gallery.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="packages.html">Packages</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright bg-black  py-3 link-inherit">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 text-center text-lg-left">
                <p class="mb-0 text-bold text-white">
                  Copyright <i class="fal fa-copyright"></i> 2022{" "}
                  <a href="index.html">Jawed Habib Ramanthapur </a>. Designed by{" "}
                  <a href="https://sdrinfotech.com/">SDR Infotech</a>.
                </p>
              </div>
              <div class="col-lg-6 text-lg-right d-none d-lg-inline-block">
                <ul class="social-links links-hover-border text-white">
                  <li>
                    <a href="https://www.facebook.com/jawedhabib.ramanthapur/">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/jawedHabibramanthapur/">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UC0nxiQ-kAdvaG7FR6nYRe6A">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com/">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
