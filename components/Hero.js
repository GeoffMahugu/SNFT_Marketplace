function Hero(props) {
    return (
        <section
            className="hero-section black-overlay"
            style={{ backgroundImage: `url(${props.heroImage.src})` }}
        >
            <div className="container">
                <div className="hero-content">
                    <h1>{props.heading}</h1>
                    {props.heroButton ? (
                        <a href={props.link} className="btn">
                            {props.heroButton}
                        </a>
                    ) : (
                        ""
                    )}

                    {props.heroText ? <p>{props.heroText}</p> : ""}
                </div>
            </div>
        </section>
    );
}

export default Hero;
