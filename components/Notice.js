function Notice(props) {
    return (
        <section
            className="notice-section"
            style={{
                backgroundColor: props.backgroundColor,
                color: props.fontColor ? props.fontColor : "#fff",
            }}
        >
            <div className="container">
                <div className="notice-content">
                    <div>
                        <h2>{props.heading}</h2>
                    </div>
                    <div>
                        {props.text}
                        <a
                            href={props.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="btn"
                        >
                            {props.noticeButton}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notice;
