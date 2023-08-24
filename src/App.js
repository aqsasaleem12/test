import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Getendpointasios from "./getendpointasios"
import Endpointbyid from "./endpointbyid"
import Pagenation from "./pagenation"
import Product from "./product"
import Signup from "./signup"
import Updateapicall from "./updateapicall"
import Deleteendpoint from "./deleteendpoint"

function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Getendpointasios />} />
                <Route  path="/endpointbyid" element={<Endpointbyid/>} />
                <Route  path="/pagenation" element={<Pagenation/>} />
                <Route  path="/product" element={<Product/>} />
                <Route  path="/signup" element={<Signup/>} />
                <Route  path="/update" element={<Updateapicall/>} />
                <Route  path="/deleteendpoint" element={<Deleteendpoint/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
