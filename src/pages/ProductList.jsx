import ItemCard from "../components/ItemCard";
import Header from "../components/Header";
import useFetch from "../utils/useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function ProductsList() {
  const [allproducts, setAllProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const params = useParams();
  useEffect(() => {
    if (data) {
      console.log("data is", data.products);
      setAllProducts(data.products);
      if (error) {
        console.log("ERROR", error);
        return <h2 className="text-4xl">Error</h2>;
      }
      if (loading) {
        console.log("loading");
        return <h2 className="text-4xl">Loading</h2>;
      }
    }
  }, [data]);

  const allItems = allproducts.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const productsByCategory = allproducts
    .filter((product) => product.category === params.category)
    .filter((product) =>
      product.title.toLowerCase().includes(searchProduct.toLowerCase())
    );

  if (!params.category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Our Products</h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            className="px-4 m-10  py-2 w-full max-w-md border border-blue-700 rounded-md shadow-md focus:outline-none  group-placeholder-shown:  focus:ring focus:border-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allItems.length !== 0 ? (
            allItems.map((product) => (
              <Link to={`/productitem/${product.category}/${product.id}`}>
                <ItemCard
                  key={product.id}
                  image={product.images[0]}
                  rating={product.rating}
                  price={product.price}
                  reviewCount={product.reviwes}
                  name={product.title}
                  discountPercentage={product.discountPercentage}
                />
              </Link>
            ))
          ) : (
            <>
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
                  No Products found
                </h2>
                <p className="text-sm text-gray-500">
                  Try a different Product name.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">{params.category} Products</h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            className="px-4 m-10  py-2 w-full max-w-md border border-blue-700 rounded-md shadow-md focus:outline-none  group-placeholder-shown:  focus:ring focus:border-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsByCategory.length !== 0 ? (
            productsByCategory.map((product) => (
              <Link
                key={product.id}
                to={`/productitem/${product.category}/${product.id}`}
              >
                <ItemCard
                  key={product.id}
                  image={product.images[0]}
                  rating={product.rating}
                  price={product.price}
                  reviewCount={product.reviwes}
                  name={product.title}
                  stock={product.stock}
                  discountPercent={product.discountPercentage}
                />
              </Link>
            ))
          ) : (
            <>
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
                  No Products found
                </h2>
                <p className="text-sm text-gray-500">
                  Try a different Product name.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default ProductsList;
