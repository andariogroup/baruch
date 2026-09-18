import type { Dictionary } from './types';

/**
 * Spanish content. Every factual claim here traces back to the BARUCH project
 * documentation. Prices, distances, hours, amenities beyond the confirmed list,
 * reviews and contact details are deliberately absent.
 */
export const es: Dictionary = {
  meta: {
    localeName: 'Español',
    htmlLang: 'es-CO',
    siteName: 'BARUCH Hostal',
  },
  common: {
    skipToContent: 'Saltar al contenido',
    menu: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    book: 'Reservar',
    bookAria: 'Reservar en el motor de reservas',
    bookUnavailable: 'Reservas en configuración',
    viewAccommodation: 'Ver alojamientos',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Escribir por WhatsApp',
    whatsappUnavailable: 'WhatsApp en configuración',
    whatsappPrompt: 'Escríbenos',
    seeDetails: 'Ver detalles',
    backTo: 'Volver a',
    breadcrumbAria: 'Ruta de navegación',
    languageSwitch: 'Idioma',
    switchToLanguage: 'Ver esta página en inglés',
    opensInNewTab: 'se abre en una pestaña nueva',
    pendingLabel: 'Información en validación',
    pendingBody:
      'Estamos confirmando este dato con el hostal. Lo publicaremos cuando esté verificado.',
    guests: { one: '{count} persona', other: '{count} personas' },
    bed: 'cama',
    beds: 'camas',
  },
  nav: {
    home: 'Inicio',
    accommodation: 'Alojamiento',
    restaurant: 'Restaurante',
    experiences: 'Experiencias',
    location: 'Ubicación',
    contact: 'Contacto',
    discover: 'Descubre Buritaca',
  },
  home: {
    title: 'Hostal en Buritaca, Magdalena',
    description:
      'Hostal en Buritaca, Magdalena: habitaciones privadas y camas compartidas, restaurante en entorno natural y un punto estratégico para explorar el Caribe colombiano.',
    hero: {
      eyebrow: 'Buritaca · Magdalena',
      headline: 'Disfruta Buritaca. Regresa a descansar.',
      support:
        'Explora la naturaleza, descubre la zona y regresa a un lugar tranquilo donde el día se cierra sin ruido.',
      imageAlt:
        'Vegetación tropical densa iluminada por el sol de la tarde en la costa caribeña colombiana',
    },
    experience: {
      eyebrow: 'La experiencia BARUCH',
      heading: 'Un lugar para volver, no solo para dormir',
      intro:
        'BARUCH combina ubicación, descanso y vida local. Estos son los seis pilares que definen la estadía.',
      pillars: [
        {
          title: 'Ubicación',
          body: 'Un punto estratégico para desplazarte hacia los atractivos de la región.',
        },
        {
          title: 'Descanso',
          body: 'Un lugar tranquilo al cual regresar después de explorar.',
        },
        {
          title: 'Comodidad',
          body: 'Alternativas privadas y compartidas para parejas, familias, grupos y viajeros solos.',
        },
        {
          title: 'Gastronomía',
          body: 'Restaurante propio integrado a un entorno natural, abierto también a visitantes.',
        },
        {
          title: 'Naturaleza y bienestar',
          body: 'Espacios naturales de descanso, hamacas y experiencias de bienestar cuando están disponibles.',
        },
        {
          title: 'Experiencias',
          body: 'Acceso a tours y actividades propias o de aliados, siempre identificados con claridad.',
        },
      ],
    },
    discover: {
      eyebrow: 'Descubre Buritaca',
      heading: 'El destino es parte de la estadía',
      intro:
        'Buritaca es la puerta de entrada a playas, río, naturaleza y a varios de los atractivos más conocidos del Caribe colombiano. Estamos preparando guías útiles para planear el viaje.',
      cta: 'Explorar el destino',
    },
    accommodation: {
      eyebrow: 'Alojamiento',
      heading: 'Habitaciones privadas y camas compartidas',
      intro:
        'Seis categorías, desde una habitación privada para dos hasta una cama individual en habitación compartida. Elige según tu grupo y tu forma de viajar.',
      cta: 'Ver todas las categorías',
    },
    restaurant: {
      eyebrow: 'Restaurante',
      heading: 'Naturaleza, tranquilidad y mesa',
      intro:
        'El restaurante de BARUCH no busca la experiencia de un salón cerrado: está integrado a la vegetación y al ritmo pausado del lugar.',
      cta: 'Conocer el restaurante',
      imageAlt:
        'Mesa de madera bajo vegetación tropical con luz natural filtrada entre las hojas',
    },
    nature: {
      eyebrow: 'Naturaleza y bienestar',
      heading: 'Sombra, hamacas y silencio',
      intro:
        'Entre una salida y la siguiente, los espacios naturales del hostal son para no hacer nada. Es parte del plan.',
      imageAlt:
        'Hamaca colgada entre árboles en un jardín tropical sombreado',
    },
    experiences: {
      eyebrow: 'Experiencias',
      heading: 'Playa, río, naturaleza y vida local',
      intro:
        'Desde BARUCH puedes organizar salidas a los atractivos de la zona. Cuando la actividad la opera un aliado, lo indicamos siempre.',
      cta: 'Ver experiencias',
    },
    location: {
      eyebrow: 'Ubicación',
      heading: 'En Buritaca, Magdalena',
      intro:
        'Sobre la zona de Buritaca, con acceso a transporte, comercio cercano y salida hacia los destinos del Caribe colombiano.',
      cta: 'Cómo llegar',
    },
    trust: {
      eyebrow: 'Confianza',
      heading: 'Lo que dicen quienes se quedaron',
      intro:
        'Preferimos no publicar testimonios hasta poder mostrarlos con su fuente verificable.',
      pendingNote:
        'Esta sección se activará con reseñas reales y enlazadas a su plataforma de origen.',
    },
    finalCta: {
      heading: '¿Listo para venir a Buritaca?',
      body: 'Consulta disponibilidad en el motor de reservas o escríbenos y resolvemos tus dudas.',
      imageAlt:
        'Atardecer cálido sobre la costa caribeña con palmeras en silueta',
    },
  },
  accommodation: {
    title: 'Alojamiento en Buritaca: habitaciones privadas y compartidas',
    description:
      'Seis categorías en BARUCH Hostal: habitaciones privadas para 2, 3, 4 y 5 personas con baño privado, y camas individuales en habitaciones compartidas de 6 y 7.',
    heading: 'Alojamiento',
    intro:
      'El catálogo se organiza por tipo y capacidad. Las habitaciones privadas se reservan completas; en las habitaciones compartidas se reserva una cama individual.',
    privateHeading: 'Habitaciones privadas',
    privateIntro:
      'Se reserva la habitación completa e incluye baño privado. Pensadas para parejas, familias y grupos pequeños.',
    sharedHeading: 'Habitaciones compartidas',
    sharedIntro:
      'Se reserva una cama individual, no la habitación completa. Incluyen baño compartido y locker individual.',
    generalAmenitiesHeading: 'En todas las categorías',
    bathroom: { private: 'Baño privado', shared: 'Baño compartido' },
    bookingMode: { room: 'Habitación completa', bed: 'Venta por cama' },
    bookingModeHint: {
      room: 'La reserva cubre la habitación completa.',
      bed: 'La reserva cubre una cama individual dentro de la habitación compartida.',
    },
    amenitiesHeading: 'Qué incluye',
    amenityPendingNote:
      'Publicamos únicamente las características confirmadas por el hostal. Estamos validando el detalle restante por categoría, incluida la climatización.',
    ratesHeading: 'Tarifas',
    ratesPending:
      'Las tarifas se consultan directamente en el motor de reservas, según fechas y número de personas.',
    policiesHeading: 'Políticas',
    policiesPending:
      'Las políticas de check-in, check-out y cancelación están en validación con el hostal.',
    galleryHeading: 'Galería',
    otherHeading: 'Otras categorías',
    detailDescriptionHeading: 'Sobre esta categoría',
  },
  restaurant: {
    title: 'Restaurante en Buritaca, en entorno natural',
    description:
      'El restaurante de BARUCH Hostal en Buritaca está integrado a un entorno natural y abierto tanto a huéspedes como a visitantes.',
    heading: 'Restaurante',
    intro:
      'Naturaleza, tranquilidad y mesa. Un espacio abierto a la vegetación, para huéspedes y para quien llega solo a comer.',
    conceptHeading: 'El concepto',
    conceptBody: [
      'El restaurante es parte del mismo concepto del hostal: no busca transmitir la experiencia de un salón convencional cerrado, sino la de un espacio integrado a la vegetación y a una atmósfera relajada.',
      'Funciona como servicio para huéspedes y como puerta de entrada para visitantes que descubren BARUCH desde la mesa.',
    ],
    menuHeading: 'La carta',
    menuPending:
      'Estamos confirmando la carta definitiva con el hostal antes de publicarla. Si quieres conocer la oferta del día, escríbenos.',
    hoursHeading: 'Horarios',
    hoursPending:
      'Los horarios de atención están en validación. Consúltanos y te confirmamos el horario vigente.',
    imageAlt:
      'Comedor al aire libre rodeado de plantas tropicales con mobiliario de madera',
  },
  experiences: {
    title: 'Experiencias y actividades en Buritaca',
    description:
      'Desde BARUCH Hostal puedes organizar salidas a playas, río, naturaleza y atractivos de la región de Buritaca, Magdalena.',
    heading: 'Experiencias',
    intro:
      'La estadía en BARUCH se arma alrededor de salir a explorar. Estas son las líneas de experiencia que puedes coordinar desde el hostal.',
    aroundHeading: 'Alrededor de BARUCH',
    aroundIntro:
      'Buritaca conecta con varios atractivos del Caribe colombiano. Estos son los destinos que se mencionan con más frecuencia entre nuestros huéspedes.',
    partnerHeading: 'Tours y aliados',
    partnerBody:
      'Algunas actividades las opera BARUCH y otras las prestan aliados. Cuando el servicio es de un tercero lo indicamos de forma explícita, para que sepas con quién estás reservando.',
    wellnessHeading: 'Bienestar',
    wellnessBody:
      'El bienestar refuerza la idea central del hostal: descanso, naturaleza y recuperación.',
    wellnessPending:
      'Estamos confirmando el nombre de cada servicio, el proveedor responsable, la duración, la tarifa y la forma de reserva antes de publicarlos.',
    detailsPending:
      'El detalle de cada actividad, incluidos operadores y tarifas, está en validación. Escríbenos y te contamos qué hay disponible para tus fechas.',
  },
  location: {
    title: 'Cómo llegar a BARUCH Hostal en Buritaca',
    description:
      'BARUCH Hostal está en Buritaca, Magdalena, Colombia, con acceso a transporte y salida hacia los atractivos de la región.',
    heading: 'Ubicación',
    intro:
      'BARUCH está en Buritaca, Magdalena, en el Caribe colombiano, con acceso a transporte y comercio cercano.',
    addressHeading: 'Dirección',
    addressPending:
      'Estamos verificando la dirección exacta y las coordenadas antes de publicarlas. Para llegar sin contratiempos, escríbenos y te enviamos la referencia precisa.',
    nearbyHeading: 'Qué hay cerca',
    nearbyIntro:
      'Estos son los destinos y servicios que los huéspedes consultan con más frecuencia.',
    nearbyDisclaimer:
      'No publicamos distancias ni tiempos de viaje hasta verificarlos. Los tiempos reales dependen del transporte y de la temporada.',
    gettingHereHeading: 'Cómo llegar',
    gettingHereBody:
      'Buritaca se encuentra sobre el corredor de la costa entre Santa Marta y Palomino, con acceso por transporte público y privado. Confírmanos tu punto de origen y te indicamos la mejor ruta.',
    mapCta: 'Ver Buritaca en el mapa',
  },
  contact: {
    title: 'Contacto — BARUCH Hostal, Buritaca',
    description:
      'Escríbenos para consultar disponibilidad, tarifas, el restaurante o las experiencias de BARUCH Hostal en Buritaca, Magdalena.',
    heading: 'Contacto',
    intro:
      'Cuéntanos qué necesitas: disponibilidad, tarifas, el restaurante o una experiencia en la zona.',
    channelsHeading: 'Canales directos',
    channelsPending:
      'Estamos confirmando los datos de contacto oficiales antes de publicarlos. Por ahora puedes escribirnos con el formulario.',
    formHeading: 'Escríbenos',
    formIntro:
      'Responderemos con la información verificada que tengamos disponible.',
    form: {
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      submitting: 'Enviando…',
      success:
        'Gracias por escribirnos. Hemos recibido tu mensaje y te responderemos pronto.',
      error:
        'No pudimos enviar el mensaje. Vuelve a intentarlo en unos minutos o escríbenos por WhatsApp.',
      unavailable:
        'El envío del formulario todavía no está activo: estamos terminando de configurar el canal de recepción. Para no dejarte sin respuesta, escríbenos por WhatsApp.',
      rateLimited:
        'Recibimos varios mensajes desde esta conexión. Espera unos minutos antes de volver a enviar.',
      required: 'Este campo es obligatorio.',
      invalidEmail: 'Escribe un correo electrónico válido.',
      tooShort: 'Cuéntanos un poco más para poder ayudarte.',
      errorSummary: 'Revisa los campos marcados para continuar.',
      privacyNote:
        'Usamos estos datos únicamente para responder tu consulta.',
    },
  },
  discover: {
    title: 'Descubre Buritaca: guía del destino',
    description:
      'Guías sobre Buritaca, Magdalena: qué hacer, cómo llegar, el río, las playas y los atractivos cercanos del Caribe colombiano.',
    heading: 'Descubre Buritaca',
    intro:
      'Buritaca es el punto de partida. Aquí reunimos información útil para planear el viaje, escrita desde la experiencia de estar en la zona.',
    plannedHeading: 'En preparación',
    plannedIntro:
      'Estas son las guías en las que estamos trabajando. Publicaremos cada una cuando la información esté verificada.',
    plannedTopics: [
      'Qué hacer en Buritaca',
      'Cómo llegar a Buritaca',
      'El río Buritaca',
      'Playas y naturaleza',
      'Experiencias de la región',
      'Guías prácticas para viajeros',
    ],
    emptyHeading: 'Todavía no hay guías publicadas',
    emptyBody:
      'Preferimos publicar pocas guías verificadas antes que muchas genéricas. Mientras tanto, escríbenos y te contamos lo que necesites saber sobre la zona.',
  },
  legal: {
    privacy: {
      title: 'Política de privacidad',
      description:
        'Cómo trata BARUCH Hostal los datos personales recibidos a través de su sitio web.',
      heading: 'Política de privacidad',
      body: [
        'Este sitio recoge únicamente los datos que envías de forma voluntaria mediante el formulario de contacto: nombre, correo electrónico y el mensaje que escribes.',
        'Esos datos se usan con una sola finalidad: responder tu consulta. No se emplean para publicidad no solicitada ni se ceden a terceros con fines comerciales.',
        'La reserva se completa en un motor de reservas externo, en otro dominio. Ese proveedor aplica su propia política de privacidad y sus propias condiciones de tratamiento de datos.',
        'Puedes solicitar el acceso, la corrección o la eliminación de tus datos escribiéndonos por los canales oficiales del hostal.',
      ],
    },
    cookies: {
      title: 'Política de cookies',
      description:
        'Uso de cookies y tecnologías de medición en el sitio web de BARUCH Hostal.',
      heading: 'Política de cookies',
      body: [
        'Este sitio funciona sin cookies publicitarias ni de perfilado.',
        'Para entender de forma agregada qué contenidos resultan útiles podemos utilizar medición de tráfico. Esa medición no identifica a personas concretas ni se usa para construir perfiles individuales.',
        'Si en el futuro se incorporan cookies que requieran consentimiento previo, se solicitará antes de activarlas y esta página se actualizará.',
      ],
    },
    terms: {
      title: 'Términos y condiciones',
      description:
        'Condiciones de uso del sitio web de BARUCH Hostal en Buritaca, Magdalena.',
      heading: 'Términos y condiciones',
      body: [
        'La información publicada en este sitio tiene carácter informativo y describe la propuesta de alojamiento, restaurante y experiencias de BARUCH Hostal.',
        'La disponibilidad, las tarifas y las condiciones definitivas de la reserva las determina el motor de reservas externo en el momento de la compra.',
        'Cuando una experiencia o servicio lo presta un aliado, la relación contractual se establece con ese tercero y así se indica en la página correspondiente.',
        'Las condiciones completas de alojamiento se encuentran en validación y se publicarán en esta página.',
      ],
    },
    pendingNote:
      'Documento en revisión legal. Se actualizará con la versión definitiva aprobada por el hostal.',
  },
  footer: {
    tagline:
      'Un lugar tranquilo para descansar y descubrir el Caribe colombiano.',
    exploreHeading: 'Explorar',
    stayHeading: 'Alojamiento',
    legalHeading: 'Legal',
    contactHeading: 'Contacto',
    contactPending: 'Datos de contacto en validación.',
    socialPending: 'Perfiles oficiales en verificación.',
    rights: '© {year} BARUCH Hostal. Buritaca, Magdalena, Colombia.',
    assetNote:
      'Algunas imágenes son provisionales y se reemplazarán por fotografía propia del hostal.',
  },
  notFound: {
    title: 'Página no encontrada',
    heading: 'Esta página no existe',
    body: 'El enlace puede haber cambiado. Estos son los caminos más útiles desde aquí.',
    links: 'Continuar en',
  },
  error: {
    heading: 'Algo no cargó como esperábamos',
    body: 'Puedes volver a intentarlo. Si el problema continúa, escríbenos y te ayudamos.',
    retry: 'Volver a intentar',
  },
  whatsappMessages: {
    home: 'Hola, estoy visitando la página web de BARUCH Hostal y quisiera recibir información.',
    accommodation:
      'Hola, estoy viendo los alojamientos de BARUCH Hostal y quisiera consultar disponibilidad y tarifas.',
    experiences:
      'Hola, estoy viendo las experiencias de BARUCH Hostal y quisiera recibir más información.',
    restaurant:
      'Hola, quisiera recibir información sobre el restaurante de BARUCH Hostal.',
    contact:
      'Hola, estoy visitando la página de contacto de BARUCH Hostal y quisiera recibir información.',
  },
};
