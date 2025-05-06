import '@mantine/core/styles.css'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { TrainerPage } from './pages/TrainerPage'
import { VocabList } from './pages/VocabList'

import { MantineProvider } from '@mantine/core'
export default function App() {
  return (
    <MantineProvider>
      {
        <Router>
          <nav className="p-4 bg-gray-200">
            <Link to="/" className="mr-4">
              Trainer
            </Link>
            <Link to="/vocab">Vokabelliste</Link>
          </nav>
          <Routes>
            <Route path="/" element={<TrainerPage />} />
            <Route path="/vocab" element={<VocabList />} />
          </Routes>
        </Router>
      }
    </MantineProvider>
  )
}
