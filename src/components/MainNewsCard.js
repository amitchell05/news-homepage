import "./MainNewsCard.css";

import heroDesktopImg from "../assets/images/image-web-3-desktop.jpg";
import heroMobileImg from "../assets/images/image-web-3-mobile.jpg";
import useWindowWidth from '../hooks/useWindowWidth';

const MainNewsCard = () => {

    const mainNewsPost = {
        title: "The Bright Future of Web 3.0?",
        description: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
        ctaText: "Read more",
    }

    const windowWidth = useWindowWidth();

    return (
        <article className="main-news">
            {
                windowWidth >= 768 ? <img src={heroDesktopImg} alt="puzzle pieces" className="main-news__img" />
                : <img src={heroMobileImg} alt="puzzle pieces" className="main-news__img" />
            }
            <h2 className="main-news__title">{ mainNewsPost.title }</h2>
            <p className="main-news__desc">{ mainNewsPost.description }</p>
            <a href="foo" role="button" target="_self" className="main-news__btn">{ mainNewsPost.ctaText }</a>
        </article>
    )
}

export default MainNewsCard;
