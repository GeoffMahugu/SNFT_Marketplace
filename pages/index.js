import uuid from "react-uuid";
import Hero from "../components/Hero";
import heroImage from "/public/images/hero/hero.jpg";
import dropHero from "/public/images/hero/drop-hero.png";
import coldMistyHero from "/public/images/hero/cold-misty-hero.png";
import Card from "../components/Card";
import Notice from "../components/Notice";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { useProvider } from "../components/context/Provider";

function Home() {
    const { awsAssets } = useProvider();

    return (
        <div className="homepage">
            <Navbar />
            <Hero
                heroImage={heroImage}
                heading={[
                    "Discover",
                    <br key={uuid()} />,
                    "rare digital art",
                    <br key={uuid()} />,
                    "and collect NFTs",
                ]}
                heroButton={"View marketplace"}
                heroButtonLink={"/"}
                heroText={"Desert Silhouette by Cheryl Gurner"}
            />
            {awsAssets ? (
                <Card
                    cardTitle={"Latest artwork"}
                    awsAssets={awsAssets}
                    maxRender={3}
                    cardFooterLink={"/marketplace"}
                    cardFooterLinkName={"View marketplace"}
                />
            ) : (
                <Loading />
            )}
            <Hero
                heroImage={dropHero}
                heading={"This week's latest 🔥DROPS"}
                heroButton={"View drops"}
                heroButtonLink={"/"}
            />
            {awsAssets ? (
                <Card
                    cardTitle={"Upcoming sales"}
                    awsAssets={awsAssets}
                    maxRender={3}
                    cardFooterLink={"/upcoming"}
                    cardFooterLinkName={"View upcoming sales"}
                />
            ) : (
                <Loading />
            )}
            <Hero
                heroImage={coldMistyHero}
                heading={"Cheryl Gurner - Cold & Misty"}
                // heroButton={"View journal"}
                heroButtonLink={"/"}
            />
            {awsAssets ? (
                <Card
                    cardTitle={"Collections"}
                    awsAssets={awsAssets}
                    maxRender={3}
                    cardFooterLink={"/auction"}
                    cardFooterLinkName={"View Collections"}
                />
            ) : (
                <Loading />
            )}
            <Notice
                heading={"Who are Snifty and what are NFTs?"}
                text={[
                    <p key={uuid()}>
                        Snifty (pronounced S-NFT) is the world&apos;s first, and
                        largest, NFT Marketplace, built on the Binance Smart
                        Chain Network. Allowing everyone to discover, collect,
                        buy, and sell Digital Art NFTs.
                    </p>,
                    <p key={uuid()}>
                        Providing artists and creators a simplistic, safe place
                        and spirit of consciousness to create unique, authentic,
                        digital collectibles, in the form of NFT&apos;s
                    </p>,
                ]}
                backgroundColor={"#292929"}
                noticeButton={"Explore NFTs"}
            />
            {/* <Hero
                heroImage={heroImage}
                heading={"Embedded NFTs"}
                heroButton={"View collection"}
                heroButtonLink={"/"}
            /> */}
            <Notice
                heading={"Become an artist on Snifty"}
                text={
                    <p>
                        Join our community of creatives, showcase and sell your
                        digital artwork
                    </p>
                }
                link="https://nft.inf4mation.com/artistapplication/"
                backgroundColor={"#210B2C"}
                noticeButton={"Apply to join"}
            />
            <Notice
                heading={"Join our community"}
                text={
                    <p>
                        Meet the Snifty team, artists and collectors for
                        platform updates, announcements, and more...
                    </p>
                }
                link="https://discord.gg/C7sGTaux"
                backgroundColor={"#fff"}
                fontColor={"#292929"}
                noticeButton={"Launch discord"}
            />
            <Footer />
        </div>
    );
}

export default Home;
