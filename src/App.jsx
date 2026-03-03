import './App.css';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';
import Header from './layout/Header';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <AuthProvider>
      <div className="font-montserrat">
        <Header />
        <PageContent />
        <Footer />
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </AuthProvider>
  );
}

export default App;