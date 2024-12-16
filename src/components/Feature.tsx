import Link from 'next/link'
import React from 'react'

export default function Feature() {
    return (
        <div>
            <section className="container py-4 bg-neutral-50 mb-20">
                <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-red-500 text-cyan-500 lg:mx-2"> Muhammad Taha Siddiqui : <br /><span className='lg:flex lg:justify-end'>Exploring Games Through Exciting Adventures and Challenges</span> </h2>
                <p className="text-center m-4 mt-4 text-sm text-slate-800 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
                    Muhammad Taha Siddiqui has always been captivated by the dynamic and immersive world of games. Through his writing, he embarks on a journey to explore the depths of gaming, unraveling complex mechanics and presenting them with clarity and thoughtfulness. His insights dive into the transformative impact of games on entertainment and culture, bridging the gap between gameplay elements and the player experience. By blending analysis, creativity, and curiosity, Taha&rsquo;s work offers readers a fresh perspective on how games shape the present and redefine the future of interactive entertainment.
                </p>
                <div className="mx-auto max-w-7xl px-5">
                    <h1 className="text-3xl font-bold text-center my-8 animate-color-change">Exploring Our Game Categories</h1>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 animate-fade-in-up delay-100">
                        {[
                            "Subway Surfers",
                            "Minecraft",
                            "Squad Busters",
                            "The Crew Motorfest",
                            "Free Fire",
                            "PUBG Mobile",
                            "Temple Run",
                            "Hill Climb Racing",
                            "Color Bump 3D Balls",
                            "Slither.io",
                            "Dragon City",
                            "Traffic Rider",
                        ].map((category, index) => (
                            <Link href={'../../Blog'} key={index}>
                                <div className="relative group px-2 py-6 bg-white rounded-lg shadow-lg hover:bg-blue-700 hover:text-white hover:border-none transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600">
                                    <p className="text-center text-sm font-serif">{category}</p>
                                    <div className="absolute inset-0 border-2 border-transparent rounded-lg transition duration-300 ease-in-out"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
                    Explore our wide array of gaming categories, offering a treasure trove of information and insights tailored to your passion for games. Each section features thoughtfully crafted blogs that dive into the latest gaming trends, iconic titles, and tips to enhance your skills. Whether you're a casual gamer, a competitive player, or simply curious about the gaming universe, there&rsquo;s something exciting waiting for you. Browse through the categories below to expand your knowledge and dive into the thrilling world of gaming.
                    </p>
            </section>
        </div>
    )
}
