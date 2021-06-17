import React from 'react'
import "./Cart.scss"
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {incrementItem,deleteItem} from '../redux/cart/CartActions'
import {decrementItem} from '../redux/cart/CartActions'
import axios from 'axios'
const Cart = (props) => {
    const [option,setOption] = React.useState("")
    const total=()=>{
        let totalam=0;
        props.cart.items.forEach(item=>{
            totalam = totalam+item.price*item.quantity
        })
        return totalam;
    }
    const mrp = ()=>{
        let mrp = 0;
        props.cart.items.forEach(item=>{
            mrp = mrp+item.MRP*item.quantity
        })
        return mrp
    }
    function isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
      }
      
      function isObj(val) {
        return typeof val === 'object'
      }
      
       function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
          return JSON.stringify(val)
        } else {
          return val
        }
      }
      
      function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)
      
        Object.keys(params).forEach(key => {
          const input = document.createElement('input')
          input.setAttribute('type', 'hidden')
          input.setAttribute('name', key)
          input.setAttribute('value', stringifyValue(params[key]))
          form.appendChild(input)
        })
      
        return form
      }
      
       function post(details) {
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
      }
    const buyNow = ()=>{
        console.log(props.user);
        if(props.user.user!==null){
                    axios.post(`/payment`,{token:props.user.user,description:props.cart.items}).then(response=>{
                let information={
                    action:'https://securegw-stage.paytm.in/order/process', //remove -stage for live
                    params:response.data
                }
                post(information)
                    }).catch(err=>console.log(err))
        }
        else{
            props.history.push("/signup")
        }
        
    }
    console.log(option)

    return (
        <div>
            <Header id="5" />
            <div className="cartdiv">
            
            <h1>Cart</h1>
            {
               props.cart.items.length===0?(
               <h3 className="sorrymessage">
                   <span style={{display:"block",marginBottom:10}} ><i className="far fa-frown fa-3x"></i></span>
                   Sorry You have Nothing in your cart please buy</h3>):(
               <div>
                      <div className="cartitemsdiv">
                            <div className="head">
                            <div className="heading row">
                                <div className="col-4">
                                <h2>Name</h2>
                                </div>
                                <div className="col-4">
                                <h2>Quantity</h2>
                                </div>
                                <div className="col-2">
                                <h2>Price</h2>
                                </div>
                                <div className="col-2">
                                </div>
                                </div>
                                    {
                                        props.cart.items.map(item =>(
                                <div className="row item">

                                                <div className="col-4">
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className="col-4">
                                        <h2>
                                        <span 
                                        onClick={()=>item.quantity===1?null:props.decrementItem(item)} 
                                        className="arrows" 
                                        style={{color:"#ccc",fontSize:".8em",margin:"0 3%"}}><i className="fa fa-angle-left" aria-hidden="true"></i></span> {item.quantity} 
                                        <span className="arrows" 
                                        onClick={()=>props.incrementItem(item)} 
                                        style={{color:"#ccc",fontSize:".8em",margin:"0 3%"}}><i className="fa fa-angle-right" aria-hidden="true"></i></span></h2>
                                    </div>
                                    <div className="col-2">
                                        <h2>${item.price*item.quantity}</h2>
                                    </div>
                                    <div  className="col-2">
                                    <span className="trashcan" onClick={()=>props.deleteItem(item)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                                    </div>
                                            </div>
                                        ))
                                    }
                                    

                            </div>
                            </div>

                            <div className="bill">
                            <h1>Items : <span>{props.cart.items.length}</span></h1>
                            <h1>MRP : <span>₹{mrp()}</span></h1>
                            <h1 className="discount">Discount : <span>₹{mrp()-total()}</span></h1>
                            <h1 className="total">Total : <span>₹{total()}</span></h1>
                            <p onClick={()=>setOption("online")}>
                            <input type="radio" id="test1" name="radio-group"  />
                            <label htmlFor="test1">Pay Via Debit / Credit / UPI / Net Banking</label>
                            </p>
                            <p onClick={()=>setOption("cashondelivery")}>
                            <input type="radio" id="test2" name="radio-group"  />
                            <label htmlFor="test2">Cash on Delivery</label>
                            </p>
                            <button onClick={()=>buyNow()} className="blackbutton">Buy Now</button>
                            </div>
               </div>
               )
            }
                         


            </div>
        </div>
    );
}

const mapStateToProps=({cart,user})=>{
    return {
        cart,
        user
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        incrementItem:item=>dispatch(incrementItem(item)),
        decrementItem:item=>dispatch(decrementItem(item)),
        deleteItem:item=>dispatch(deleteItem(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);