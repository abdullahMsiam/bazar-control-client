
// eslint-disable-next-line react/prop-types
const HomeProduct = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { image_url, name, brand, price, description, } = product;
    return (
        <div>
            <div className="card w-72 bg-white shadow-xl">
                <figure><img className="w-36" src={image_url} alt="product image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{brand}</div>
                    </h2>
                    <h3>${price}</h3>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Add to Cart</div>
                        <div className="badge badge-outline">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;