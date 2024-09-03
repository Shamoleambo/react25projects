import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(currentIndex) {
    setRating(currentIndex)
  }

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex)
  }

  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <div className='star-rating'>
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        )
      })}
    </div>
  )
}
