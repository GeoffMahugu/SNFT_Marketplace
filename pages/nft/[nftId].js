import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import uuid from "react-uuid";
import Card from "../../components/Card";
import NftsData from "../../data/NftsData";
import verifiedBadge from "/public/icons/verified-badge.svg";
import twitterIcon from "/public/icons/twitter.svg";
import magnifyIcon from "/public/icons/search_dark.svg";
import shareIcon from "/public/icons/share.svg";
import heartIcon from "/public/icons/heart.svg";
import userImg from "/public/images/artists/artist.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import { getSingleAsset } from "../../components/apis/awsGetAPIs";

function NftPage() {
    const [selectedTabList, setSelectedTabList] = useState("history");
    const [singleAsset, setSingleAsset] = useState();
    const { query } = useRouter();

    useEffect(() => {
        (async () => {
            setSingleAsset(await getSingleAsset(query.nftId));
        })();
    }, [query]);

    const handleTabList = (event) => {
        document.querySelectorAll(".tab-list > li ").forEach((option) => {
            option.classList.remove("selected");
        });
        event.target.classList.add("selected");
        setSelectedTabList(event.target.getAttribute("data-option"));
    };

    const magnifyImage = () => {
        var divObj = document.querySelector(".nft-showcase img");
        if (divObj.requestFullscreen) {
            divObj.requestFullscreen();
        } else if (divObj.msRequestFullscreen) {
            divObj.msRequestFullscreen();
        } else if (divObj.mozRequestFullScreen) {
            divObj.mozRequestFullScreen();
        } else if (divObj.webkitRequestFullscreen) {
            divObj.webkitRequestFullscreen();
        } else {
            console.log("Fullscreen API is not supported");
        }
    };

    return (
        <div>
            <Navbar />
            {singleAsset ? (
                <section className="art-page-section">
                    <div className="container">
                        <div className="art-page-content">
                            <div className="artist-detail">
                                <div className="artist-img next-img">
                                    <Image
                                        src={userImg}
                                        alt="Artist"
                                        layout="fill"
                                    />
                                </div>
                                <div>
                                    <Link
                                        href={`/user/${singleAsset.ArtistWallet}`}
                                    >
                                        <a className="artist-name">
                                            {singleAsset.ArtistName}{" "}
                                            <span className="next-img">
                                                <Image
                                                    src={verifiedBadge}
                                                    alt="Verified"
                                                    layout="fill"
                                                />
                                            </span>
                                        </a>
                                    </Link>
                                    <p className="artist-twitter">
                                        <span className="next-img">
                                            <Image
                                                src={twitterIcon}
                                                alt="twitter"
                                                layout="fill"
                                            />
                                        </span>
                                        @themadmonkart
                                    </p>
                                </div>
                            </div>
                            <div className="nft-container">
                                <div className="nft-showcase">
                                    <span className="next-img">
                                        <Image
                                            src={`https://cloud.inf4mation.com/ipfs/${singleAsset.ImageCID}`}
                                            alt={singleAsset.MediaName}
                                            layout="fill"
                                        />
                                    </span>
                                    <span
                                        onClick={magnifyImage}
                                        className="magnify next-img"
                                    >
                                        <Image
                                            src={magnifyIcon}
                                            alt="Magnify"
                                            layout="fill"
                                        />
                                    </span>
                                    {/* <Card
                                        cardTitle={"More by this artist"}
                                        artworkCards={NftsData}
                                        maxRender={2}
                                    /> */}
                                </div>
                                <div className="nft-details">
                                    <h2>{singleAsset.MediaName}</h2>
                                    <p className="nft-price">
                                        Ξ {singleAsset.BNBPrice}{" "}
                                        <span>/ $75</span>
                                    </p>
                                    {/* <button className="btn blue">
                                        Connect wallet
                                    </button> */}
                                    <div className="nft-description">
                                        <p className="title">Description</p>
                                        <p>{singleAsset.MediaDescription}</p>
                                    </div>

                                    <div className="nft-footer">
                                        <button className="share-btn next-img">
                                            <Image
                                                src={shareIcon}
                                                alt="Share"
                                                layout="fill"
                                            />
                                        </button>

                                        <div>
                                            <button className="share-btn next-img">
                                                <Image
                                                    src={heartIcon}
                                                    alt="Share"
                                                    layout="fill"
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="edition-details-container">
                                        <p className="title">Edition Details</p>
                                        <div className="edition-details">
                                            <div>
                                                <p>EDITION #</p>
                                                <p className="title">
                                                    #8276000
                                                </p>
                                            </div>
                                            <div>
                                                <p>EDITIONS</p>
                                                <p className="title">
                                                    #8276000
                                                </p>
                                            </div>
                                            <div>
                                                <p>AVAILABLE</p>
                                                <p className="title">1</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="nft-tags">
                                        {singleAsset.Tags?.map((tag) => (
                                            <span key={uuid()}>{tag}</span>
                                        ))}
                                    </div>

                                    <div>
                                        <ul className="tab-list">
                                            <li
                                                data-option="history"
                                                onClick={(event) =>
                                                    handleTabList(event)
                                                }
                                                className="selected"
                                            >
                                                History
                                            </li>
                                            <li
                                                data-option="info"
                                                onClick={(event) =>
                                                    handleTabList(event)
                                                }
                                            >
                                                Info
                                            </li>
                                            <li
                                                data-option="insights"
                                                onClick={(event) =>
                                                    handleTabList(event)
                                                }
                                            >
                                                Insights
                                            </li>
                                            <li
                                                data-option="owners"
                                                onClick={(event) =>
                                                    handleTabList(event)
                                                }
                                            >
                                                Owners
                                            </li>
                                        </ul>
                                        <div className="tab-list-data">
                                            {selectedTabList === "history" && (
                                                <div>
                                                    <span className="title">
                                                        New Creation
                                                    </span>
                                                    <span>2 Hours ago</span>
                                                </div>
                                            )}
                                            {selectedTabList === "info" && (
                                                <div>
                                                    <p>
                                                        6720 X 4200 PX
                                                        (IMAGE/JPEG) 17 MB
                                                    </p>
                                                    <p>ERC721 TOKEN STANDARD</p>
                                                </div>
                                            )}
                                            {selectedTabList === "insights" && (
                                                <div>
                                                    <span>SOLD</span>
                                                    <span className="title">
                                                        0
                                                    </span>
                                                    <span>GIFTED</span>
                                                    <span className="title">
                                                        0
                                                    </span>
                                                    <span>OWNERS</span>
                                                    <span className="title">
                                                        0
                                                    </span>
                                                    <span>CREATED</span>
                                                    <span className="title">
                                                        {new Date(
                                                            singleAsset.createdAt
                                                        ).toDateString()}
                                                    </span>
                                                </div>
                                            )}
                                            {selectedTabList === "owners" && (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <Loading />
            )}

            <Footer />
        </div>
    );
}

export default NftPage;
