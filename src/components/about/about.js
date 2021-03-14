import React from "react";
import Title from "../commons/title";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <Title name={"О нас"} />
        <div className="about__goals about__goals-top">
          <div className="about__item">
            <div className="item__img item__img-one"></div>
            <div className="item__info">Курсы и обучение</div>
          </div>
          <div className="about__item">
            <div className="item__img item__img-five"></div>
            <div className="item__info">Корпоративная культура</div>
          </div>
          <div className="about__item">
            <div className="item__img item__img-three"></div>
            <div className="item__info">Зарплата без задержек</div>
          </div>
        </div>
        <div className="about__goals about__goals-bottom">
          <div className="about__item">
            <div className="item__img item__img-four"></div>
            <div className="item__info">Нет дресс-кода</div>
          </div>
          <div className="about__item">
            <div className="item__img item__img-two"></div>
            <div className="item__info">Карьерный рост</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
