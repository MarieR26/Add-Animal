import React, { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

//creating object is a little trick to get them easily and use them in our image src:
const svgMap = {
  //that's the same as bord:bird, cat:cat, cow:cow and etc.
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart,
};

const AnimalShow = ({ type }) => {
  const [clickCount, setClickCount] = useState(0);

  function handleClickOnHeart() {
    setClickCount(clickCount + 1);
  }

  return (
    <div className="animal-show" onClick={handleClickOnHeart}>
      <img className="animal" src={svgMap[type]} alt="animal" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{
          width: 20 + 10 * clickCount + "px",
        }}
      />
    </div>
  );
};

export default AnimalShow;
