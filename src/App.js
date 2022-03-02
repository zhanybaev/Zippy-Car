import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AuthContextProvider from './contexts/AuthContext'
import ProductContextProvider from './contexts/ProductContext'
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <Sidebar/>
            <MainRoutes />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
