import React,{useState} from 'react'
import readingData from '../static/readings/ReadingsData'

function Readings() {
  const [text, setText] = useState("")

  const setTextData = (str)=>{
    setText(str)
    console.log("settexte girdi")
  }
  const test = () => {
    console.log("working");
  };

  return (
    <div className="readings-container">
      <div className="readings-books">
        {/* {readingData[0].title} */}
        {readingData.map((item)=>{
          return  <div key={item.id}  onClick={() => setTextData(item.text) } className="readings-item" > {item.title} </div>
           
        })}

      </div>
      <div className="readings-contents">
        {text}
      </div>
    </div>
    
  )
}

export default Readings