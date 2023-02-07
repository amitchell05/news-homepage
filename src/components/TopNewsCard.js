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

    const listItems = newsPosts.map((newsPost, index) => {
        return (
            <article key={ newsPost.id }>
                <h3>{ `0${ index + 1 }` }</h3>
                <h4>{ newsPost.title }</h4>
                <p>{ newsPost.description }</p>
            </article>
        )
    });

    return (
        <section>
            { listItems }
        </section>
    )
}

export default TopNewsCard;
