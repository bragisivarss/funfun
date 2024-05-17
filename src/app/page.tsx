import { Carousel } from "./components/Carousel";
import { NewOrder } from "./components/NewOrder";
import { SearchOrder } from "./components/SearchOrder";

const Home = () => {
    return (
        <>
            <div className="main-container">
                <Carousel />
                <NewOrder />
            </div>
            <div className="secondary-container">
                <SearchOrder />
            </div>
        </>
    );
};
export default Home;
