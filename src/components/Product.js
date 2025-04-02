import '../styles/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Product(){
    const settings = {
        dots: false,  
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return(
        <div className="recent-product product">
        <div className="container-fluid">
            <div className="section-header">
                <h1>Recent Product</h1>
            </div>
            <div className="row align-items-center product-slider product-slider-4">
            <Slider {...settings} className='sliderrr'>
                <div className="col-lg-3">
                    <div className="product-item">
                        <div className="product-title">
                            <a href="#">Product Name</a>
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
                                <img src="img/product-6.jpg" alt="Product Image"/>
                            </a>
                            <div className="product-action">
                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                <a href="#"><i className="fa fa-heart"></i></a>
                                <a href="#"><i className="fa fa-search"></i></a>
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
                            <a href="#">Product Name</a>
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
                                <img src="img/product-7.jpg" alt="Product Image"/>
                            </a>
                            <div className="product-action">
                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                <a href="#"><i className="fa fa-heart"></i></a>
                                <a href="#"><i className="fa fa-search"></i></a>
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
                            <a href="#">Product Name</a>
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
                                <img src="img/product-8.jpg" alt="Product Image"/>
                            </a>
                            <div className="product-action">
                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                <a href="#"><i className="fa fa-heart"></i></a>
                                <a href="#"><i className="fa fa-search"></i></a>
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
                            <a href="#">Product Name</a>
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
                                <img src="img/product-9.jpg" alt="Product Image"/>
                            </a>
                            <div className="product-action">
                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                <a href="#"><i className="fa fa-heart"></i></a>
                                <a href="#"><i className="fa fa-search"></i></a>
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
                            <a href="#">Product Name</a>
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
                                <img src="img/product-10.jpg" alt="Product Image"/>
                            </a>
                            <div className="product-action">
                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                <a href="#"><i className="fa fa-heart"></i></a>
                                <a href="#"><i className="fa fa-search"></i></a>
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
    )
}