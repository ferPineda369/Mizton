import Image from 'next/image';

const CommunitySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Construyendo una comunidad colaborativa</h2>
          <p className="text-gray-600 mb-6">
            En Mizton, buscamos empoderar a nuestra comunidad, facilitando el acceso a conceptos básicos sobre la Economía y eliminando el estrés del lenguaje financiero. Aquí, todos pueden participar y crecer juntos.
          </p>
          <div className="flex space-x-8">
            <div>
              <h3 className="text-4xl font-bold text-primary">10,000+</h3>
              <p className="text-sm text-gray-500">Personas en crecimiento conjunto</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">100%</h3>
              <p className="text-sm text-gray-500">Confianza y transparencia</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1547341074-c5e9b0f9c335?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzMHx8aW52ZXN0bWVudCUyMHNlcnZpY2VzfGVufDB8fHx8MTcyODgxNzI1OHww"
            alt="Comunidad colaborativa"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;