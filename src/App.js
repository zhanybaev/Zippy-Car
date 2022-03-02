import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext'
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
