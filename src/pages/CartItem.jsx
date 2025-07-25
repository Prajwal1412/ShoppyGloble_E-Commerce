import React from "react";
import { X, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart, clearCart } from "../utils/cartSclice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  //  Clear Cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  //  Remove individual item
  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  //  Increase item quantity (optional if you later add a + button)
  const handleIncrease = (item) => {
    dispatch(addToCart(item)); // item should already have required data
  };

  //  Handle Empty Cart
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center mt-10">
        <svg
          className="w-12 h-12 text-blue-600 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          />
        </svg>
        <h2 className="text-xl font-semibold text-blue-600">
          No Items In Cart
        </h2>
        <p className="text-sm text-gray-500 m-3">Add Some Items First ...</p>
        <Link
          to="/productslist"
          className="inline-flex items-center px-6 py-3 m-10 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ShoppingCart className="mr-2" />
          Browse Products
        </Link>
      </div>
    );
  }

  // Render Cart Items
  return (
    <div className="space-y-4 p-4">
      {cartItems.map((item) => (
        <Link
          to={`/productitem/${item.category}/${item.id}`}
          key={item.id}
          className="block"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src={item.images}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-md"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/80?text=Image+Not+Available";
                }}
              />
              <div>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-sm text-gray-500">
                  Qty: {item.quantity || 1}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <p className="font-medium w-20 text-right">
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </p>
              <button
                onClick={() => {
                  handleRemove(item.id);
                }}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Remove item"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </Link>
      ))}

      {/* ✅ Clear Cart Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleClearCart}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
