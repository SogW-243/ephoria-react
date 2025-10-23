// src/components/LoginForm.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// SỬA LỖI 1: Import Swal đúng cách ở đầu file
import Swal from "sweetalert2";

// SỬA LỖI 2: Khai báo Toast ở bên ngoài component để không bị tạo lại
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // SỬA LỖI 3: Xóa state submitMessage không cần thiết
  // const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3001/users?username=${formData.username}&password=${formData.password}`
      );
      const users = await response.json();

      if (users.length > 0) {
        // Đăng nhập thành công, sử dụng Toast
        Toast.fire({
          icon: "success",
          title: "Đăng nhập thành công!",
        });

        setTimeout(() => {
          navigate("/product-detail"); // Chuyển hướng sau khi đăng nhập thành công
        }, 1000); // Giữ delay để người dùng thấy thông báo
      } else {
        // Đăng nhập thất bại
        throw new Error("Username hoặc mật khẩu không chính xác.");
      }
    } catch (error) {
      // Hiển thị lỗi bằng Toast
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* === Phần bên trái: Hình ảnh minh họa === */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-16 bg-[#a9afb92a]">
          <img
            src="images/Group 6567.png"
            alt="Login Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* === Phần bên phải: Form đăng nhập === */}
        <div className="w-full p-8 md:w-1/2">
          <div className="mx-auto w-[298px]">
            <div className="mb-6 mt-3">
              <h1 className="text-[40px] font-bold text-[#336699]">
                UNETI ONLINE
              </h1>
              <div className="mt-2 flex items-center">
                <img
                  src="images/log-in.png"
                  alt="Login icon"
                  className="mr-2 h-6 w-6"
                />
                <p className=" font-[600] text-[24px] text-gray-600">
                  Đăng nhập hệ thống
                </p>
              </div>
              <p className="mt-1 text-[#262626] font-[500] text-sm text-[14px]">
                Chào mừng bạn đến với hệ thống Uneti Online
              </p>
            </div>

            {/* SỬA LỖI 4: Xóa code JS bị đặt sai vị trí và div thông báo thừa */}

            <form onSubmit={handleSubmit}>
              {/* --- Username --- */}
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-[#262626]"
                >
                  Username
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <img
                      src="images/user.png"
                      alt="user icon"
                      className="h-5 w-5 text-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 p-2.5 pl-10 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* --- Password --- */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <img
                      src="images/lock.png"
                      alt="lock icon"
                      className="h-5 w-5 text-gray-400"
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 p-2.5 pl-10 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img
                      src={
                        showPassword ? "images/eye-slash.png" : "images/eye.png"
                      }
                      alt="toggle password visibility"
                      className="h-5 w-5"
                    />
                  </button>
                </div>
              </div>

              {/* --- Nhớ tài khoản --- */}
              <div className="mb-6 flex items-center ">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-[400] text-[#262626] cursor-pointer"
                >
                  Nhớ tài khoản
                </label>
              </div>

              {/* --- Nút Đăng nhập --- */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full rounded-lg py-3 font-bold text-white uppercase transition duration-300 ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-teal-500 hover:bg-teal-600 cursor-pointer"
                }`}
              >
                {isLoading ? "ĐANG TẢI..." : "ĐĂNG NHẬP"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
