import React,{useState} from 'react';
import '../Star/Star.css';
import {FaStar} from "react-icons/fa"; 
const Star = ({noofStars=5}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick=(getId)=>{
    setRating(getId)

  }
   const handleHover=(getId)=>{
    setHover(getId)
   }
   const handleHoverLeave=()=>{
    setHover(rating)

   }
   return(
    <div className='star-rating'>
      {[...Array(noofStars)].map((_, index)=>{
        index += 1;

        return (
          <FaStar
          key={index}
          className={index <= (hover || rating) ? "active": "inactive"}
          onClick={()=>handleClick(index)}
          onMouseMove={()=> handleHover(index)}
          onMouseLeave={()=>handleHoverLeave()}
          size={40}
          />
        )
      })}

    </div>
  )
}

export default Star