import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
export default function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className = "sections">
        <Intro/>
      </div>
    </div>
  )
}
