import { useLoaderData } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct";

const DashProducts = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center justify-items-center gap-4">
            {
                products.map(product => (
                    <SingleProduct product={product} key={product._id} />
                ))
            }
        </div>
    );
};

export default DashProducts;