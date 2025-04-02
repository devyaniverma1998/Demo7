import '../styles/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Brand() {
    const settings = {
        dots: false,  
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 5 },
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

    return (
        <div className="brand">
            <div className="container-fluid">
                <div className="brand-slider">
                    <Slider {...settings}>
                        <div className="brand-item"><img src="img/brand-1.png" alt="Brand 1" /></div>
                        <div className="brand-item"><img src="img/brand-2.png" alt="Brand 2" /></div>
                        <div className="brand-item"><img src="img/brand-3.png" alt="Brand 3" /></div>
                        <div className="brand-item"><img src="img/brand-4.png" alt="Brand 4" /></div>
                        <div className="brand-item"><img src="img/brand-5.png" alt="Brand 5" /></div>
                        <div className="brand-item"><img src="img/brand-6.png" alt="Brand 6" /></div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
