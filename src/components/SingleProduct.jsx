
// eslint-disable-next-line react/prop-types
const SingleProduct = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { image_url, name, brand, price, description, color } = product;

    return (
        <div className="border border-red-600 rounded-lg p-2">
            <img className="w-60" src={image_url} alt="" />
            <h1>{name}</h1>
            <h1>{brand}</h1>
            <h1>{color}</h1>
            <h1>price: {price}</h1>
            <h1>{description}</h1>
        </div>
    );
};

export default SingleProduct;