import React from "react";
import Title from "../commons/title";

function Vacancy() {
  return (
    <div className="vacancy" id="vac">
      <div className="container">
        <Title name={"Вакансии"} />
        <div className="vacancy__list">
          <div className="vacancy__item">
            <div className="vacancy__title">Менеджер по продажам</div>
            <div className="vacancy__text">
              от 70 000 рублей
              <br />
              <br />
              <strong>Задачи:</strong>
              <br />
              <ul>
                <li>- продвижение товаров компании;</li>
                <li>- контроль реализации проекта;</li>
                <li>- отражение активности в CRM;</li>
                <li>- проведение презентации продукта.</li>
              </ul>
              <strong>Мы предлагаем:</strong>
              <ul>
                <li>- крутого наставника-руководителя;</li>
                <li>- доступ к обширной базе знаний;</li>
                <li>- обучение внутри компании;</li>
                <li>- интересные задачи и их решения.</li>
              </ul>
              <a
                href="https://ekb.zarplata.ru/vacancy/card/206584247/menedzher-po-prodazham-stroitelstvo?position=4&track=search&explain[]=description&explain[]=company_title&query_id=a73acdf0-4cdf-40b3-ab1a-9eef0b898c79"
                target="_blank"
                rel="noreferrer"
                className="menu__item"
              >
                Вакансия полностью
              </a>
            </div>
          </div>
          <div className="vacancy__item">
            <div className="vacancy__title">Менеджер по снабжению</div>
            <div className="vacancy__text">
              от 30 000 до 55 000 рублей
              <br />
              <br />
              <strong>Задачи:</strong>
              <br />
              <ul>
                <li>- подбор и закупка ассортимента;</li>
                <li>- поиск новых поставщиков;</li>
                <li>- мониторинг цен и сроков поставки;</li>
                <li>- обеспечение строительных объектов.</li>
              </ul>
              <strong>Мы предлагаем:</strong>
              <ul>
                <li>- поощрение за внедрение новых идей;</li>
                <li>- доступ к обширной базе знаний;</li>
                <li>- современное рабочее место в центре города;</li>
                <li>- интересные задачи и их решения.</li>
              </ul>
              <a
                href="https://ekb.zarplata.ru/vacancy/card/206066326/snabzhenets-menedzher-po-zakupu-menedzher-po-snabzheniyu?position=1&track=search&explain[]=description&explain[]=company_title&query_id=2c715444-04f8-4497-80c9-ef62fa338764"
                target="_blank"
                rel="noreferrer"
                className="menu__item"
              >
                Вакансия полностью
              </a>
            </div>
          </div>
          <div className="vacancy__item">
            <div className="vacancy__title">Упаковщица</div>
            <div className="vacancy__text">
              от 25 000 рублей
              <br />
              <br />
              <strong>Задачи:</strong>
              <br />
              <ul>
                <li>- удаление литников;</li>
                <li>- первичный контроль качества выпускаемой продукции;</li>
                <li>- упаковка готовой продукции.</li>
              </ul>
              <strong>Мы предлагаем:</strong>
              <ul>
                <li>- стабильную работу;</li>
                <li>- своевременную выплату ЗП 2 раза в месяц;</li>
                <li>- обеспечение всем необходимым за счет компании;</li>
                <li>- дружный коллектив.</li>
              </ul>
              <a
                href="https://ekb.zarplata.ru/vacancy/card/205872167/upakovshchitsa?position=2&track=search&explain[]=description&explain[]=company_title&query_id=2c715444-04f8-4497-80c9-ef62fa338764"
                target="_blank"
                rel="noreferrer"
                className="menu__item"
              >
                Вакансия полностью
              </a>
            </div>
          </div>
        </div>
        <div className="vacancy__contacts">
          <div className="vacancy__name">
            Анастасия
            <p>
              Рекрутер <br />
              +7 (906) 809-50-05
            </p>
          </div>
          <div className="vacancy__photo"></div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
