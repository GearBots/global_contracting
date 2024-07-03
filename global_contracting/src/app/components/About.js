export default function Services() {
  const services = [
    { title: 'Residential Construction', description: 'Building homes with care and precision.' },
    { title: 'Commercial Projects', description: 'Bringing your business vision to life.' },
    { title: 'Renovations', description: 'Upgrading and modernizing existing structures.' },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
