import { Helmet } from "react-helmet";
import { Mainscreen } from '../component'

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
    </>
  )
}

export default NewsPage