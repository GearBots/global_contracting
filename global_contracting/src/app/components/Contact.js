export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded text-black bg-gray-100 border-gray-400"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded text-black bg-gray-100 border-gray-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 border rounded text-black bg-gray-100 border-gray-400"></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
