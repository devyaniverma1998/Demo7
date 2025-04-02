import '../styles/style.css'
export default function Contact(){
    return(
        <div className="contact">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-info">
                        <h2>Our Office</h2>
                        <h3><i className="fa fa-map-marker"></i>123 Office, Los Angeles, CA, USA</h3>
                        <h3><i className="fa fa-envelope"></i>office@example.com</h3>
                        <h3><i className="fa fa-phone"></i>+123-456-7890</h3>
                        <div className="social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info">
                        <h2>Our Store</h2>
                        <h3><i className="fa fa-map-marker"></i>123 Store, Los Angeles, CA, USA</h3>
                        <h3><i className="fa fa-envelope"></i>store@example.com</h3>
                        <h3><i className="fa fa-phone"></i>+123-456-7890</h3>
                        <div className="social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-form">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div><button className="btn" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    )
}