import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import HomeProducts from "../../components/HomeProducts";

const Home = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <Banner />
            <HomeProducts products={products} />
        </div>
    );
};

export default Home;