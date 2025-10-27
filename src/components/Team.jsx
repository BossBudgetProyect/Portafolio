const Team = () => {
  const teamMembers = [
    {
      name: 'Brayan Steven Lopéz',
      role: 'Product Owner'
    },
    {
      name: 'Jorge Andrés Ballen Ramírez',
      role: 'Desarrollador Back-End'
    },
    {
      name: 'Dayana Andrea Escobar',
      role: 'Desarrolladora Base de datos'
    },
    {
      name: 'David Alejandro Jáuregui Merchán',
      role: 'Scrum Máster, Desarrollador Front-end'
    }
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl shadow-xl">
      <div className="grid xl:grid-cols-3 gap-12 items-center">
        {/* Texto de introducción */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bebas font-bold text-gray-900">
            Equipo de desarrollo
          </h2>
          <p className="text-lg text-gray-700 font-bebas font-semibold">
            Somos un grupo dinámico de personas apasionadas por lo que hacemos y dedicadas a
            ofrecer los mejores resultados para el desarrollo de este proyecto.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="/img/BBBBBBBBBBBBB.png"
            alt="Ficha de Experimento"
            className="w-[450px] h-[300px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Tarjetas del equipo */}
        <ul role="list" className="grid gap-6 sm:grid-cols-2">
          {teamMembers.map((member, index) => (
            <li
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold font-bebas text-gray-900">{member.name}</h3>
              <p className="text-sm font-semibold text-yellow-700">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;