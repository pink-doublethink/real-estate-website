import { Helmet } from "react-helmet";
import { Mainscreen, Short, Objects, Advantages, Partners, Invest } from '../component'

const HomePage: React.FC = () => {
  return (
    <>
        <Helmet>
        <title>Алексей Овсянников - фронтенд разработчик из Москвы</title>
        <meta
          name="description"
          content="Фронтенд разработчик с опытом работы на React / Next.js / TypeScript. Работая над проектами я заинтересован создавать Продукты, расширяющие возможности людей."
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