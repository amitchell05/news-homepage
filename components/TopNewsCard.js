import React from "react";

import "./TopNewsCard.css";

import retroPcImg from "../assets/images/image-retro-pcs.jpg";
import topLaptopsImg from "../assets/images/image-top-laptops.jpg";
import gamingGrowthImg from "../assets/images/image-gaming-growth.jpg";

const TopNewsCard = () => {

    const newsPosts = [
        {
            id: "1",
            title: "Reviving Retro PCs",
            description: "What happens when old PCs are given modern upgrades?",
            image: retroPcImg
        },
        {
            id: "2",
            title: "Top 10 Laptops of 2022",
            description: "Our best picks for various needs and budgets.",
            image: topLaptopsImg
        },
        {
            id: "3",
            title: "The Growth of Gaming",
            description: "How the pandemic has sparked fresh opportunities.",
            image: gamingGrowthImg
        }
    ];

    const articles = newsPosts.map((newsPost, index) => {
        return (
            <article key={ newsPost.id } className="top-news__article">
                <div className="top-news__image">
                    <img src={ newsPost.image } alt="retro PC" />
                </div>
                <div className="top-news__content">
                    <h4 className="top-news__index">{ `0${ index + 1 }` }</h4>
                    <h5 className="top-news__title">{ newsPost.title }</h5>
                    <p className="top-news__description">{ newsPost.description }</p>
                </div>
            </article>
        )
    });

    return (
        <section style={{ border: '1px dashed red' }} className="top-news">
            <h3 className="visually-hidden">Top News Articles</h3>
            { articles }
        </section>
    )
}

export default TopNewsCard;
