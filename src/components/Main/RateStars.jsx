import propTypes from "prop-types";



import { useState } from "react";





export const RateStars=({rating,setRating})=>{
    const [hover, setHover] = useState(0);
    return (
      <div className="inline mx-4 flex flex-row">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={` text-xl   ${index <= (hover || rating) ?  "text-yellow-500" :"text-gray-500"  }`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="mx-0.5">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
}

RateStars.propTypes={
    rating:propTypes.number,
    setRating:propTypes.func
}