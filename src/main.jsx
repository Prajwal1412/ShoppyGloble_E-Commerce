import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";
import CartItem from "./pages/CartItem.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductItem from "./pages/ProductItem.jsx";
import ProductList from "./pages/ProductList.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const lazyLoader = lazy(() => import("./pages/AboutPage.jsx"));
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/cart",
        element: <CartItem></CartItem>,
      },
      {
        path: "/productitem/:category/:id",
        element: <ProductItem></ProductItem>,
      },
      {
        path: "/productslist",
        element: <ProductList></ProductList>,
      },
      {
        path: "/productslist/:category",
        element: <ProductList></ProductList>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approuter}></RouterProvider>
  </StrictMode>
);
