import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import { Slider } from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footers from '../components/Footers'


const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar /> 
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footers />
    </div>
  )
}

export default Home