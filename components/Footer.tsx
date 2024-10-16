const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">COMUNIDAD</h3>
            <ul>
              <li>Inversiones colaborativas</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">ESTABILIDAD</h3>
            <p>+34 912 345 678</p>
            <p>contacto@mizton.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">COLABORATIVA</h3>
            <p>© 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;