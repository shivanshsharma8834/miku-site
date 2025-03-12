import './App.css'
import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div className='w-full h-fit flex flex-row scroll-smooth'>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App
