import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { FaqPage } from './pages/FaqPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { LandingPage } from './pages/LandingPage'
import { TaskDetailPage } from './pages/TaskDetailPage'
import { VerticalOverviewPage } from './pages/VerticalOverviewPage'
import { VerticalSelectionPage } from './pages/VerticalSelectionPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/verticals" element={<VerticalSelectionPage />} />
            <Route path="/verticals/:id" element={<VerticalOverviewPage />} />
            <Route path="/verticals/:id/:taskId" element={<TaskDetailPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
