import {useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
function App() {
  let curr = localStorage.getItem("current");
  if (curr===null){curr="home";}
  const [current, setCurrentFeed] = useState(curr);
  const handleNavigationChange = (seletedNav) => {
    setCurrentFeed(seletedNav);
    localStorage.setItem("current",seletedNav);
  }
  return (
    <div className="App">
      <Navbar current={current} onNavigationChanged={handleNavigationChange}></Navbar>
      <Feed current={current} onNavigationChanged={handleNavigationChange} />
    </div>
  );
}
export default App;
