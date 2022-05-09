import React from 'react';
import burger from '../img/burger.svg'
import logo from '../img/logo.svg'
import mail from '../img/mail.svg'
import phone from '../img/phone.svg'
import download from '../img/download.svg'
import oneStroke from '../img/01 (Stroke).svg'
import twoStroke from '../img/02 (Stroke).svg'
import threeStroke from '../img/03 (Stroke).svg'
import person from '../img/706181.png'
import polygon from '../img/Polygon.svg'
import stamp from '../img/stamp+ 2 (2).svg'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <div className='header__wrapper'>
                <img src={burger} className='burger' alt=''/>
                <div className='header__logo'>
                    <a className='header__logo-link'>
                        <img src={logo} alt=''/>
                    </a>
                </div>
                   <nav className='header_nav'>

                       <ul className='header__list'>
                       <div className='header__mail'>
                           <li className='header__item'>
                               <a href='#' className='header__link'>Пишите нам на email</a>
                           </li>
                           <li className='header__item'>
                               <a href='#' className='header__link'>
                                   <img src={mail} alt=''/>
                                   info@diagnistics.by
                               </a>
                           </li>
                        </div>
                           <div className='header__phone'>
                           <li className='header__item'>
                               <img src={phone} alt=''/>
                               <a href='#' className='header__link'>Есть вопросы? Звоните!</a>
                           </li>
                           <li className='header__item'>
                               <a href='#' className='header__link'>
                                   +375 (29) 456-45-45
                               </a>
                           </li>
                           </div>
                       </ul>
                   </nav>
                </div>
            </div>
            <div className='header__banner'>
                <div className='header__description'>
                    <h1>
                        Независимое обследование зданий и сооружений
                    </h1>
                    <p>антенн, труб, теплосетей, канализаций и других объектов строительства</p>
                </div>
                <div className='header__button'>
                    <button>
                        <img src={download} alt=''/>
                        получить коммерческое
                    </button>
                    <span>
                        Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер
                    </span>
                </div>
            </div>
            <div className='header__quality'>
                <div className='header__quality-item'>
                    <img src={oneStroke} alt=''/>
                    <span>Начинаем работать без аванса </span>
                </div>
                <div className='header__quality-item'>
                    <img src={twoStroke} alt=''/>
                    <span>Предоставляем отсрочку платежа</span>
                </div>
                <div className='header__quality-item'>
                    <img src={threeStroke} alt=''/>
                    <span>Всегда называем справедливую цену</span>
                </div>
            </div>
            <div className='header__person'>
                <img src={person} alt=''/>
                <img src={polygon} alt=''/>
                <img src={stamp} alt=''/>
            </div>
        </div>
    );
};

export default Header;