import React from 'react';
import './feature.css';
import tv from '../img/tv (2).svg';
import check from '../img/.svg';

const Feature = () => {
    return (
        <div className='feature'>
            <div className='feature__description'>
                <h2>
                    Мы работаем быстро
                    и наши отчеты проходят согласование с первого раза
                </h2>
                <span>
                    Над вашим объектом работает целая команда:
                    3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для камеральных работ
                </span>
            </div>
            <img src={tv} className='feature__image' alt=''/>
            <div className='feature__merit'>
                <h3>
                    Вы и Ваши архитекторы получаете:

                </h3>
                <div className='feature__merit-item'>
                    <ul>
                        <li>
                            <img src={check} alt=''/>
                            <p> Отчет на который на 100% можно положиться</p>
                        </li>
                        <li>
                            <img src={check} alt=''/>
                            <p>Экономию времени и прогнозируемость сроков</p>
                        </li>
                        <li>
                            <img src={check} alt=''/>
                            <p> Предварительные результаты сразу на месте</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Feature;