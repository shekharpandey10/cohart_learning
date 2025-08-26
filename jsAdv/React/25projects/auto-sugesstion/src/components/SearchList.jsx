import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import List from './List'

function SearchList({ url }) {
  //   console.log(url)
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refindedValue, setRefinedValue] = useState([])
  console.log(refindedValue, 'refined')

  async function handleSearch(link) {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(link)
      if (response.ok) {
        const user = await response.json()
        if (user.users) {
          setData(user.users.filter((u) => u.firstname !== null))
        } else {
          setData([])
        }
        setLoading(false)
        setError(null)
      }
    } catch (e) {
      setError(e)

      console.log(error)
      setLoading(false)
    }
  }

  const handleRefineValue = (inputValue) => {
    let l
    if (inputValue !== '') {
       l = data.filter((d) =>
        d.firstName.toLowerCase().includes(inputValue.toLowerCase())
      )
    }
    setRefinedValue(l)
  }

  useEffect(() => {
    handleSearch(url)
  }, [url])
  useEffect(() => {
    handleRefineValue(inputValue)
  }, [inputValue])
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...{error}</div>
  return (
    <div>
      <input
        type='text'
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter the username'
        value={inputValue}
      />
      <ul>
        <List data={refindedValue} setInputValue={setInputValue} />
      </ul>
    </div>
  )
}

export default SearchList
