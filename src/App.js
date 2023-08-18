import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Test from "./test"
function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Test />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
