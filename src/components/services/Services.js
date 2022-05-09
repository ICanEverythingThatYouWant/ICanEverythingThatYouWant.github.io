import React from 'react';
import './Services.css';
import oneCardPicture from '../img/61062800_w0_h0_wpapers_ru_proekt_doma.png';
import twoCardPicture from '../img/44052e9c5ba0a9bd45f52031de604284.png';
import threeCardPicture from '../img/services_engin.png';
import fourCardPicture from '../img/Снимок.PNG';
import arrow from '../img/arrow (Stroke).svg';
import Scrollable from "./Scrollable";

const Services = () => {

    const items = [
        {
            img: `${oneCardPicture}`,
            title: 'Общее обследование',
            text: 'Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности\n' +
                '                        и т.д.',
            more: 'Подробнее',
            imgArrow: `${arrow}`,
        },
        {
            img: `${twoCardPicture}`,
            title: 'Тепловизионная съемка',
            text: 'Исследование системы отопления, вентиляции\n' +
                '                        и кондиционирования, а также оценка энергоэффективности здания',
            more: 'Подробнее',
            imgArrow: `${arrow}`
        },
        {
            img: `${threeCardPicture}`,
            title: 'Телеинспекция инженерных сетей',
            text: 'Цветная телевизионная съемка внутренней поверхности любых протяженных объектов\n' +
                '                        до 250 метров',
            more: 'Подробнее',
            imgArrow: `${arrow}`
        },
        {
            img: `${fourCardPicture}`,
            title: 'Тахеометрическая съемка',
            text: 'Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве',
            more: 'Подробнее',
            imgArrow: `${arrow}`
        },
        {
            img: `${oneCardPicture}`,
            title: 'Общее обследование',
            text: 'Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности\n' +
                '                        и т.д.',
            more: 'Подробнее',
            imgArrow: `${arrow}`,
        },
        {
            img: `${twoCardPicture}`,
            title: 'Тепловизионная съемка',
            text: 'Исследование системы отопления, вентиляции\n' +
                '                        и кондиционирования, а также оценка энергоэффективности здания',
            more: 'Подробнее',
            imgArrow: `${arrow}`
        },
        {
            img: `${threeCardPicture}`,
            title: 'Телеинспекция инженерных сетей',
            text: 'Цветная телевизионная съемка внутренней поверхности любых протяженных объектов\n' +
                '                        до 250 метров',
            more: 'Подробнее',
            imgArrow: `${arrow}`
        },
        {
            img: `${fourCardPicture}`,
            title: 'Тахеометрическая съемка',
            text: 'Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве',
            more: 'Подробнее',
            imgArrow: `${arrow}`
        }
    ]
    return (
        <div className='services'>
            <h3>
                Услуги
            </h3>
            <h4>
                Выполняем как комплексное обследование, так и отдельные виды работ
            </h4>
            <div className='services__card'>
                <Scrollable _class='services__item'>
                {
                        items.map((v, i) => {
                            return(
                            <div key={i} className='services__card-item'>
                                <img src={v.img} alt=''/>
                                <h5>
                                    {v.title}
                                </h5>
                                <p>
                                    {v.text}
                                </p>
                                <span>
                                    {v.more}
                                    <img src={v.imgArrow} alt=''/>
                                 </span>
                            </div>
                            )
                        })
                    }
                </Scrollable>
            </div>
            <div className='waterline'>

            </div>
        </div>
    );
};

export default Services;