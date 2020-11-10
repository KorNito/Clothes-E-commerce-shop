import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props) {
    const [qty, setQty] = useState(1);
    const producDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = producDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        }
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart" + props.match.params.id + "?qty" + qty);
    }

    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Grįžti</Link>
            </div>
            {loading? <div>Kraunasi...</div>:
            error? <div>{error}</div>:
            (
                <><div className="details">
                <div className="details-image">
                    <img src={product.image} alt="produktas"/>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Žvaigždutės ({product.reviews} Įvertinimų)
                        </li>
                        <li>
                            Kaina: <b>€{product.price}</b> 
                        </li>
                        <li>
                            Aprašymas:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Kaina: €{product.price}
                    </li>
                    <li>
                        Statusas: {product.countInStock > 0 ? "Yra sandėlyje" :
                        "Nėra sandėlyje"} 
                    </li>
                    <li>
                        Kiekis: 
                        <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                            {[...Array(product.countInStock).keys()].map(x=>
                                <option key={x+1} value={x+1}>{x+1}</option>    
                            )}
                        </select>
                    </li>
                    <li>
                        {product.countInStock > 0 && <button className="button" onClick={handleAddToCart}>Pridėti į krepšelį</button>
                        }
                    </li>
                </ul>
            </div></> 
            )}
            
        </div>
    ) 
    
}

export default ProductScreen;