export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
              alt="Profile" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div>
            <p className="text-gray-300 text-lg mb-6">
              I'm driven by a passion for coding and problem-solving. With expertise in both front-end and back-end development,
              I create seamless, efficient solutions that make a difference.
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              I'm particularly interested in web development, machine learning, and game development,
              always eager to learn new technologies and explore the endless possibilities of the digital world.
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-bold text-xl text-purple-500">2+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-bold text-xl text-purple-500">20+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}