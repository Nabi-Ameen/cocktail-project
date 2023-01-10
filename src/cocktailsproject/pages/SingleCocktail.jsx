import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: Image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name, Image,info, category, glass, instructions, ingredients,
          }
          setCocktail(newCocktail)

        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='text-2xl font-bold text-center'>no cocktail to display</h2>
  }
  const { name, Image, category, info, glass, instructions, ingredients } = cocktail;
  return (
    <section className='px-4 lg:px-20'>
      <div className='text-center py-6'>
        <button className='bg-blue-700 text-white text-sm px-4 py-1 rounded-sm mt-12'>
          <Link to='/'>back home</Link>
        </button>
        <h2 className='pt-4 text-lg font-medium'>{name}</h2>
      </div>
      <div className='grid md:grid-cols-2 py-4'>
        <img src={Image} alt={name} className="md:w-60 md:h-60 justify-self-end"/>
        <div className='space-y-3 px-4 pt-4 md:pt-2'>
          <p>
            <span className='bg-blue-300 px-2 mr-2'>name :</span>
            {name}
          </p>
          <p>
            <span className='bg-blue-300 px-2 mr-2'>category :</span>
            {category}
          </p>
          <p>
            <span className='bg-blue-300 px-2 mr-2'>info :</span>
            {info}
          </p>
          <p>
            <span className='bg-blue-300 px-2 mr-2'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='bg-blue-300 px-2 mr-2'>instructions :</span>
            {instructions}
          </p>

          <p>
            <span className='bg-blue-300 px-2 mr-2'>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span>: null
            })}
          </p>

        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
