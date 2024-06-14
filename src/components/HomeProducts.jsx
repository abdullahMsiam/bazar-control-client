import HomeProduct from "./HomeProduct";

// eslint-disable-next-line react/prop-types
const HomeProducts = ({ products }) => {
    console.log(products);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center">
            {
                // eslint-disable-next-line react/prop-types
                products.map(product => (
                    <HomeProduct key={product._id} product={product} />
                ))
            }
        </div>
    );
};

export default HomeProducts;