import React from "react";
import "../Home/Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="main-content">
        <img
          className="main-image"
          src={process.env.PUBLIC_URL + "./images/main01.jpg"}
          alt=""
        />
        <div className="container">
          <div className="des">
            <h3>너만의 무늬가 우리의 무기</h3>
            <p>
              우리의 가능성을 믿게 해준 <br />
              대표팀의 용맹함과 투지를 기억하고, <br />
              앞으로 더 강해질 대한민국 축구를 응원합니다.
              <span>#NikeFC</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
