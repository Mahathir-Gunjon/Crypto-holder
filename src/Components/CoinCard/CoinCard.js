import React from 'react';
import { Link } from 'react-router-dom';
import './coinCArd.css'

const CoinCard = ({ coin }) => {
    return (
        <div className='shadow-2xl p-4 m-3 w-full h-24 rounded bg-gray-800'>
            <Link to={`/coin-details/${coin.id}`}>
                <div className="flex justify-between card-info">
                    <div className="w-16 h-16">
                        <img src={coin.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h3 className='text-xl font-semibold text-white mb-3'>{coin.name}</h3>
                        <div className='flex card-info'>
                            <p className='text-xs text-gray-100'>{coin.symbol}</p>
                            <span className='mx-3 text-xl text-indigo-800'>|</span>
                            <p className='text-xs text-gray-100'>${coin.current_price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard;