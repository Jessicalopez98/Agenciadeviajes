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
                '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">\n' +
                  'Reservar\n' +
                '</button>\n' +
              '</div>\n' +
            '</footer-card>\n' +

          '</article>\n' +
        '</div>\n' +
      '</div>\n' +

      '<!-- modal -->\n' +
      '<div class="modal" id="modal" tabindex="-1">\n' +
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
const itemsModal = document.getElementById("modal");
itemsModal.innerHTML += itemHTML;

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
