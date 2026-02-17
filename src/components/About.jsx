import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-[#1e4d3c] text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About Healthy Recipe Finder
                    </h1>
                    <p className="text-lg md:text-xl text-green-100">
                        Your trusted companion for quick, healthy, and delicious meals
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                
                {/* Our Story */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#2d4a3e] mb-4">Our Story</h2>
                    <div className="bg-white rounded-lg shadow p-6 text-gray-700 leading-relaxed">
                        <p className="mb-4">
                            Healthy Recipe Finder was born from a simple idea: eating healthy shouldn't be complicated or time-consuming. We understand that modern life is busy, and finding nutritious meals that fit your schedule can be challenging.
                        </p>
                        <p>
                            That's why we've curated a collection of wholesome recipes that are not only good for you but also quick to prepare and absolutely delicious. Each recipe is designed with real-life schedules in mind.
                        </p>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#2d4a3e] mb-4">Our Mission</h2>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <span className="text-3xl">🥗</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Wholesome Ingredients</h3>
                                    <p className="text-sm text-gray-600">
                                        We focus on whole-food ingredients that nourish your body and support your wellness goals.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <span className="text-3xl">⏱️</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Time-Efficient</h3>
                                    <p className="text-sm text-gray-600">
                                        All our recipes are designed to fit busy schedules with minimal prep and cook times.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <span className="text-3xl">😋</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Delicious Taste</h3>
                                    <p className="text-sm text-gray-600">
                                        Healthy eating should be enjoyable. Our recipes prove that nutritious can also be tasty.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <span className="text-3xl">📖</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Easy to Follow</h3>
                                    <p className="text-sm text-gray-600">
                                        Clear instructions and simple techniques make cooking accessible for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Offer */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#2d4a3e] mb-4">What We Offer</h2>
                    <div className="bg-white rounded-lg shadow p-6">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span><strong>Curated Recipe Collection:</strong> Eight carefully selected recipes covering breakfast, lunch, dinner, and snacks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span><strong>Smart Filtering:</strong> Find recipes by prep time, cook time, or search by name and ingredients</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span><strong>Detailed Instructions:</strong> Step-by-step guidance with serving sizes and timing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span><strong>Nutritional Focus:</strong> Emphasis on whole foods, plant-based proteins, and balanced nutrition</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-green-50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-[#2d4a3e] mb-4">
                        Ready to Start Your Healthy Eating Journey?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Browse our collection of delicious, wholesome recipes and discover how easy healthy eating can be.
                    </p>
                    <Link to = '/recipes'>
                    <button className="bg-[#1e4d3c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d5a47] transition-colors">
                        Browse Recipes
                    </button>
                    </Link>
                </section>
            </div>
        </div>
    )
}