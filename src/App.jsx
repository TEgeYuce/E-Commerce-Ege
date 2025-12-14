import './App.css';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';
import Header from './layout/Header';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkToken} from "./store/thunks/authThunk";
import {ToastContainer} from "react-toastify";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <div className="font-montserrat">
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;