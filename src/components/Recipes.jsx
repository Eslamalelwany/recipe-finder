import { FirstSlice } from "./features/FirstSlice"
import {  useSelector } from "react-redux"

import { Search } from 'lucide-react'
import { useState } from "react"

export default function Recipes() {
    const [searchValue, setSearchValue] = useState("")
    const [maxPrepTime, setMaxPrepTime] = useState("")
    const [maxCookTime, setMaxCookTime] = useState("")
    const [inst ,setInst ] = useState([])
    const [openModal, setOpenModal] =useState(false)
    // function to check recipe id 
    function WichOne(id) {
        
        let filtering = recipes.find((e) => {
            return e.id === id
        })
        console.log(filtering)
        setInst(filtering)
    }
    
    console.log(inst)


let {recipes} = useSelector((state) => {
    return state.recipes
})

const filteredRecipes = recipes.filter((recipe) => {
    let searchFilter = recipe.title.toLowerCase().includes(searchValue.toLowerCase())

 // Prep time filter - only apply if selected
    let maxPrep = maxPrepTime === "" ? true : recipe.prepTime === maxPrepTime
    
    // Cook time filter - only apply if selected
    let maxCook = maxCookTime === "" ? true : recipe.cookTime === maxCookTime

    return searchFilter && maxPrep && maxCook
})

console.log(filteredRecipes)

console.log(recipes)



    return (
        <div>
            {/* intro */}
            <div className="py-12 px-6 text-center relative">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl  font-bold text-[#2d4a3e] mb-4">
                    Explore our simple, healthy recipes
                </h1>
                <p className="text-[#8b9199] text-xs md:text-xl lg:text-xl xl:text-xl max-w-3xl mx-auto leading-relaxed">
                    Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.
                </p>
            </div>

            {/* filter Tools */}
            <div className=" w-[90%] m-auto flex flex-col lg:flex-row md:flex-row xl:flex-row justify-between md:items-center lg:items-center xl:items-center">
                
                {/* Selection Div */}
                {/* prep */}
                <div className="flex flex-col  lg:flex-row md:flex-row xl:flex-row  w-35  md:w-70  lg:w-90 xl:w-70 justify-evenly h-27 md:h-10 lg:h-10 xl:h-10 ml-3.5 ">
                    <select value={maxPrepTime} onChange={(e) => setMaxPrepTime(e.target.value)} name="" id="" className="bg-white text-xs text-[#2d4a3e] p-1.5" >
                    <option value="">Max Prep Time</option>
                    <option value="5 Mins">5 Mins</option>
                    <option value="10 Mins">10 Mins</option>
                </select>

                {/* cook */}
                <select value={maxCookTime} onChange={(e) => setMaxCookTime(e.target.value)} name="" id="" className="bg-white text-[#2d4a3e] text-xs p-1.5" >
                <option value="">Max Cook Time</option>
                <option value="5 Mins">5 Mins</option>
                <option value="10 Mins">10 Mins</option>
                <option value="15 Mins">15 Mins</option>
                <option value="20 Mins">20 Mins</option>
                </select>
                </div>

                {/* search bar */}
                <div className="relative max-w-md p-2.5 md:w-70  lg:w-90 xl:w-80  ">
                    <Search className="absolute left-3 top-1/2  -translate-y-1/2 w-5 h-5 text-gray-400 pl-1.5"  />
                
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        type="text"
                        placeholder="Search by name or ingredient..."
                        className="w-full bg-white  pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
                    />
                </div>

            </div>

            {/* recipes*/}
    <div className="min-h-screen py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto ">
        { filteredRecipes.length === 0 ? 
            (<div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No recipes found</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
            </div>)
        :filteredRecipes.map((r) => {
        return (
        <div 
            key={r.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
            {/* image */}
            <div className="w-full aspect-[4/3] overflow-hidden ">
                <img 
                src={r.image} 
                alt={r.title} 
                className="w-full p-2.5 rounded-2xl h-full object-cover object-center"
                />
            </div>
            
            {/* content */}
            <div className="p-6 flex flex-col flex-grow">
                {/*  title */}
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                {r.title}
                </h2>
                
                {/* description */}
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                {r.description}
                </p>
                
                {/* info */}
                <div className="text-sm text-gray-600 mb-4 space-y-2">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                    👥 Servings: {r.servings}
                    </span>
                    <span className="flex items-center gap-1.5">
                    ⏱️ Prep: {r.prepTime}
                    </span>
                </div>
                <span className="flex items-center gap-1.5">
                    🍳 Cook: {r.cookTime}
                </span>
                </div>
                
                {/* button */}
                <button onClick={() => {
                    WichOne(r.id)
                    setOpenModal(true)
                }} className="w-full bg-[#1e4d3c] text-white py-3 rounded-xl font-semibold hover:bg-[#2d5a47] transition-colors mt-auto">
                View Recipe
                </button>
            </div>
        </div>
        )
        })}
    </div>
    </div>
{/* modal section */}
    {/* overlay */}
    <div style={{display: openModal === true ? "flex" : "none"}} className="fixed inset-0  bg-[#0000008a] flex items-center justify-center z-20 p-4">
        
        {/* container */}
        <div className=" lg:w-[50%] xl:w-[50%] rounded-xl overflow-y-scroll h-[600px] bg-gray-50  p-5">
<div className="max-w-3xl mx-auto space-y-6">
    {/* Ingredients Section */}
    <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-sm font-semibold text-gray-800 mb-2">
        🥗 Ingredients
    </h3>
    <ul className="space-y-1 text-xs">
        {inst.length === 0 ? <div>hello</div> : inst.ingredients.map((ingredient, index) => (
        <li key={index} className="text-gray-700 flex items-start gap-2">
            <span className="text-green-600">•</span>
            <span>{ingredient}</span>
        </li>
        ))}
    </ul>
    </div>

    {/* Instructions Section */}
    <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-sm font-semibold text-gray-800 mb-2">
        👨‍🍳 Instructions
    </h3>
    <ol className="space-y-2 text-xs">
        {inst.length === 0 ? <div>hello</div> :   inst.instructions.map((step, index) => (
        <li key={index} className="text-gray-700 flex gap-2">
            <span className="flex-shrink-0 w-5 h-5 bg-[#2d4a3e] text-white rounded-full flex items-center justify-center text-xs">
            {index + 1}
            </span>
            <span>{step}</span>
        </li>
        ))}
    </ol>
    </div>
</div>
    <button
    className=" ml-5.5  md:ml-8.5 lg:ml-auto lg:mr-auto xl:ml-auto xl:mr-auto mt-7 bg-green-900 cursor-pointer rounded-xl justify-center p-2.5 w-[80%] text-white  "
        onClick={() => {
        setOpenModal(false)
        }}>Close
    </button>
</div>
    </div>

</div>
)
}

