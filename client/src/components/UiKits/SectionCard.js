import React from 'react'
import "./SectionCard.scss"
import Copy from './copy.png'
const SectionCard = ({name,imgSource,value,history}) => {
    console.log(name);
    let imageLoc = ""
    if(name==="Nursury & KG"){
        console.log("ldksfj")
        imageLoc="Images/crayons.png"
    }
    return ( 
     <div onClick={()=>history.push("/sectiondetail",{value,name})} className="shadow-lg col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
    <img src={imageLoc} alt="" />
     <h3 key={name}>{name}</h3>
    </div>  
    );
}

export default SectionCard;