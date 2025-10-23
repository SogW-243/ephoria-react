import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Search,
  User,
  ShoppingCart,
  ChevronRight,
  Star,
  MessageCircle,
  ArrowRight,
  CreditCard,
  Shirt,
  Truck,
  ArrowLeftRight,
  Menu,
} from "lucide-react";

const ProductDetailPage = () => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("black");
  const [activeTab, setActiveTab] = useState("description");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "black", class: "bg-gray-800" },
    { name: "yellow", class: "bg-yellow-400" },
    { name: "pink", class: "bg-pink-400" },
    { name: "red", class: "bg-red-700" },
  ];

  // Mảng chứa đường dẫn đến các ảnh nhỏ
  const thumbnailImages = [
    "images/Ảnh trái nhỏ 1.png",
    "images/Ảnh trái nhỏ 2.png",
    "images/Ảnh trái nhỏ 3.png",
  ];

  const similarProducts = [
    {
      id: 1,
      name: "White T-Shirt",
      brand: "Priya's Brand",
      price: "$13.00",
      image: "images/similar 1.jpg",
    },
    {
      id: 2,
      name: "Dark Green Sweatshirt...",
      brand: "Roboto's Brand",
      price: "$127.00",
      image: "images/similar 2.jpg",
    },
    {
      id: 3,
      name: "Levender Sweatshirt...",
      brand: "Jhanvi's Brand",
      price: "$133.00",
      image: "images/similar 3.jpg",
    },
    {
      id: 4,
      name: "Urban jacket with white...",
      brand: "Sagar's Brand",
      price: "$79.00",
      image: "images/similar 4.jpg",
    },
    {
      id: 5,
      name: "Plain White T-Shirt",
      brand: "Jhanvi's Brand",
      price: "$123.00",
      image: "images/similar 5.jpg",
    },
    {
      id: 6,
      name: "Checks Shirt with white...",
      brand: "H.M's Brand",
      price: "$123.00",
      image: "images/similar 6.jpg",
    },
    {
      id: 7,
      name: "One piece black top & ...",
      brand: "Nike's Brand",
      price: "$123.00",
      image: "images/similar 7.jpg",
    },
    {
      id: 8,
      name: "Denim Blue Shirt",
      brand: "MOMO's Brand",
      price: "$38.00",
      image: "images/similar 8.jpg",
    },
  ];

  const handleClickUserIcon = () => {
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const handleClickCartIcon = () => {
    setTimeout(() => {
      navigate("/cart");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
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
              <button className="p-3 bg-gray-100 rounded-lg hover:scale-105 transition-transform cursor-pointer">
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

      {/* Product Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-6 justify-center">
            <div className="flex sm:flex-col gap-4 justify-center">
              {thumbnailImages.map((thumbSrc, index) => (
                <img
                  key={index}
                  src={thumbSrc}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 rounded-lg cursor-pointer hover:scale-105 transition-transform ${
                    activeThumb === index ? "border-2 border-gray-800 p-1" : ""
                  }`}
                  // Không còn `}}` ở đây nữa, thuộc tính onClick viết ngay sau className
                  onClick={() => setActiveThumb(index)}
                />
              ))}
            </div>

            {/* Phần ảnh to (Main Image) */}
            <div className="max-w-lg">
              <img
                /* THAY ĐỔI 2: Lấy src từ mảng mainImages dựa vào state activeThumb */
                src="images/Ảnh to trái.png"
                alt="Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center text-gray-500 text-sm space-x-2">
              <span>Shop</span>
              <ChevronRight className="w-3 h-3" />
              <span>Women</span>
              <ChevronRight className="w-3 h-3" />
              <span>Top</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Raven Hoodie With Black colored Design
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">120 comment</span>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center space-x-5 mb-4">
                <span className="font-semibold text-lg">Select Size</span>
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <span className="mr-2">Size Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex space-x-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl border-2 hover:scale-105 transition-transform ${
                      selectedSize === size
                        ? "bg-gray-800 text-white border-gray-800"
                        : "border-gray-300 text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Colours Available</h4>
              <div className="flex space-x-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full hover:scale-110 transition-transform ${
                      selectedColor === color.name
                        ? "ring-2 ring-gray-800 ring-offset-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full ${color.class}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart & Price */}
            <div className="flex space-x-4 pb-8 border-b">
              <button className="flex items-center justify-center space-x-3 bg-purple-600 text-white px-10 py-3 rounded-lg hover:scale-105 transition-transform">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to cart</span>
              </button>
              <button className="px-10 py-3 border-2 border-gray-800 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                $63.00
              </button>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: CreditCard, text: "Secure payment" },
                { icon: Shirt, text: "Size & Fit" },
                { icon: Truck, text: "Free shipping" },
                { icon: ArrowLeftRight, text: "Free Shipping & Returns" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                    <feature.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="font-semibold text-sm lg:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-1 h-7 bg-purple-600 rounded-full mr-4"></div>
          <h2 className="text-2xl font-bold text-gray-800">
            Product Description
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {/* Tabs */}
            <div className="flex space-x-8 mb-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`pb-4 font-semibold ${
                  activeTab === "description"
                    ? "text-gray-800 border-b-2 border-black"
                    : "text-gray-500"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("comments")}
                className="pb-4 text-gray-500 flex items-center space-x-2"
              >
                <span>User comments</span>
                <span className="hidden sm:inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  21
                </span>
              </button>
              <button
                onClick={() => setActiveTab("qa")}
                className="pb-4 text-gray-500 flex items-center space-x-2"
              >
                <span>Question & Answer</span>
                <span className="hidden sm:inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  4
                </span>
              </button>
            </div>

            {/* Description Content */}
            <p className="text-gray-600 mb-8">
              100% Bio-washed Cotton – makes the fabric extra soft & silky.
              Flexible ribbed crew neck. Precisely stitched with no pilling & no
              fading. Provide all-time comfort. Anytime, anywhere. Infinite
              range of matte-finish HD prints.
            </p>

            {/* Specifications Table */}
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-gray-100 rounded-xl overflow-hidden">
              {[
                { label: "Fabric", value: "Bio-washed Cotton" },
                { label: "Pattern", value: "Printed" },
                { label: "Fit", value: "Regular-fit" },
                { label: "Neck", value: "Round Neck" },
                { label: "Sleeve", value: "Half-sleeves" },
                { label: "Style", value: "Casual Wear" },
              ].map((spec, index) => (
                <div
                  key={index}
                  className={`p-6 ${index < 3 ? "border-b" : ""} ${
                    (index + 1) % 3 !== 0 ? "sm:border-r max-sm:border-b" : ""
                  } border-gray-300`}
                >
                  <div className="text-gray-500 text-sm">{spec.label}</div>
                  <div className="font-semibold text-gray-800 mt-1">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="images/Frame 47.png"
              alt="Product showcase"
              className="w-full h-auto rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-1 h-7 bg-purple-600 rounded-full mr-4"></div>
          <h2 className="text-2xl font-bold text-gray-800">Similar Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-90 rounded-lg object-cover cursor-pointer"
                />
                <button
                  onClick={handleLikeClick}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center focus:bg-red-500 hover:scale-105 transition-all cursor-pointer"
                >
                  <Heart className="w-5 h-5 text-gray-600 " />
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{product.brand}</p>
                </div>
                <button className="bg-gray-100 px-3 py-2 rounded-lg font-bold hover:scale-105 transition-transform">
                  {product.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

export default ProductDetailPage;
