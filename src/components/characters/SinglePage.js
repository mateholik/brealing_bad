import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from './../ui/Spinner'

const SinglePage = ({ items }) => {
  const { id } = useParams()
  const item = items.find(item => item.char_id === parseInt(id))

  const [quote, setQuote] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const result = await axios.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
        if (result.data && result.data.length > 0) {
          setQuote(result.data[0].quote)
        }
      } catch (error) {
        console.error('Error fetching quote:', error)
        setQuote('No quote available')
      } finally {
        setIsLoading(false)
      }
    }
    fetchQuote()
  }, [id])

  if (!item) {
    return <div>Character not found</div>
  }

  return (
    <div className="single-page">
      <div className="left">
        <p>
          <span className="soft">Name:</span>
          <span className="white">{item.name}</span>
        </p>
        <p>
          <span className="soft">Nickname:</span>
          <span className="white">{item.nickname}</span>
        </p>
        <p>
          <span className="soft">Birthday:</span>
          <span className="white">{item.birthday}</span>
        </p>
        <p>
          <span className="soft">Actor:</span>
          <span className="white">{item.portrayed}</span>
        </p>
        <p>
          <span className="soft">Status:</span>
          <span className="white">{item.status}</span>
        </p>
        <div className="quote">
          {isLoading ? <Spinner /> : <q>{quote}</q>}
        </div>
      </div>
      <div className="right">
        <img src={item.img} alt={item.name} />
      </div>
    </div>
  )
}

export default SinglePage