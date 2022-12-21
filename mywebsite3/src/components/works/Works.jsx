import "./works.scss";
import { useState } from "react";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/800px-Windows_Settings_app_icon.png",
      title: "Title",
      desc: "sadjflkjdsaofj;asdlfjadsofj;j afodsjf;kldsajfoads;jfds;lfj;adslkfj;adslkjf",
      img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      id: "2",
      icon: "https://cdn-icons-png.flaticon.com/512/3658/3658773.png",
      title: "Title",
      desc: "sadjasdajfoads;jfds;lfj;adslkfj;adslkjf",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: "3",
      icon: "data:image/png;base64,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",
      title: "Chickens",
      desc: "sadjasdajbokbokbokbobbkboooookk;adslkjf",
      img: "https://canoladigest.ca/wp-content/uploads/2019/02/42-incorporate-farm-feature-min.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p> {d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihDdFuA5zbIScKWC3hXDQEbC-sRZR-dlKOg&usqp=CAU"
        className="arrow left"
        onClick={() => handleClick("left")}
        alt=""
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihDdFuA5zbIScKWC3hXDQEbC-sRZR-dlKOg&usqp=CAU"
        className="arrow right"
        onClick={() => handleClick("right")}
        alt=""
      />
    </div>
  );
}

export default Works;
