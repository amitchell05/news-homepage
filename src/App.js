import React from "react";

import "./App.css";

import Header from './components/Header';
import MainNewsCard from './components/MainNewsCard';
import RecentNewsCard from './components/RecentNewsCard';
import TopNewsCard from './components/TopNewsCard';

const App = () => {
    return (
        <>
            <Header></Header>
            {/* IDEA 1: 2-column grid for all; expand last row to span both columns */}
            {/* <main style={{ border: '1px solid limegreen' }}>
                <MainNewsCard></MainNewsCard>
                <RecentNewsCard></RecentNewsCard>
                <TopNewsCard></TopNewsCard>
            </main> */}

            {/* IDEA 2: Set one 2-column grid sibling news cards; set one single column grid for bottom news card */}
            <main style={{ border: '1px solid limegreen' }}>
                <section style={{ border: '1px solid blue' }} class="test-grid-1">
                    <h2 className="visually-hidden">Main and Recent News</h2>
                    <MainNewsCard></MainNewsCard>
                    <RecentNewsCard></RecentNewsCard>
                </section>
                <section style={{ border: '1px solid blue' }} class="test-grid-2">
                    <h2 className="visually-hidden">Top News</h2>
                    <TopNewsCard></TopNewsCard>
                </section>
            </main>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/amitchell05">Angela Mitchell</a>.
            </div>
        </>
    )
}

export default App;