
import SideBar from './Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AddModal from './Components/AddModal/AddModal';
import './index.css'
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    console.log(modalOpen)
  }, [modalOpen])

  return (
    <>
      {modalOpen && <AddModal toggleModalOpen={toggleModalOpen} modalOpen={modalOpen}></AddModal>} 

      <div className='flex flex-row h-full'>
        <SideBar toggleModalOpen={toggleModalOpen}></SideBar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
