import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductContextProvider from './contexts/ProductContext'
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
          <ProductContextProvider>
            <Sidebar/>
            <MainRoutes />
          </ProductContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
