import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import HeroSection from "./components/HeroSection";
import SignUpPage from "./pages/SignUpPage";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path ="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;