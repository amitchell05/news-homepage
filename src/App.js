import './App.css';

import Header from './components/Header';
import MainNewsCard from './components/MainNewsCard';
import RecentNewsCard from './components/RecentNewsCard';
import TopNewsCard from './components/TopNewsCard';

function App() {
  return (
    <>
        <Header></Header>
        <main>
            <section className="grid grid--main-news">
                <h2 className="visually-hidden">Main and Recent News</h2>
                <MainNewsCard></MainNewsCard>
                <RecentNewsCard></RecentNewsCard>
            </section>
            <section className="grid grid--top-news top-news">
              <h2 className="visually-hidden">Top News</h2>
              <TopNewsCard></TopNewsCard>
            </section>
        </main>

        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank" >Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/amitchell05">Angela Mitchell</a>.
        </div>
    </>
  );
}

export default App;
