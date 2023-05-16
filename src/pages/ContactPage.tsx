import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Контакты — ООО "Проспект"</title>
        <meta
          name="description"
          content="Эта страница служит удобным ресурсом для связи с нашей командой, будь то запросы, предложения по проектам или общие вопросы. Здесь вы найдете наши контактные данные, включая номера телефонов, адреса электронной почты и физический адрес, что позволит вам легко связаться с нами."
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

export default ContactPage