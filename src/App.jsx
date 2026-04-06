import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
      }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      <div className="clock-card">
        <p>{format(currentDate, 'MMMM d, yyyy h:mm:ss a')}</p>
      </div>
    </main>
    )
}

export default App