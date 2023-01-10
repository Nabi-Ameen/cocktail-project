import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails)

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='text-lg font-medium text-gray-700 text-center mt-20'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='px-4 lg:px-20'>
      <h2 className='text-2xl font-bold text-center py-6'>cocktails</h2>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
