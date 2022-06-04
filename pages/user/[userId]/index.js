import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import profileImg from "/public/images/artists/artist.jpg";
import verifiedBadge from "/public/icons/verified-badge.svg";
import twitterIcon from "/public/icons/twitter.svg";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { getSingleUser } from "../../../components/apis/awsGetAPIs";
import Loading from "../../../components/Loading";

function Index() {
    const [userData, setUserData] = useState();
    const { query } = useRouter();

    useEffect(() => {
        (async () => {
            setUserData(
                await getSingleUser(
                    "0x41d70681F91A57b09B5960B3dF08bbC0E180c874"
                )
            );
        })();
    }, [query]);

    const handleTabList = (event) => {
        document.querySelectorAll(".tab-list > li ").forEach((option) => {
            option.classList.remove("selected");
        });
        event.target.classList.add("selected");
    };

    return (
        <div className="profile-page">
            <Navbar />
            {userData ? (
                <section className="profile-section">
                    <div className="profile-content">
                        <div className="profile-cover">
                            <div className="container">
                                <div className="artist-img next-img">
                                    <Image
                                        src={`https://inf4mation-inf4-snft.s3.eu-west-2.amazonaws.com/NKF7axIMgvH62uol.png`}
                                        alt="Profile Image"
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="profile-header">
                                <div className="profile-spacer"></div>
                                <div className="profile-detail">
                                    <div>
                                        <h2>
                                            {userData.Username}
                                            {userData.EmailVerified && (
                                                <span className="next-img">
                                                    <Image
                                                        src={verifiedBadge}
                                                        alt="Verified"
                                                        layout="fill"
                                                    />
                                                </span>
                                            )}
                                        </h2>
                                        <div className="profile-description">
                                            <p>{userData.Bio}</p>
                                            <div>
                                                <span>1 NFTs</span>
                                                <span>
                                                    Ξ {userData.Amount} SPENT
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    JOINED{" "}
                                                    {new Date(
                                                        userData.createdAt
                                                    ).toDateString()}
                                                </span>
                                                <span>637</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-social">
                                        <p>
                                            <span className="next-img">
                                                <Image
                                                    layout="fill"
                                                    src={twitterIcon}
                                                    alt="Twitter"
                                                />
                                            </span>
                                            0x9f35...557f3f{" "}
                                        </p>
                                        <p>
                                            <span className="next-img">
                                                <Image
                                                    layout="fill"
                                                    src={twitterIcon}
                                                    alt="Twitter"
                                                />
                                            </span>
                                            0x9f35...557f3f{" "}
                                        </p>
                                        <p>
                                            <span className="next-img">
                                                <Image
                                                    layout="fill"
                                                    src={twitterIcon}
                                                    alt="Twitter"
                                                />
                                            </span>
                                            0x9f35...557f3f{" "}
                                        </p>
                                        <p>
                                            <span className="next-img">
                                                <Image
                                                    layout="fill"
                                                    src={twitterIcon}
                                                    alt="Twitter"
                                                />
                                            </span>
                                            0x9f35...557f3f{" "}
                                        </p>
                                        <p>
                                            <span className="next-img">
                                                <Image
                                                    layout="fill"
                                                    src={twitterIcon}
                                                    alt="Twitter"
                                                />
                                            </span>
                                            0x9f35...557f3f{" "}
                                        </p>

                                        <p className="profile-history">
                                            Download History
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-footer">
                                <ul className="tab-list">
                                    <li
                                        data-option="history"
                                        onClick={(event) =>
                                            handleTabList(event)
                                        }
                                        className="selected"
                                    >
                                        Artworks
                                    </li>
                                    <li
                                        data-option="info"
                                        onClick={(event) =>
                                            handleTabList(event)
                                        }
                                    >
                                        Collection
                                    </li>
                                    <li
                                        data-option="insights"
                                        onClick={(event) =>
                                            handleTabList(event)
                                        }
                                    >
                                        Favorites
                                    </li>
                                </ul>
                                <div>
                                    <label className="label">
                                        <div className="toggle">
                                            <input
                                                className="toggle-state"
                                                type="checkbox"
                                                name="check"
                                                value="check"
                                            />
                                            <div className="toggle-inner">
                                                <div className="indicator"></div>
                                            </div>
                                            <div className="active-bg"></div>
                                        </div>
                                        <div className="label-text">
                                            Buy now
                                        </div>
                                    </label>
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

export default Index;
