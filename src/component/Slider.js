import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";


const SliderSlick = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      img: "https://picsum.photos/203",
      titile: "Live",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      titile: "your",
    },
    {
      id: 3,
      img: "https://picsum.photos/205",
      titile: "life",
    },
    {
      id: 4,
      img: "https://picsum.photos/204",
      titile: "freely",
    },

    {
      id: 5,
      img: "https://picsum.photos/201",
      titile: "Happily",
    },
    // add more data here
  ];

  return (
    <div className="carousel_wrapper">
      <h1 className="heading">React Carousel Using React Slick</h1>
      <div
        style={{
          width: "90%",
        }}
      >
        <Slider {...settings}>
          {data.map((item) => (
            <div className="card_wrapper">
              <div class="card">
                <img
                  src={item.img}
                  alt="Avatar"
                  style={{ width: "fit-content", padding: "0 2rem" }}
                />
                <div class="container">
                  <h4>
                    <b>{item.titile}</b>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSlick;
