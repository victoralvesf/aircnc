import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);
        }

        loadSpots();
    }, []);

    return (
        <>
            {spots.length > 0 ? (
                <ul className="spotList">
                    {spots.map(spot => (
                        <li key={spot._id}>
                            <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}}/>
                            <strong>{spot.company}</strong>
                            <span>{spot.price ? `R$${spot.price}/dia` : 'Gratuito'}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum spot cadastrado!</p>
            )}

            <Link to="/new" className="addSpot">
                <button className="loginButton">Adicionar Spot</button>
            </Link>
        </>
    );
}
