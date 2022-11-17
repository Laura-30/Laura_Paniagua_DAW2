let madrid = new equipo("Real Madrid", 1000000, []);
let barsa = new equipo("Barcelona", 1000000, []);
let atleti = new equipo("Atletico de Madrid", 1000000, []);

liga = [madrid, barsa, atleti];

barsa.ficharJugador(new jugador("Pedri", "Medio", 100000));
barsa.ficharJugador(new jugador("Gavi", "Medio", 100000));
barsa.ficharJugador(new jugador("Lewandowsky", "Delantero", 200000));
barsa.ficharJugador(new jugador("Ferran torres", "Delantero", 200000));
barsa.ficharJugador(new jugador("Eric García", "Defensa", 200000));

madrid.ficharJugador(new jugador("Vinicius", "Delantero", 100000));
madrid.ficharJugador(new jugador("Rodrigo", "Delantero", 100000));
madrid.ficharJugador(new jugador("Fede Valverde", "Medio", 500000));
madrid.ficharJugador(new jugador("Alaba", "Defensa", 500000));
madrid.ficharJugador(new jugador("Benzema", "Delantero", 500000));

atleti.ficharJugador(new jugador("Griezman", "Delantero", 100000));
atleti.ficharJugador(new jugador("Correa", "Delantero", 100000));
atleti.ficharJugador(new jugador("Carrasco", "Delantero", 500000));
atleti.ficharJugador(new jugador("Jan Oblak", "Portero", 500000));
atleti.ficharJugador(new jugador("Koke", "Medio", 500000));


madrid.mostrarDatos();
barsa.mostrarDatos();
atleti.mostrarDatos(); 

madrid.listarPlantilla();
barsa.listarPlantilla();
atleti.listarPlantilla();

liga.forEach((element) => {
  element.getJugadorCaro();
});
