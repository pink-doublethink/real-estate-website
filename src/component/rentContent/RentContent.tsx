import './rentContent.css'
import man_3 from '../../assets/images/man03.webp'

const RentContent: React.FC = () => {
  return (
    <div className="rent">
        <div className="rent__container container">
            <div className="rent__body">
            <div className="rent__tabs tabs">
                <div className="tabs__triggers">
                {" "}
                <a className="tabs__trigger" href="#objects">
                    Объекты в аренду
                </a>
                <a className="tabs__trigger" href="#commercial">
                    Реклама в торговых комплексах
                </a>
                <a className="tabs__trigger" href="#managers">
                    Менеджеры проектов
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="tabs__content">
            <div className="tabs__item item-tab" id="objects">
            <div className="item-tab__container container">
                <div className="item-tab__body">
                <div className="item-tab__filter filter">
                    <div className="filter__inputs">
                    <label className="filter__label">
                        <span>Адрес объекта</span>
                        <div className="filter__select-wrap">
                        <select
                            className="filter__select"
                            id="address-select"
                            name="address-select"
                        >
                            <option value="val01">2-ая Базовая ул., д.43</option>
                            <option value="val02">Бажова ул., д. 80</option>
                            <option value="val03">Бугурусланская ул., д, 64</option>
                            <option value="val04">Гагарина ул, 35</option>
                            <option value="val05">Гагарина ул., д.10</option>
                            <option value="val06">Горького ул., д. 60</option>
                        </select>
                        <span className="icons-arrow" />
                        </div>
                    </label>
                    <label className="filter__label">
                        <span>Район</span>
                        <div className="filter__select-wrap">
                        <select
                            className="filter__select"
                            id="area-select"
                            name="area-select"
                        >
                            <option value="val01">Центральный</option>
                            <option value="val02">Советский</option>
                            <option value="val03">Курчатовский</option>
                            <option value="val04">Калининский</option>
                            <option value="val05">Ленинский</option>
                            <option value="val06">Металлургический</option>
                        </select>
                        <span className="icons-arrow" />
                        </div>
                    </label>
                    <div className="filter__label">
                        <span>Площадь, кв. м</span>
                        <div className="filter__buttons">
                        <button
                            className="filter__check-btn"
                            type="button"
                            data-square={1}
                        >
                            1-5
                        </button>
                        <button
                            className="filter__check-btn"
                            type="button"
                            data-square={2}
                        >
                            6-10
                        </button>
                        <button
                            className="filter__check-btn"
                            type="button"
                            data-square={3}
                        >
                            11-30
                        </button>
                        <button
                            className="filter__check-btn"
                            type="button"
                            data-square={4}
                        >
                            31-50
                        </button>
                        <button
                            className="filter__check-btn"
                            type="button"
                            data-square={5}
                        >
                            51-100
                        </button>
                        <button
                            className="filter__check-btn"
                            type="button"
                            data-square={6}
                        >
                            более 100
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="filter__bottom">
                    <div className="filter__checkbox checkbox">
                        <input
                        className="checkbox__input"
                        type="checkbox"
                        name="free-square"
                        id="free-square"
                        />
                        <label
                        className="checkbox__label"
                        htmlFor="free-square"
                        tabIndex={0}
                        >
                        Найти все свободные площади
                        </label>
                    </div>
                    <a className="filter__print icons-printer" href="#">
                        {" "}
                        <span>Распечатать список объектов</span>
                    </a>
                    <a className="filter__reset" href="#">
                        сбросить фильтры
                    </a>
                    <button className="filter__search btn btn--blue">найти</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="item-tab__map map" id="map-objects">
                <div className="map__body">
                <div className="map__panel">
                    <div className="map__title">Все объекты</div>
                    <ul className="map__list">
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.159608119492844"
                        data-longitude="61.40261080259067"
                        >
                        <div className="map__number">1.</div>
                        <div className="map__info">
                            <div className="map__address">Сан-Франциско</div>
                            <div className="map__heading">Мост «Золотые Ворота»</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.14947512710992"
                        data-longitude="61.38686681941258"
                        >
                        <div className="map__number">2.</div>
                        <div className="map__info">
                            <div className="map__address">2-ая Базовая ул., д.43</div>
                            <div className="map__heading">Торговое помещение</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.15970477569889"
                        data-longitude="61.398976150848384"
                        >
                        <div className="map__number">3.</div>
                        <div className="map__info">
                            <div className="map__address">ул. Витебская, 4</div>
                            <div className="map__heading">ТК "Железнодорожный"</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.161093017142306"
                        data-longitude="61.39565021166993"
                        >
                        <div className="map__number">4.</div>
                        <div className="map__info">
                            <div className="map__address">Где-то в степи</div>
                            <div className="map__heading">
                            ТРЦ "Чугунно-металло-челябинско-прокатный"
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.16292345600203"
                        data-longitude="61.39852553973386"
                        >
                        <div className="map__number">5.</div>
                        <div className="map__info">
                            <div className="map__address">Переулок Скромности</div>
                            <div className="map__heading">ТК "Никитинский"</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.164766094448176"
                        data-longitude="61.40442639956667"
                        >
                        <div className="map__number">6.</div>
                        <div className="map__info">
                            <div className="map__address">Улица Роз</div>
                            <div className="map__heading">ТРК "Победа"</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.165048624781235"
                        data-longitude="61.39507085452273"
                        >
                        <div className="map__number">7.</div>
                        <div className="map__info">
                            <div className="map__address">Молдавская, 2</div>
                            <div className="map__heading">ТРК "Фокус"</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.168193174490604"
                        data-longitude="61.401958767272944"
                        >
                        <div className="map__number">8.</div>
                        <div className="map__info">
                            <div className="map__address">5 декабря, 100</div>
                            <div className="map__heading">Киоск на улице</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.16691573121301"
                        data-longitude="61.4115503467102"
                        >
                        <div className="map__number">9.</div>
                        <div className="map__info">
                            <div className="map__address">Северо-Крымская, 20</div>
                            <div className="map__heading">
                            Торговая площадь в ТРЦ "Родник"
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.165896203716315"
                        data-longitude="61.41410380969239"
                        >
                        <div className="map__number">10.</div>
                        <div className="map__info">
                            <div className="map__address">Васенко, 23</div>
                            <div className="map__heading">Дом Быта</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.15409541039871"
                        data-longitude="61.4060378729943"
                        >
                        <div className="map__number">11.</div>
                        <div className="map__info">
                            <div className="map__address">Кое-где</div>
                            <div className="map__heading">Еще что-то там</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.147631779013594"
                        data-longitude="61.381459486038565"
                        >
                        <div className="map__number">12.</div>
                        <div className="map__info">
                            <div className="map__address">Во глубине сибирских руд</div>
                            <div className="map__heading">
                            Последний пункт недвиимости
                            </div>
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="tabs__item item-tab" id="commercial">
            <div className="item-tab__container container">
                <div className="item-tab__body">
                <div className="item-tab__filter filter">
                    <div className="filter__inputs">
                    <label className="filter__label">
                        <span>Адрес объекта</span>
                        <div className="filter__select-wrap">
                        <select
                            className="filter__select"
                            id="commercial-address-select"
                            name="commercial-address-select"
                        >
                            <option value="val01">2-ая Базовая ул., д.43</option>
                            <option value="val02">Бажова ул., д. 80</option>
                            <option value="val03">Бугурусланская ул., д, 64</option>
                            <option value="val04">Гагарина ул, 35</option>
                            <option value="val05">Гагарина ул., д.10</option>
                            <option value="val06">Горького ул., д. 60</option>
                        </select>
                        <span className="icons-arrow" />
                        </div>
                    </label>
                    </div>
                    <div className="filter__check-group">
                    <div className="filter__group-label">Наружна реклама</div>
                    <div className="filter__boxes">
                        <div className="filter__checkbox checkbox">
                        <input
                            className="checkbox__input"
                            type="checkbox"
                            name="banner"
                            id="banner"
                        />
                        <label
                            className="checkbox__label"
                            htmlFor="banner"
                            tabIndex={0}
                        >
                            баннеры
                        </label>
                        </div>
                        <div className="filter__checkbox checkbox">
                        <input
                            className="checkbox__input"
                            type="checkbox"
                            name="lightbox"
                            id="lightbox"
                        />
                        <label
                            className="checkbox__label"
                            htmlFor="lightbox"
                            tabIndex={0}
                        >
                            световые короба
                        </label>
                        </div>
                    </div>
                    </div>
                    <div className="filter__check-group">
                    <div className="filter__group-label">Реклама в интерьере</div>
                    <div className="filter__boxes">
                        <div className="filter__checkbox checkbox">
                        <input
                            className="checkbox__input"
                            type="checkbox"
                            name="audio"
                            id="audio"
                        />
                        <label
                            className="checkbox__label"
                            htmlFor="audio"
                            tabIndex={0}
                        >
                            аудиореклама
                        </label>
                        </div>
                        <div className="filter__checkbox checkbox">
                        <input
                            className="checkbox__input"
                            type="checkbox"
                            name="booklet"
                            id="booklet"
                        />
                        <label
                            className="checkbox__label"
                            htmlFor="booklet"
                            tabIndex={0}
                        >
                            буклетницы
                        </label>
                        </div>
                        <div className="filter__checkbox checkbox">
                        <input
                            className="checkbox__input"
                            type="checkbox"
                            name="floor-sticker"
                            id="floor-sticker"
                        />
                        <label
                            className="checkbox__label"
                            htmlFor="floor-sticker"
                            tabIndex={0}
                        >
                            наклейки напольные
                        </label>
                        </div>
                        <div className="filter__checkbox checkbox">
                        <input
                            className="checkbox__input"
                            type="checkbox"
                            name="promotion"
                            id="promotion"
                        />
                        <label
                            className="checkbox__label"
                            htmlFor="promotion"
                            tabIndex={0}
                        >
                            промоакции
                        </label>
                        </div>
                        <div className="filter__checkbox checkbox">
                        <input
                            className="checkbox__input"
                            type="checkbox"
                            name="advert-panel"
                            id="advert-panel"
                        />
                        <label
                            className="checkbox__label"
                            htmlFor="advert-panel"
                            tabIndex={0}
                        >
                            рекламное панно
                        </label>
                        </div>
                    </div>
                    </div>
                    <div className="filter__bottom">
                    <a className="filter__reset" href="#">
                        сбросить фильтры
                    </a>
                    <button className="filter__search btn btn--blue">найти</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="item-tab__map map" id="map-commercial">
                <div className="map__body">
                <div className="map__panel">
                    <div className="map__title">Все объекты</div>
                    <ul className="map__list">
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.159608119492844"
                        data-longitude="61.40261080259067"
                        >
                        <div className="map__number">1.</div>
                        <div className="map__info">
                            <div className="map__address">Сан-Франциско</div>
                            <div className="map__heading">Мост «Золотые Ворота»</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.14947512710992"
                        data-longitude="61.38686681941258"
                        >
                        <div className="map__number">2.</div>
                        <div className="map__info">
                            <div className="map__address">2-ая Базовая ул., д.43</div>
                            <div className="map__heading">Торговое помещение</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.15970477569889"
                        data-longitude="61.398976150848384"
                        >
                        <div className="map__number">3.</div>
                        <div className="map__info">
                            <div className="map__address">ул. Витебская, 4</div>
                            <div className="map__heading">ТК "Железнодорожный"</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.161093017142306"
                        data-longitude="61.39565021166993"
                        >
                        <div className="map__number">4.</div>
                        <div className="map__info">
                            <div className="map__address">Где-то в степи</div>
                            <div className="map__heading">
                            ТРЦ "Чугунно-металло-челябинско-прокатный"
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.16292345600203"
                        data-longitude="61.39852553973386"
                        >
                        <div className="map__number">5.</div>
                        <div className="map__info">
                            <div className="map__address">Переулок Скромности</div>
                            <div className="map__heading">ТК "Никитинский"</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.164766094448176"
                        data-longitude="61.40442639956667"
                        >
                        <div className="map__number">6.</div>
                        <div className="map__info">
                            <div className="map__address">Улица Роз</div>
                            <div className="map__heading">ТРК "Победа"</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.165048624781235"
                        data-longitude="61.39507085452273"
                        >
                        <div className="map__number">7.</div>
                        <div className="map__info">
                            <div className="map__address">Молдавская, 2</div>
                            <div className="map__heading">ТРК "Фокус"</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.168193174490604"
                        data-longitude="61.401958767272944"
                        >
                        <div className="map__number">8.</div>
                        <div className="map__info">
                            <div className="map__address">5 декабря, 100</div>
                            <div className="map__heading">Киоск на улице</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.16691573121301"
                        data-longitude="61.4115503467102"
                        >
                        <div className="map__number">9.</div>
                        <div className="map__info">
                            <div className="map__address">Северо-Крымская, 20</div>
                            <div className="map__heading">
                            Торговая площадь в ТРЦ "Родник"
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.165896203716315"
                        data-longitude="61.41410380969239"
                        >
                        <div className="map__number">10.</div>
                        <div className="map__info">
                            <div className="map__address">Васенко, 23</div>
                            <div className="map__heading">Дом Быта</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.15409541039871"
                        data-longitude="61.4060378729943"
                        >
                        <div className="map__number">11.</div>
                        <div className="map__info">
                            <div className="map__address">Кое-где</div>
                            <div className="map__heading">Еще что-то там</div>
                        </div>
                        </a>
                    </li>
                    <li className="map__item">
                        {" "}
                        <a
                        className="map__link"
                        href="#map-commercial"
                        data-latitude="55.147631779013594"
                        data-longitude="61.381459486038565"
                        >
                        <div className="map__number">12.</div>
                        <div className="map__info">
                            <div className="map__address">Во глубине сибирских руд</div>
                            <div className="map__heading">
                            Последний пункт недвиимости
                            </div>
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="tabs__item item-tab" id="managers">
            <div className="item-tab__container container">
                <div className="item-tab__body">
                <div className="item-tab__unit">
                    <div className="item-tab__image">
                    {" "}
                    <img src="template/images/man01.webp" alt="" />
                    </div>
                    <div className="item-tab__info">
                    <div className="item-tab__head">
                        <div className="item-tab__name">Анатолий Калинкин</div>
                        <a
                        className="item-tab__mail icons-mail"
                        href="mailto:a.kalinkin@tk-prospect.ru"
                        >
                        {" "}
                        <span>a.kalinkin@tk-prospect.ru</span>
                        </a>
                    </div>
                    <div className="item-tab__objects">
                        <div className="item-tab__caption">
                        Список курируемых адресов:
                        </div>
                        <ol className="item-tab__list">
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Складской комплекс
                            </a>
                            <div className="item-tab__address">
                            2-ая Базовая ул., д.43
                            </div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Бажова ул., д. 80</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Производственно - торговый компелкс
                            </a>
                            <div className="item-tab__address">
                            Бугурусланская ул., д, 64
                            </div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            ТК «Магнит»
                            </a>
                            <div className="item-tab__address">Гагарина ул, 35</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Гагарина ул., д.10</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Горького ул., д. 60</div>
                        </li>
                        </ol>
                    </div>
                    </div>
                </div>
                <div className="item-tab__unit">
                    <div className="item-tab__image">
                    {" "}
                    <img src="template/images/man02.webp" alt="" />
                    </div>
                    <div className="item-tab__info">
                    <div className="item-tab__head">
                        <div className="item-tab__name">Александр Кордюк</div>
                        <a
                        className="item-tab__mail icons-mail"
                        href="mailto:a.kordyuk@tk-prospect.ru"
                        >
                        {" "}
                        <span>a.kordyuk@tk-prospect.ru</span>
                        </a>
                    </div>
                    <div className="item-tab__objects">
                        <div className="item-tab__caption">
                        Список курируемых адресов:
                        </div>
                        <ol className="item-tab__list">
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Складской комплекс
                            </a>
                            <div className="item-tab__address">
                            2-ая Базовая ул., д.43
                            </div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Бажова ул., д. 80</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Производственно - торговый компелкс
                            </a>
                            <div className="item-tab__address">
                            Бугурусланская ул., д, 64
                            </div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            ТК «Магнит»
                            </a>
                            <div className="item-tab__address">Гагарина ул, 35</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Гагарина ул., д.10</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Горького ул., д. 60</div>
                        </li>
                        </ol>
                    </div>
                    </div>
                </div>
                <div className="item-tab__unit">
                    <div className="item-tab__image">
                    {" "}
                    <img src={man_3} alt="" />
                    </div>
                    <div className="item-tab__info">
                    <div className="item-tab__head">
                        <div className="item-tab__name">Антон Дудкин</div>
                        <a
                        className="item-tab__mail icons-mail"
                        href="mailto:arenda@tk-prospect.ru"
                        >
                        {" "}
                        <span>arenda@tk-prospect.ru</span>
                        </a>
                    </div>
                    <div className="item-tab__objects">
                        <div className="item-tab__caption">
                        Список курируемых адресов:
                        </div>
                        <ol className="item-tab__list">
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Складской комплекс
                            </a>
                            <div className="item-tab__address">
                            2-ая Базовая ул., д.43
                            </div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Бажова ул., д. 80</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Производственно - торговый компелкс
                            </a>
                            <div className="item-tab__address">
                            Бугурусланская ул., д, 64
                            </div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            ТК «Магнит»
                            </a>
                            <div className="item-tab__address">Гагарина ул, 35</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Гагарина ул., д.10</div>
                        </li>
                        <li className="item-tab__item">
                            {" "}
                            <a className="item-tab__link" href="#">
                            Торговое помещение
                            </a>
                            <div className="item-tab__address">Горького ул., д. 60</div>
                        </li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default RentContent