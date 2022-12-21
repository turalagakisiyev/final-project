import React from 'react'
import Header from './containers/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemList from './containers/ItemList/ItemList'
import ItemDetails from './containers/ItemDetails/ItemDetails'
import FormPage from './containers/FormPage/FormPage'
import Man from './containers/Filter/Man/Man'
import Jawelery from './containers/Filter/Jawelery/Jawelery'

const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>

        <Route path="/" element={<ItemList />} />
        <Route path="/man-clothing" element={<Man />} />
        <Route path="/jawelery" element={<Jawelery />} />
        <Route path="/product/:productId" element={<ItemDetails />} />
        <Route path="/form-page" element={<FormPage />} />
        <Route>Error</Route>

      </Routes>


    </Router>

  )
}

export default App