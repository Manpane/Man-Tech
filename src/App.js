import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
function App() {
  const [current, setCurrentFeed] = useState("home")
  const handleNavigationChange = (seletedNav) => {
    setCurrentFeed(seletedNav);
  }
  return (
    <div className="App">
      <Navbar current={current} onNavigationChanged={handleNavigationChange}></Navbar>
      <Feed current={current} />
    </div>
  );
}
export default App;
