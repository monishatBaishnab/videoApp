import Navbar from "./components/Navigation/Navbar"
import SubNav from "./components/Navigation/SubNav"
import StudyTabs from "./components/StudyContainer/StudyTabs"

function App() {

  return (
    <>
      <Navbar />
      <SubNav />
      <div className="container">
        <h2 className="text-3xl font-medium text-blue-900">Relations and Functions ( Mathematics )</h2>
        <StudyTabs />
      </div>
    </>
  )
}

export default App
