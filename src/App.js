import React from "react";

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
                    <MainNewsCard></MainNewsCard>
                    <RecentNewsCard></RecentNewsCard>
                </section>
                <section>
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