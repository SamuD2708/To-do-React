import { Link } from "react-router-dom"

export default function SideBarItem({ icon, curranetLocation, path, children }) {
    return (
        <li className={`active:bg-stone-400 p-1.5 border border-transparent rounded-lg w-full transition-colors duration-100 ease-in 
                    ${curranetLocation.pathname === path ? 'bg-emerald-200 text-emerald-800 hover:bg-emerald-300' : 'hover:bg-stone-300'}`} >
            <Link to={path}>
                <div id={children} className={`flex flex-row items-center gap-1.5 hover:cursor-pointer  `} >
                    {icon}
                    {children}
                </div>
            </Link>
        </li>
    )
}