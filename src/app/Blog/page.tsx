import React from 'react'
import BlogCard from "@/components/BlogPageCard"

export default function Blog() {
    const posts = [
        {
            id: '4',
            title: 'The Crew Motorfest',
            description: 'One of the key attractions of The Crew Motorfest is its ability to bring players together in a vast, vibrant open world filled with thrilling racing experiences. This connectivity fosters a sense of community, allowing players to compete, collaborate, and explore stunning locations. Additionally, The Crew Motorfest unlocks new possibilities with its immersive gameplay, offering a blend of high-speed action, customization, and diverse challenges that redefine the racing game genre.',
            date: '2024-12-04',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQ8wzr6kz-YjMHsqFfvLq59eOEajyQDImxsqOOuZYIt3J7GjWCElYUpUTgjQjeQT3E64&usqp=CAU',
        },
        {
            id: '8',
            title: 'Hill Climb Racing',
            description: 'One of the most significant impacts of **Hill Climb Racing** is the transformation of mobile gaming into a highly engaging and accessible experience. The game allows players to race across a variety of terrains, offering the freedom to explore different environments and vehicles. As players advance, they can unlock new levels, vehicles, and upgrades, keeping the game fresh and exciting. However, this transition also brings challenges, including balancing difficulty levels, ensuring smooth gameplay, and maintaining player interest through new content and updates. The game has reshaped the way we think about casual mobile gaming, creating new opportunities for creative gameplay and player engagement.',
            date: '2024-12-08',
            imageUrl: 'https://store-images.microsoft.com/image/apps.18483.9007199266379485.0000ad5a-1400-4539-b79a-62b2b9248545.0ac4e475-8d4b-42bb-8723-14576cb8e50a?h=720',
        },
        {
            id: '5',
            title: 'Free Fire',
            description: 'The importance of strategy and teamwork in Free Fire extends beyond just winning matches, shaping how players approach challenges and build their skills. Gamers who prioritize communication and smart tactics not only improve their performance but also stand out in the competitive gaming scene. Emerging updates and features like new characters, weapons, and maps add depth to the gameplay, offering fresh opportunities for players to innovate and dominate the battlefield.',
            date: '2024-12-05',
            imageUrl: 'https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg',
        },
        {
            id: '2',
            title: 'Minecraft',
            description: 'One of the key areas of focus in Minecraft is resource management and building critical infrastructure, such as power systems, water channels, and defense mechanisms. These elements are vital for survival and progression in the game, making them targets for challenges like mob attacks or environmental hazards. Players must adopt advanced strategies to protect their creations and thrive in this blocky world. Additionally, as Minecraft evolves, the use of redstone mechanics and command blocks introduces complex systems that mimic real-world technologies, inspiring creativity and innovation in building secure, efficient structures.',
            date: '2024-12-02',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT267_qKvQELVjHnEQSPuT15iwcvAHmVd4zTXf59vjFI1W_k9cGyGDCC1HdjmR3DzDzpN4&usqp=CAU',
        },
        {
            id: '1',
            title: 'Subway Surfers',
            description: 'The impact of Subway Surfers extends beyond just being a game; it has become a cultural phenomenon in mobile gaming. Its vibrant visuals, endless running mechanics, and engaging gameplay blur the line between casual entertainment and competitive challenges. The game fosters innovation in the gaming industry, inspiring countless similar titles while setting benchmarks for accessibility and design. Moreover, Subway Surfers’ global popularity has brought diverse communities together, creating a shared gaming experience. However, its widespread reach also highlights the digital divide, as not everyone globally has equal access to enjoy such interactive entertainment.',
            date: '2024-12-18',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfCJ9hkLPQM8CLC9wk5j8rUjD5xqY9NrYmcRPMnfbocLMXEnpi8xR2_R8eeyMN_x12lg&usqp=CAU',
        },
        {
            id: '6',
            title: 'PUBG Mobile',
            description: 'PUBG Mobile’s ability to revolutionize the gaming industry through immersive experiences and strategic gameplay is one of its most transformative aspects. For instance, its realistic battle royale mode provides end-to-end engagement, ensuring players are constantly challenged to refine their skills and strategies. Similarly, the introduction of customizable skins and seasonal events opens up new opportunities for personalization and keeps the gaming experience fresh and exciting. The rise of esports tournaments in PUBG Mobile is another groundbreaking development, allowing players to compete globally, showcase their talent, and be part of a thriving gaming community.',
            date: '2024-12-06',
            imageUrl: 'https://i0.wp.com/www.insidexbox.de/wp-content/uploads/2018/03/pubg-mobile-01.jpg?w=1300&ssl=1',
        },
        {
            id: '3',
            title: 'Squad Busters',
            description: 'As Squad Busters redefines multiplayer gaming, new possibilities continue to emerge. In strategy, its dynamic gameplay encourages players to optimize their squads and tactics, unlocking smarter ways to outplay opponents. In teamwork, Squad Busters revolutionizes collaboration by combining diverse characters and abilities to tackle challenges in real time, leading to more engaging and competitive matches. These features showcase how Squad Busters drives innovation and excitement in the world of gaming.',
            date: '2024-12-03',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOy-JJ5oFOvBZM6nA8qwMSAwAw8kqptRAf7ii2A_O6wNBqJ0cv4aHVDnwjk-jRNK64AA&usqp=CAU',
        },
        {
            id: '7',
            title: 'Temple Run',
            description: 'The gaming world has been revolutionized by the endless runner genre, with *Temple Run* leading the charge. This iconic game combines fast-paced action with immersive environments, challenging players to navigate treacherous paths, avoid obstacles, and collect treasures. *Temple Run* introduced innovations like swipe-based controls and procedurally generated levels, keeping gameplay dynamic and engaging. Its influence extends beyond entertainment, inspiring countless similar titles and cementing its place as a pioneer in mobile gaming. By blending simplicity with strategy, *Temple Run* continues to captivate gamers of all ages, proving that the thrill of the chase never gets old.',
            date: '2024-12-07',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Temple_Run_logo.png/250px-Temple_Run_logo.png',
        },
        {
            id: '11',
            title: 'Dragon City',
            description: 'In addition to offering exciting gameplay, **Dragon City** provides a unique gaming experience by reducing the need for constant online connections, allowing players to enjoy the game with optimized resources. Players can breed, train, and battle dragons closer to their own strategies, enhancing their in-game experience and overall enjoyment. However, managing a growing dragon city and ensuring smooth interactions between different types of dragons can still present challenges as the game progresses.',
            date: '2024-12-11',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzi7nqf8yycX8Ds1yYqLSox53U07k3099kgw&s',
        },
        {
            id: '9',
            title: 'Color Bump 3D Balls',
            description: 'Transparency and accountability are essential elements in the world of gaming. In games like *Color Bump 3D Balls*, providing clear gameplay mechanics and user feedback enhances player trust and engagement. Developers are focusing on creating games that are not only fun but also align with player expectations for fairness, inclusivity, and diverse challenges. Gaming platforms and communities are working towards fostering environments where innovation thrives while maintaining a balance with responsible game design and regulation. These efforts ensure that games like *Color Bump 3D Balls* are enjoyable, ethical, and accessible to all players.',
            date: '2024-12-09',
            imageUrl: 'https://store-images.s-microsoft.com/image/apps.55338.14483840375196682.a3d6954f-f6e6-4c07-b284-ca1962e5217b.ca72d904-e984-44e7-8c95-fd96911e4319?h=720',
        },
        {
            id: '10',
            title: 'Slither.io',
            description: 'In the gaming world, games like Slither.io are revolutionizing how players interact with each other online, offering immersive and engaging experiences. These games allow users to compete in real-time with players around the globe, creating a dynamic and competitive environment. Slither.io, with its simple yet addictive gameplay, has become a popular choice, offering a mix of strategy and skill. However, challenges such as ensuring fair play, preventing cheating, and managing server stability must be addressed to maintain a smooth and enjoyable gaming experience for all players.',
            date: '2024-12-10',
            imageUrl: 'https://m.media-amazon.com/images/I/81A9FtePrYL.png',
        },
        {
            id: '12',
            title: 'Traffic Rider',
            description: 'Despite its advantages, the widespread popularity of Traffic Rider raises concerns about game balance and in-app purchases. Ensuring a fair experience for all players and preventing unfair advantages is a top priority, requiring well-designed mechanics and transparent monetization strategies. Additionally, the compatibility of the game across different devices and platforms poses challenges for seamless gameplay and updates.',
            date: '2024-12-12',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4w9KaesHSig5_7wu53ar9mVP9eE3BhLaz4wJuNrL5hAf8XK0qxho99QNB6RGyzHJsOY&usqp=CAU',
        },
    ];
    return (
        <div className='my-8 container pb-12'>
            <h1 className='text-5xl font-bold text-center text-red-600 animate-color-change my-8 pb-4'>Impact of Gaming on Modern Society</h1>
            <div className='mx-2 hover:mx-2 grid grid-col-1 md:grid-cols-2 gap-8'>
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
