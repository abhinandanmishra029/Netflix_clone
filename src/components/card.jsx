import React from "react";
const Card1 = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} className="card-img-top" alt="image" />
        <div className="card-bod">
          <h5 className="card-titl">{props.title}</h5>
          <p className="card-tex">{props.text}</p>
          <a href="#" className="bt btn-primar">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export { Card1 };
