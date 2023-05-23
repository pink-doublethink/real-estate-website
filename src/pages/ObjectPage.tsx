import { Helmet } from "react-helmet";
import { Mainscreen, ObjectBar, ObjectContent } from '../component'

const ObjectPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Название объекта — ООО "Проспект"</title>
        <meta
          name="description"
          content="Откройте для себя идеальную недвижимость, которая сочетает в себе элегантность, функциональность и ценность благодаря нашей коллекции. Сделайте первый шаг к приобретению вашей идеальной инвестиции в недвижимость с ООО Проспект."
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
      <ObjectBar />
      <ObjectContent />
    </>
  )
}

export default ObjectPage