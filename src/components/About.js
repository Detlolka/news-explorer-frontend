import React from "react";
import aboutImage from "../images/user.jpg";

export default function About() {
  return (
    <div className="about">
      <img className="about__image" src={aboutImage} alt="аватарка автора" />
      <div className="about__container">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__author">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="about__training">
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </div>
  );
}
