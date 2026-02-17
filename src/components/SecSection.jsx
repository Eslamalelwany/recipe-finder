import { Search, Carrot, HeartPulse  } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function SecSection() {
    return (
        <div className='w-full pb-6 lg:p-16 xl:p-16 md:p-16 '>
            {/* first section */}
            <div className="w-full p-5.5 md:p-8 flex  flex-col  justify-evenly lg:justify-evenly lg:items-center h-65 md:h-65 lg:h-50 xl:h-50">
                <h2 className=" text-4xl md:text-6xl lg:text-6xl xl:text-6xl  text-green-900 font-extrabold  ">Healthy meals, zero fuss</h2> 
                <p className=" md:text-2xl mt-4 xl:text-xl lg:text-lg -p-10 text-green-600 mb-4 leading-relaxed">Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.</p>
                <Link to= '/recipes'>
                <button className="bg-green-900 cursor-pointer rounded-xl  p-3.5 w-40.5 text-white ">Start exploring</button>
                </Link>
            </div>

            <img className="rounded-2xl mt-7 border-6 border-white  md:ml-auto md:mr-auto md:w-[700px] md:mt-20 md:h-[400px] lg:w-[800px] lg:h-[500px] xl:w-[800px] xl:h-[600px] lg:mt-9 xl:mt-9" src= "/Images/dose-juice-sTPy-oeA3h0-unsplash (1).jpg" alt="" />
                <h2 className=' text-[#2d4a3e] p-5.5 text-4xl font-bold lg:text-center xl:text-center mt-16'>What you'll get</h2>
            <div className='w-full flex flex-col lg:flex-row xl:flex-row justify-around lg:items-center xl:items-center h-[576px] lg:h-[231px] xl:h-[231px] p-5.5 md:p-8'>
                {/* 1 */}
                <div className='flex  justify-center flex-col p-2 lg:w-[400px] xl:w-[400px] '>
                    <div className='p-2 bg-white w-fit  rounded-2xl shadow '><Carrot fill='orange' size={40}/></div>
                    <h2 className='head-sec'>Whole-food recipes</h2>
                    <p className='para-sec w-[80%]'>Each dish uses everyday, unprocessed ingredients.</p>
                </div>
                {/* 2 */}
                <div className='flex justify-center  flex-col p-2 lg:w-[400px] xl:w-[400px] '>
                    <div className='p-2 bg-white w-fit rounded-2xl shadow'><HeartPulse fill='red' size={40}/></div>
                    <h2 className='head-sec'>Minimum fuss</h2>
                    <p className='para-sec w-[80%]'>All recipes are designed to make eating healthy quick and easy.</p>
                </div>
                {/* 3 */}
                <div className=' flex justify-center flex-col p-2 lg:w-[400px] xl:w-[400px] '>
                    <div className='p-2 bg-white  rounded-2xl w-fit  shadow'><Search fill='purple' size={40}/></div>
                    <h2 className='head-sec'>Search in seconds</h2>
                    <p className='para-sec w-[80%]'>Filter by name or ingredient and jump straight to the recipe you need.</p>
                </div>
                
            </div>
            {/* build real lifee section */}
            <div className='flex flex-col lg:flex-row xl:flex-row w-full  lg:mt-16 xl:mt-16 lg:justify-evenly xl:justify-evenly p-5  '>
                <div className='flex flex-col justify-center lg:w-[30%]  xl:w-[30%]'> 
                    <h1 className=' mr-auto text-[#2d4a3e] text-4xl font-bold lg:text-center xl:text-center'>Built for real life</h1>
                    <p className='para-sec mt-2 lg:w-[70%] xl:w-[80%] '>Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.</p>
                    <p className='para-sec mt-2 lg:w-[50%] xl:w-[80%] '>Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
                </div>
                <div className='w-full  lg:w-[50%] xl:w-[40%] '>
                    <img className="rounded-2xl mt-9 md:w-[100%] md:ml-auto md:mr-auto  md:h-[500px] lg:w-[450px] lg:h-[350px] xl:w-[450px] xl:h-[350px] lg:mt-0 xl:mt-0" src="/Images/kevin-doran-m1meZgcUYEk-unsplash (1).jpg" alt="" />
                </div>

            </div>
                {/* end of page */}
                <div className='bg-[#e5f1ec] mt-10 w-[95%] m-auto p-7 flex flex-col justify-around rounded-2xl items-center h-[300px] md:h-[200px]'>
                    <h2 className='mr-auto text-[#2d4a3e] text-3xl font-bold md:m-auto'>Ready to Cook smarter?</h2>
                    <p className='para-sec mt-2 p-2'>Hit the button, pick a recipe, and get dinner on the table--fast.</p>
                    <Link to='/recipes'>
                        <button className="bg-[#2d4a3e] cursor-pointer rounded-xl p-3 text-xs  text-white ">Browse recipes</button>
                    </Link>
                </div>
        </div>
    )
}
