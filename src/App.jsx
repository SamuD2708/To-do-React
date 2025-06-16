import './index.css'
import SideBar from './Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='flex flex-row h-full'>
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default App
