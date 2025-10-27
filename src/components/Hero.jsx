const Hero = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8 sm:py-40">
      {/* Contenido de la izquierda */}
      <div className="w-full lg:w-1/2 text-center lg:text-right">
        <br />
        <h1 className="text-4xl md:text-4xl text-center font-bebas font-bold">
          ¿Qué se busca con Boss Budget?
        </h1>
        <p className="text-3x1 text-center text-gray-600 mt-4 font-bebas">
          Boss Budget es una aplicación móvil y web en desarrollo, diseñada para funcionar en
          distintos dispositivos electrónicos. Su objetivo es mejorar los hábitos financieros de
          sus usuarios, ofreciendo múltiples funcionalidades que la convierten en una herramienta
          intuitiva y fácil de usar.
        </p>
      </div>

      {/* Video con animación */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-[400px] h-[250px]">
          <iframe
            className="w-full h-full rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
            src="https://www.youtube.com/embed/Li7bQG6bBko?si=p-TY-01mPLVBLDku"
            title="Boss Budget speech"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Contenido de la derecha */}
      <div className="bg-white w-full lg:w-1/2 text-center lg:text-left">
        <br />
        <h2 className="text-3xl md:text-6xl text-center font-bebas font-bold">
          Objetivo General
        </h2>
        <p className="text-center text-gray-500 mt-2 font-bebas">
          Implementar herramientas para la gestión de finanzas mediante una app móvil, lo cual
          controlará gastos personales, familiares y sociales.
        </p>
      </div>
    </div>
  );
};

export default Hero;