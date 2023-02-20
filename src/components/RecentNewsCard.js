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

    const listItems = newsPosts.map((newsPost) => {
        return (
            <article key={ newsPost.id } >
                <h4>{ newsPost.title }</h4>
                <p>{ newsPost.description }</p>
            </article>
        )
    });

    return (
        <section>
            <h3>{ cardTitle }</h3>
            { listItems }
        </section>
    )
}

export default RecentNewsCard;
