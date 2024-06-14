import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProduct = ({ product, handleDelete }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, image_url, name, brand, price, description, color } = product;

    return (
        <div className="border border-red-600 rounded-lg p-2">
            <div className="h-[400px] overflow-hidden">
                <img className="w-60" src={image_url} alt="" />
                <h1>{name}</h1>
                <h1>{brand}</h1>
                <h1>{color}</h1>
                <h1>price: {price}</h1>
                <h1>{description}</h1>
                <hr />
            </div>
            <div className="bottom-0 mt-6">
                <button onClick={() => handleDelete(_id)} className="btn  btn-error btn-sm">Delete</button>
                <Link to={`/dashboard/dashboard/all-products/edit/${_id}`}><button className="btn  btn-warning btn-sm ms-4">Update</button></Link>
            </div>
        </div>
    );
};

export default SingleProduct;