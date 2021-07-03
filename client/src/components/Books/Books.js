import React from 'react'
import "./Books.scss"
import Header from '../Header/Header'
import SectionCard from '../UiKits/SectionCard'
import stationaries from '../Assets/books.json'
const Books = ({history}) => {
    let entries  = Object.entries(stationaries)
    console.log(entries)
    return (
        <div>
            <Header />
            <div className="sectioncard">
        <div className="row">
            {
                    entries.map(e=>(
                        
                    <SectionCard key={e[0]} history={history} name={e[0]} value={e[1]} />
                    ))

            }
               </div>
        </div>
        </div>
    );
}

export default Books;