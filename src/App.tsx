import InitialLoading from './components/InitialLoading';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import MainGridTemplate from './components/Layout/MainGridTemplate';
import useLoadData from './hooks/useLoadData';

function App() {
  const { isLoading } = useLoadData();

  return isLoading ? (
    <InitialLoading />
  ) : (
    <MainGridTemplate>
      <Header />
      <Main />
      <Footer />
    </MainGridTemplate>
  );
}

export default App;
