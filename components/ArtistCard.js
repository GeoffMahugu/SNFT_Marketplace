import Image from "next/image";
import uuid from "react-uuid";
import verifiedBadge from "/public/icons/verified-badge.svg";
import twitterIcon from "/public/icons/twitter.svg";
import instagramIcon from "/public/icons/instagram.svg";
import cover from "/public/images/artists-cover/cover.jpg";
import artistImg from "/public/images/artists/artist.jpg";
import artistsData from "../data/ArtistsData";

function ArtistCard() {
    const generateArtists = artistsData.map((artist) => (
        <div className="artist-card" key={uuid()}>
            <div>
                <div
                    className="artist-card-cover"
                    style={{
                        backgroundImage: `url(${cover.src})`,
                    }}
                >
                    <div className="artist-card-img next-img">
                        <Image src={artistImg} alt="Artist" layout="fill" />
                    </div>
                </div>
                <div className="artist-card-footer">
                    <p className="artist-name next-img">
                        {artist.artistName}{" "}
                        <span>
                            <Image src={verifiedBadge} alt="Verified" layout="fill" />
                        </span>
                    </p>
                    <p className="artist-tag">{artist.artistTag}</p>
                    <p className="artist-description">
                        {artist.artistDescription}
                    </p>
                    <div className="artist-social">
                        <a href="#" className="next-img">
                            <span>
                                <Image src={twitterIcon} alt="twitter" layout="fill" />
                            </span>
                            @{artist.artistTwitter}
                        </a>
                        <a href="#" className="next-img">
                            <span>
                                <Image src={instagramIcon} alt="instagram" layout="fill" />
                            </span>
                            @{artist.artistInstagram}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <section className="artist-card-section">
            <div className="container">
                <div className="artist-card-content">
                    <div className="artist-card-container">
                        {generateArtists}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArtistCard;
