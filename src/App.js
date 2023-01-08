import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routerData } from "./components/routerData";
import { Navbar, Theme } from "./components";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Theme />
      <div className="App_main_wrapper">
        <Routes>
          {routerData &&
            routerData.map((item, index) => {
              const { path, pageName } = item;
              return <Route key={index} path={path} element={pageName} />;
            })}
        </Routes>
      </div>
    </main>
  );
}

export default App;
