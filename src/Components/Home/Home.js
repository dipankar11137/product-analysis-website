
import { Link } from 'react-router-dom';

import watch from '../../Picture/Apple_Watch_Series_6.jpg'
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useProducts();
    console.log(products.slice(0, 3));

    return (
        <div className='container mt-5 p-3'>
            <div className='row '>
                <div className='col-lg-6 col-12'>
                    <div className='watch-details-style'>
                        <h1>Your Next Watch</h1>
                        <h2>Your Best Watch</h2>
                        <p>A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides for management and telemetry</p>
                        <button className='btn-style'>Live Demo</button>
                    </div>
                </div>
                <div className='col-lg-6 col-12 watch-style shadow-lg mb-3'>
                    <img className='w-75' src={watch} alt="" />
                </div>
            </div>
            <br />
            < hr />
            <div className='mt-5'>
                <h1 className='fw-bold'>Customer Reviews </h1>
                <div className='products-container'>
                    {
                        (products.slice(0, 3)).map(product => <Cart key={product.id} product={product}></Cart>)
                    }
                </div>

                <nav className=' btn-style btn mt-3 mb-5'>
                    <Link to="/reviews">Show All Reviews</Link>
                </nav>

            </div>

        </div>
    );
};

export default Home;