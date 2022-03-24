import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Listenings() {


  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('../static/listenings', false, /\.(mp3|jpe?g|svg)$/));
  var listeningsArray = Object.keys(images).map((key) => [key, images[key]]);
  console.dir(listeningsArray)
  console.dir(listeningsArray[0][1])
  return (
    <div className="listening-container">
     

          {listeningsArray.map((item)=>{
          return  <div   className="listening-item" > 
                      <div className="listening-item-caption">
                      {item[0].substring(0,item[0].length-4)} 
                      </div  >
                      <div className="listening-item-tracker">
                            <AudioPlayer
                                
                                src={item[1]}
                                onPlay={e => console.log("onPlay")}
                                // other props here
                              />
                      </div>
                          
                    </div>
           
        })}

        {/* <AudioPlayer
          autoPlay
          src={result[0][1]}
          onPlay={e => console.log("onPlay")}
          // other props here
        /> */}

      
     
    </div>
  )
}

export default Listenings