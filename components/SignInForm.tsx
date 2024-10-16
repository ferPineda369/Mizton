"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.username) errors.username = 'Campo requerido';
    if (!formData.password) errors.password = 'Campo requerido';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Aquí iría la lógica de inicio de sesión
      console.log('Inicio de sesión con:', formData);
      router.push('/');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuario</label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Usuario asignado"
          value={formData.username}
          onChange={handleChange}
          className="mt-1"
        />
        {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Tu contraseña"
          value={formData.password}
          onChange={handleChange}
          className="mt-1"
        />
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
      </div>
      <Button type="submit" className="w-full mb-4 bg-[#cc5b52] hover:bg-[#b54c44] text-white">Ingresar</Button>
      <div className="text-center space-y-2">
        <Link href="/signup" className="block text-sm text-[#282828] hover:underline">
          ¿No tienes una cuenta? Regístrate
        </Link>
        <Link href="/recuperar-contrasena" className="block text-sm text-[#282828] hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
        <Link href="/recuperar-usuario" className="block text-sm text-[#282828] hover:underline">
          ¿Olvidaste tu usuario?
        </Link>
      </div>
    </form>
  );
}