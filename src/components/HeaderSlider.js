import '../styles/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeaderSlider
    () {
    const settings = {
        dots: false,  // Disable dots for brand logos
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of brands visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,  // Hide arrows for a clean look
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <nav className="navbar bg-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><i className="fa fa-home"></i>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><i className="fa fa-shopping-bag"></i>Best Selling</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><i className="fa fa-plus-square"></i>New Arrivals</a>
                                </li>
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
                    <div className="col-md-6">
                        <Slider {...settings}>
                            <div className="header-slider-item ">
                                <img src="img/slider-1.jpg" alt="Slider Image" />
                                <div className="header-slider-caption ">
                                    <p>Some text goes here that describes the image</p>
                                    <a className="btn" href="/shop">
                                        <i className="fa fa-shopping-cart"></i>Shop Now
                                    </a>
                                </div>
                            </div>
                            <div className="header-slider-item">
                                <img src="img/slider-2.jpg" alt="Slider Image" />
                                <div className="header-slider-caption">
                                    <p>Some text goes here that describes the image</p>
                                    <a className="btn" href="/shop">
                                        <i className="fa fa-shopping-cart"></i>Shop Now
                                    </a>
                                </div>
                            </div>
                            <div className="header-slider-item">
                                <img src="img/slider-3.jpg" alt="Slider Image" />
                                <div className="header-slider-caption">
                                    <p>Some text goes here that describes the image</p>
                                    <a className="btn" href="/shop">
                                        <i className="fa fa-shopping-cart"></i>Shop Now
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className="col-md-3">
                        <div className="header-img">
                            <div className="img-item">
                                <img src="img/category-1.jpg" />
                                <a className="img-text" href="/">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="img-item">
                                <img src="img/category-2.jpg" />
                                <a className="img-text" href="/">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}