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

    const posts = newsPosts.map((newsPost, index) => {
        return (
            <article key={ newsPost.id } className="top-news__article">
                <img src={ newsPost.image } alt="retro PC" className="top-news__img" />
                <div className="top-news__content">
                    <div className="top-news__index"></div>
                    <h5 className="top-news__title">{ newsPost.title }</h5>
                    <p className="top-news__description">{ newsPost.description }</p>
                </div>
            </article>
        )
    });

    return (
        <>
            { posts }
        </>
    )
}

export default TopNewsCard;
