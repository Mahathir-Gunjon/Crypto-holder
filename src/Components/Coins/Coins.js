import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto'>
            <div className="md:flex justify-between w-full mx-auto">
                <div className='w-full my-10 md:my-20'>
                    <h1 className='text-4xl font-semibold text-white'>Top {coins.length} coins you can invest</h1>
                </div>
                <div className='flex w-full h-6 my-10 md:my-20 p-5 justify-end'>
                    <div className="flex justify-center">
                        <div className="mb-3 md:w-80">
                            <div className="input-group relative flex items-stretch w-full mb-4">
                                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search crypto" aria-label="Search" aria-describedby="button-addon2" />
                                <button className="btn inline-block px-6 py-2.5 bg-indigo-900 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-indigo-900 hover:shadow-lg focus:bg-indigo-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                {
                    coins.map(coin => <CoinCard
                        key={coin.id}
                        coin={coin}
                    ></CoinCard>)
                }
            </div>
        </div>
    );
};

export default Coins;