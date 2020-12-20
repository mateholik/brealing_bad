import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Search from './components/ui/Search'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import SinglePage from './components/characters/SinglePage'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
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
        <Route path="/" exact render={props => (
          <div>
            <Search getQuery={onSearch} />
            <CharacterGrid items={items} isLoading={isLoading} />
          </div>
        )} />
        <Route path="/:id" render={(props) => <SinglePage items={items} />} />
      </Router>
    </div>
  );
}

export default App;
