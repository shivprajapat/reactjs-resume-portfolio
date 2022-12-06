import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routerData } from "./components/routerData";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        {
          routerData&&routerData.map((item,index)=>{
            const {path,pageName} = item;
            return(
              <Route key={index} path={path} element={pageName} /> 
            )
          })
        }
      </Routes>
    </div>
  );
}

export default App;
