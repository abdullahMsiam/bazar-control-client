
const AddProduct = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const color = form.color.value;
        const in_stock = form.stock.value;
        const image_url = form.image.value;

        const product = { name, brand, price, description, color, in_stock, image_url }
        console.log(name, brand, price, description, color, in_stock, image_url);
        console.log(product);

        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">Add a product</h1>
            <div className="card shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Brand Name</span></label>
                        <input name="brand" type="text" placeholder="brand name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Description</span></label>
                        <input name="description" type="text" placeholder="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Color</span></label>
                        <input name="color" type="text" placeholder="color name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">In stock</span></label>
                        <input name="stock" type="text" placeholder="true/false" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input name="price" type="number" placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Image Url</span></label>
                        <input name="image" type="text" placeholder="image url" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-outline bg-white" type="submit" value="Add The product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;