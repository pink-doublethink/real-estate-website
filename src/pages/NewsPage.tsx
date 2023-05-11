import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const NewsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Новости</title>
        <meta
          name="description"
          content="Страница с новостями"
        />
      </Helmet>
      <Mainscreen />
      <Short />
    </>
  )
}

export default NewsPage