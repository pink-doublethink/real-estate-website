import './App.css';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
      </main>
      <Footer />
    </div>
  );
}

export default App;
