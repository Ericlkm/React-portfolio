import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../pages/footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <br />
      <Footer />
    </>
  );
}

export default App;
