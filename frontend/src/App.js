import Header from "./Pages/Header/Header";

import "./App.css"
// import Sidebar from "./Pages/Sidebar/Sidebar";
import Widgets from "./Pages/Widgets/Widgets";
import Footer from "./Pages/Footer/Footer";
import Feed from "./Pages/Feed/Feed";
import Login from "./Pages/Auth/Login";
import SignupCard from "./Pages/Auth/Signup";
import SignUp from "./Pages/Auth/Signup";
import { Allroutes } from "./Routes/Allroutes";



function App() {
  return (
    <div className="App">
    
      {/* <Header/> */}
     <Allroutes/>
     {/* <Footer/> */}
    
    </div>
  );
}

export default App;
