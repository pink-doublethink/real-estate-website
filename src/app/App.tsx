import './app.css';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import ArticlePage from '../pages/ArticlePage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import ObjectPage from '../pages/ObjectPage';
import PhotosPage from '../pages/PhotosPage';
import RentPage from '../pages/RentPage';
import VideosPage from '../pages/VideosPage';
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom"



// const ArticlePage  = lazy(() => import('../pages/ArticlePage')); 
// const ContactPage  = lazy(() => import('../pages/ContactPage')); 
// const GalleryPage  = lazy(() => import('../pages/GalleryPage')); 
// const HomePage = lazy(() => import('../pages/HomePage')); 
// const NewsPage  = lazy(() => import('../pages/NewsPage')); 
// const ObjectPage  = lazy(() => import('../pages/ObjectPage')); 
// const PhotosPage  = lazy(() => import('../pages/PhotosPage')); 
// const RentPage  = lazy(() => import('../pages/RentPage')); 
// const VideosPage  = lazy(() => import('../pages/VideosPage')); 

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/about" element={<ArticlePage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/object" element={<ObjectPage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
