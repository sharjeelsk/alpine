import React from 'react'
import "./Header.scss"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const Header = (props) => {

	return (
        <div className=" p-5  rounded">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top  navbarclass " >
	<div className="container-fluid">
		<Link className="navbar-brand"  style={{color:"black"}} to="/"><span style={{fontWeight:"bold",color:"#ccc"}}><span style={{color:"red",fontWeight:"bold"}}>A</span>S</span></Link>
	<button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span className="navbar-toggler-icon" ></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarResponsive">
		<ul className="navbar-nav ml-auto" id="nav">
			<li className="nav-item">
			{props.id==="2"?<Link  className="nav-link active" to="/aboutus">About Us</Link>:<Link  className="nav-link"  to="/aboutus">About Us</Link>}
			</li>
            <li className="nav-item">
			{props.id==="3"?<Link  className="nav-link active" to="/contactus">Contact Us</Link>:<Link  className="nav-link"  to="/contactus">Contact Us</Link>}
			</li>
			<li className="nav-item">
			{props.id==="4"?<Link  className="nav-link active" to={props.user===null?"/signup":"/userdetails"}><i className="fa-2x fa fa-user-circle" aria-hidden="true"></i></Link>:<Link  className="nav-link"  to={props.user===null?"/signup":"/userdetails"}><i className="fa-2x fa fa-user-circle" aria-hidden="true"></i></Link>}
			</li>
            <li className="nav-item">
			{props.id==="5"?<Link  className="nav-link active" to="/cart"><span className="custombadge">{props.cartCount}</span><i className="fa-2x fa fa-shopping-bag" aria-hidden="true"></i></Link>:<Link  className="nav-link"  to="/cart"><span className="custombadge">{props.cartCount}</span><i className="fa-2x fa fa-shopping-bag" aria-hidden="true"></i></Link>}
			</li>
          
		</ul>
	</div>
</div>
</nav>
</div>
    );

}
const mapStateToProps=({cart,user})=>{
	return {
		cartCount:cart.itemsCount,
		user:user.user
	}
}
export default connect(mapStateToProps)(Header);