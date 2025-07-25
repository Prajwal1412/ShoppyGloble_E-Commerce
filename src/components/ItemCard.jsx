import { ShoppingCart, Star, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
function ItemCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg  transition-shadow duration-300 border border-gray-100">
      {/* Product Image  */}
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-48 object-contain p-4"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex propss-center mb-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(props.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({props.rating})</span>
        </div>

        {/* Product Name */}
        <h3 className="text-md font-medium text-gray-900 mb-1 line-clamp-1">
          {props.name}
        </h3>

        {/* Price */}
        <div className="flex propss-center justify-between mt-2">
          <div>
            <>
              <span className="text-lg font-bold text-gray-900">
                ${props.price}
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                $
                {(props.price / (1 - props.discountPercentage / 100)).toFixed(
                  2
                )}
              </span>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
