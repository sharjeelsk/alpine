import React from 'react'
import "./Home.scss"
import Header from './Header/Header'
import stationaries from '../Images/stationery.png'
import books from '../Images/book.png'
const Home = ({history}) => {
    return (
        <div className="homeonediv">
            <Header id='1' />
        <h1>Anmol Stationarie's</h1>
        <p className="headingpara">Bright up Your future in one day</p>

        <div className="shopnowdiv">
        <h2 className="heading">Shop Now <i class=" fa fa-shopping-bag" aria-hidden="true"></i></h2>
        <div className="row ">
            <div onClick={()=>history.push("/stationaries")} className="shadow-lg col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <img src={stationaries} alt="stationaries" />
                <h3>Stationarie's</h3>
            </div>
            <div onClick={()=>history.push("/books")} className="shadow-lg col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <img src={books} alt="books" />
                <h3>Book's</h3>
            </div>
        </div>
        </div>

        <div className="trendingitemsdiv">
            <h2>Trending Item's</h2>
            <div className="row">
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
            </div>
        </div>


        <div className="trendingitemsdiv">
            <h2>Most Bought Item's</h2>
            <div className="row">
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
            </div>
        </div>

        <div className="trendingitemsdiv">
            <h2>High on Discount</h2>
            <div className="row">
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
                
                <div className="col-2">
                    <h6>itemName</h6>
                    <p>Description</p>
                </div>
            </div>
        </div>


        <div className="brief">
            <h2>Brief About Anmol Stationarie's</h2>
            <p>
                Anmol stationaries is an aurangabad based e-commerce store which
                provides delivery within a day to the residents of aurangabad
                with wide variety of product's and payment options with flexible 
                returns.
            </p>
        </div>

        <div className="customers">
            <h2>Happy Customer's</h2>
            <div className="row">
                <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h4>Daniel</h4>
                    <h6>CEO at tenors</h6>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <p>
                    Real-time feedback about drivers means Uber can correct for issues big and small – while ensuring that only the best drivers stay on the road. We take this feedback seriously – depending on the circumstances, rider feedback may lead to deactivating a partner from the system or serve as validation that the driver is providing great service.
                    </p>
                </div>
                <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h4>Ryan</h4>
                    <h6>Social Worker</h6>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <p>
                    Real-time feedback about drivers means Uber can correct for issues big and small – while ensuring that only the best drivers stay on the road. We take this feedback seriously – depending on the circumstances, rider feedback may lead to deactivating a partner from the system or serve as validation that the driver is providing great service.
                    </p>
                </div>
                <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h4>Sudhir</h4>
                    <h6>Politician</h6>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <p>
                    Real-time feedback about drivers means Uber can correct for issues big and small – while ensuring that only the best drivers stay on the road. We take this feedback seriously – depending on the circumstances, rider feedback may lead to deactivating a partner from the system or serve as validation that the driver is providing great service.
                    </p>
                </div>
            </div>
        </div>

<h1>jdslkfjlksd</h1>
<h1>jdslkfjlksd</h1>
<h1>jdslkfjlksd</h1>
<h1>jdslkfjlksd</h1>
<h1>jdslkfjlksd</h1>

        </div>
    );
}

export default Home;