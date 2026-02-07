import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import MyListing from './pages/MyListing'
import ListingDetails from './pages/ListingDetails'
import ManageListing from './pages/ManageListing'
import Messages from './pages/Messages'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Marketplace' element={<Marketplace/>}/>
        <Route path='/my-listings' element={<MyListing/>}/>
        <Route path='/listings/:listingId' element={<ListingDetails/>}/>
        <Route path='/create-listings' element={<ManageListing/>}/>
        <Route path='/edit-listings/:id' element={<ManageListing/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
        <Route path='/loading' element={<Loading/>}/>

        
      </Routes>
    </div>
  )
}

export default App
