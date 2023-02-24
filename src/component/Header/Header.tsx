import './header.css'

const Header: React.FC = () => {
  return (
    <header className="header lock-padding">
      <div className="header__container container">
        <div className="header__body">
          {' '}
          <a className="header__logo logo" href="www.google.com">
            <div className="logo__image">
              <img src="template/images/logo.svg" alt="" />
            </div>
            <div className="logo__text">
              <img src="template/images/logo-text.svg" alt="" />
            </div>
          </a>
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                <li>
                  {' '}
                  <a className="menu__link" href="www.google.com">
                    О компании
                  </a>
                  <span className="menu__arrow icons-arrow">.</span>
                  <ul className="menu__sub-list">
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        История
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Компетенции
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Отличительные особенности работы
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Якорные арендаторы
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Объекты
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Управляющая компания ООО «Содействие»
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {' '}
                  <a className="menu__link" href="www.google.com">
                    Новости
                  </a>
                  <span className="menu__arrow icons-arrow">.</span>
                  <ul className="menu__sub-list">
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Новости и аналитика ООО "Проспект"
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Полезные статьи
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Активности
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className="menu__sub-link" href="www.google.com">
                        Мероприятия
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {' '}
                  <a className="menu__link" href="www.google.com">
                    Арендаторам
                  </a>
                </li>
                <li>
                  {' '}
                  <a className="menu__link" href="www.google.com">
                    Контакты
                  </a>
                </li>
              </ul>
              <a className="menu__request btn btn--blue popup-link" href="www.google.com">
                Оставить заявку
              </a>
            </nav>
          </div>
          <a className="header__phone" href="www.google.com">
            <span className="icons-phone"></span>
            <span>+7 351 219-00-00</span>
          </a>
          <a className="header__btn btn btn--blue popup-link" href="www.google.com">
            Оставить заявку
          </a>
          <div className="header__burger">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
