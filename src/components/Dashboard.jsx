import Activity from "./Activity";
import OrderReview from "./OrderReview";
import Projects from "./Projects";
import Reviews from "./Reviews";
import rocket from '../assets/rocket-white.webp'

export default function Dashboard() {
    return (
        <div className="w-full min-h-screen">
            <div className="mt-8 w-full h-[50vh] flex space-x-5">
                <Activity />
                <Reviews />
            </div>
            <div className="my-8 w-full h-[90vh] flex gap-4">
                <div className="w-8/12 h-full"><Projects /></div>
                <div className="w-4/12 h-full"><OrderReview /></div>
            </div>
            <div className="flex w-full h-[35vh] my-4 space-x-4">
                <div className="w-3/5  h-full flex bg-white p-4 rounded-lg">
                    <div className="w-3/5 flex flex-col items-start justify-between">
                        <div>
                            <p className="font-bold opacity-70 my-1">Built by developers</p>
                            <p className="text-xl font-bold my-1">Soft UI Dashboard</p>
                            <p className="my-1 font-medium opacity-70">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                        </div>
                        <button className="font-bold opacity-60">Read More</button>
                    </div>
                    <div className="w-2/5 bg-orange-500 rounded-lg flex justify-center items-center">
                        <img src={rocket} className="w-4/5"  alt="" />
                    </div>
                </div>
                <div  className="w-2/5 h-full rounded-lg p-6 text-white bg-zinc-800 flex flex-col justify-between items-start">
                    <p className="text-xl font-bold">Work with the rockets</p>
                    <p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                    <button className="font-bold opacity-60">Read More</button>
                </div>
            </div>
        </div>
    )
}
