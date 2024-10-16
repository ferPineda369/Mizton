"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          Mizton
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-black hover:text-gray-700">Inicio</Link>
          <Link href="/comunidad" className="text-black hover:text-gray-700">Comunidad</Link>
          <Link href="/inversiones" className="text-black hover:text-gray-700">Inversiones</Link>
          <Link href="/signup" className="text-black hover:text-gray-700">Unirse</Link>
          <Button asChild variant="outline" className="text-black border-black hover:bg-black hover:text-white">
            <Link href="/signin">Acceso</Link>
          </Button>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu />
        </Button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white p-4">
          <Link href="/" className="block py-2 text-black hover:text-gray-700">Inicio</Link>
          <Link href="/comunidad" className="block py-2 text-black hover:text-gray-700">Comunidad</Link>
          <Link href="/inversiones" className="block py-2 text-black hover:text-gray-700">Inversiones</Link>
          <Link href="/signup" className="block py-2 text-black hover:text-gray-700">Unirse</Link>
          <Button asChild className="w-full mt-2 text-black border-black hover:bg-black hover:text-white">
            <Link href="/signin">Acceso</Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;