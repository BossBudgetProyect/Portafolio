const Footer = () => {
  return (
    <footer className="bg-white text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información del Proyecto */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bebas font-bold text-fuchsia-700">
              Boss Budget
            </h2>
            <p className="mt-4 text-black text-lg sm:text-xl font-bebas font-bold">
              Optimiza tus finanzas con nuestra plataforma intuitiva.
            </p>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-bebas text-yellow-700">
              Contáctate y conoce más de Boss Budget
            </h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://youtube.com/@bossbudgetproyect?si=L-tMly7t90egZEwW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:font-bebas"
              >
                <img
                  className="w-25 h-20"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                  alt="YouTube"
                />
              </a>

              <a
                href="https://github.com/BossBudgetProyect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:font-bebas"
              >
                <img
                  className="w-20 h-20"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Github"
                />
              </a>

              <a
                href="mailto:bossbudgetproyect@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:font-bebas"
              >
                <img
                  className="w-25 h-20"
                  src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png"
                  alt="Gmail"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black mt-6 pt-4 text-center font-bebas font-bold text-sm text-yellow-700">
          © 2025 Boss Budget. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;