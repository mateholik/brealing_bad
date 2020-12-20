import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className="search">
      <form>
        <input value={text} onChange={(e) => onChange(e.target.value)} autoFocus type="text" className="form-control" placeholder="Search characters" />
      </form>
    </section>
  )
}

export default Search