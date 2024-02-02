
let situation = {
    nombre: "Mumtaz Mahal",
    embarazada: true,
    muerteEvitada: false,
    detalle: "Rapida atencion",
    detalle2: "Es ineficiente",
    detalle3: "Nacio el hijo"
  };
  
  function evitarMuerteMumtaz() {
    console.log("Estás en una situación crítica. " + situation.nombre + " está embarazada y corre peligro de muerte.");
  
    let decisionInitial = prompt("¿Qué harás para ayudar a " + situation.nombre + "?\n1. Intervenir de inmediato.\n2. Observar la situación antes de actuar.\n3. Ver situacion de muerte de " + situation.nombre + ".");


    switch (decisionInitial) {
      case "1":
        console.log("Has decidido intervenir de inmediato.");
        let medicalhelp = prompt("¿Cómo planeas buscar ayuda médica?\n1. Llamar a una ambulancia.\n2. Buscar un médico cercano.");
        
        delete situation.detalle
        console.log(situation.detalle);
        situation.muerteEvitada = true;

        break;
  
      case "2":
        console.log("Has decidido observar la situación antes de actuar.");
        let observation = prompt("¿Qué detalles observarás antes de tomar una decisión?\n1. Síntomas de la persona.\n2. Ponerme a rezar.");
       
        delete situation.detalle2;
        console.log(situation.detalle2);
        situation.muerteEvitada = false; 
        break;
  
      case "3":
        console.log("¡Sorpresa inesperada!" + situation.nombre.detalle3);
        situation.detalle3
        situation.muerteEvitada = false; 
        console.log(situation.detalle3)

        break;
  
      default:
        console.log("Decisión no válida. La situación no cambia.");
    }
  
    if (situation.muerteEvitada) {
      console.log("¡Felicidades! Has logrado evitar la muerte de " + situation.nombre + ".");
      console.log("Muerte evitada : ", situation.muerteEvitada = true);
    } else {
      console.log("Lamentablemente "+ situation.nombre + " ha fallecido.");
      console.log("¿Fue por culpa del hijo? " + situation.embarazada);
    }

    let feedbackFinal = prompt("¿Cómo te sientes después de la situación?\n1. Aliviado por haber ayudado.\n2. Sorprendido por el giro inesperado.\n3. Triste por la pérdida.");
    console.log("Gracias por tu participación. Tu respuesta final es: " + feedbackFinal);
  }
  
  evitarMuerteMumtaz();
  