import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routerData } from "./components/routerData";

function App() {
  return (
    <div className="App">
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
