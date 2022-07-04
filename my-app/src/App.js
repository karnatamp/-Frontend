import Home  from "./pages/Home";
import Button from "./Components/Button";
import Chuck from"./pages/Chuck";

import {
    BrowserRouter,
    Routes,
    Route, 
    Link
} from "react-router-dom"

const App =() => {
    return <>
        <h1>App</h1>
        
        <BrowserRouter>
        <div>
            <Link to="/">Home  </Link>
            </div>
        <div>
            <Link to="/button">Button</Link>
        </div>
        <Link to="/chuck">chucknooris</Link>
        <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/button" element={ <Button/>}/>
        <Route path="/chuck" element={<Chuck/>}/>
        </Routes>
        </BrowserRouter>
       
       
    </>
}
export default App

