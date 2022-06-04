import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import uuid from "react-uuid";
import { useProvider } from "./context/Provider";
import NftCard from "./NftCard";

function Card(props) {
    const [renderValue, setRenderValue] = useState(6);
    const { searchValue, sortingValue } = useProvider();

    const assetsFilter = ({ MediaName }) => {
        return (
            MediaName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
    };
    const assetSort = (asset1, asset2) => {
        switch (sortingValue) {
            case "Latest":
                return new Date(asset2.createdAt) - new Date(asset1.createdAt);
            case "Oldest":
                return new Date(asset1.createdAt) - new Date(asset2.createdAt);
            case "Lowest Price":
                return asset1.BNBPrice - asset2.BNBPrice;
            case "Highest Price":
                return asset2.BNBPrice - asset1.BNBPrice;
            default:
                return;
        }
    };

    const generateCards = [...props.awsAssets]
        .sort((asset1, asset2) => assetSort(asset1, asset2))
        .filter(assetsFilter)
        .slice(0, props.maxRender ? props.maxRender : renderValue)
        .map((asset) => <NftCard key={uuid()} asset={asset} />);

    const loadMore = () => {
        setRenderValue((prev) => prev + 6);
    };

    return (
        <section className="card-section">
            <div className="container">
                <div className="card-content">
                    {props.cardTitle ? <h3>{props.cardTitle}</h3> : ""}
                    <div className="card-container">{generateCards}</div>
                    {props.cardFooterLink && (
                        <Link href={`${props.cardFooterLink}`}>
                            <a className="btn blue">
                                {props.cardFooterLinkName}
                            </a>
                        </Link>
                    )}
                    {props.awsAssets.length > renderValue &&
                        generateCards.length > 0 &&
                        props.loadMore && (
                            <button onClick={loadMore} className="btn">
                                Load More
                            </button>
                        )}
                </div>
            </div>
        </section>
    );
}

export default Card;
