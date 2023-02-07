import React from "react";

const MainNewsCard = () => {

    const mainNewsPost = {
        title: "The Bright Future of Web 3.0?",
        description: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
        ctaText: "Read more",
    }

    return (
        <article>
            <h2>{ mainNewsPost.title }</h2>
            <p>{ mainNewsPost.description }</p>
            <a href="" role="button">{ mainNewsPost.ctaText }</a>
        </article>
    )
}

export default MainNewsCard;
