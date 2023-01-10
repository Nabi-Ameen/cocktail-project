import React from 'react'
import CocktailList from '../components/CocktailList'
import SeachForm from '../components/SearchForm'
const Home = () => {
  return (
    <main>
      <SeachForm />
      <CocktailList />
    </main>
  )
}

export default Home
