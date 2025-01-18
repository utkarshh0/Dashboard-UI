import { FaRegUserCircle } from "react-icons/fa";
import ActivityCard from "./ActivityCard";

export default function Activity() {

  const activites = [
    {
      Icon : FaRegUserCircle,
      data : {
        total : 1600,
        growth : 55,
        label : "Users Active"
      }
    },
    {
      Icon : FaRegUserCircle,
      data : {
        total : 1600,
        growth : 55,
        label : "Users Active"
      }
    },
    {
      Icon : FaRegUserCircle,
      data : {
        total : 1600,
        growth : 55,
        label : "Users Active"
      }
    },
    {
      Icon : FaRegUserCircle,
      data : {
        total : 1600,
        growth : 55,
        label : "Users Active"
      }
    }
  ]
  
  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 gap-5 px-1">
        {activites.map((activity, index) => <ActivityCard key={index} Icon={activity.Icon} data={activity.data}/>)}
    </div>
  )
}
