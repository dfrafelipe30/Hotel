function myFunction(n) {
    var a = document.getElementById("ocultar");
    var b = document.getElementById("imagenes1");
    var c = document.getElementById("imagenes2");
    a.innerHTML = '';
    b.innerHTML = '';
    c.innerHTML = '';
    var p = document.createElement("P");
    var aux1 = document.createElement("img");
    var aux2 = document.createElement("img");
    switch(n){
        case 1:
            p.innerHTML = "Fue construido en 1937. " + "<br>" + "En las décadas de 1950 a 1970 tuvo auge, cuando en el Nevado del Ruiz existió una pista de esquí, que fue inaugurada, al igual que la carretera que da acceso al Nevado del Ruíz y el Refugio, durante la I Feria de Manizales en 1955. El esquí o sistema de telesillas fue también utilizado por numerosos deportistas nacionales y extranjeros por varios años, en este tiempo en Enero de 1956 se realizó el primer campeonato suramericano Esquí, en el que se destacaron las delegaciones de Argentina, Chile, Bolivia, Bélgica, Suiza, y Colombia." + "<br>" + "Un lugar que ha atraído desde un principio a numerosos lugareños por las bondades terapéuticas y lo relajante de sus baños, ésta zona hoy en día es considerada “área amortiguadora del Parque Nacional Natural Los Nevados”  y en la que según inventarios de distintas entidades, existen catorce fuentes termales, las cuales varían en su temperatura entre los 28 y 91 grados centígrados, con aguas de muy diferente condición química." + "<br>" + "Hoy  con más de 80 años atrayendo a lugareños y turistas, es operado por el Hotel Carretero desde el año 2014, el Hotel Termales del Ruiz te invita a vivir una experiencia única en su especie, la cual llamamos Naturaleza Con Estilo, un lugar dónde se vive realmente y donde la magia se encuentra en cada rincón de este hermoso lugar, las estrellas se ven en todo su esplendor, y donde la calidez y confort hacen sentir a sus huéspedes tranquilos." + "<br>" + "Llevando su magia y diversidad, a la intimidad que se esconde en sus increíbles espacios para el descanso y que no deja atrás vivir la experiencia tú mismo cerca al increíble Nevado del Ruiz en la ciudad de Manizales, con amplios espacios para el descanso y la relajación,la meditación y la lectura.";
            a.appendChild(p);
            aux1.src = "../img/Historia1.png";
            aux1.alt = "";
            b.appendChild(aux1);
            aux2.src = "../img/Historia2.png";
            aux2.alt = "";
            c.appendChild(aux2);
            break;
        case 2:
            p.innerHTML = "Ubicados en el Parque Nacional Natural de los Nevados, a 3500 metros de altura sobre el nivel del mar, a sólo 10 km del Nevado del Ruíz y 36 km de Manizales." + "<br>" + "Con una ubicación privilegiada y un paisaje impactante por la belleza natural que posee, espectacular vista a la ciudad de Manizales, y una noche de firmamento con variedad de azules lleno de estrellas en conjunto con la luna a un paso de las nubes." + "<br>" + "Para llegar al Hotel Termales del Ruíz puedes optar por 2 vías, una es la Vía Paramo de Letras, cuando llegas al parador La Esperanza tomas hacia la derecha y sigues la señalización es muy fácil!, la otra vía es Gallinazo, esta es destapada." + "<br>" + " El clima es frio y no hay ninguna restricción, pero por temas de altura te recomendamos tener presente recomendaciones médicas en caso especial.";
            a.appendChild(p);
            aux1.src = "../img/U1.png";
            aux1.alt = "";
            b.appendChild(aux1);
            aux2.src = "../img/U2.png";
            aux2.alt = "";
            c.appendChild(aux2);
            break;
        case 3:
            p.innerHTML = "Colombia cuenta con tantas especies de aves y colibríes que es el primer país del mundo en diversidad de ellas, lo que equivale al 20 % de las especies de pájaros en la tierra. En Caldas Somos privilegiados de ser la región líder en el Avistamiento de Aves, aquí llegan 197 especies de aves migratorias, especies endémicas y casi endémicas de la región alta andina." + "<br>" + "Dentro de las aves que puede ver en el Hotel Termales del Ruíz, las más destacadas son las siguientes: Aglaeactis cupripennis / Andigena hypoglauca / Chalcostigma herrani / Coeligena lutetiae/ Eriocnemis derbyi /Myioborus ornatus." + "<br>" + "La Observación de Aves, también llamada Avistamiento de Aves o, empleando sus términos con que es conocida en idioma inglés, Birding o Birdwatching, se refiere a una actividad centrada en la observacióny el estudio de las aves silvestres. En los Estados Unidos se emplea el término Birding mientras que Birdwatching es más bien utilizada en Inglaterra e Irlanda; Observación o Avistamiento de aves se suele utilizar en América Latina y España." + "<br>";
            a.appendChild(p);
            aux1.src = "../img/A1.png";
            aux1.alt = "";
            b.appendChild(aux1);
            aux2.src = "../img/A2.png";
            aux2.alt = "";
            c.appendChild(aux2);
            break;
        case 4:
            p.innerHTML = "Te recomendamos en tu visita" + "<br>" + " Dejar todo a un lado y disfrutar de las maravillas y paisajes que tiene nuestro Hotel Termales del Ruíz para ti." + "<br>" + "Traer Ropa para el Clima Frío como: Sacos o Abrigos, Pasamontañas y/o Guantes, el bloqueador también es importante, algún hidratante para labios ya que el frío los reseca, traje de baño para piscina, si te encuentra en pasadía te recomendamos traer toalla, cámara fotográfica o celular con cámara para  que no te pierda las mejores escenas de la experiencia de los senderos con los colibríes." + "<br>" + "En temas de altura tener presente recomendaciones médicas en casos especiales, recuerda que estamos a 3.500 metros sobre el nivel del mar. Tomar baños cortos cuando estés disfrutando y tomando de los baños relajantes de agua termal." + "<br>" + "Si tiene dudas puede contactarnos y las resolveremos con gusto";
            a.appendChild(p);
            aux1.src = "../img/RR1.png";
            aux1.alt = "";
            b.appendChild(aux1);
            aux2.src = "../img/RR2.png";
            aux2.alt = "";
            c.appendChild(aux2);
            break;
        case 5:
            p.innerHTML = "Porque no hay mejor forma de ser y estar feliz que consentir el alma y el cuerpo desde adentro…" + "<br>" + "En nuestra piscina de agua termal que tiene una temperatura de 39 grados, además de tener un baño relajante te ayudará a obtener beneficios curativos para tu cuerpo, con efectos depurativos en toda su pureza";
            a.appendChild(p);
            aux1.src = "../img/R1.png";
            aux1.alt = "";
            b.appendChild(aux1);
            aux2.src = "../img/R2.png";
            aux2.alt = "";
            c.appendChild(aux2);
            break;
        case 6:
            p.innerHTML = "Un plan que superará tus expectativas ¡Vívelo con esa persona que es tan importante y especial para ti!" + "<br>" + "El plan romance incluye:" + "<br>" + "Alojamiento en habitación Doble decorada con lencería especial, Sorpresa gourmet, Arreglo Floral, Botella de Vino de la Casa, Desayuno Americano en la Habitación, Tina de Agua Termal Privada y Decorada, Impuestos Hoteleros, WiFi, Parqueadero, Acceso a nuestra Piscina Termal, Senderismo Ecológico NO GUIADO y Avistamiento de Aves.";
            a.appendChild(p);
            aux1.src = "../img/PR1.png";
            aux1.alt = "";
            b.appendChild(aux1);
            aux2.src = "../img/PR2.png";
            aux2.alt = "";
            c.appendChild(aux2);
            break;
        case 7:
            p.innerHTML = "Nos gusta lo natural y lo diferente…" + "<br>" + "Cambia tu rutina, comparte con amigos, con familia, disfruta de un baño termal en nuestra piscina, o vive tú mismo la experiencia con colibríes la pureza y la naturaleza te conectarán con tu alma." + "<br>" + "Todos los días son perfectos para tomar un descanso, relajarse y sentir aire puro. Aire puro, aire que reconfortará tus sentidos, tus emociones." + "<br>" + "Las historias que mereces contar y que solo las cuentas viviéndolas" + "<br>" + "Con nuestro Plan Pasadía puedes disfrutar de:" + "<br>" + "Avistamiento de Aves / Senderismo no guiado / Baño en Piscina de Agua Termal desde las 7:00 am hasta las 9:00 pm";
            a.appendChild(p);
            aux1.src = "../img/PA1.png";
            aux1.alt = "";
            b.appendChild(aux1);
            aux2.src = "../img/PA22.png";
            aux2.alt = "";
            c.appendChild(aux2);
            break;

    }
}
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});