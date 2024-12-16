import React from 'react'
import BlogCard from './BlogCard'

export default function Mega() {
    const posts = [
        {
            id: '1',
            title: 'Subway Surfers',
            description: 'Subway Surfers: A popular endless runner game where you dodge trains, collect coins, and enjoy thrilling chases !',
            date: '2024-12-18',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfCJ9hkLPQM8CLC9wk5j8rUjD5xqY9NrYmcRPMnfbocLMXEnpi8xR2_R8eeyMN_x12lg&usqp=CAU',
        },
        {
            id: '2',
            title: 'Minecraft',
            description: 'Minecraft: A creative sandbox game where you can build, explore, and survive in an endless blocky world of adventure !',
            date: '2024-12-02',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT267_qKvQELVjHnEQSPuT15iwcvAHmVd4zTXf59vjFI1W_k9cGyGDCC1HdjmR3DzDzpN4&usqp=CAU',
        },
        {
            id: '3',
            title: 'Squad Busters',
            description: 'Squad Busters: A fast-paced, action-packed game where you build a powerful squad and engage in intense battles to defeat your enemies !',
            date: '2024-12-03',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOy-JJ5oFOvBZM6nA8qwMSAwAw8kqptRAf7ii2A_O6wNBqJ0cv4aHVDnwjk-jRNK64AA&usqp=CAU',
        },
        {
            id: '4',
            title: 'The Crew Motorfest',
            description: 'The Crew Motorfest: An open-world racing game where you explore vibrant locations, compete in thrilling races, and customize your dream cars !',
            date: '2024-12-04',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQ8wzr6kz-YjMHsqFfvLq59eOEajyQDImxsqOOuZYIt3J7GjWCElYUpUTgjQjeQT3E64&usqp=CAU',
        },
        {
            id: '5',
            title: 'Free Fire',
            description: 'Free Fire: A battle royale game where you fight to be the last one standing, with intense action, strategic gameplay, and quick matches !',
            date: '2024-12-05',
            imageUrl: 'https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg',
        },
        {
            id: '6',
            title: 'PUBG Mobile',
            description: 'PUBG Mobile: A popular battle royale game where you fight against players worldwide, survive intense combat, and aim to be the last one standing !',
            date: '2024-12-06',
            imageUrl: 'https://i0.wp.com/www.insidexbox.de/wp-content/uploads/2018/03/pubg-mobile-01.jpg?w=1300&ssl=1',
        },
        {
            id: '7',
            title: 'Temple Run',
            description: 'Temple Run: An exciting endless runner game where you race through ancient temples, avoid obstacles, and collect coins while escaping from dangerous creatures !',
            date: '2024-12-07',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Temple_Run_logo.png/250px-Temple_Run_logo.png',
        },
        {
            id: '8',
            title: 'Hill Climb Racing',
            description: 'Hill Climb Racing: A fun and addictive physics-based driving game where you navigate challenging terrains, upgrade vehicles, and aim for the highest score !',
            date: '2024-12-08',
            imageUrl: 'https://store-images.microsoft.com/image/apps.18483.9007199266379485.0000ad5a-1400-4539-b79a-62b2b9248545.0ac4e475-8d4b-42bb-8723-14576cb8e50a?h=720',
        },
        {
            id: '9',
            title: 'Color Bump 3D Balls',
            description: 'Color Bump 3D Balls: A fun and challenging arcade game where you control a ball, avoid obstacles, and navigate through colorful levels !',
            date: '2024-12-09',
            imageUrl: 'https://store-images.s-microsoft.com/image/apps.55338.14483840375196682.a3d6954f-f6e6-4c07-b284-ca1962e5217b.ca72d904-e984-44e7-8c95-fd96911e4319?h=720',
        },
        {
            id: '10',
            title: 'Slither.io',
            description: 'Slither.io: A fun and addictive multiplayer game where you control a snake, eat pellets to grow longer, and outsmart opponents to become the biggest on the board !',
            date: '2024-12-10',
            imageUrl: 'https://m.media-amazon.com/images/I/81A9FtePrYL.png',
        },
        {
            id: '11',
            title: 'Dragon City',
            description: 'Dragon City: A strategy game where you build your own dragon empire, breed powerful dragons, and battle to become the ultimate dragon master !',
            date: '2024-12-11',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzi7nqf8yycX8Ds1yYqLSox53U07k3099kgw&s',
        },
        {
            id: '12',
            title: 'Traffic Rider',
            description: 'Traffic Rider: A thrilling motorcycle racing game where you speed through traffic, complete missions, and unlock powerful bikes !',
            date: '2024-12-12',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4w9KaesHSig5_7wu53ar9mVP9eE3BhLaz4wJuNrL5hAf8XK0qxho99QNB6RGyzHJsOY&usqp=CAU',
        },
    ];
    return (
        <div className='my-8 container'>
            <h1 className='text-5xl font-bold text-center text-red-600 animate-color-change my-8'>Impact of Technology on Modern Society</h1>
            <div className='mx-2 hover:mx-2 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {posts.map((post, index) => (
                    <div className="fade-in" key={post.id} >
                        <div className="blog-card h-full">
                            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
