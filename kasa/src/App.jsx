import React from "react";
import Routing from "./router/Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/index.css";


const App = () => {
    return (
        <div className="container">
            <Header />
            <Routing />
            <Footer />
        </div>
    );
};

export default App;
