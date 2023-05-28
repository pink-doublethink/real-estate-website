import './footer.css'
import Logo from '../../assets/images/logo.svg'
import TLogo from '../../assets/images/logo-text.svg'

const Footer: React.FC = () => {
  return (
    <footer className="footer footer--index">
      <div className="footer__container container">
        <div className="footer__body">
          <div className="footer__contacts">
            {' '}
            <a className="footer__logo logo" href="#www.google.com">
              <div className="logo__image">
                <img src={Logo} alt="" />
              </div>
              <div className="logo__text">
                <img src={TLogo} alt="" />
              </div>
            </a>
            <div className="footer__paragraphs">
              <p>© 2021 ООО «Горизонт»</p>
              <p>454092, г. Ярославль, ул. Курчатова, 6, корп. Б, офис 306</p>
              <p>
                {' '}
                <a href="#www.google.com">+7 (351) 219 00 19 </a>(тел.)
              </p>
              <p>
                {' '}
                <a href="www.google.com">mail@tk-prospect.ru</a>
              </p>
            </div>
          </div>
          <div className="footer__row">
            <div className="footer__column">
              <div className="footer__heading">АРЕНДАТОРАМ</div>
              <ul className="footer__list">
                <li>
                  {' '}
                  <a href="www.google.com">Объекты в аренду</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Реклама в торговых комплексах</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Менеджеры объектов</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">ПОКУПАТЕЛЯМ</div>
              <ul className="footer__list">
                <li>
                  {' '}
                  <a href="www.google.com">Объекты на карте</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Активности</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Голосование</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">О КОМПАНИИ</div>
              <ul className="footer__list">
                <li>
                  {' '}
                  <a href="www.google.com">История</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Компетенции</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Отличительные особенности работы</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Якорные арендаторы</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Объекты</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Управляющая компания ООО «Содействие»</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">НОВОСТИ</div>
              <ul className="footer__list">
                <li>
                  {' '}
                  <a href="www.google.com">Новости и аналитика ООО Горизонт</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Полезные статьи</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Активности</a>
                </li>
                <li>
                  {' '}
                  <a href="www.google.com">Мероприятия</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">ПОДРЯДЧИКАМ</div>
              <ul className="footer__list">
                <li>
                  {' '}
                  <a href="www.google.com">Информация для подрядчиков</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
