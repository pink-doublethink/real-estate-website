import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const VideosPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Видео</title>
        <meta
          name="description"
          content="Страница с видео"
        />
      </Helmet>
      <Mainscreen />
      <Short />
    </>
  )
}

export default VideosPage