import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping, FaSignal } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../stock/index";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModuleOpen, setModuleOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleModule = () => setModuleOpen((prev) => !prev);

  return (
    <nav className="bg-white">
      <div className="container max-w-[1332px] mx-auto px-4">

        <div className="flex justify-between py-4">
          <div className="hidden sm:flex items-center gap-7">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="/about"
                className="opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex justify-center sm:justify-end gap-6 text-[#454545]">
            <p onClick={toggleModule} className="opacity-60 hover:opacity-100 transition">8 (800) 890-46-56</p>
            <p
              onClick={toggleModule}
              className="opacity-60 hover:opacity-100 cursor-pointer transition"
            >
              Заказать звонок
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 gap-4">
          <div className="sm:hidden flex items-center" onClick={toggleMenu}>
            <FiMenu className="text-2xl" />
          </div>
          <div className="flex items-center gap-6">
            <img src={logo} alt="logo" className="w-7 h-7" />
            <h2 className="text-2xl leading-9">NORLIGHT</h2>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer bg-[#454545] text-white px-6 py-3 rounded-3xl hover:bg-black transition">
              <FiMenu className="text-xl" />
              <span>Каталог</span>
            </div>
            <div className="flex items-center border border-black rounded-3xl w-[625px] px-4 py-3">
              <input
                type="text"
                placeholder="Поиск по товарам"
                className="flex-grow outline-none"
              />
              <IoIosSearch className="text-xl text-gray-500" />
            </div>
          </div>
          <div className="flex gap-4">
            <IconWithLabel icon={<CiHeart />} label="Избранное" />
            <IconWithLabel icon={<FaSignal />} label="Сравнение" className="hidden md:flex" />
            <IconWithLabel icon={<FaCartShopping />} label="Корзина" />
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden absolute top-0 left-0 w-full bg-white z-10 p-4">
            <div className="flex justify-between items-center border-b pb-2">
              <RxCross2 className="text-2xl cursor-pointer" onClick={toggleMenu} />
              <div className="flex gap-4">
                <CiHeart className="text-xl" />
                <FaSignal className="text-xl" />
                <FaCartShopping className="text-xl" />
              </div>
            </div>
            <div className="mt-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="/about"
                  className="block py-2 text-center border-b opacity-60 hover:opacity-100 transition"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 mt-4">
              <div className="flex items-center gap-2 bg-[#454545] text-white px-6 py-3 rounded-3xl hover:bg-black transition">
                <FiMenu className="text-xl" />
                <span>Каталог</span>
              </div>
              <p>8 (800) 890-46-56</p>
              <span className="opacity-60">Заказать звонок</span>
            </div>
          </div>
        )}

        <div className="sm:hidden flex justify-center gap-4 mt-4">
          <div className="flex items-center border border-black rounded-3xl w-[80%] px-4 py-3">
            <input
              type="text"
              placeholder="Поиск по товарам"
              className="flex-grow outline-none"
            />
            <IoIosSearch className="text-xl text-gray-500" />
          </div>
        </div>

        {isModuleOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
            <div className="bg-white p-10 rounded-[50px] shadow-lg flex flex-col relative">
              <p className="font-bold text-2xl sm:text-6xl ">Заполните, <br /> и мы перезвоним</p>

              <IoClose onClick={toggleModule} className="absolute top-10 right-6 w-10 h-6 opacity-50"/>

              <div className="flex flex-col gap-3 mt-12">
              <input type="text" className="border border-black p-4 rounded-[100px]" placeholder="ФИО" />
              <input type="number" className="border border-black p-4 rounded-[100px]" placeholder="телефон" />
              </div>

              <button
                onClick={toggleModule}
                className="w-full p-3 mt-7 bg-black text-white rounded-[100px]"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const IconWithLabel = ({ icon, label, className = "" }) => (
  <div className={`flex flex-col items-center gap-1 ${className}`}>
    <div className="text-xl">{icon}</div>
    <p className="text-xs hidden sm:block">{label}</p>
  </div>
);

export default Navbar;
