import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import { Landing } from './Landing'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Landing />
            <Footer />
        </div>
    )
}

export default Home
