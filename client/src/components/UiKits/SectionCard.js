import React from 'react'
import "./SectionCard.scss"
const SectionCard = ({name,imgSource,value,history}) => {
    return ( 
     <div onClick={()=>history.push("/sectiondetail",{value,name})} className="shadow-lg col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
    <img src={imgSource} alt={name} />
     <h3 key={name}>{name}</h3>
    </div>  
    );
}

export default SectionCard;