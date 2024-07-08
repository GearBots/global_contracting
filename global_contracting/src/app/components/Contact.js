export default function Contact() {
    return (
    <section className="bg-gray-900 text-white py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 py-16">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                </div>
            </div>
        </div>
        <div>
            <div className='w-full max-w-[30rem] h-[35rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-gray-500 mx-auto'>
                <img 
                className='w-full h-full object-cover scale-110 transform hover:scale-125 transition-transform duration-300' 
                src='xx-lager.svg' 
                alt='Our Values' 
                />
            </div>
        </div>
    </div>
    </section>
  );
}
