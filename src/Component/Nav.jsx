import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import avatar from "../assets/image-avatar.png";
import { useContext, useState } from "react";
import { Context } from "../App";
export default function Nav() {
  const { openCart, setOpenCart, addToCart } = useContext(Context);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className=" p-3 md:p-0 flex  justify-between md:absolute fixed top-0 right-0 left-0 md:border-b-2 md:border-gray-300 md:mx-5 lg:mx-25 bg-white z-30  ">
        <div className=" flex items-center gap-4 md:gap-25">
          <div onClick={() => setOpen(!isOpen)} className=" md:hidden z-50">
            {isOpen ? (
              <MdClose className="w-5 h-5" />
            ) : (
              <GiHamburgerMenu className="w-5 h-5" />
            )}
          </div>

          <p className="font-bold text-3xl md:text-4xl lg:text-5xl pb-1  ">
            sneaker
          </p>
          <div className="hidden font-semibold md:flex relative z-10 top-0.4  gap-5 text-lg  text-gray-400">
            <button className=" duration-500 hover:text-gray-700 hover:border-orange-500 border-b-4  border-transparent py-6 ">
              Collections
            </button>
            <button className=" duration-500 hover:text-gray-700 hover:border-orange-500 border-b-4  border-transparent py-6 ">
              Men
            </button>
            <button className=" duration-500 hover:text-gray-700 hover:border-orange-500 border-b-4  border-transparent py-6 ">
              Women
            </button>
            <button className=" duration-500 hover:text-gray-700 hover:border-orange-500 border-b-4  border-transparent py-6 ">
              About
            </button>
            <button className=" duration-500 hover:text-gray-700 hover:border-orange-500 border-b-4  border-transparent py-6 ">
              Contact
            </button>
          </div>
        </div>
        <div className=" flex items-center gap-5 ">
          <div className=" relative">
            <div
              className={`${
                addToCart.quantity === 0 || openCart ? "hidden" : "block"
              } absolute left-3 bottom-4  flex justify-center items-center  w-4 h-3 rounded bg-orange-400 text-[9px] text-white`}
            >
              {addToCart.quantity}
            </div>
            <BsCart3
              className="w-6 h-6"
              onClick={() => setOpenCart(!openCart)}
            />
          </div>
          <img
            src={avatar}
            alt=""
            className=" duration-500 w-5 h-5 md:w-10 md:h-10 border-2 rounded-full border-transparent hover:border-orange-400"
          />
        </div>
        {isOpen && (
          <div className="h-dvh fixed w-full bg-black/50 top-0 left-0">
            <div className="w-2/3 h-full bg-white px-4 pt-20">
              <ul className="font-semibold text-lg space-y-4">
                <li className="duration-500 hover:text-gray-700">
                  Collections
                </li>
                <li className="duration-500 hover:text-gray-700">Men</li>
                <li className="duration-500 hover:text-gray-700">Women</li>
                <li className="duration-500 hover:text-gray-700">About</li>
                <li className="duration-500 hover:text-gray-700">Contact</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
