import './objectContent.css'
import slide_1 from '../../assets/images/sld01.webp'
import slide_2 from '../../assets/images/sld02.webp'
import slide_3 from '../../assets/images/sld03.webp'
import slide_4 from '../../assets/images/sld04.webp'
import slide_5 from '../../assets/images/sld05.webp'
import slide_6 from '../../assets/images/sld06.webp'
import man_3 from '../../assets/images/man03.webp'
import plan from '../../assets/images/plan.webp'
import obj_1 from '../../assets/images/obj01.webp'
import obj_2 from '../../assets/images/obj02.webp'
import obj_3 from '../../assets/images/obj03.webp'

const ObjectContent: React.FC = () =>  {
  return (
    <section className="object">
        <div className="object__container container">
            <div className="object__body">
            <div className="object__description">
                <div className="object__sliders">
                <div className="object__slider slider swiper">
                    <div className="slider__wrapper swiper-wrapper">
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_1}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_2}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_3}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_4}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_5}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_6}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_1}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_2}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_3}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_4}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_5}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider__slide swiper-slide">
                        <div className="slider__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_6}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="object__slider slider-small swiper">
                    <div className="slider-small__wrapper swiper-wrapper">
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_1}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_2}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_3}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_4}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_5}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_6}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_1}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_2}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_3}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_4}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_5}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    <div className="slider-small__slide swiper-slide">
                        <div className="slider-small__image">
                        <img
                            className="swiper-lazy"
                            data-src={slide_6}
                            alt=""
                        />
                        <div className="swiper-lazy-preloader" />
                        </div>
                    </div>
                    </div>
                    <div className="slider__button-prev swiper-button-prev icons-slider-arrow-prev" />
                    <div className="slider__button-next swiper-button-next icons-slider-arrow-next" />
                </div>
                </div>
                <div className="object__info">
                <h4 className="object__caption caption">Описание объекта</h4>
                <div className="object__text text">
                    <p>Розничная сеть «Проспект» с 8:00 до 23:00</p>
                    <p>Магазин Snowimage с 10:00 до 20:00</p>
                    <p>
                    Торговый комплекс расположен на оживленной транспортной магистрали
                    (район Теплотехнического института), связывающей Калининский район
                    с центральной частью города (ул. Кирова). Комплекс хорошо
                    просматривается с проезжей части, окружен плотной жилой застройкой
                    густонаселенного района. Вблизи комплекса расположены остановки
                    общественного транспорта.
                    </p>
                    <p>
                    В радиусе 100 м. расположены многочисленные торговые и офисные
                    объекты ТК «Кировский»; ТК «Теплотех», данный перекресток имеет
                    высокий пешеходный трафик.
                    </p>
                </div>
                <div className="object__buttons">
                    {" "}
                    <a
                    className="object__btn btn-no-bg btn-no-bg--blue icons-printer"
                    href="#"
                    >
                    <span>печать</span>
                    </a>
                    <a
                    className="object__btn btn-no-bg btn-no-bg--orange icons-star"
                    href="#"
                    >
                    <span>Добавить в избранное</span>
                    </a>
                </div>
                </div>
            </div>
            <div className="object__territory">
                <h4 className="object__caption caption">Объект на карте</h4>
                <div className="object__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291812.1934398455!2d61.1283967502963!3d55.15208015306807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c592cb104a3a8d%3A0xef224a2a6d1711bf!2z0KfQtdC70Y_QsdC40L3RgdC6LCDQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1636628645370!5m2!1sru!2sru"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
                </div>
            </div>
            <div className="object__manager">
                <h4 className="object__caption caption">Менеджер объекта</h4>
                <div className="object__wrap">
                <div className="object__image">
                    {" "}
                    <img src={man_3} alt="" />
                </div>
                <div className="object__contact">
                    <div className="object__name">Антон Дудкин</div>
                    <a
                    className="object__mail icons-mail"
                    href="mailto:arenda@tk-prospect.ru"
                    >
                    {" "}
                    <span>arenda@tk-prospect.ru</span>
                    </a>
                    <a className="object__phone icons-phone" href="tel:+73512190000">
                    {" "}
                    <span>+7 (351) 219-00-00</span>
                    </a>
                    <a className="object__phone icons-phone" href="tel:+79048004500">
                    {" "}
                    <span>+7 (904) 800-45-00</span>
                    </a>
                </div>
                </div>
            </div>
            <div className="object__plan">
                <h4 className="object__caption caption">План помещений</h4>
                <div className="object__interface interface">
                <div className="interface__controls">
                    <div className="interface__zoom icons-zoom-out" />
                    <div className="interface__zoom icons-zoom-in" />
                </div>
                <div className="interface__image">
                    {" "}
                    <img src={plan} alt="" />
                </div>
                <div className="interface__legend">
                    <div className="interface__marker interface__marker--yellow"> </div>
                    <div className="interface__text">Помещение свободно</div>
                </div>
                <div className="interface__legend">
                    <div className="interface__marker interface__marker--red"> </div>
                    <div className="interface__text">Помещение занято</div>
                </div>
                </div>
            </div>
            <div className="object__similar">
                <h4 className="object__caption caption">Похожие площади</h4>
                <div className="object__objects">
                <div className="objects__swiper-wrap">
                    <div className="swiper">
                    <ul className="objects__list swiper-wrapper">
                        <li className="objects__item swiper-slide">
                        {" "}
                        <a className="objects__image" href="#">
                            <img src={obj_1} alt="" />
                        </a>
                        <div className="objects__address">
                            {" "}
                            <span className="icons-small-pin" />
                            Краснопольский проспект, 17Б
                        </div>
                        <a className="objects__caption" href="#">
                            ТК «Проспект»
                        </a>
                        <div className="objects__text">
                            Расположение комплекса на одном из главных перекрестков
                            района Парковый на первой линии в плотной жилой застройке
                            обеспечивает высокий пешеходный и транспортный поток.
                        </div>
                        </li>
                        <li className="objects__item swiper-slide">
                        {" "}
                        <a className="objects__image" href="#">
                            <img src={obj_2} alt="" />
                        </a>
                        <div className="objects__address">
                            {" "}
                            <span className="icons-small-pin" />
                            Комсомольский пр., 50
                        </div>
                        <a className="objects__caption" href="#">
                            ТК «Магнит»
                        </a>
                        <div className="objects__text">
                            Торговый комплекс выгодно расположен на первой линии,
                            окружен плотной жилой застройкой, имеется парковка.{" "}
                        </div>
                        </li>
                        <li className="objects__item swiper-slide">
                        {" "}
                        <a className="objects__image" href="#">
                            <img src={obj_3} alt="" />
                        </a>
                        <div className="objects__address">
                            {" "}
                            <span className="icons-small-pin" />
                            Комсомольский пр-т, 74
                        </div>
                        <a className="objects__caption" href="#">
                            ТК «Проспект»
                        </a>
                        <div className="objects__text">
                            Комплекс находится на первой линии и окружен плотной жилой
                            застройкой. В непосредственной близости остановки
                            общественного транспорта. Высокий пешеходный и транспортный
                            поток.
                        </div>
                        </li>
                        <li className="objects__item swiper-slide">
                        {" "}
                        <a className="objects__image" href="#">
                            <img src={obj_1} alt="" />
                        </a>
                        <div className="objects__address">
                            {" "}
                            <span className="icons-small-pin" />
                            Краснопольский проспект, 17Б
                        </div>
                        <a className="objects__caption" href="#">
                            ТК «Проспект»
                        </a>
                        <div className="objects__text">
                            Расположение комплекса на одном из главных перекрестков
                            района Парковый на первой линии в плотной жилой застройке
                            обеспечивает высокий пешеходный и транспортный поток.
                        </div>
                        </li>
                        <li className="objects__item swiper-slide">
                        {" "}
                        <a className="objects__image" href="#">
                            <img src={obj_2} alt="" />
                        </a>
                        <div className="objects__address">
                            {" "}
                            <span className="icons-small-pin" />
                            Комсомольский пр., 50
                        </div>
                        <a className="objects__caption" href="#">
                            ТК «Магнит»
                        </a>
                        <div className="objects__text">
                            Торговый комплекс выгодно расположен на первой линии,
                            окружен плотной жилой застройкой, имеется парковка.{" "}
                        </div>
                        </li>
                        <li className="objects__item swiper-slide">
                        {" "}
                        <a className="objects__image" href="#">
                            <img src={obj_3} alt="" />
                        </a>
                        <div className="objects__address">
                            {" "}
                            <span className="icons-small-pin" />
                            Комсомольский пр-т, 74
                        </div>
                        <a className="objects__caption" href="#">
                            ТК «Проспект»
                        </a>
                        <div className="objects__text">
                            Комплекс находится на первой линии и окружен плотной жилой
                            застройкой. В непосредственной близости остановки
                            общественного транспорта. Высокий пешеходный и транспортный
                            поток.
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="swiper__button-prev">
                    <svg
                        width={9}
                        height={13}
                        viewBox="0 0 9 13"
                        fill="#00a0dc"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1.0612 5.85643L6.65101 0.266811C7.00659 -0.088939 7.5831 -0.0889389 7.93851 0.266811C8.29394 0.622247 8.29394 1.19873 7.9385 1.55413L2.99239 6.50009L7.93836 11.4459C8.29379 11.8015 8.29379 12.3779 7.93836 12.7333C7.58292 13.0889 7.00644 13.0889 6.65086 12.7333L1.06106 7.14361C0.883341 6.9658 0.794583 6.73302 0.794583 6.50012C0.794583 6.2671 0.883514 6.03415 1.0612 5.85643Z" />
                    </svg>
                    </div>
                    <div className="swiper__button-next">
                    <svg
                        width={9}
                        height={13}
                        viewBox="0 0 9 13"
                        fill="#00a0dc"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M7.9388 7.14357L2.34899 12.7332C1.99341 13.0889 1.4169 13.0889 1.0615 12.7332C0.706061 12.3778 0.706061 11.8013 1.0615 11.4459L6.00761 6.49991L1.06164 1.55412C0.706207 1.19854 0.706207 0.622118 1.06164 0.266684C1.41708 -0.0888945 1.99356 -0.0888944 2.34914 0.266684L7.93894 5.85639C8.11666 6.0342 8.20542 6.26698 8.20542 6.49988C8.20542 6.73289 8.11649 6.96585 7.9388 7.14357Z" />
                    </svg>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ObjectContent