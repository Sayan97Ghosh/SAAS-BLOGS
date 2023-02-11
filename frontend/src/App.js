import Header from "./Pages/Header/Header";

import "./App.css"
// import Sidebar from "./Pages/Sidebar/Sidebar";
import Widgets from "./Pages/Widgets/Widgets";
import Footer from "./Pages/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Header/>
      <Widgets/>
      <Footer/>
      
     {/* <Sidebar/> */}
    </div>
  );
}

export default App;
