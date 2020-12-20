import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Spinner from './../ui/Spinner'

const SinglePage = ({ items }) => {
  const { id } = useParams()
  const item = items.filter(item => {
    return item.char_id == id.substring(1)
  })

  const [quote, setQuote] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchQuote = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/quotes/${id.substring(1)}`)
      setQuote(result.data[0].quote)
      setIsLoading(false)
    }
    fetchQuote()
  }, [])

  return (
    <div className="single-page">
      <div className="left">
        <p>
          <span className="soft">Name:</span>
          <span className="white">{item[0].name}</span>
        </p>
        <p>
          <span className="soft">Nickname:</span>
          <span className="white">{item[0].nickname}
          </span>
        </p>
        <p>
          <span className="soft">Birthday:</span>
          <span className="white">{item[0].birthday}</span>
        </p>
        <p>
          <span className="soft">Actor:</span>
          <span className="white">{item[0].portrayed}</span>
        </p>
        <p>
          <span className="soft">Status:</span>
          <span className="white">{item[0].status}</span>
        </p>
        <div className="quote">
          {isLoading ? <Spinner /> : <q>{quote}</q>}
        </div>
      </div>
      <div className="right">
        <img src={item[0].img} alt="image" />
      </div>
    </div>
  )
}

export default SinglePage