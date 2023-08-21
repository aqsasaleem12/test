import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Getendpointasios from "./getendpointasios"
import Endpointbyid from "./endpointbyid"
import Pagenation from "./pagenation"
function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Getendpointasios />} />
                <Route  path="/endpointbyid" element={<Endpointbyid/>} />
                <Route  path="/pagenation" element={<Pagenation/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
