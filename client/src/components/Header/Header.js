import React from 'react'
import "./Header.scss"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const Header = (props) => {

	return (
        <div class=" p-5  rounded">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top  navbarclass " >
	<div class="container-fluid">
		<Link class="navbar-brand"  style={{color:"black"}} to="/"><span style={{fontWeight:"bold",color:"#ccc"}}><span style={{color:"red",fontWeight:"bold"}}>A</span>S</span></Link>
	<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span class="navbar-toggler-icon" ></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav ml-auto" id="nav">
			<li class="nav-item">
			{props.id==="2"?<Link  class="nav-link active" to="/aboutus">About Us</Link>:<Link  class="nav-link"  to="/aboutus">About Us</Link>}
			</li>
            <li class="nav-item">
			{props.id==="3"?<Link  class="nav-link active" to="/contactus">Contact Us</Link>:<Link  class="nav-link"  to="/contactus">Contact Us</Link>}
			</li>
			<li class="nav-item">
			{props.id==="4"?<Link  class="nav-link active" to={props.user===null?"/signup":"/userdetails"}><i class="fa-2x fa fa-user-circle" aria-hidden="true"></i></Link>:<Link  class="nav-link"  to={props.user===null?"/signup":"/userdetails"}><i class="fa-2x fa fa-user-circle" aria-hidden="true"></i></Link>}
			</li>
            <li class="nav-item">
			{props.id==="5"?<Link  class="nav-link active" to="/cart"><span className="custombadge">{props.cartCount}</span><i class="fa-2x fa fa-shopping-bag" aria-hidden="true"></i></Link>:<Link  class="nav-link"  to="/cart"><span className="custombadge">{props.cartCount}</span><i class="fa-2x fa fa-shopping-bag" aria-hidden="true"></i></Link>}
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