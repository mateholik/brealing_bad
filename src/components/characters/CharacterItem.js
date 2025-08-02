import React from 'react';
import { Link } from 'react-router-dom'

const CharacterItem = ({ item }) => {
  return (
    <Link to={`/${item.char_id}`}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="card-back">
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor name: </strong>
                {item.portrayed}
              </li>
              <li>
                <strong>Nickname: </strong>
                {item.nickname}
              </li>
              <li>
                <strong>Birthday: </strong>
                {item.birthday}
              </li>
              <li>
                <strong>Status: </strong>
                {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CharacterItem