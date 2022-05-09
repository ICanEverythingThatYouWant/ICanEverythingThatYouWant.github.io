import React from 'react';
import './WorkCard.css';
import person from '../img/706181.png';
import picture from '../img/henry-co-180108-unsplash.png'

const WorkCard = () => {
    return (
        <div className='workCard'>
            <h2>
                МЫ РАБОТАЕМ В КОМПЛЕКСЕ
            </h2>
            <h4>
                чтобы Вы не тратили время на поиск и организацию множества подрядчиков
            </h4>
            <div className='workCard__description'>
                <img src={picture} className='WorkCard__picture' alt=''/>
                <div className='workCard__description-title'>
                    <span>
                        шаг №1.
                    </span>
                    <b>Подготовительные работы</b>
                    <p>Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д. </p>
                    <div className='workCard__description-item'>
                        <img src={person} alt=''/>
                        <span>
                            “Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“
                        </span>
                        <p>АЛЕКСЕЙ, обследователь и главный инженер проектов</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;