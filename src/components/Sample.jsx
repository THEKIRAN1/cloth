import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import list from '../../public/list.json' 
function Sample() {
  const filterData = list.filter(data => data.category === "Winter-Clothes")
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 ">
      <div>
      <h1 className='font-semibold text-xl pb-2' > </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
        Winter Clothes
      </div>
    
    <div>
    <Slider {...settings}>
        {filterData.map((item, index) => (
          <div key={item.id}>
            <img src={item.image} alt={item.price} />
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div> 

    </>
  )
}

export default Sample