import Header from './components/Header';
import AllRoutes from './routes/AllRoutes';
import Footer from './components/Footer';

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
