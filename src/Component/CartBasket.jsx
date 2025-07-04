import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Context } from "../App";

export default function CartBasket({ disCount }) {
  const { openCart, addToCart, setAddToCart } = useContext(Context);

  const totalAmount = disCount * addToCart.quantity;
  const handleRemove = () => {
    setAddToCart((prev) => ({ ...prev, quantity: 0 }));
  };

  return (
    <>
      <div className={` ${!openCart && "hidden"} md:w-[350px] md:right-3  fixed top-18 w-full z-10`}>
        <div className=" shadow-2xl bg-white h-full mx-2 rounded-2xl">
          <p className=" p-4 border-b border-gray-200 font-semibold">Cart</p>
          <div className="p-4 h-45 ">
            <p
              className={`${
                addToCart.quantity === 0 ? "block" : "hidden"
              } flex justify-center items-center h-full text-gray-500 font-semibold`}
            >
              Your cart is empty
            </p>
            <div className={`${addToCart.quantity === 0 && "hidden"}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img
                    src={addToCart.thumbnail}
                    alt=""
                    className="w-15 h-16 rounded"
                  />
                  <div className="text-gray-500">
                    <p >{addToCart.name}</p>
                    < p>
                      <span>${disCount}</span>{" "}
                      <span>x {addToCart.quantity}</span>{" "}
                      <span className="font-bold text-black">
                        ${totalAmount.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <RiDeleteBin6Line onClick={handleRemove} />
              </div>
              <button className=" duration-500 hover:bg-orange-300 font-semibold bg-orange-400  w-full py-4 rounded-2xl mt-5">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
