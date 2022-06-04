
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import MarketplaceHeader from "../../components/MarketplaceHeader";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import { useProvider } from "../../components/context/Provider";

function Index() {
    const { awsAssets } = useProvider();

    return (
        <div className="marketplace-page">
            <Navbar />
            <MarketplaceHeader
                heading={"Marketplace"}
                text={"Discover rare artworks by world class artists"}
                isSearch={true}
            />
            {awsAssets ? (
                <Card awsAssets={awsAssets} loadMore={true} />
            ) : (
                <Loading />
            )}

            <Footer />
        </div>
    );
}

export default Index;
