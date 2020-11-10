import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen (props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Grįžti</Link>
            </div>
            <div className="details">
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
                        Statusas: {product.status}
                    </li>
                    <li>
                        Kiekis: 
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </li>
                    <li>
                        <button className="button">Pridėti į krepšelį</button>
                    </li>
                </ul>
            </div>
        </div>
    ) 
    
}

export default ProductScreen;