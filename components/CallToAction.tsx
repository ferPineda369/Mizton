import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Si estás listo para<br />blindar tu<br />economía, ¡únete!
        </h2>
        <p className="text-gray-600 mb-8">
          No has llegado hasta aquí para detenerte.
        </p>
        <Button asChild size="lg" className="text-lg bg-black text-white hover:bg-black/90">
          <Link href="/unirse">Unirse</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;