import { MdDashboard } from 'react-icons/md'
import MenuItem from './MenuItem'
import logo from '../assets/logo-ct-dark.webp'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../redux/features/activeTabSlice'
import { TbTableShare } from 'react-icons/tb'
import { FaMoneyBillWheat } from 'react-icons/fa6'
import { SiFoundryvirtualtabletop } from 'react-icons/si'
import { IoMdSettings } from 'react-icons/io'

export default function Menu() {
    
    const dispatch = useDispatch()

    const handleTabChanege = (tab) => dispatch(setActiveTab(tab))

    return (
        <div className="w-full h-full flex flex-col justify-start items-start space-y-4 p-2">
            <div className='w-full flex justify-center items-center space-x-2 p-2'>
                <img src={logo} width="30" alt="" />
                <p className='font-bold lg:text-md'>UI Dashboard</p>
            </div>
            <hr />
            <div className='w-full flex flex-col space-y-4'>
                <MenuItem
                    Icon={MdDashboard}
                    label={"Dashboard"}
                    onClick={() => handleTabChanege("dashboard")}
                />
                <MenuItem
                    Icon={TbTableShare}
                    label={"Tables"}
                    onClick={() => handleTabChanege("tables")}
                />
                <MenuItem
                    Icon={FaMoneyBillWheat}
                    label={"Billing"}
                    onClick={() => handleTabChanege("billing")}
                />
                <MenuItem
                    Icon={SiFoundryvirtualtabletop}
                    label={"Virtual Reality"}
                    onClick={() => handleTabChanege("virtualReality")}
                />
                <MenuItem
                    Icon={IoMdSettings}
                    label={"Rtl"}
                    onClick={() => handleTabChanege("rtl")}
                />
            </div>
        </div>
    )
}
