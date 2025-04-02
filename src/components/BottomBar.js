import '../styles/style.css';
import { Link } from 'react-router-dom';

export default function BottomBar() {
    return (
        <div className="bottom-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="logo">
                          <Link href="/" >
                                <img src="img/logo.png" alt="Logo"/>
                           </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="search">
                            <input type="text" placeholder="Search"/>
                            <button><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="user">
                          <Link href="/wishlist" className="btn wishlist" >
                                <i className="fa fa-heart"></i>
                                <span>(0)</span>
                           </Link>
                          <Link href="/cart" className="btn cart" >
                                <i className="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
