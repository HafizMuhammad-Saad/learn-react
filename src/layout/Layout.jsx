import { useState } from 'react'
import Sidebar from '../components/sidebar'
import '../App.css'

function Layout({children}) {
  const [isOpen, setIsOpen] = useState(true)
 
  return (

    <>
    
    <div style={{ display: 'flex' }}>
    {isOpen && <Sidebar />}
    <div style={{ flexGrow: 1, padding: '20px' }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      {children}
    
    </div>
  </div>

    </>
  )
}

export default Layout
