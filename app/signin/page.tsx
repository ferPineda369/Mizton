import SignInForm from '@/components/SignInForm';

export default function SignInPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Iniciar Sesión</h1>
      <SignInForm />
    </div>
  );
}