import { Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="CalFin Logo"
            className="h-8"
          />
          <span className="text-2xl font-bold text-blue-600">
            CalFin
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            About
          </Link>

          <Link
            to="/services"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;