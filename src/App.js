import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Search from './components/ui/Search'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import SinglePage from './components/characters/SinglePage'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        setItems(result.data)
      } catch (error) {
        console.error('Error fetching characters:', error)
        setItems([])
      } finally {
        setIsLoading(false)
      }
    }
    fetchItems()
  }, [query])

  const onSearch = (q) => {
    setIsLoading(true)
    setQuery(q)
  }

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <Search getQuery={onSearch} />
              <CharacterGrid items={items} isLoading={isLoading} />
            </div>
          } />
          <Route path="/:id" element={<SinglePage items={items} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
