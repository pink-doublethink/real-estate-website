import './mainscreen.css'

const Mainscreen: React.FC = () => {
  return (
    <section className="mainscreen">
                    <div className="mainscreen__polygon"></div>
                    <div className="mainscreen__container container">
                        <div className="mainscreen__body">
                            <div className="mainscreen__info">
                                <h1 className="mainscreen__title title">Коммерческая недвижимость в Челябинске</h1>
                                <div className="mainscreen__text">от ведущего девелопера</div><a className="mainscreen__btn btn btn--orange"
                                    href="object.html">подобрать помещение</a>
                            </div>
                            <div className="mainscreen__decor"> <img src="template/images/letter.svg" alt="" /></div>
                        </div>
                    </div>
                </section>
  )
}

export default Mainscreen