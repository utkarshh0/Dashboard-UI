import { BsDatabaseGear } from "react-icons/bs"
import { CiShoppingCart } from "react-icons/ci"
import { FaBell, FaCss3Alt, FaRegCreditCard } from "react-icons/fa6"
import { IoMdKey } from "react-icons/io"

export default function OrderReview() { 

    const orderReviews = [
      {
        Icons : FaBell,
        title : "$2400, Design changes",
        time : "22 DEC 7:20 PM"
      },
      {
        Icons : FaCss3Alt,
        title : "New order #1832412",
        time : "21 DEC 11 PM"
      },
      {
        Icons : CiShoppingCart,
        title : "Server payments for April",
        time : "21 DEC 9:34 PM"
      },
      {
        Icons : FaRegCreditCard,
        title : "$New card added for order #4395133",
        time : "20 DEC 7:20 PM"
      },
      {
        Icons : IoMdKey,
        title : "$Unlock packages for development",
        time : "18 DEC 7:20 PM"
      },
      {
        Icons : BsDatabaseGear,
        title : "New order #9583120",
        time : "17 DEC 8:20 PM"
      },
    ]

    return (
      <div className="w-full h-full bg-white rounded-lg shadow-xl p-4">
          <p className="font-bold">Order Reviews</p>
          <p className="opacity-60 px-6 my-2"><b>24%</b> this month</p>
          <div className="flex flex-col">
            {orderReviews.map((order,index) => (
              <div key={index} className="flex space-x-4 p-1">
                <div className="flex flex-col items-center">
                  <span><order.Icons /></span>
                  <hr className="h-10 w-1 bg-gray-400 opacity-60 my-1 rounded-lg" />
                </div>
                <div className="font-bold">
                  <p className="opacity-80">{order.title}</p>
                  <p className="text-xs opacity-60">{order.time}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    )
  }
  