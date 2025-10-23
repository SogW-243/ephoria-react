import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Search,
  User,
  ShoppingCart,
  ChevronRight,
  Menu,
  Trash2,
  ArrowRight,
  Tag,
  X,
} from "lucide-react";
import Swal from "sweetalert2";

const CartPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);

  // Dữ liệu giỏ hàng
  const initialCartItems = [
    {
      id: 1,
      name: "Gradient Graphic T-Shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "images/product-one.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "images/product-two.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "images/product-three.png",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // ----- LOGIC TÍNH TOÁN GIỎ HÀNG -----
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  // ----- CÁC HÀM XỬ LÝ SỰ KIỆN -----
  const handleQuantityChange = (itemId, amount) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + amount;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  };

  const handleClickUserIcon = () => {
    navigate("/login");
  };

  const handleClickCartIcon = () => {
    navigate("/cart");
  };

  const handleClickHeartIcon = () => {
    navigate("/product-detail");
  };

  // BƯỚC 2: TẠO HÀM XỬ LÝ CHECKOUT
  const handleCheckout = () => {
    // Chỉ thực hiện nếu giỏ hàng có sản phẩm
    if (cartItems.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Giỏ hàng trống!",
        text: "Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán.",
      });
      return;
    }

    Swal.fire({
      title: "Xác nhận thanh toán?",
      text: "Bạn có chắc chắn muốn mua những sản phẩm này không?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý mua!",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        // Nếu người dùng đồng ý
        Swal.fire({
          title: "Mua hàng thành công!",
          text: "Cảm ơn bạn đã mua hàng tại Euphoria!",
          icon: "success",
        });
        // Xóa tất cả sản phẩm trong giỏ hàng
        setCartItems([]);
      }
    });
  };

  return (
    <div className="font-satoshi bg-white">
      {/* ----- THANH THÔNG BÁO ----- */}
      {promoVisible && (
        <div className="bg-black text-white/70 text-center text-sm py-2.5 relative">
          Sign up and get 20% off to your first order.
          <a
            onClick={handleClickUserIcon}
            href="#"
            className="font-semibold underline text-white ml-2"
          >
            Sign Up Now
          </a>
          <button
            onClick={() => setPromoVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <X className="w-5 h-5 cursor-pointer hover:text-[red]" />
          </button>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-gray-300 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center lg:justify-between py-5">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 border-2 border-gray-500 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <img src="images/Logo.png" alt="Logo" className="h-11" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 font-semibold"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 font-semibold"
              >
                Men
              </a>
              <a href="#" className="text-gray-800 font-semibold">
                Women
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 font-semibold"
              >
                Combos
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 font-semibold"
              >
                Joggers
              </a>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-gray-100 px-5 py-2.5 rounded-lg flex-1 max-w-sm mx-4 ">
              <Search className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none flex-1 text-gray-600"
              />
            </div>

            {/* Icons */}
            <div className="hidden xl:flex items-center space-x-2">
              <button
                onClick={handleClickHeartIcon}
                className="p-3 bg-gray-100 rounded-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <Heart className="w-5 h-5 text-gray-500" />
              </button>
              <button
                onClick={handleClickUserIcon}
                className="p-3 bg-gray-100 rounded-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <User className="w-5 h-5 text-gray-500" />
              </button>
              <button
                onClick={handleClickCartIcon}
                className="p-3 bg-gray-100 rounded-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 font-semibold py-2"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 font-semibold py-2"
                >
                  Men
                </a>
                <a href="#" className="text-gray-800 font-semibold py-2">
                  Women
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 font-semibold py-2"
                >
                  Combos
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 font-semibold py-2"
                >
                  Joggers
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* ----- NỘI DUNG GIỎ HÀNG ----- */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <a
            onClick={handleClickHeartIcon}
            href="#"
            className="hover:underline"
          >
            Home
          </a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span>Cart</span>
        </div>

        <h1 className="text-4xl font-black uppercase mb-6 text-black">
          Your Cart
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Danh sách sản phẩm */}
          <div className="flex-1 border border-gray-200 rounded-2xl p-4 sm:p-6 space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 border-b border-gray-200 pb-5 last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-black">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Size: <span className="font-medium">{item.size}</span>,
                    Color: <span className="font-medium">{item.color}</span>
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-xl text-black">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="text-xl font-medium"
                      >
                        -
                      </button>
                      <span className="text-base font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="text-xl font-medium"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {cartItems.length === 0 && (
              <p className="text-center text-gray-500 py-10">
                Your cart is empty.
              </p>
            )}
          </div>

          {/* Tóm tắt đơn hàng */}
          <div className="w-full lg:w-1/3 border border-gray-200 rounded-2xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-6 text-black">Order Summary</h2>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p className="font-bold text-black">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-red-500">
                <p>Discount (-20%)</p>
                <p className="font-bold">-${discount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Delivery Fee</p>
                <p className="font-bold text-black">${delivery.toFixed(2)}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-black text-xl">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex mt-6 gap-2">
              <div className="relative flex-grow">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-gray-100 py-3 pl-12 pr-4 rounded-full outline-none"
                />
              </div>
              <button className="bg-black text-white font-bold px-6 py-3 rounded-full hover:opacity-80 transition">
                Apply
              </button>
            </div>
            {/* BƯỚC 3: GẮN SỰ KIỆN ONCLICK VÀO NÚT */}
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white font-bold py-4 rounded-full mt-6 flex items-center justify-center gap-2 hover:opacity-80 transition"
            >
              Go to Checkout <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#3C4242] text-gray-100 mt-20">
        <div className="container mx-auto px-4 py-16 border-b border-gray-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Need Help */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Need Help</h3>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Contact Us
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Track Order
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Returns & Refunds
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                FAQ's
              </p>
              <div className="flex space-x-3 pt-4">
                <div className="w-9 h-9 bg-gray-600 rounded-lg hover:scale-105 transition-transform cursor-pointer ">
                  <img className="rounded-xl" src="images/facebook.jpg" />
                </div>
                <div className="w-9 h-9 bg-gray-600 rounded-lg hover:scale-105 transition-transform cursor-pointer">
                  <img className="rounded-xl" src="images/instagam.jpg" />
                </div>
                <div className="w-9 h-9 bg-gray-600 rounded-lg hover:scale-105 transition-transform cursor-pointer">
                  <img className="rounded-xl" src="images/in.jpg" />
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                About Us
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                euphoria Blog
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                euphoriastan
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Collaboration
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Media
              </p>
            </div>

            {/* More Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">More Info</h3>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Term and Conditions
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Shipping Policy
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Sitemap
              </p>
            </div>

            {/* Location */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xl font-bold mb-6">Location</h3>
              <p className="text-gray-300">support@euphoria.in</p>
              <p className="text-gray-300">
                Eklingpura Chouraha, Ahmedabad Main Road
              </p>
              <p className="text-gray-300">
                (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
              </p>

              <div className="pt-8">
                <h4 className="text-2xl font-bold mb-6">Download The App</h4>
                <div className="flex sm:flex-col sm:space-x-0 sm:space-y-4 sm:w-[200px] xl:space-y-0 xl:flex-row xl:space-x-4">
                  <img
                    src="images/appstore.png"
                    alt="Google Play"
                    className=" cursor-pointer hover:scale-105 transition-transform"
                  />
                  <img
                    src="images/googleplay.png"
                    alt="App Store"
                    className=" cursor-pointer hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-6">
          <p className="text-gray-400 text-sm">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
