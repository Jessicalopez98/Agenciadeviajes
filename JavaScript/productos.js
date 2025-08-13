function addItem(item){
    const itemHTML = '<div class="row">\n' +
        '<div class="col-lg-3 col-sm">\n' +
          '<article class="card cold fondo-color-card"\n' +
            'style="width: 24rem; background-color: #f2f2f2; border-radius:15px ;">\n' +
            '<header>\n' +
              '<h5 class="card-title">'+item.titulo+'</h5>\n' +

              '<img\n' +
                'src="'+item.img+'"\n' +
                'class="card-img-top" alt="Imagen de destino">\n' +
            '</header>\n' +
            '<footer-card>\n' +
		'<h5 class="card-title" style="font-size:1.4rem">'+item.precio+'</h5> <!--aqui-->\n' +
              '<ul>\n' +
                
                '<li class="list-group-item"><i class="bi bi-airplane"></i> Vuelos</li>\n' +
                '<li class="list-group-item"><i class="bi bi-buildings"></i> Hospedaje</li>\n' +
                '<li class="list-group-item"><i class="bi bi-cup-hot"></i> Alimentos</li>\n' +
                '<li class="list-group-item"><i class="bi bi-chat-dots"></i> Guia de habla hispana</li>\n' +
                '<li class="list-group-item"><i class="bi bi-car-front"></i> Traslado</li>\n' +
                '<li class="list-group-item"><i class="bi bi-geo-alt"></i> Visitas Guiadas</li>\n' +
              '</ul>\n' +

              '<!-- boton -->\n' +
              '<div class="card-body" style="display: flex; justify-content: end;">\n' +
                `<button  style="border-radius: 31px; padding: .8rem 3.5rem; filter: drop-shadow(0 0 0.3rem #12313299);" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${item.id}">\n` +
                  'Reservar\n' +
                '</button>\n' +
              '</div>\n' +
            '</footer-card>\n' +

          '</article>\n' +
        '</div>\n' +
      '</div>\n' +

      '<!-- modal -->\n' +
      `<div class="modal" id="modal${item.id}" tabindex="-1">\n` +
        '<div class="modal-dialog">\n' +
          '<div class="modal-content">\n' +
            '<div class="modal-header">\n' +
              '<h5 class="modal-title">'+item.titulo+'</h5>\n' +
              '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' +
            '</div>\n' +
            '<div class="modal-body">\n' +
              '<p>'+item.incluye +item.noincluye+'</p>\n' +
            '</div>\n' +
            '<div class="modal-footer">\n' +
              '<a href="./contactanos.html">\n' +
                '<button type="button" class="btn btn-primary">Contactanos</button>\n' +
              '</a>\n' +
            '</div>\n' +
          '</div>\n' +
        '</div>\n' +
      '</div>\n' +
    '</div>\n' +
    '<br/>';

const itemsContainer = document.getElementById("list-items");
itemsContainer.innerHTML += itemHTML;
//const itemsModal = document.getElementById("modal");
//itemsModal.innerHTML += itemHTML;

}   


addItem({'id':1,
    'titulo':'Gran Tour de Europa',
    'img': './assets/grantoureuropa.jpeg',
    'lugares':'Londres, París, Luxemburgo, Frankfurt, Heidelberg, Zúrich, Lucerna, Vaduz, Innsbruck, Padua, Venecia, Florencia, Roma, Pisa, Niza, Barcelona, Zaragoza, Madrid',
    'precio':'Desde $1,899 USD + 799 IMP Por persona en habitación Doble',
    'incluye':'<strong>EL VIAJE INCLUYE : </strong><br>-Boleto de avión México – Londres / Madrid – México volando en clase turista con AEROMÉXICO, algunas salidas son con Iberia Vía Madrid.<br>- 17 Noches de alojamiento en categoría indicada .<br>- Desayunos de acuerdo con itinerario. <br>- Visitas según itinerario.<br>- Guía profesional de habla hispana. <br>- Translados los indicados.<br>- Transporte en autocar turístico. <br>- Documentos electrónicos código QR  (empresa socialmente responsable con el medio ambiente).<br>',
    'noincluye':'<strong>EL VIAJE NO INCLUYE :</strong><br>- Alimentos, gastos de indole personal. <br>- Ningún servicio no especificado. <br>- Todas las excursiones que se mencionan como opcionales. <br>- Impuestos aéreos por persona. <br>NOTA: 65 EUROS QUE CORRESPONDEN A PROPINAS PARA CHOFERES, TASAS HOTELES Y MUNICIPALES. SE PAGA EN DESTINO<br>',
    'duracion':'Duración 19 días | 17 noches',
    });

addItem({'id':2,
    'titulo':'Especial Egipto y Dubái',
    'img': './assets/egiptoydubai.jpeg',
    'lugares':'El Cairo, Aswan, Kom Ombo, Edfu, Esna, Luxor, Dubái',
    'precio':'Desde $1,299 USD + 999 IMP Por persona en habitación Doble',
    'incluye':'<strong>EL VIAJE INCLUYE : </strong><br> Boleto de avión en viaje redondo México – Dubái – México, en clase turista.<br>-Vuelos Dubái – El Cairo - Dubái / El Cairo – Aswan / Luxor – El Cairo en clase turista.<br>- 3 noches de alojamiento en el Cairo<br>-3 noches de crucero por el Nilo<br>-1 noche de alojamiento en Luxor<br>-5 noches de alojamiento en Dubái.<br>-Régimen alimenticio indicado en el itinerario.<br>-Traslados indicados.<br>-Visitas indicadas.<br>-Guías de habla hispana.<br>-Autocar con aire acondicionado.<br>',
    'noincluye':'<strong><br>EL VIAJE NO INCLUYE : </strong><br>Gastos personales y extras en los hoteles.<br>Propinas en Egipto: 60 USD por persona. (Se paga directo en destino)<br>Propinas en Dubái: 35 USD por persona. (Se paga directo en destino)<br>Impuesto Turismo en Dubái: 5 USD por habitación por noche. (Se paga directo en destino)BookingConclusion<br>Impuestos aéreos<br>Visa de Egipto: 25 USD aproximadamente (se paga en destino)<br>Ningún servicio no especificado como incluido o como opcional.<br>Seguro de viaje (Es obligatorio para entrar a los Emiratos árabes Unidos).',
    'duracion':'Duración 15 días | 12 noches'
    });

addItem({'id':3,
    'titulo':'Tailandia y Phuket',
    'img': './assets/tailandia-phukec.jpeg',
    'lugares':'Bangkok, Kanchanaburi, Chiang Rai, Chiang Mai, Phuket',
    'precio':'Desde $1,599 USD + 999 IMP Por persona en habitación Doble',
    'incluye':'<strong>EL VIAJE INCLUYE : </strong><br>- Boleto de avión en viaje redondo México – Bangkok / Phuket – México en clase turista.<br>- Boleto de avión Bangkok – Chiang Rai / Chiang Mai – Phuket en clase turista.<br> - 03 noches de alojamiento en Bangkok.<br>- 02 noche de alojamiento en Chiang Rai.<br>- 02 noches de alojamiento en Chiang Mai.<br>- 02 noches de alojamiento en Phuket.<br>- Traslados indicados<br>- Visitas indicadas<br>- Guías de habla hispana<br>- Autocar con aire acondicionado.<br>',
    'noincluye':'<strong><br>EL VIAJE NO INCLUYE : </strong><br>-Gastos personales y extras en los hoteles.<br>Propinas en Tailandia: 50 USD por persona (Se paga directo en destino)Ningún servicio no especificado como incluido o especificado como opcional.<br>Visa de Tailandia<br>Impuestos aéreos por persona',
    'duracion':'Duración 13 días | 9 noches',
    });

    addItem({'id' : '4', 
    'titulo': 'Japón, El Camino del Samurái' ,
    'img' :  './assets/japon.jpeg', 
    'lugares' : 'Hiroshima, Osaka, Kioto.',
    'precio' : '$1,999 USD + 999IMP Por persona en habitación Doble.',  
    'incluye':  '<strong>EL VIAJE INCLUYE: </strong>, <br>- Boleto de avión. <br>- Boleto tren bala Tokyo - Hiroshima.  <br>- 2 noches de alojamiento en Hiroshima. <br>- 3 noches de alojamiento en Osaka. <br>- 1 noche de alojamiento en Nagoya. <br>- 03 noches de alojamiento en Tokio. <br>- Visitas indicadas. <br>- Autocar con aire acondicionado.',
    'noincluye' :'<strong>El VIAJE NO INCLUYE</strong>, <br>- Gastos personales y extras.  <br>- Bebidas. <br>- Propinas Japón: 50 USD por persona (se pagan directamente en destino). <br>- Ningún servicio no especificado como incluido o especificado como opcional).', 
    'duracion' : '11 días | 9 noches'})

 addItem({'id' : '5',
    'titulo': 'Tailandia y Phunket EXPRESS' ,
    'img' :  './assets/tailandiaExpress.jpg',
    'lugares' : 'Bangkok, Ayutthaya, Lopburi, Phitsanuloke, Sukhothai, Chiang Rai, Chiang Mai, Phuket.',
    'precio' : '$999 USD + 999IMP Por persona en habitación Doble.', 
    'incluye':  '<strong>EL VIAJE INCLUYE: </strong>, <br>- Boleto de avión en viaje redondo México -Bangkok - México, en clase tusrita. <br>- Boleto de avión Chiang Mai - Phuket en clase turista. <br>- Boleto de avión Phuket - Bangkok en clase turista. <br>- 2 noches de alojamiento en Bangkpk. <br>- 1 noche de alojamiento en Phitsanuloke. <br>- 1 noche de alojamiento en Chiang Rai. <br>- 1 noche de alojamiento en Chiang Mai. <br>- 2 noches de alojamiento en Phuket. <br>- Régimen alimenticio indicado en itinerario.  <br>- Autocar con aire acondicionado.',
    'noincluye' : '<strong>El VIAJE NO INCLUYE</strong>, Gastos personales y extras en hoteles, Bebidas, Propinas para maleteros, camaristas, meseros, etc, Propinas en Tailandia: 50 USD por persona (Se paga directo en destino), Gastos estras en los hoteles como llamadas telefónicas, lavandería, etc, Visa de Tailanda, Fee de cámaras en los monumentos Ningún servicio no específicado como incluido o especificado como opcional, Impuestos aéreos',
    'duracion' : '11 días | 7 noches'})

  addItem({'id':'6',
    'titulo':'Turquía con Islas Griegas en Cruero de 4 noches',
    'img': './assets/turquiaislasgriegas.jpeg',
    'lugares':'Turquía, Grecia',
    'precio': 'Desde $1,399 USD + 999 IMP',
    'incluye': '<strong> EL VIAJE INCLUYE: </strong><br> -Vuelos. <br> -Hospedaje. <br>-Desayuno. <br> -Guía habla hispana. <br> -Traslados. <br>-Visitas.',
    'noincluye': '<strong> EL VIAJE NO INCLUYE: </strong> <br> -Gastos personales y extras en los hoteles. <br> -Bebidas. <br> -Propinas en Turquía: 45 USD por persona. <br> -Impuestos. <br> -Tasa de servicio a bordo del crucero. <br> -Visa de Turquía.',
    'duracion': '15 días | 13 noches'})

  addItem({'id':'7',
    'titulo':'Con sabor a Colombia',
    'img': './assets/consaboracolombia.jpeg',
    'lugares':'Bogotá, Medellín, Cartagena',
    'precio': '$899 USD + 399 IMP',
    'incluye': '<strong> EL VIAJE INCLUYE: </strong><br> -Vuelos. <br> -Hospedaje. <br>-Desayuno. <br> -Guía habla hispana. <br> -Traslados. <br>-Visitas.',
    'noincluye': '<strong> EL VIAJE NO INCLUYE: </strong><br> -Seguro de viajero. <br> -Gastos personales y propinas a maleteros, trasladistas y meseros. <br> -Actividades acuáticas, snorkel, buceo con tanque, etc. <br> -Exceso de equipaje. <br> -Propinas.',
    'duracion': '8 días | 7 noches'})

  addItem({'id':'8',
'titulo':'Orlando, Navidad y Año Nuevo',
'img': './assets/orlandonavidad.jpeg',
'lugares':'Orlando',
'precio': '$999 USD + 399 IMP',
'incluye': '<strong> EL VIAJE INCLUYE: </strong><br> -Vuelos. <br> -Hospedaje. <br>-Desayuno. <br> -Guía habla hispana. <br> -Traslados. <br>-Visitas.',
'noincluye': '<strong> EL VIAJE NO INCLUYE: </strong><br> -IMPUESTOS $399 USD POR PERSONA. <br> -Traslados en los parques Disney. <br> -Tickets Universal. <br> -Alimentos, seguro de asistencia médica, propinas. <br> -Equipaje documentado y asiento asignado. ',
'duracion': '8 días | 7 noches'})


  addItem({'id': 9,
  'titulo':'Escapada a Costa Rica',
  'img': './assets/escapadacostarica.jpeg',
  'lugares':'San José',
  'precio': 'Desde $499 USD + 299 IMP ',
  'incluye': '<strong>EL VIAJE INCLUYE : </strong><br>-Boleto de avión México – San José – México. <br> - 04 noches de alojamiento en San José con desayunos diarios incluidos. <br> - Traslados de llegada y salida. <br> - Visita de Ciudad. <br> - Guía de habla hispana. <br> - Documentos de viaje se entregarán en formato digital para descargar en su dispositivo móvil. <br>',
  'noincluye': '<strong>EL VIAJE NO INCLUYE : </strong><br>- Tarjeta de Asistencia Turística (seguro de viajero). Consultar opciones.<br> - Ningún servicio no especificado.<br> - Excursiones opcionales.<br> - Gastos personales y propinas a maleteros, trasladistas y meseros.',
  'duracion': 'Duración 5 días | 4 noches',})

addItem({'id': 10,
  'titulo':'Gran Triángulo del Este',
  'img': './assets/grantriangulodeleste.jpg',
  'lugares':'Nueva Jersey, Boston, Niagara Falls, Washington, Philadelphia, New York',
  'precio': 'Desde $999 USD + 499 IMP',
  'incluye': '<strong>EL VIAJE INCLUYE : </strong><br>-Vuelo redondo México- New York- México<br> - 03 noches de Alojamiento en New Jersey<br> - 01 noche de Alojamiento en Boston<br> - 01 noche de Alojamiento en Niagara Falls (lado americano)<br> - 02 noches de Alojamiento en Washington<br> - Visitas panorámicas de ciudad: Niagara Falls - Boston- Washington - Philadelphia - New York<br> - Desayunos Americanos (Excepto Boston y Niagara Falls)<br> - Traslados Hotel- Apto- Hotel<br> - Vehículo con Aire Acondicionado<br> - Guía de habla hispana',
  'no incluye':'<strong>EL VIAJE NO INCLUYE : </strong> <br> - IMPUESTOS DE $499 USD POR PERSONA<br> - Gastos personales, alimentos, seguros de asistencia.<br> - Desayunos en Boston y Niagara<br> - Excursiones opcionales (pagaderos en destino) consulte opcionales.<br> - Propinas pagaderas en destino ($4 a $5 por día y por persona para cada uno de ellos, cantidad estándar en los EE.UU.).<br> - El hotel en Manhattan cobrará directamente al pasajero un resort fee por habitación por noche pagaderos en destino (la tarifa dependerá sobre la categoría de hotel reservada).<br> - Equipaje documentado consulte condiciones.',
  'duracion': 'Duración 8 días | 7 noches'});

