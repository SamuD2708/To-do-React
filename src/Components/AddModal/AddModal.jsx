import { useEffect, useRef, useState, forwardRef } from "react"
// DATEPICKER
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// ICONE
import { CiCalendar } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
// REDUX
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../../Redux/TaskSlice"
// COMPONENTS AND HOOKS
import Select from "./Select";
import useClickOutside from "../../Hooks/UsClickOutside";
// ID GENERATOR
import { v7 as uuidv7 } from 'uuid'

export default function AddModal({ toggleModalOpen }) {
    const tasks = useSelector((state) => state.tasks.value);
    const dispatch = useDispatch();


    // Options for priority select
    const options = [
        { value: 1, label: "Priority 1", color: 'blue' },
        { value: 2, label: "Priority 2", color: 'yellow' },
        { value: 3, label: "Priority 3", color: 'red' }
    ]

    // Modal reference
    const modal = useRef();

    //  flag calendar open
    const [calendarOpen, setcalendarOpen] = useState(false);
    // task state
    const [task, setTask] = useState({
        id: uuidv7(),
        title: '',
        description: '',
        date: null,
        priority: null,
        completed: false
    })

    //handle select
    const addPriority = (newPriority) => {
        setTask({
            ...task,
            priority: newPriority
        })
    }

    const deletePriority = () => {
        setTask({ ...task, priority: null })
    }

    //EVENT HANDLER
    const handleClose = () => {
        setTimeout(() => {
            toggleModalOpen();
        }, 270);

        modal.current.classList.add('fade-out');
    }

    const handleAdd = () => {
        dispatch(add(task));

        setTask({
            id: uuidv7(),
            title: '',
            description: '',
            date: null,
            priority: null,
            completed: false
        })

        handleClose();
    }

    //Close modal
    // useClickOutside(modal, handleClose)

    useEffect(() => {
        console.log(task)
    }, [task])

    useEffect(() => {
        console.log(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    // Custom datepicker input
    const DatePickerButton = forwardRef(({ onClick }, ref) => (
        <div className=" flex gap-1 px-1.5 py-1 text-stone-500 border border-stone-500 cursor-pointer rounded-lg">
            <button onClick={onClick} ref={ref} className="flex hover:cursor-pointer">
                <CiCalendar className="text-2xl"></CiCalendar>
                <span className={`${task.date != null ? 'text-emerald-700 font-bold' : ''} `}>
                    {task.date == null ? 'Date' : `${task.date.toLocaleString('it-IT', { day: 'numeric', month: 'short' })}`}
                </span>
            </button>
            {task.date != null &&
                <button onMouseDown={() => setTask({ ...task, date: null })} className="hover:bg-stone-200 rounded-full hover:cursor-pointer">
                    <IoMdClose></IoMdClose>
                </button>}
        </div>
    ));

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
            <div ref={modal} className={`w-3/4 md:w-xl mb-80 h-48 border border-transparent rounded-lg bg-stone-50 mx-auto 
                shadow-2xl/50 fade-in`}>
                <form action="" className="h-full flex flex-col gap-3 relative " onSubmit={(e) => { e.preventDefault() }}>
                    <div>
                        <input type="text" id="task-title" placeholder="Add a title" className="w-full border-transparent h-9 text-xl font-semibold px-2.5 mt-2.5 focus-visible:outline-0"
                            onChange={(e) => { setTask({ ...task, title: e.target.value }) }} value={task.title}></input>
                        <input type="text" id="task-description" placeholder="Description" className="w-full border-transparent px-2.5 focus-visible:outline-0 "
                            onChange={(e) => { setTask({ ...task, description: e.target.value }) }} value={task.description}></input>
                    </div>

                    <div className="flex flex-row gap-2.5 mx-2">
                        <DatePicker selected={task.date == null ? new Date() : task.date}
                            onChange={(newDate) => { setTask({ ...task, date: newDate }) }}
                            dateFormat={'dd/MM/yyyy'}
                            minDate={new Date()}
                            customInput={<DatePickerButton></DatePickerButton>}
                            calendarClassName="custom-datepicker"
                            popperPlacement={`${window.innerWidth <= 768 ? 'bottom-end' : 'right-center'}`}
                            onCalendarOpen={() => setcalendarOpen(true)}
                            onCalendarClose={() => setcalendarOpen(false)}
                        ></DatePicker>

                        <Select
                            options={options}
                            calendarOpen={calendarOpen}
                            addPriority={addPriority}
                            task={task}
                            deletePriority={deletePriority}
                        ></Select>
                    </div>
                    <div className="w-full h-0.5 bg-stone-200 "></div>

                    <div className=" h-fit absolute bottom-2.5 end-4 flex gap-2">
                        <button className=" py-2 px-3 rounded-lg bg-stone-200 hover:bg-stone-300 hover:cursor-pointer active:bg-stone-400" onClick={handleClose}>Cancel</button>
                        <button disabled={task.title === '' ? true : false}
                            className={`py-2 px-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 hover:cursor-pointer
                                 active:bg-emerald-800 disabled:bg-emerald-300/60 disabled:cursor-not-allowed`} onClick={handleAdd}>
                            Add task
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}