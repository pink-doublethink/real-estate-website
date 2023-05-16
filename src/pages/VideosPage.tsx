import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const VideosPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Видеоматериалы — ООО "Проспект"</title>
        <meta
          name="description"
          content="Откройте для себя визуально захватывающие кадры, подчеркивающие опыт компании, мастерство и стремление к совершенству. Если вы ищете вдохновение, информацию о проекте или обзор возможностей компании Проспект, наши видеоролики являются ценным источником информации как для потенциальных клиентов, так и для энтузиастов строительства."
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

export default VideosPage