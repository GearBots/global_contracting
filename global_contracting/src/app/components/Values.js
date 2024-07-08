export default function Values() {
    return (
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
              <p className="text-lg md:text-xl text-gray-300">
                We are always ready to help by providing the best solutions to your problems.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Integrity in all we do
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Commitment to excellence
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Innovation and continuous improvement
                </li>
              </ul>
            </div>
            <div className="md:order-1">
              <div className='w-[30rem] h-[35rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-gray-500'>
                <img 
                  className='w-full h-full object-cover scale-110 transform hover:scale-125 transition-transform duration-300' 
                  src='xx-lager.svg' 
                  alt='Our Values' 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }