import FAQContainer from "./components/FAQ/FAQContainer"
import Navbar from "./components/Navigation/Navbar"
import SubNav from "./components/Navigation/SubNav"
import StudyContainer from "./components/StudyContainer/StudyContainer"
import StudyControl from "./components/StudyContainer/StudyControl"
import StudyTabs from "./components/StudyContainer/StudyTabs"

function App() {

  return (
    <>
      <Navbar />
      <SubNav />
      <div className="container">
        <h2 className="text-3xl font-medium text-blue-900">Relations and Functions ( Mathematics )</h2>
        <StudyTabs />
        <StudyContainer />
        <StudyControl />
      </div>
      <FAQContainer />
    </>
  )
}

export default App
