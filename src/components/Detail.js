import '../styles/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";

export default function Detail() {
    // State and refs for syncing the main slider and thumbnail navigation slider
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    // Settings for the main product slider
    const mainSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true,
        asNavFor: nav2,
    };

    // Settings for the thumbnail navigation slider
    const navSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        focusOnSelect: true,
        asNavFor: nav1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    // Settings for the related products slider
    const relatedProductsSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Settings for the sidebar widget slider
    const sidebarSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="product-detail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="product-detail-top">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    {/* Main Product Slider */}
                                    <div className="product-slider-single normal-slider">
                                        <Slider
                                            {...mainSliderSettings}
                                            asNavFor={nav2}
                                            ref={(slider) => {
                                                slider1.current = slider;
                                                setNav1(slider);
                                            }}
                                        >
                                            <div>
                                                <img src="img/product-1.jpg" alt="Product Image 1" />
                                            </div>
                                            <div>
                                                <img src="img/product-3.jpg" alt="Product Image 3" />
                                            </div>
                                            <div>
                                                <img src="img/product-5.jpg" alt="Product Image 5" />
                                            </div>
                                            <div>
                                                <img src="img/product-7.jpg" alt="Product Image 7" />
                                            </div>
                                            <div>
                                                <img src="img/product-9.jpg" alt="Product Image 9" />
                                            </div>
                                            <div>
                                                <img src="img/product-10.jpg" alt="Product Image 10" />
                                            </div>
                                        </Slider>
                                    </div>
                                    {/* Thumbnail Navigation Slider */}
                                    <div className="product-slider-single-nav normal-slider">
                                        <Slider
                                            {...navSliderSettings}
                                            asNavFor={nav1}
                                            ref={(slider) => {
                                                slider2.current = slider;
                                                setNav2(slider);
                                            }}
                                        >
                                            <div className="slider-nav-img">
                                                <img src="img/product-1.jpg" alt="Product Thumbnail 1" />
                                            </div>
                                            <div className="slider-nav-img">
                                                <img src="img/product-3.jpg" alt="Product Thumbnail 3" />
                                            </div>
                                            <div className="slider-nav-img">
                                                <img src="img/product-5.jpg" alt="Product Thumbnail 5" />
                                            </div>
                                            <div className="slider-nav-img">
                                                <img src="img/product-7.jpg" alt="Product Thumbnail 7" />
                                            </div>
                                            <div className="slider-nav-img">
                                                <img src="img/product-9.jpg" alt="Product Thumbnail 9" />
                                            </div>
                                            <div className="slider-nav-img">
                                                <img src="img/product-10.jpg" alt="Product Thumbnail 10" />
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="product-content">
                                        <div className="title"><h2>Product Name</h2></div>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="price">
                                            <h4>Price:</h4>
                                            <p>$99 <span>$149</span></p>
                                        </div>
                                        <div className="quantity">
                                            <h4>Quantity:</h4>
                                            <div className="qty">
                                                <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                <input type="text" defaultValue="1" />
                                                <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                            </div>
                                        </div>
                                        <div className="p-size">
                                            <h4>Size:</h4>
                                            <div className="btn-group btn-group-sm">
                                                <button type="button" className="btn">S</button>
                                                <button type="button" className="btn">M</button>
                                                <button type="button" className="btn">L</button>
                                                <button type="button" className="btn">XL</button>
                                            </div>
                                        </div>
                                        <div className="p-color">
                                            <h4>Color:</h4>
                                            <div className="btn-group btn-group-sm">
                                                <button type="button" className="btn">White</button>
                                                <button type="button" className="btn">Black</button>
                                                <button type="button" className="btn">Blue</button>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <a className="btn" href="/"><i className="fa fa-shopping-cart"></i>Add to Cart</a>
                                            <a className="btn" href="/"><i className="fa fa-shopping-bag"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row product-detail-bottom">
                            <div className="col-lg-12">
                                <ul className="nav nav-pills nav-justified">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#specification">Specification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#reviews">Reviews (1)</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div id="description" className="container tab-pane active">
                                        <h4>Product description</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus. Nulla tristique viverra nisl, sit amet bibendum ante suscipit non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu diam eros. Aliquam et sapien eget arcu rhoncus scelerisque. Suspendisse sit amet neque neque. Praesent suscipit et magna eu iaculis. Donec arcu libero, commodo ac est a, malesuada finibus dolor. Aenean in ex eu velit semper fermentum. In leo dui, aliquet sit amet eleifend sit amet, varius in turpis. Maecenas fermentum ut ligula at consectetur. Nullam et tortor leo.
                                        </p>
                                    </div>
                                    <div id="specification" className="container tab-pane fade">
                                        <h4>Product specification</h4>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                    </div>
                                    <div id="reviews" className="container tab-pane fade">
                                        <div className="reviews-submitted">
                                            <div className="reviewer">Phasellus Gravida - <span>01 Jan 2020</span></div>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                            </p>
                                        </div>
                                        <div className="reviews-submit">
                                            <h4>Give your Review:</h4>
                                            <div className="ratting">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <div className="row form">
                                                <div className="col-sm-6">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="col-sm-12">
                                                    <textarea placeholder="Review"></textarea>
                                                </div>
                                                <div className="col-sm-12">
                                                    <button>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product">
                            <div className="section-header">
                                <h1>Related Products</h1>
                            </div>

                            <div className="row align-items-center product-slider product-slider-3">
                                <Slider {...relatedProductsSettings} className='sliderrr'> 
                                    <div className="col-lg-3">
                                        <div className="product-item">
                                            <div className="product-title">
                                                <a href="/">Product Name</a>
                                                <div className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                <a href="product-detail.html">
                                                    <img src="img/product-10.jpg" alt="Product Image 10" />
                                                </a>
                                                <div className="product-action">
                                                    <a href="/"><i className="fa fa-cart-plus"></i></a>
                                                    <a href="/"><i className="fa fa-heart"></i></a>
                                                    <a href="/"><i className="fa fa-search"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <h3><span>$</span>99</h3>
                                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-item">
                                            <div className="product-title">
                                                <a href="/">Product Name</a>
                                                <div className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                <a href="product-detail.html">
                                                    <img src="img/product-8.jpg" alt="Product Image 8" />
                                                </a>
                                                <div className="product-action">
                                                    <a href="/"><i className="fa fa-cart-plus"></i></a>
                                                    <a href="/"><i className="fa fa-heart"></i></a>
                                                    <a href="/"><i className="fa fa-search"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <h3><span>$</span>99</h3>
                                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-item">
                                            <div className="product-title">
                                                <a href="/">Product Name</a>
                                                <div className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                <a href="product-detail.html">
                                                    <img src="img/product-6.jpg" alt="Product Image 6" />
                                                </a>
                                                <div className="product-action">
                                                    <a href="/"><i className="fa fa-cart-plus"></i></a>
                                                    <a href="/"><i className="fa fa-heart"></i></a>
                                                    <a href="/"><i className="fa fa-search"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <h3><span>$</span>99</h3>
                                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-item">
                                            <div className="product-title">
                                                <a href="/">Product Name</a>
                                                <div className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                <a href="product-detail.html">
                                                    <img src="img/product-4.jpg" alt="Product Image 4" />
                                                </a>
                                                <div className="product-action">
                                                    <a href="/"><i className="fa fa-cart-plus"></i></a>
                                                    <a href="/"><i className="fa fa-heart"></i></a>
                                                    <a href="/"><i className="fa fa-search"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <h3><span>$</span>99</h3>
                                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-item">
                                            <div className="product-title">
                                                <a href="/">Product Name</a>
                                                <div className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                <a href="product-detail.html">
                                                    <img src="img/product-2.jpg" alt="Product Image 2" />
                                                </a>
                                                <div className="product-action">
                                                    <a href="/"><i className="fa fa-cart-plus"></i></a>
                                                    <a href="/"><i className="fa fa-heart"></i></a>
                                                    <a href="/"><i className="fa fa-search"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <h3><span>$</span>99</h3>
                                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 sidebar">
                        <div className="sidebar-widget category">
                            <h2 className="title">Category</h2>
                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"><i className="fa fa-female"></i>Fashion & Beauty</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"><i className="fa fa-child"></i>Kids & Babies Clothes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"><i className="fa fa-tshirt"></i>Men & Women Clothes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"><i className="fa fa-mobile-alt"></i>Gadgets & Accessories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"><i className="fa fa-microchip"></i>Electronics & Accessories</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="sidebar-widget widget-slider">
                            <div className="sidebar-slider normal-slider">
                                <Slider {...sidebarSliderSettings}>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <a href="/">Product Name</a>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            <a href="product-detail.html">
                                                <img src="img/product-7.jpg" alt="Product Image 7" />
                                            </a>
                                            <div className="product-action">
                                                <a href="/"><i className="fa fa-cart-plus"></i></a>
                                                <a href="/"><i className="fa fa-heart"></i></a>
                                                <a href="/"><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>99</h3>
                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <a href="/">Product Name</a>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            <a href="product-detail.html">
                                                <img src="img/product-8.jpg" alt="Product Image 8" />
                                            </a>
                                            <div className="product-action">
                                                <a href="/"><i className="fa fa-cart-plus"></i></a>
                                                <a href="/"><i className="fa fa-heart"></i></a>
                                                <a href="/"><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>99</h3>
                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <a href="/">Product Name</a>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            <a href="product-detail.html">
                                                <img src="img/product-9.jpg" alt="Product Image 9" />
                                            </a>
                                            <div className="product-action">
                                                <a href="/"><i className="fa fa-cart-plus"></i></a>
                                                <a href="/"><i className="fa fa-heart"></i></a>
                                                <a href="/"><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>99</h3>
                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="sidebar-widget brands">
                            <h2 className="title">Our Brands</h2>
                            <ul>
                                <li><a href="/">Nulla </a><span>(45)</span></li>
                                <li><a href="/">Curabitur </a><span>(34)</span></li>
                                <li><a href="/">Nunc </a><span>(67)</span></li>
                                <li><a href="/">Ullamcorper</a><span>(74)</span></li>
                                <li><a href="/">Fusce </a><span>(89)</span></li>
                                <li><a href="/">Sagittis</a><span>(28)</span></li>
                            </ul>
                        </div>

                        <div className="sidebar-widget tag">
                            <h2 className="title">Tags Cloud</h2>
                            <a href="/">Lorem ipsum</a>
                            <a href="/">Vivamus</a>
                            <a href="/">Phasellus</a>
                            <a href="/">pulvinar</a>
                            <a href="/">Curabitur</a>
                            <a href="/">Fusce</a>
                            <a href="/">Sem quis</a>
                            <a href="/">Mollis metus</a>
                            <a href="/">Sit amet</a>
                            <a href="/">Vel posuere</a>
                            <a href="/">orci luctus</a>
                            <a href="/">Nam lorem</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}