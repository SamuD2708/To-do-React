import { IoTodayOutline } from "react-icons/io5";
import { MdDoneOutline } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { MdQuestionMark } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

export default function SideBar() {
    const aside = useRef();

    const [asideWidth, setAsideWidth] = useState(1/6);
    
    //Handler event
    const handleMove = (e) => {
        setAsideWidth(e.clientX);
    }

    const handleMouseUp = () =>{
         window.removeEventListener('mousemove', handleMove)
    }

    const startResize = (e) => {
       
        window.addEventListener('mousemove', handleMove)

    }

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp)

        return () => { window.removeEventListener('mouseup', handleMouseUp) }
    }, [])

    useEffect(()=>{
        console.log('asideqidth: ' + asideWidth)
    }, [asideWidth])




    return (
        <aside ref={aside} className={`flex flex-row justify-between bg-stone-200  max-w-80 min-w-fit h-full pl-6 text-lg`} style={{width: asideWidth}}>
            <ul className="flex flex-col w-fit mt-6">
                <li className="hover:bg-stone-300 p-1.5 border border-transparent rounded-lg w-full">
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <IoTodayOutline></IoTodayOutline>
                        <span>Today</span>
                    </div>
                </li>
                <li className="hover:bg-stone-300 p-1.5 border border-transparent rounded-lg w-full">
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <MdDoneOutline></MdDoneOutline>
                        <span>Completed</span>
                    </div>
                </li>
                <li className="hover:bg-stone-300 p-1.5 border border-transparent rounded-lg w-full">
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <CiClock1></CiClock1>
                        <span>To complete</span>
                    </div>
                </li>
                <li className="hover:bg-stone-300 p-1.5 border border-transparent rounded-lg w-full">
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <IoIosContact></IoIosContact>
                        <span>Contact</span>
                    </div>
                </li>
                <li className="hover:bg-stone-300 p-1.5 border border-transparent rounded-lg w-full">
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <MdQuestionMark></MdQuestionMark>
                        <span>About</span>
                    </div>
                </li>
            </ul>

            {/* Spazio per poter ridimensionare la barra */}
            <div onMouseDown={startResize} className="w-1.5 h-full hover:bg-blue-700 hover:cursor-col-resize transition-colors delay-200 ease-in-out duration-300"></div>
        </aside>
    )
}