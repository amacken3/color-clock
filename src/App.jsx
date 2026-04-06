import { format } from 'date-fns'
import './App.css'

function App() {
  const currentDate = new Date();

  return (
    <main>
      <h1>Dynamic Color Clock</h1>
      <p>{format(currentDate, 'MMMM d, yyyy h:mm a')}</p>
    </main>
  )
}

export default App