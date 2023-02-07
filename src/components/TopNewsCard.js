import React from "react";

const TopNewsCard = () => {

    const newsPosts = [
        {
            id: "1",
            title: "Reviving Retro PCs",
            description: "What happens when old PCs are given modern upgrades?"
        },
        {
            id: "2",
            title: "Top 10 Laptops of 2022",
            description: "Our best picks for various needs and budgets."
        },
        {
            id: "3",
            title: "The Growth of Gaming",
            description: "How the pandemic has sparked fresh opportunities."
        }
    ];

    const articles = newsPosts.map((newsPost, index) => {
        return (
            <article key={ newsPost.id }>
                <h4>{ `0${ index + 1 }` }</h4>
                <h5>{ newsPost.title }</h5>
                <p>{ newsPost.description }</p>
            </article>
        )
    });

    return (
        <section>
            <h3 className="visually-hidden">Top News Articles</h3>
            { articles }
        </section>
    )
}

export default TopNewsCard;
