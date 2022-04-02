import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <div className='crypto-bg flex justify-start'>
                <div className='w-11/12 mx-auto md:w-9/12'>
                    <div >
                        <h1 className='text-4xl md:text-5xl font-bold text-white mt-16 md:mt-28'>Welcome to the crypto house<span className='text-4xl text-indigo-500'>!!</span></h1>
                    </div>
                    <div className='mt-5 flex justify-start'>
                        <Link to='/coins'>
                            <button type="button" class="py-3 px-4 text-white font-semibold rounded bg-gradient-to-r from-indigo-900 to-indigo-500 hover:from-indigo-700 hover:to-indigo-800 ...">
                                Explore Crypto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-11/12 md:7/12 py-20 grid grid-cols-1 md:grid-cols-2 mx-auto info">
                <div className='w-4/6 mx-auto'>
                    <img className="w-full" src='https://images.ctfassets.net/c5bd0wqjc7v0/5o0IbUnXunFKmiSC31gK6j/c9da092eda3ebc34941dfa3d107437f4/Type_Circles_4x.png?fl=progressive&q=100&w=560' alt="" />
                </div>
                <div className='text-white w-full'>
                    <h1 className="text-6xl  my-10">Crypto is the future</h1>
                    <p className='text-xl to-slate-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nulla reprehenderit, veniam vel nisi molestiae ab libero commodi earum repellat nam aliquam cumque.</p>
                    <button type="button" className="py-3 px-4  my-10 text-white font-semibold rounded bg-gradient-to-r from-indigo-900 to-indigo-500 hover:from-indigo-700 hover:to-indigo-800 ...">
                        learn more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;