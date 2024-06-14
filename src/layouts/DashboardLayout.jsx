import { TiThMenuOutline } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <div className="w-full bg-black text-white p-2 lg:hidden">
                <label htmlFor="my-drawer-2" className="btn text-2xl lg:hidden"> <TiThMenuOutline /> </label>
            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li> <Link to={"dashboard/all-products"}>All Products</Link> </li>
                        <li> <Link to={"dashboard/add-product"}>Add Products</Link> </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;