import Authors from "./Authors";
import Projects from "./Projects";

export default function Tables() {
    return (
        <div className="w-full min-h-screen p-8 flex flex-col space-y-4">
            <Authors />
            <Projects />            
        </div>
    )
}
