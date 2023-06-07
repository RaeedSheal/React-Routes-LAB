import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./comp/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Books from "./pages/Books";
import Book from "./pages/Book";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:id" element={<Book />} />
            </Routes>
        </>
    );
}

export default App;
