import { useProvider } from "./context/Provider";

function Marketplace(props) {
    const { setSearchValue, setSortingValue } = useProvider();

    return (
        <section className="marketplace-section">
            <div className="container">
                <div className="marketplace-content">
                    <div className="marketplace-head">
                        <h2>{props.heading}</h2>
                        <div>{props.text && <p>{props.text}</p>}</div>
                    </div>
                    <div className="marketplace-nav">
                        {props.isSearch && (
                            <div className="search">
                                <input
                                    onChange={(event) =>
                                        setSearchValue(event.target.value)
                                    }
                                    type="text"
                                />
                            </div>
                        )}
                        <div className="marketplace-filter">
                            <select
                                onChange={(event) =>
                                    setSortingValue(event.target.value)
                                }
                            >
                                <option value="All">All</option>
                                <option value="Latest">Latest</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Lowest Price">
                                    Lowest price
                                </option>
                                <option value="Highest Price">
                                    Highest price
                                </option>
                                {/* <option value="Upcoming Sales">
                                    Upcoming sales
                                </option> */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Marketplace;
