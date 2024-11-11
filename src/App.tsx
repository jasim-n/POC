
import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './components/AppSideBar'
import Nav from './components/Navbar'
import TableComponent from './components/Table'
import StudentTile from './components/Tile'


function App() {


  return (
    <>
    
   <Nav/>

      <TableComponent/>
      <StudentTile name="John Doe" age={25} address="123 Main Street" grade="A+" studentClass="Class A"/>


    </>
  )
}

export default App
