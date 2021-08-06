import React from 'react'
import "./Home.scss"
import Header from './Header/Header'
import stationaries from '../Images/stationery.png'
import books from '../Images/book.png'
import Footer from './Footer/Footer'
import Alpine from '../Images/Group 12.png'
import axios from 'axios'
const Home = ({history}) => {
    React.useEffect(() =>{
        axios.post("/count/increaseCount")
    },[])
    return (
        <div className="homeonediv">
            <Header id='1' />

            <div style={{textAlign:"center"}}>
            <img src={Alpine} alt="alpine" id="alpine" />
            </div>


        <div className="shopnowdiv">

        <h2 className="heading">Shop Now <i className=" fa fa-shopping-bag" aria-hidden="true"></i></h2>

        <div className="row ">
            <div onClick={()=>history.push("/stationaries")} className="homeheadcards shadow-lg col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <img src={stationaries} alt="stationaries" />
                <h3 >Stationery</h3>
            </div>
            <div onClick={()=>history.push("/books")} className="homeheadcards shadow-lg col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <img src={books} alt="books" />
                <h3>Book's</h3>
            </div>
        </div>
        </div>

        <div className="trendingitemsdiv" style={{color:"#006141"}}>
            <h2>Trending Item's</h2>
            <div className="row countRow ">
                <div className="col-3">
                    <img style={{height:150,width:100,marginBottom:10}} src="/Images/trendingitems/trimax.jpg" alt="trimax" />
                    <h6>Trimax</h6>
                    <p>Price:30</p>
                    <p>MRP:40</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/myapsarakit.jpg" alt="trimax" />
                    <h6>My Apsara Kit</h6>
                    <p>Price:420</p>
                    <p>MRP:500</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/avengerskit.jpg" alt="trimax" />
                    <h6>Avengers Kit</h6>
                    <p>Price:26</p>
                    <p>MRP:30</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/natrajwildeseraser.jpg" alt="trimax" />
                    <h6>Natraj Pack</h6>
                    <p>Price:35</p>
                    <p>MRP:40</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/camlisinglelinenotebook72pages.jpg" alt="trimax" />
                    <h6>Camlin Double Line Notebook</h6>
                    <p>Price:20</p>
                    <p>MRP:18</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
            </div>
        </div>


        <div className="trendingitemsdiv">
            <h2>Most Bought Item's</h2>
            <div className="row countRow ">
                <div className="col-3">
                    <img style={{height:150,width:100,marginBottom:10}} src="/Images/camlinA4sizesoftbondunrulednotebook72pages.jpg" alt="trimax" />
                    <h6>Camlin A4 Size Notebook 72pgs</h6>
                    <p>Price:25</p>
                    <p>MRP:30</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/Englishkumarbharti10jpeg.jpg" alt="trimax" />
                    <h6>Englishkumarbharti</h6>
                    <p>Price:140</p>
                    <p>MRP:150</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/camlinjumboa5softmediumsquarelinenotebook172pages.jpg" alt="trimax" />
                    <h6>Camlin Jumbo A5 Meduim 172p</h6>
                    <p>Price:45</p>
                    <p>MRP:50</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/apsarapaltinum.jpg" alt="trimax" />
                    <h6>Apsara Platinum Pack</h6>
                    <p>Price:45</p>
                    <p>MRP:50</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/apsaraabsolutescale30cm.jpg" alt="trimax" />
                    <h6>Apsara Absolute Scale</h6>
                    <p>Price:22</p>
                    <p>MRP:25</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
            </div>
        </div>

        <div className="trendingitemsdiv">
            <h2>High on Discount</h2>
            <div className="row countRow ">
                <div className="col-3">
                    <img style={{height:150,width:100,marginBottom:10}} src="/Images/VIKASAPPLEPHONIC(3)PICTUREBOOK.jpg" alt="trimax" />
                    <h6>VIKAS APPLE PHONIC (3) PICTURE BOOK</h6>
                    <p>Price:60</p>
                    <p>MRP:55</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/trimaxred.jpg" alt="trimax" />
                    <h6>Trimax Red</h6>
                    <p>Price:43</p>
                    <p>MRP:50</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/celloAVENGERSFOUNTAINPENS.jpg" alt="trimax" />
                    <h6>Cello Avengers FP</h6>
                    <p>Price:30</p>
                    <p>MRP:40</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/apsarapoperaser.jpg" alt="trimax" />
                    <h6>Apsara Pop Eraser Pack</h6>
                    <p>Price:30</p>
                    <p>MRP:40</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
                
                <div className="col-3">
                <img style={{height:150,width:100,marginBottom:10}} src="/Images/youvawoodenboard.jpg" alt="trimax" />
                    <h6>Wooden Exam Board</h6>
                    <p>Price:105</p>
                    <p>MRP:125</p>
                    <center><button style={{padding:"2% 18%"}} className="blackbutton">Add To Cart</button></center>
                </div>
            </div>
        </div>


        <div className="brief">
            <h2>Brief About Alpine Stationery</h2>
            <p>
                Alpine Stationery is an aurangabad based e-commerce store which
                provides delivery within a day to the residents of aurangabad
                with wide variety of product's and payment options with flexible 
                returns.
            </p>
        </div>

        <div className="customers">
            <h2>Happy Customer's</h2>
            <div className="row">
                <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h4>Shaikh Sharjeel</h4>
                    <h6>CEO at TechGeeks</h6>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <p>
                    I've been a part of alpine enterprises since a long time. This solution of providing one day delivery to the people of Aurangabad is upto the mark and alpine stationery aims to deliver the product within one day + they give high discounts compare to other sellers
                    </p>
                </div>
                <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h4>Giri Shantanu</h4>
                    <h6>Principal at Dr. DS Paliwagh Junior College of Education</h6>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <p>
                    Alpine Stationery do what they say. Their service is really good and even the product quality is really good. The thing which i really liked about alpine statonery is flexible returns on each and every product.
                    </p>
                </div>
                <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h4>Shaikh Rais</h4>
                    <h6>Principal at Sarosh School Jinsi</h6>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span style={{color:"#ffc93c"}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <p>
                    Had a Wonderful Experience and Great Service 
                    </p>
                </div>
            </div>
        </div>

<Footer />

        </div>
    );
}

export default Home;