import React from 'react';
import {Link} from 'react-router-dom'

const WorldNav = () => {
    return (
        <div className='world-nav'>
            <Link to="/world-map/2013">2013</Link> 
            <Link to="/world-map/2014">2014</Link> 
            <Link to="/world-map/2015">2015</Link> 
            <Link to="/world-map/2016">2016</Link> 
            <Link to="/world-map/2017">2017</Link> 
        </div>
    )
}

export default WorldNav;