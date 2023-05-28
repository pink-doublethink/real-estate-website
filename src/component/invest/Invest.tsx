import './invest.css'
import invest_1 from '../../assets/images/man.webp'

const Invest: React.FC = () => {
  return (
    <section className="invest">
                    <div className="invest__container container">
                        <div className="invest__body">
                            <div className="invest__image"> <img src={invest_1} alt="" /></div>
                            <div className="invest__info">
                                <div className="invest__caption">У Вас есть инвестиционный или бизнес-проект, и вы нуждаетесь в надежном
                                    партнере?</div>
                                <div className="invest__text">Оставьте заявку на сайте, и наш менеджер свяжется с вами для уточнения деталей и
                                    подберет для вас необходимое помещение и лучшие финансовые условия.</div><a
                                    className="invest__btn btn btn--orange popup-link" href="#popup-request">Оставить заявку</a>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Invest