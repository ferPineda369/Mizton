import SignUpForm from '@/components/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Registrarse</h1>
      <SignUpForm />
    </div>
  );
}