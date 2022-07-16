import { Routes, Route } from "react-router-dom";
import {Header} from "./components/header";
import {Footer} from "./components/footer";

import {Home} from "./pages/home";
import {About} from "./pages/about";
import {Contact} from "./pages/contact";
import {Category} from "./pages/category";
import {NotFound} from "./pages/notFound";

function App() {
    return <>
        <div className="App">
            <Header />
            <main className="container content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/category" element={<Category />}>
                        <Route path=":name" element={<Category />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </>
}

export default App;