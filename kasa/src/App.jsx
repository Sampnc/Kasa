import React from "react";
import Routing from "./router/Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div className="Container">
            <Header />
            <Routing />
            <Footer />
        </div>
    );
};

export default App;
