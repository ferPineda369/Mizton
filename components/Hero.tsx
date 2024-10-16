import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://s1.significados.com/foto/destaque-economia.jpg')",
          filter: "brightness(50%)"
        }}
      ></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Economía<br />simplificada para<br />todos.
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Únete a nuestra comunidad y transforma tu futuro<br />económico hoy mismo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="text-lg bg-white text-black hover:bg-white/90">
            <Link href="/signup">Unirse</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-lg text-white hover:bg-white/20">
            <Link href="/explorar">Explorar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;