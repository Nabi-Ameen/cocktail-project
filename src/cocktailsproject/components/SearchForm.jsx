import React from 'react'
import { useGlobalContext } from '../../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  },[])
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleChange = (e) => {
    e.preventDefault()
  }

  return (
    <section className='bg-white/70 shadow-md px-4 md:w-1/2 lg:w-1/3 rounded-md p-8 mx-auto my-6'>
      <form onSubmit={handleChange}>
        <div className='flex flex-col space-y-3 text-center'>
          <label htmlFor="name" className='text-md text-gray-700 font-medium'>search your favorite cocktail</label>
          <input type="text" id='name' ref={searchValue}
            onChange={searchCocktail}
            className="py-2 px-2 focus:bg-slate-200 outline-none rounded-md text-md ring-2 ring-slate-200"
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
