import { Helmet } from "react-helmet";
import { Mainscreen, Short, Objects, Advantages, Partners, Invest } from '../component'

const HomePage: React.FC = () => {
  return (
    <>
        <Helmet>
        <title>ООО "Проспект" — коммерческая недвижимость</title>
        <meta
          name="description"
          content="Изучите разнообразный портфель хорошо продуманных и стратегически расположенных объектов коммерческой недвижимости, отвечающих потребностям предприятий и инвесторов. На этой странице представлена полная информация о доступных объектах недвижимости, включая подробное описание, поэтажные планы и основные характеристики."
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0" 
        />
        <meta 
          name="theme-color" 
          content="#00A0DC" 
        />
      </Helmet>
      <Mainscreen />
      <Short />
      <Objects />
      <Advantages />
      <Partners />
      <Invest />
    </>
  )
}

export default HomePage