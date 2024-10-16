"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function RecuperarContrasenaForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Campo requerido');
    } else {
      // Aquí iría la lógica para recuperar la contraseña
      console.log('Recuperar contraseña para:', email);
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <Input
          id="email"
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1"
          required
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
      <Button type="submit" className="w-full mb-4 bg-[#cc5b52] hover:bg-[#b54c44] text-white">Recuperar Contraseña</Button>
      <div className="text-center">
        <Link href="/signin" className="text-sm text-[#282828] hover:underline">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </form>
  );
}