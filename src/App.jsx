import { Routes, Route, Link } from "react-router-dom";

// Import các trang của bạn
import LoginForm from "./components/LoginForm.jsx";
import CartPage from "./components/CartPage.jsx";
import ProductDetailPage from "./components/ProductDetailPage.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Routes để hiển thị các trang tương ứng */}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />

        {/* Route mặc định hoặc trang chủ (có thể trỏ về login) */}
        <Route path="/" element={<LoginForm />} />

        {/* Route cho các URL không tồn tại */}
        <Route
          path="*"
          element={
            <h2 className="text-center pt-8 text-2xl">404 - Page Not Found</h2>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
