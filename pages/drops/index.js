import uuid from "react-uuid";
import Drop from "../../components/Drop";
import SubscribeDrop from "../../components/SubscribeDrop";
import dropCover from "/public/images/drop/drop.jpg";
import dropsData from "../../data/DropsData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function index() {
    const generateDrops = dropsData.map((drop) => (
        <Drop
            key={uuid()}
            dropCover={dropCover}
            dropBy={drop.dropBy}
            dropDateShort={drop.dropDateShort}
            dropDate={drop.dropDate}
            dropText={drop.dropText}
        />
    ));

    return (
        <div className="drop-page">
            <Navbar />
            {generateDrops} <SubscribeDrop />
            <Footer />
        </div>
    );
}

export default index;
