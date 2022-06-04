import Link from "next/link";
import Image from "next/image";

function NftCard(props) {
    const {
        AWS_UID,
        ArtistName,
        ImageCID,
        BNBPrice,
        MediaName,
        SellingMethod,
    } = props.asset;
    return (
        <div className={`card ${SellingMethod}`}>
            <div>
                <div className="card-img next-img">
                    <Image
                        src={`https://cloud.inf4mation.com/ipfs/${ImageCID}`}
                        alt={MediaName}
                        layout="fill"
                    />
                    <Link href={`/nft/${AWS_UID}`}>
                        <a></a>
                    </Link>
                </div>
                <div className="card-head">
                    <p>{MediaName}</p>
                    <p>
                        1/
                        {/* {nftEditions} */}
                    </p>
                </div>
                <div className="nft-artist">
                    <div className="next-img">
                        {/* <Image
                    src={require(`/public/images/artists/${nftArtistImg}.jpg`)}
                    alt={ArtistName}
                    layout="fill"
                /> */}
                    </div>
                    <p>
                        <Link href={"/user/" + ArtistName}>
                            <a>{ArtistName}</a>
                        </Link>
                    </p>
                </div>
                <div className="card-footer">
                    {BNBPrice ? (
                        <p>
                            {SellingMethod === "TimedAuction"
                                ? "Current bid"
                                : "Buy"}{" "}
                            <br /> Ξ {BNBPrice}
                        </p>
                    ) : (
                        ""
                    )}
                    {SellingMethod === "TimedAuction" && (
                        <p>
                            Auction ends in <br />
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
export default NftCard;
