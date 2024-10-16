import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://images.unsplash.com/photo-1565515636369-57f6e9f5fe79?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNnx8aW52ZXN0bWVudCUyMHNlcnZpY2VzfGVufDB8fHx8MTcyODgxNzI1OHww"
            alt="Testimonio"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <div className="bg-red-500 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">★★★★★</h2>
            <p className="text-lg italic mb-4">
              "Cada vez que veas un negocio exitoso, alguien que en algún momento alguna vez tomó una decisión valiente"
            </p>
            <p className="font-semibold">Peter Drucker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;