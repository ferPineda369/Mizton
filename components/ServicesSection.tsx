import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Servicios Colaborativos</h2>
        <p className="text-center text-gray-600 mb-12">
          Nuestra comunidad promueve estabilidad económica y emocional a través de educación y mentoría.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1669951584304-8da02ea5a54f?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyNXx8aW52ZXN0bWVudCUyMHNlcnZpY2VzfGVufDB8fHx8MTcyODgxNzI1OHww"
              alt="Tokenización RWA"
              width={400}
              height={300}
              className="mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">Tokenización RWA</h3>
            <p className="text-gray-600">
              Conoce lo que es la tokenización de activos reales, facilitando el acceso a nuevas formas de inversión.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1651129518142-e0830a4c184b?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxpbnZlc3RtZW50JTIwc2VydmljZXN8ZW58MHx8fHwxNzI4ODE3MjU4fDA"
              alt="Inversión Simplificada"
              width={400}
              height={300}
              className="mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">Inversión Simplificada</h3>
            <p className="text-gray-600">
              Da tus primeros pasos en inversiones simplificadas para que puedas crecer en tu bienestar financiero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;