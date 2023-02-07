import React from "react";

import "./index.css";

import Header from './components/Header';
import MainNewsCard from './components/MainNewsCard';
import RecentNewsCard from './components/RecentNewsCard';
import TopNewsCard from './components/TopNewsCard';

const App = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <section>
                    <h2 className="visually-hidden">Main and Recent News</h2>
                    <MainNewsCard></MainNewsCard>
                    <RecentNewsCard></RecentNewsCard>
                </section>
                <section>
                    <h2 className="visually-hidden">Top News Container</h2>
                    <TopNewsCard></TopNewsCard>
                </section>
            </main>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/amitchell05">Angela Mitchell</a>.
            </div>
        </div>
    )
}

export default App;