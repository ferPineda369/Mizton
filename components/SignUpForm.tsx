"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    referredBy: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = 'Esta cuenta quedará a tu nombre';
    if (!formData.email) errors.email = 'Si tienes problemas para accesar a tu cuenta, te enviaremos a este correo tus datos de acceso';
    if (!formData.password || !validatePassword(formData.password)) {
      errors.password = 'La contraseña debe tener al menos 10 caracteres, 1 mayúscula, 1 minúscula y números del 0 al 9';
    }
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Debe ser la misma contraseña';
    if (!formData.referredBy) errors.referredBy = 'Este dato es obligatorio';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Usuario registrado:', data);
          router.push('/signin');
        } else {
          setErrors({ submit: data.message || 'Error al registrar. Por favor, intenta de nuevo.' });
        }
      } catch (error) {
        console.error('Error al registrar:', error);
        setErrors({ submit: 'Error de conexión. Por favor, verifica tu conexión a internet e intenta de nuevo.' });
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nombre completo</label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Tu nombre"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 input-primary"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Correo que más uses"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 input-primary"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Define tu contraseña"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 input-primary"
        />
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Repite tu contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 input-primary"
        />
        {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700">Referido por</label>
        <Input
          id="referredBy"
          name="referredBy"
          type="text"
          placeholder="Número ID de la persona que te invitó"
          value={formData.referredBy}
          onChange={handleChange}
          className="mt-1 input-primary"
        />
        {errors.referredBy && <p className="mt-1 text-xs text-red-500">{errors.referredBy}</p>}
      </div>
      <Button type="submit" className="w-full mb-4 bg-[#cc5b52] hover:bg-[#b54c44] text-white" disabled={isLoading}>
        {isLoading ? 'Registrando...' : 'Unirme'}
      </Button>
      {errors.submit && <p className="mt-1 text-xs text-red-500 text-center">{errors.submit}</p>}
      <div className="text-center">
        <Link href="/signin" className="text-sm text-[#282828] hover:underline">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </div>
    </form>
  );
}