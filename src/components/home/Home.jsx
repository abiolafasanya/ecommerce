import React from "react";
import "./Home.css";
import Header from "../layouts/Header";
import Hero from "./Hero";
import BenefitComponents from "./Benefits";
import Categories from "./Categories";
import Products from "./Product";

export default function Home() {
  return (
    <div>
      <header className="container home-header">
        <Header />
      </header>
      <main className="container">
        <Hero />
        <BenefitComponents />
        <Categories />
        <Products />
      </main>
      <footer className="container footer">
        <p>All right reserved &copy; {new Date(Date.now()).getFullYear()}</p>
      </footer>
    </div>
  );
}
