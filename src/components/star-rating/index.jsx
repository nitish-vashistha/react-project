import { FaStar } from "react-icons/fa"
import { useState } from "react"

function StarRating({noOfStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    let handelClick = (index) => { 
        setRating(index)
    }
    let handelMouseEnter = (index) => {
        setRating(index)
    }
    let handelMouseLeave = () => {
        setRating(rating)
    }
  return (
      <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((star, index) => {
          return (
            <FaStar 
            key={index}
            onClick={()=>handelClick(index+1)}
            onMouseMove={()=> {handelMouseEnter(index+1)}}
            onMouseLeave={()=>{handelMouseLeave()}}
            color={index + 1 <= rating ? "#ffc107" : "#e4e5e9"}
            />
          );
        })}
      </div>
    </>
  )
}

export default StarRating