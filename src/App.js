import React from 'react';
import './styles/main.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
