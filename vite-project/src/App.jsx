import React from 'react'
import Header from './containers/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemList from './containers/ItemList/ItemList'
import ItemDetails from './containers/ItemDetails/ItemDetails'
import FormPage from './containers/FormPage/FormPage'
import Man from './containers/Filter/Man/Man'
import Jawelery from './containers/Filter/Jawelery/Jawelery'
import Woman from './containers/Filter/Woman/Woman'
import Electronic from './containers/Filter/Electronic/Electronic'
import './App.css'
import Complete from './containers/Complete/Complete'
import Footer from './containers/Footer/Footer'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>

        <Route path="/" element={<ItemList />} />
        <Route path="/man-clothing" element={<Man />} />
        <Route path="/jawelery" element={<Jawelery />} />
        <Route path="/electronics" element={<Electronic />} />
        <Route path="/women-clothing" element={<Woman />} />
        <Route path="/product/:productId" element={<ItemDetails />} />
        <Route path="/form-page" element={<FormPage />} />
        <Route path="/form-page-complete" element={<Complete />} />
        <Route>Error</Route>

      </Routes>

      <Footer />

    </Router>

  )
}

export default App