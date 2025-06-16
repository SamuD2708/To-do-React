//ICONE
import { IoTodayOutline } from "react-icons/io5";
import { MdDoneOutline } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { MdQuestionMark } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FiSidebar } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

import SideBarItem from "./SideBarItem"

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
    //Vado a creare un riferimento per la funzione che setta la nuova dimensione nello stato
    const handleMoveRef = useRef((e) => { })
    const curranetLocation = useLocation();

    const [asideWidth, setAsideWidth] = useState(null)
    const [isOPen, setIsOpen] = useState(null);

    // HANDLER EVENT
    //Inizio e fine del listener per il mouseMove
    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMoveRef.current)
    }
    const startResize = (e) => {
        window.addEventListener('mousemove', handleMoveRef.current)
    }

    const handleWindowResize = () => {
        const currentWidth = window.innerWidth;
        console.log(currentWidth)
        if (currentWidth <= 768) {
            setAsideWidth(100)
            setIsOpen(false);
        } else {
            setAsideWidth(250)
            setIsOpen(true);
        }
    }

    const handleOpen = () => {
        setIsOpen(!isOPen);
    }

    useEffect(() => {
        //Appena carica la pagina vado a riscrivere la funzione per l aggiornamento della size 
        //in modo che il remove rimuova l ultima funzione creata
        handleMoveRef.current = (e) => {
            setAsideWidth(Math.min(Math.max(100, e.clientX), 320))
        };

        window.addEventListener('mouseup', handleMouseUp)
        return () => { window.removeEventListener('mouseup', handleMouseUp) }
    }, []);

    //Inizializzo dimensione aside e isOPen
    useEffect(() => {
        const currentWidth = window.innerWidth;
        console.log(currentWidth)
        if (currentWidth <= 768) {
            setAsideWidth(100)
            setIsOpen(false);
        } else {
            setAsideWidth(250)
            setIsOpen(true);
        }

        window.addEventListener('resize', handleWindowResize)
        return (() => { window.removeEventListener('resize', handleWindowResize) })
    }, []);


    return (
        <aside className={`flex flex-row justify-between bg-stone-200 max-w-80 min-w-fit h-full pl-6 text-lg  
             transition-transform duration-500 ease-in-out relative ${isOPen ? '' : '-translate-x-full'}`} style={{ width: asideWidth }}>
            <div className={`absolute end-3 top-3 ${!isOPen ? 'translate-x-14' : ''} transition-transform duration-500`}>
                <button onClick={handleOpen} className="hover:cursor-pointer"><FiSidebar className="text-2xl"></FiSidebar></button>
            </div>
            <ul className="flex flex-col w-full mt-10 mr-3">
                {/* ADD BUTTON */}
                 <li className={`active:bg-stone-400 hover:bg-stone-300 p-1.5 border border-transparent rounded-lg
                     w-full transition-colors duration-100 ease-in `} >
                    <div className={`flex flex-row items-center gap-1.5 hover:cursor-pointer text-xl text-emerald-800`}>
                        <IoAddCircle className="text-2xl"></IoAddCircle>
                        Add Task
                    </div>
                </li>

                <SideBarItem icon={<IoTodayOutline />} curranetLocation={curranetLocation} path='/today'>Today</SideBarItem>
                
                <SideBarItem icon={<FaTasks />} curranetLocation={curranetLocation} path='/alltask'>All task</SideBarItem>

                <SideBarItem icon={<MdDoneOutline />} curranetLocation={curranetLocation} path='/completed'>Completed</SideBarItem>

                <SideBarItem icon={<CiClock1 />} curranetLocation={curranetLocation} path='/tocomplete'>To complete</SideBarItem>

                <SideBarItem icon={<IoIosContact />} curranetLocation={curranetLocation} path='/contact'>Contact</SideBarItem>

                <SideBarItem icon={<MdQuestionMark />} curranetLocation={curranetLocation} path='/about'>About</SideBarItem>
            </ul>

            {/* Spazio per poter ridimensionare la barra */}
            <div onMouseDown={startResize} className="w-1.5 h-full hover:bg-blue-700 hover:cursor-col-resize
                 transition-colors delay-200 ease-in-out duration-300"></div>
        </aside>
    )
}