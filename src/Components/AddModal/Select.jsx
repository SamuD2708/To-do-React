import { useEffect, useRef, useState } from "react";
import { FaFlag } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import useClickOutside from "../../Hooks/UsClickOutside";


export default function Select({ options, calendarOpen, addPriority, task, deletePriority }) {
    const [menuIsOpen, setMenuisOpen] = useState(false);
    const selectRef = useRef();

    //Clock outside handler
    useClickOutside(selectRef, () => setMenuisOpen(false))

    const handleClick = (option) => {
        addPriority(option)
        setMenuisOpen(false)
    }

    //Open calendar close select
    useEffect(() => {
        calendarOpen && setMenuisOpen(false)
    }, [calendarOpen])

    return (
        <div ref={selectRef} className="flex flex-col items-center relative">
            <div className={`flex flex-row px-5 py-1 text-stone-500 border border-stone-500 cursor-pointer rounded-lg
                ${menuIsOpen ? 'rounded-bl-none rounded-br-none' : ''}`} onClick={() => setMenuisOpen(!menuIsOpen)}>
                <button className="flex hover:cursor-pointer">
                    <CiFlag1 className="text-2xl"></CiFlag1>
                    <span className={`ml-0.5 ${task.priority != null ? 'text-emerald-700 font-bold' : ''}`}>
                        {task.priority == null ? 'priority' : task.priority.label}
                    </span>
                </button>
                {task.priority != null &&
                    <button onMouseDown={deletePriority} className="hover:bg-stone-200 rounded-full hover:cursor-pointer">
                        <IoMdClose></IoMdClose>
                    </button>}
            </div>

            {menuIsOpen && <section className={`absolute top-9 z-30 w-40 h-fit bg-stone-50  border border-transparent border-t-0
                rounded-lg rounded-tl-none rounded-tr-none   shadow-2xl/50`}>
                <ul className="flex flex-col gap-1">
                    {options.map((option, index) => (
                        <li key={index} className="w-full hover:bg-stone-300 hover:cursor-pointer py-1 px-1.5"
                            onClick={() => handleClick(option)}>
                            <div className="mx-auto flex gap-3 relative">
                                <FaFlag className="text-2xl" style={{ color: option.color }}></FaFlag>
                                <span>{option.label}</span>
                                {task.priority != null && option.label === task.priority.label &&
                                    <FaCheck className="absolute end-1 top-1 text-emerald-700"></FaCheck>}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>}

        </div>



    )
}