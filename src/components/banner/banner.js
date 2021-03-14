import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__goals">
          <div className="banner__item">
            <div className="banner__number">
                1
            </div>
            <div className="banner__info">
                место в Росии по производству PPSU-фитингов
            </div>
          </div>
          <div className="banner__item">
            <div className="banner__number">
                200 000
            </div>
            <div className="banner__info">
                м<sup>3</sup> — доля рынка по комплектации МКД 
            </div>
          </div>
          <div className="banner__item">
            <div className="banner__number">
                в 2,5
            </div>
            <div className="banner__info">
                раза — увеличился штат за 2020 год 
            </div>
          </div>
          <div className="banner__item">
            <div className="banner__number">
                  24
            </div>
            <div className="banner__info">
                обучения проведено в 2020 году для сотрудников
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
