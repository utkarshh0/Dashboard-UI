import { useSelector } from "react-redux"

export default function MenuItem({Icon, label, onClick}){

  const activeTab = useSelector(state => state.activeTab)

  const getTab = (label) => {

    const result = label.split(" ").join("");
    return result.charAt(0).toLowerCase() + result.slice(1)
  }

  return (
    <button onClick={onClick} className={`w-full flex items-center space-x-4 p-2 group hover:bg-white hover:rounded-lg hover:shadow-xl ${activeTab == getTab(label) && `bg-white rounded-lg shadow-xl`}`}>
        <span
          className={`text-lg bg-white p-2 rounded-md shadow-xl group-hover:bg-orange-600 group-hover:text-white ${
          activeTab == getTab(label) && `!bg-orange-600 !text-white`
          }`}
          >
          <Icon />
        </span>
        <p className='text-sm font-medium hidden md:block'>{label}</p>
    </button>
  )
}
