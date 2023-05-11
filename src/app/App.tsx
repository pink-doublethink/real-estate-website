import './app.css';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import { lazy } from "react";
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom"


const ArticlePage  = lazy(() => import('../pages/ArticlePage')); 
const ContactPage  = lazy(() => import('../pages/ContactPage')); 
const GalleryPage  = lazy(() => import('../pages/GalleryPage')); 
const HomePage = lazy(() => import('../pages/HomePage')); 
const NewsPage  = lazy(() => import('../pages/NewsPage')); 
const ObjectPage  = lazy(() => import('../pages/ObjectPage')); 
const PhotosPage  = lazy(() => import('../pages/PhotosPage')); 
const RentPage  = lazy(() => import('../pages/RentPage')); 
const VideosPage  = lazy(() => import('../pages/VideosPage')); 

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/object" element={<ObjectPage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="*" element={<HomePage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
