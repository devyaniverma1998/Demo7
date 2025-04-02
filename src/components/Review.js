import '../styles/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Review(){
    const settings = {
        dots: false,  
        infinite: true,
        speed: 500,
        slidesToShow: 2, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return(
        <div className="review">
            <div className="container-fluid">
                <div className="row align-items-center review-slider normal-slider">
                <Slider {...settings} className='sliderrr'>
                    <div className="col-md-6">
                        <div className="review-slider-item">
                            <div className="review-img">
                                <img src="img/review-1.jpg" alt="Image"/>
                            </div>
                            <div className="review-text">
                                <h2>Customer Name</h2>
                                <h3>Profession</h3>
                                <div className="ratting">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="review-slider-item">
                            <div className="review-img">
                                <img src="img/review-2.jpg" alt="Image"/>
                            </div>
                            <div className="review-text">
                                <h2>Customer Name</h2>
                                <h3>Profession</h3>
                                <div className="ratting">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="review-slider-item">
                            <div className="review-img">
                                <img src="img/review-3.jpg" alt="Image"/>
                            </div>
                            <div className="review-text">
                                <h2>Customer Name</h2>
                                <h3>Profession</h3>
                                <div className="ratting">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                </p>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}