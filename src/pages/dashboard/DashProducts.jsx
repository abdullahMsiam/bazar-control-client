
import SingleProduct from "../../components/SingleProduct";
import { useEffect, useState } from "react";

const DashProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {

        fetch("https://bazar-control-server.onrender.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleDelete = id => {
        const proceed = confirm("Are you sure to delete this product");

        if (proceed) {
            fetch(`https://bazar-control-server.onrender.com/products/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Delete Success")
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }
    console.log(products);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center justify-items-center gap-4">
            {
                products.map(product => (
                    <SingleProduct product={product} key={product._id} handleDelete={handleDelete} />
                ))
            }
        </div>
    );
};

export default DashProducts;