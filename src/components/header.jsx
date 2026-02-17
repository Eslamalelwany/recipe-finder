import { Menu,Salad } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    const [open, setOpen] = useState(false)
    
    function handleOpen() {
        setOpen(prev => !prev)
    }

    return (
        <div className=" relative shadow-lg w-full flex justify-between  p-7 md:p-7  lg:pl-12 lg:pr-12  xl:pl-12 xl:pr-12 xl:p-6 items-center">
            <div className='flex justify-evenly'>
                <Salad fill='green' />
                <Link to='/'>
                <h2 className='text-green-800 font-bold ml-2.5'>Healthy Recipe finder</h2>
                </Link>
            </div>
            <div className='list-none lg:flex xl:flex hidden justify-evenly w-[350px] text-green-600 font-bold'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to = '/about'>
                <li>About</li>
                </Link>
                <Link to = '/recipes'>
                <li>Recipe</li>
                </Link>
            </div>
                <button className="bg-green-900 cursor-pointer rounded-xl justify-center p-3.5 w-40.5 text-white  lg:flex xl:flex hidden ">Browse recipes</button>
            <button onClick={handleOpen} className=' z-50 flex bg-zinc-400 rounded-lg p-1 lg:hidden xl:hidden'><Menu/></button>
            <div style={{visibility: open ? "visible" : "hidden"}} className= 'popup z-50 text-green-600 bg-white absolute flex flex-col rounded-2xl justify-evenly pl-7  list-none top-18 right-3 w-[300px] h-[200px] '>
                <Link to='/'>
                <li onClick={() => {
                    setOpen(false)
                }} >Home</li>
                </Link>
                <Link to = '/about'>
                <li onClick={() => {
                    setOpen(false)
                }}>About</li>
                </Link>

                <Link to='/recipes'>
                <li onClick={() => {
                    setOpen(false)
                }}>Recipe</li>
                </Link>
            </div>
        </div>
    )
}