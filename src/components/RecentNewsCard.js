const RecentNewsCard = () => {

    const cardTitle = "New";
    const newsPosts = [
        {
            id: "1",
            title: "Hydrogen VS Electric Cars",
            description: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            id: "2",
            title: "The Downsides of AI Artistry",
            description: "What are the possible adverse effects of on-demand AI image generation?"
        },
        {
            id: "3",
            title: "Is VC Funding Drying Up?",
            description: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
    ];

    const posts = newsPosts.map((newsPost) => {
        return (
            <article key={ newsPost.id } className="recent-news__post">
                <h4 className="post__title">{ newsPost.title }</h4>
                <p className="post__desc">{ newsPost.description }</p>
            </article>
        )
    });

    return (
        <div className="recent-news">
            <h3 className="recent-news__title">{ cardTitle }</h3>
            { posts }
        </div>
    )
}

export default RecentNewsCard;
