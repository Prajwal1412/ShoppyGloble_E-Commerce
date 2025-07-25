import React, { useEffect } from "react";
import { Star, ChevronLeft, Heart } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { addToCart, removeCart } from "../utils/cartSclice";
function ProductItem() {
  const param = useParams();
  const [item, setItem] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  let dispatcher = useDispatch();
  useEffect(() => {
    if (data) {
      const product = data.products.find((item) => item.id == param.id);
      setItem(product);
      console.log("hwww", product.images);
    }
    if (loading) {
      <h2>LOADING.....</h2>;
    }
    if (error) {
      <h2>Error {error}</h2>;
    }
  }, [data]);

  function handleClick(item) {
    dispatcher(addToCart(item));
    setQuantity(quantity + 1);
  }
  function handleRemove(item) {
    dispatcher(removeCart(item));
    setQuantity(Math.max(0, quantity - 1));
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/productslist">
            <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to items
            </button>
          </Link>
        </div>

        {/* item Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* item Images */}
            <div>
              {/* Main Image */}
              {/* Main Image */}
              <div
                className="mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
                style={{ minHeight: "384px" }}
              >
                {item?.images?.[selectedImage] ? (
                  <img
                    src={item.images[selectedImage]}
                    alt={item.title || "Product image"}
                    className="w-full h-full object-contain max-h-96"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/500?text=Image+Not+Available";
                    }}
                  />
                ) : (
                  <div className="text-gray-500">No image available</div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {item?.images?.length > 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 border rounded-md overflow-hidden flex items-center justify-center ${
                        selectedImage === index
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/100?text=Thumbnail";
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* item Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-gray-500">{item.brand}</span>
                <h1 className="text-2xl font-bold text-gray-900 mt-1">
                  {item.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(item.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="my-4">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900">
                    ${item.price}
                  </span>

                  <span className="ml-3 text-lg text-gray-500 line-through">
                    $
                    {(item.price / (1 - item.discountPercentage / 100)).toFixed(
                      2
                    )}
                  </span>

                  <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                    {item.discountPercentage}% OFF
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700">{item.description}</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Quantity
                </h3>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemove(item)}
                    className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => handleClick(item)}
                    className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleClick(item)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
                >
                  Add to Cart
                </button>
              </div>

              {/* item Meta */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Category:</span>{" "}
                    {item.category}
                  </div>
                  <div>
                    <span className="font-medium">Availability:</span>
                    <span
                      className={`ml-1 ${
                        item.stock ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.stock > 1 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections (Reviews, Related items) can be added here */}
      </main>
    </div>
  );
}

export default ProductItem;
