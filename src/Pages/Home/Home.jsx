import React from 'react';
import SidebarTop from '../../Components/SidebarTop/SidebarTop';
import Homes from '../../Components/Home/Home';
const Home = () => {
    return (
        <div className='home'>

            <div className="container">
                <SidebarTop/>

                <Homes/>
            </div>

        </div>
    );
}

export default Home;
