// LeftColumn component implemented as function
import React, {useState} from 'react';

function LeftColumn() {
  // Define two image sources
  const imageSource1 = 'https://cdn.britannica.com/17/17-050-54259529/Houses-Mount-Muhavura-Uganda.jpg';
  const imageSource2 = 'https://upload.wikimedia.org/wikipedia/commons/3/34/GahingaMuhabura.png';
  
  //Initialize state to keep track of the current image source
  const [currentImageSource, setCurrentImageSource] = useState(imageSource1);
  
  // Function to toggle between image sources
  const toggleImage = () => {
    if (currentImageSource === imageSource1) {
      setCurrentImageSource(imageSource2);
    } else {
      setCurrentImageSource(imageSource1);
    }
  };
  
  return (
    <div>
      <p>Embark on a melodic journey with my <a href="https://www.youtube.com/watch?v=SsavLGeKIVY&ab_channel=DJWYTEE" target="_blank" rel="noopener noreferrer"> handpicked playlist </a>
      – because life is better with a soundtrack,<br/> and my playlist is the ultimate DJ for your soul!</p>
      
      <p>Elevate your spirit with our curated <a href='https://www.youtube.com/watch?v=lstkW6FpvKk' target="_blank" rel="noopener noreferrer">Praise and Worship playlist</a>, a harmonious blend to uplift your soul</p>
      <p><strong><em>Click to view my favos place!</em></strong></p>

      <button onClick={toggleImage} style={{borderRadius:"30px", backgroundColor:"rgba(226,100,172,1)",  height:"40px", marginTop:'4px', marginBottom:"10px"}}>Show {currentImageSource === imageSource1 ? 'image #2' : 'image #1'}</button>
      <img
        src={currentImageSource}
        alt={`Mountain ${currentImageSource === imageSource1 ? 'Muhabura' : 'Muhavura'}`}
        width="600"
        height="300"
      />
    </div>
  );
}

export default LeftColumn;