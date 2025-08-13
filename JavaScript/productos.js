function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.titlo+'</h5>\n' +
        '        <p class="card-text">'+item.lugares+'</p>\n' +
        '        <p class="card-text">'+item.precio+'</p>\n' +
        '        <p class="card-text">'+item.incluye+'</p>\n' +
        '        <p class="card-text">'+item.duracion+'</p>\n' 
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'id':1,
    'titlo':'Gran Tour de Europa',
    'img': '',
    'lugares':'Londres, París, Luxemburgo, Frankfurt, Heidelberg, Zúrich, Lucerna, Vaduz, Innsbruck, Padua, Venecia, Florencia, Roma, Pisa, Niza, Barcelona, Zaragoza, Madrid',
    'precio':'Desde $1,899 USD + 799 IMP Por persona en habitación Doble',
    'incluye':'Incluye : Vuelos, Hotel, Tours, Translados',
    'noincluye':'El viaje no incluye<br>ALIMENTOS, GASTOS DE INDOLE PERSONAL<br>NINGÚN SERVICIO NO ESPECÍFICADO.<br>TODAS LAS EXCURSIONES QUE SE MENCIONAN COMO OPCIONALES.<br>IMPUESTOS AÉREOS POR PERSONA<br>NOTA: 65 EUROS QUE CORRESPONDEN A PROPINAS PARA CHOFERES, TASAS HOTELES Y MUNICIPALES. SE PAGA EN DESTINO',
    'duracion':'Duración 19 días | 17 noches',
    });

addItem({'id':2,
    'titlo':'Especial Egipto y Dubái',
    'img': '',
    'lugares':'El Cairo, Aswan, Kom Ombo, Edfu, Esna, Luxor, Dubái',
    'precio':'Desde $1,299 USD + 999 IMP Por persona en habitación Doble',
    'incluye':'Incluye : Vuelos, Hotel, Tours, Translados',
    'noincluye':'El viaje no incluye<br>Gastos personales y extras en los hoteles.<br>Propinas en Egipto: 60 USD por persona. (Se paga directo en destino)<br>Propinas en Dubái: 35 USD por persona. (Se paga directo en destino)<br>Impuesto Turismo en Dubái: 5 USD por habitación por noche. (Se paga directo en destino)BookingConclusion<br>Impuestos aéreos<br>Visa de Egipto: 25 USD aproximadamente (se paga en destino)<br>Ningún servicio no especificado como incluido o como opcional.<br>Seguro de viaje (Es obligatorio para entrar a los Emiratos árabes Unidos).',
    'duracion':'Duración 15 días | 12 noches'
    });

addItem({'id':3,
    'titlo':'Tailandia y Phuket',
    'img': '',
    'lugares':'Bangkok, Kanchanaburi, Chiang Rai, Chiang Mai, Phuket',
    'precio':'Desde $1,599 USD + 999 IMP Por persona en habitación Doble',
    'incluye':'Incluye : Vuelos, Hotel, Tours Guiados, Translados',
    'noincluye':'El viaje no incluye<br>-Gastos personales y extras en los hoteles.<br>Propinas en Tailandia: 50 USD por persona (Se paga directo en destino)Ningún servicio no especificado como incluido o especificado como opcional.<br>Visa de Tailandia<br>Impuestos aéreos por persona',
    'duracion':'Duración 13 días | 9 noches',
    });

