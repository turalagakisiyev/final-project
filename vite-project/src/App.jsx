import React from 'react'
import Header from './containers/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemList from './containers/ItemList/ItemList'
import ItemDetails from './containers/ItemDetails/ItemDetails'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes><Route path="/" element={<ItemList />} />
        <Route path="/product/:productId" element={<ItemDetails />} />
        <Route>Error</Route></Routes>


    </Router>

  )
}

export default App