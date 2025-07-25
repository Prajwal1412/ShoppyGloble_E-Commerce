import { ShoppingCart, Slice } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  let cartItems = useSelector((store) => store.cart.items);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Website Name */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tight">
              <span className="text-gray-900">Shop</span>
              <span className="text-blue-600">Hub</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-end space-x-10">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/productslist"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center">
            <Link to="/cart">
              <button className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
