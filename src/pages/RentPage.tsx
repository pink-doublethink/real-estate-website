import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const RentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Поиск объектов — ООО "Проспект"</title>
        <meta
          name="description"
          content="Воспользуйтесь нашей интуитивно понятной функцией поиска, чтобы просмотреть обширную базу данных завершенных и текущих проектов, включая жилые, коммерческие и инфраструктурные проекты."
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
    </>
  )
}

export default RentPage