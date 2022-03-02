import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AuthContextProvider from './contexts/AuthContext'
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Sidebar/>
          <MainRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
