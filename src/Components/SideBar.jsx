import { IoTodayOutline } from "react-icons/io5";
import { MdDoneOutline } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { MdQuestionMark } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

export default function SideBar() {
    return(
        <aside className="flex flex-col bg-stone-200 gap-16 max-w-80 min-w-fit w-1/6 h-full pl-4 pt-6">
            <ul>
                <li>
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <IoTodayOutline></IoTodayOutline>
                        <span>TODAY</span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <MdDoneOutline></MdDoneOutline>
                        <span>COMPLETED</span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <CiClock1></CiClock1>
                        <span>TO COMPLETE</span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <IoIosContact></IoIosContact>
                        <span>CONTACT</span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
                        <MdDoneOutline></MdDoneOutline>
                        <span>COMPLETED</span>
                    </div>
                </li>
                
            </ul>
        </aside>
    )
}