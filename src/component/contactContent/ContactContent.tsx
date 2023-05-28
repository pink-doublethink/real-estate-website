import './contactContent.css'
import Obj1 from '../../assets/images/man03.webp'
import Obj2 from '../../assets/images/man02.webp'
import Obj3 from '../../assets/images/woman.webp'
import Obj4 from '../../assets/images/man01.webp'

const ContactContent: React.FC = () => {
  return (
    <div className="contacts">
        <div className="contacts__container container">
            <div className="contacts__body">
            <ul className="contacts__list">
                <li className="contacts__item">
                <div className="contacts__icon icons-pin" />
                <div className="contacts__info">
                    <div className="contacts__heading">Адрес:</div>
                    <div className="contacts__text">
                    ООО «Проспект» 454092, г. Челябинск, ул. Курчатова, 6, корп. Б,
                    офис 306
                    </div>
                </div>
                </li>
                <li className="contacts__item">
                <div className="contacts__icon icons-phone" />
                <div className="contacts__info">
                    <div className="contacts__heading">Телефон:</div>
                    <div className="contacts__text">
                    {" "}
                    <a className="contacts__phone" href="tel:+73512190000">
                        +7 (351) 219-00-00
                    </a>
                    </div>
                </div>
                </li>
                <li className="contacts__item">
                <div className="contacts__icon icons-mail" />
                <div className="contacts__info">
                    <div className="contacts__heading">Эл.почта:</div>
                    <div className="contacts__text">
                    {" "}
                    <a className="contacts__mail" href="mailto:arenda@tk-prospect.ru">
                        arenda@tk-prospect.ru
                    </a>
                    </div>
                </div>
                </li>
            </ul>
            <div className="contacts__map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.0039014905597!2d61.39335791601742!3d55.14821044592459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c592a8c98dd695%3A0x9802b49ac473585b!2z0YPQuy4g0JrRg9GA0YfQsNGC0L7QstCwLCA20JEsINCn0LXQu9GP0LHQuNC90YHQuiwg0KfQtdC70Y_QsdC40L3RgdC60LDRjyDQvtCx0LsuLCA0NTQwOTI!5e0!3m2!1sru!2sru!4v1639850467822!5m2!1sru!2sru"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                />
            </div>
            <div className="contacts__caption caption">Наша команда</div>
            <div className="contacts__team team">
                <ul className="team__list">
                <li className="team__item">
                    <div className="team__image">
                    {" "}
                    <img src={Obj1} alt="" />
                    </div>
                    <div className="team__body">
                    <div className="team__department">Отдел аренды</div>
                    <div className="team__name">Дудкин Антон Алексеевич</div>
                    <div className="team__position">Менеджер по аренде</div>
                    <a
                        className="team__mail icons-mail"
                        href="mailto:arenda@tk-prospect.ru"
                    >
                        <span>arenda@tk-prospect.ru</span>
                    </a>
                    <a className="team__phone icons-phone" href="tel:+73512190000">
                        {" "}
                        <span>+7 351 219 00 00</span>
                    </a>
                    <a className="team__phone icons-phone" href="tel:+79048004500">
                        {" "}
                        <span>+7 904 800 45 00</span>
                    </a>
                    </div>
                </li>
                <li className="team__item">
                    <div className="team__image">
                    {" "}
                    <img src={Obj2} alt="" />
                    </div>
                    <div className="team__body">
                    <div className="team__department">Отдел аренды</div>
                    <div className="team__name">Кордюк Александр Юрьевич</div>
                    <div className="team__position">
                        Заместитель коммерческого директора
                    </div>
                    <a
                        className="team__mail icons-mail"
                        href="mailto:a.kordyuk@tk-prospect.ru"
                    >
                        {" "}
                        <span>a.kordyuk@tk-prospect.ru</span>
                    </a>
                    <a className="team__phone icons-phone" href="tel:+73512190000">
                        {" "}
                        <span>+7 351 219 00 00</span>
                    </a>
                    <a className="team__phone icons-phone" href="tel:+79048004500">
                        {" "}
                        <span>+7 904 800 45 00</span>
                    </a>
                    </div>
                </li>
                <li className="team__item">
                    <div className="team__image">
                    {" "}
                    <img src={Obj3} alt="" />
                    </div>
                    <div className="team__body">
                    <div className="team__department">Отдел аренды</div>
                    <div className="team__name">Беспалова Диана Искандеровна</div>
                    <div className="team__position">Менеджер по аренде</div>
                    <a
                        className="team__mail icons-mail"
                        href="mailto:arenda@tk-prospect.ru"
                    >
                        {" "}
                        <span>arenda@tk-prospect.ru</span>
                    </a>
                    <a className="team__phone icons-phone" href="tel:+73512190000">
                        {" "}
                        <span>+7 351 219 00 00</span>
                    </a>
                    </div>
                </li>
                <li className="team__item">
                    <div className="team__image">
                    {" "}
                    <img src={Obj4} alt="" />
                    </div>
                    <div className="team__body">
                    <div className="team__department">Отдел аренды</div>
                    <div className="team__name">Анатолий Дмитриевич</div>
                    <div className="team__position">Старший Менеджер по аренде</div>
                    <a
                        className="team__mail icons-mail"
                        href="mailto:a.kalinkin@tk-prospect.ru"
                    >
                        {" "}
                        <span>a.kalinkin@tk-prospect.ru</span>
                    </a>
                    <a className="team__phone icons-phone" href="tel:+73512190000">
                        {" "}
                        <span>+7 351 219 00 00</span>
                    </a>
                    <a className="team__phone icons-phone" href="tel:+79048006300">
                        <span>+7 904 800 63 00</span>
                    </a>
                    </div>
                </li>
                </ul>
            </div>
            <form className="contacts__form form validation-form" action="#">
                <div className="form__caption">Оставьте заявку</div>
                <div className="form__text">И мы с вами свяжемся</div>
                <div className="form__inputs">
                <label className="form__label">
                    <span>Ваше имя *</span>
                    <input
                    className="form__input validation-name"
                    type="text"
                    placeholder="Введите имя"
                    name="name"
                    id="popup-name"
                    />
                </label>
                <label className="form__label">
                    <span>E-mail</span>
                    <input
                    className="form__input"
                    type="email"
                    placeholder="Введите e-mail"
                    name="email"
                    id="popup-email"
                    />
                </label>
                <label className="form__label">
                    <span>Телефон *</span>
                    <input
                    className="form__input validation-phone"
                    type="tel"
                    placeholder="Введите телефон"
                    name="phone"
                    id="popup-phone"
                    />
                </label>
                <label className="form__label">
                    <span>Адрес</span>
                    <input
                    className="form__input"
                    list="address-list"
                    type="text"
                    placeholder="Введите адрес"
                    name="address"
                    id="popup-address"
                    />
                    <datalist id="address-list">
                    <option value="Проспект Победы, 10-200" />
                    <option value="Комсомольский Проспект, 114" />
                    <option value="40-летия Победы, 10-117" />
                    <option value="Куйбышева, 30" />
                    <option value="Ленина, 1" />
                    <option value="Орджоникидзе, 2" />
                    <option value="Проспект Победы, 1-200" />
                    <option value="Комсомольский Проспект, 14" />
                    <option value="40-летия Победы, 10-11" />
                    <option value="Куйбышева, 3" />
                    <option value="Ленина, 15" />
                    <option value="Орджоникидзе, 24" />
                    </datalist>
                </label>
                <label className="form__label form__label--textarea">
                    <span>Сообщение</span>
                    <textarea
                    className="form__input"
                    placeholder="Текст сообщения"
                    name="message"
                    id="popup-message"
                    defaultValue={""}
                    />
                </label>
                </div>
                <div className="form__alert validation-alert">
                Для отправки формы требуется дать согласие на обработку данных и
                заполнить все поля, отмеченные звездочкой *.
                </div>
                <div className="form__bottom">
                <div className="form__left">
                    <div className="form__checkbox checkbox">
                    <input
                        className="checkbox__input validation-checkbox"
                        type="checkbox"
                        name="contacts-agreement"
                        id="contacts-agreement"
                    />
                    <label
                        className="checkbox__label validation-label"
                        htmlFor="contacts-agreement"
                        tabIndex={0}
                    >
                        <span>
                        Согласен на <a href="#">обработку персональных данных</a>,
                        указанных в заявке{" "}
                        </span>
                    </label>
                    </div>
                    <div className="form__note">* — обязательные поля</div>
                </div>
                <div className="form__right">
                    <button className="form__btn btn btn--orange" type="submit">
                    оставить заявку
                    </button>
                </div>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default ContactContent