import { Helmet } from "react-helmet";
import { Mainscreen, ArticleBar, ArticleContent } from '../component'

const ArticlePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Статьи — ООО "Проспект"</title>
        <meta
          name="description"
          content="Изучите разнообразные темы, включая строительные технологии, тенденции в дизайне, примеры проектов и отраслевые знания. Наши статьи тщательно подобраны, чтобы предоставить ценную информацию и вдохновение для профессионалов, энтузиастов и клиентов в области строительства."
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
      <ArticleBar />
      <ArticleContent />
    </>
  )
}

export default ArticlePage