import { Link } from "react-router-dom";
function HomePage() {
  const productCategories = [
    {
      id: 1,
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description: "Skincare, cosmetics, and personal care",
    },
    {
      id: 2,
      name: "Fragrances",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description: "Perfumes, colognes, and scented products",
    },
    {
      id: 3,
      name: "Furniture",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description: "Home and office furniture",
    },
    {
      id: 4,
      name: "Groceries",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description: "Food items and daily essentials",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to ShopHub
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing products across various categories. Shop with us
              for the best deals and quality items.
            </p>
          </section>

          {/* Categories Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category) => (
                <Link to={`/productslist/${category.name.toLowerCase()}`}>
                  <div
                    key={category.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {category.description}
                      </p>
                      <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default HomePage;
