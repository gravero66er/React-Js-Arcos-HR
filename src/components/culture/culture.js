import React from "react";
import Title from "../commons/title";

function Culture() {
  return (
    <div className="culture" id="cult">
      <div className="container">
        <Title name={"Корпоративная культура"} />
        <div className="culture__list">
          <div className="culture__item culture__img-one"></div>
          <div className="culture__item culture__item-right">
            <div className="culture__info culture__info-right">
              <div className="culture__title">Работа в команде</div>
              <div className="culture__text">
                Много кто говорит о работе в команде, но мало кто понимает, что
                это такое на самом деле. В «Аркосе» каждый сотрудник —
                по-настоящему важная частица одного большого рабочего процесса.
                Именно поэтому среди нас нет тех, кто выбивается из общего
                рабочего ритма и не понимает своей роли внутри компании.
                <br />
                <br />
                Благодаря вовлечённости, чётко регламентированным процессам и
                доступным каждому «дорожным картам», понятие «командная работа»
                выходит на совершенно другой уровень.
              </div>
            </div>
            <div className="culture__img-two"></div>
          </div>
          <div className="culture__item culture__item-left">
            <div className="culture__img-three"></div>
            <div className="culture__info culture__info-left">
              <div className="culture__title">Отдыхаем вместе</div>
              <div className="culture__text">
                Для наиболее продуктивного взаимодействия внутри коллектива,
                очень важно узнать друг-друга чуть ближе — за рамками рабочего
                процесса.
                <br />
                <br />
                Новый Год, 23 февраля, 8 марта и День строителя — отличные
                поводы для совместного отдыха.
              </div>
            </div>
          </div>
          <div className="culture__item culture__img-four"></div>
          <div className="culture__item culture__img-five"></div>
          <div className="culture__item culture__img-six"></div>
          <div className="culture__item">
            <div className="culture__info culture__info-right">
              <div className="culture__title">Расширяем кругозор</div>
              <div className="culture__text">
                Уважаем интересы каждого! Проводим мастер-классы,
                интеллектуальные битвы и еще много-много всего интересного. Даем
                каждому возможность расти и учиться внутри компании.
                <br />
                <br />
                Обучение, повышение квалификации, тренинги — любые способы для
                наращивания внешних и внутрених компетенций.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Culture;
