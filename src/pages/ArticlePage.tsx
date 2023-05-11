import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const ArticlePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Статьи</title>
        <meta
          name="description"
          content="Страница статей"
        />
      </Helmet>
      <Mainscreen />
      <Short />
    </>
  )
}

export default ArticlePage