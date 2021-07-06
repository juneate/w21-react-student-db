import React, {useState} from 'react'
import noImg from 'img/student.png'

const Image = ({src, alt, ...attr}) => {

  // State will hold the image url
  const [img, setImg] = useState(``)
  import(`img/${src}`).then((image) => setImg(image.default))

  return (
    <img src={(img) ? img : noImg} alt={alt} className="photo" {...attr} />
  )
}

export default Image