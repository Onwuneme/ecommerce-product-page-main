import previous from "../assets/icon-previous.svg";
import close from "../assets/icon-close.svg";
import next from "../assets/icon-next.svg";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import { BsCart3 } from "react-icons/bs";
import { useContext, useState } from "react";
import { Context } from "../App";
import CartBasket from "./CartBasket";

export default function Product() {
  const { product, setAddToCart } = useContext(Context);
  const [cart, setCart] = useState({ ...product, quantity: 0 });
  const [currentImg, setCurrentImg] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const disCount = (cart.price / 2).toFixed(2);
  const handleAddToCart = () => {
    if (cart.quantity > 0) {
      setAddToCart((prev) => ({
        ...prev,
        name: cart.name,
        thumbnail: cart.thumbnail[currentImg],
        price: cart.price,
        quantity: cart.quantity,
      }));
    }
  };
  const handleShowItem = (index) => {
    setCurrentImg(index);
    setIsOpen(true);
    console.log(index);
  };
  const previousImg = () => {
    const curr = (currentImg - 1) % cart.image.length;
    setCurrentImg(curr);
  };
  const nextImg = () => {
    const curr = (currentImg + 1) % cart.image.length;
    setCurrentImg(curr);
  };
  const decreaceQty = () => {
    setCart((prev) => ({
      ...prev,
      quantity: prev.quantity > 0 ? prev.quantity - 1 : 0,
    }));
  };
  const increaceQty = () => {
    setCart((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  return (
    <>
      <CartBasket disCount={disCount} />
      <div className="md:flex gap-5 lg:gap-15  md:mx-5   md:mt-30 justify-center  items-center mb-15">
        <div className="hidden md:block  lg:w-120  md:w-100">
          <img
            src={cart.image[currentImg]}
            alt=""
            className=" w-full h-100 rounded-2xl"
          />
          <div className="flex gap-2 justify-between items-center mt-5">
            {cart?.thumbnail?.map((src, index) => (
              <img
                src={src}
                key={index}
                alt=""
                onClick={()=>handleShowItem(index)}
                className={` ${
                  currentImg === index
                    ? "opacity-50 outline-orange-600 "
                    : "outline-transparent"
                } outline-2 rounded-xl w-18 h-20 duration-700 hover:opacity-50`}
              />
            ))}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "md:block" : "md:hidden"
          } md:bg-black/90 w-full  md:h-dvh md:fixed bottom-0 md:z-70  md:flex flex-col justify-center items-center`}
        >
          <img
            src={close}
            alt=""
            onClick={() => setIsOpen(false)}
            className="hidden md:block  relative left-65 mb-5"
          />
          <div className=" md:w-130  relative flex items-center">
            <button
              onClick={previousImg}
              className={` ${
                currentImg === 0 && "hidden"
              } h-10 w-10 bg-white flex justify-center items-center p-4 rounded-full  absolute md:-left-5 left-3`}
            >
              <img src={previous} alt="" />
            </button>
            <img
              src={cart.image[currentImg]}
              alt=""
              className="md:rounded-2xl"
            />
            <button
              onClick={nextImg}
              className={`${
                currentImg === 3 && "hidden"
              } h-10 w-10 bg-white flex justify-center items-center p-4 rounded-full  absolute md:-right-5 right-3`}
            >
              <img src={next} alt="" />
            </button>
          </div>
        </div>
        <div className="p-5 lg:px-10 lg:max-w-150 md:max-w-100 ">
          <p className=" tracking-widest text-sm font-bold text-gray-600 mb-3">
            SNEAKER COMPANY
          </p>
          <h1 className="text-3xl font-semibold md:font-bold md:text-4xl lg:text-5xl mb-5 ">{cart.name}</h1>
          <p className="text-gray-400">
            These low-profile sneaker are Your perfect casual wear companion.
            Featurng a durable rubber outer sole. they'll withstand everything
            the weather can offer.
          </p>
          <div>
            <div className="flex md:flex-col justify-between mt-6">
              <div className="space-x-4 flex items-center">
                <span className="font-bold text-2xl">${disCount}</span>
                <span className="px-2 bg-black text-white rounded">50%</span>
              </div>
              <span className=" line-through text-gray-500 font-semibold">${cart.price.toFixed(2)}</span>
            </div>
            <div className="lg:flex items-center gap-5">
              <div className=" lg:min-w-50 h-15 bg-gray-100 rounded-2xl my-4 flex justify-between items-center p-5">
                <img src={minus} alt="" onClick={decreaceQty} className=" duration-500 hover:opacity-50 " />
                <div className=" font-semibold">{cart.quantity}</div>
                <img src={plus} alt="" onClick={increaceQty} className=" duration-500 hover:opacity-50 "  />
              </div>
              <button
                onClick={handleAddToCart}
                className=" bg-orange-400 duration-500 hover:bg-orange-300 flex  justify-center items-center w-full lg:min-w-50 h-13 gap-4 rounded-xl"
              >
                <BsCart3 />
                <p className="font-semibold">Add to cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
