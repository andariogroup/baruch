# BARUCH Hostal — Solicitud de contenido y fotografía

**Documento para reunión con el cliente**  
**Fecha:** 18 de septiembre de 2026  
**Proyecto:** Sitio oficial bilingüe (español / inglés)  
**Elaborado por:** equipo de implementación digital  
**Estado del sitio:** MVP construido; la información comercial no confirmada permanece oculta o marcada como “en validación”.

---

## 1. Propósito de este documento

El sitio ya tiene arquitectura, diseño, navegación, SEO técnico y las seis categorías de alojamiento. **No publicamos datos inventados.** Cada dato que falta se muestra como “información en validación” o simplemente no aparece.

Este informe lista, de forma accionable, **qué necesita suministrar BARUCH** para que el sitio deje de ser un MVP visual y pase a ser un canal de reservas, confianza y descubrimiento del destino.

Se pide contenido en **español**. Si el cliente también entrega la versión en inglés, se publica tal cual; si no, se traduce de forma fiel a partir del original.

---

## 2. Cómo leer las prioridades

| Prioridad | Significado | Efecto si no llega |
|-----------|-------------|--------------------|
| **P1 — Bloquea conversión** | Sin este dato el visitante no puede reservar o contactar de forma oficial | El botón Reservar o WhatsApp queda deshabilitado; no hay dirección ni mapa preciso |
| **P2 — Contenido comercial** | Define la oferta (habitaciones, restaurante, tours, políticas) | Las páginas existen, pero con avisos de “en validación” |
| **P3 — Confianza y alcance** | Reseñas, redes, analítica, legal | El sitio funciona, pero pierde autoridad y medición |
| **P4 — Identidad visual** | Fotografía, video y logo vectorial | Se mantienen imágenes temporales; el pie de página advierte que no son fotos reales del hostal |

**Durante la reunión, conviene resolver P1 primero.** Con esos datos el sitio ya puede recibir reservas y consultas reales.

---

## 3. Lo que ya está publicado (no hace falta volver a enviarlo, salvo correcciones)

Confirmado en la documentación de proyecto y ya en el sitio:

- Nombre comercial: **BARUCH Hostal**
- Dominio: **https://www.baruchhostal.com**
- Localidad: **Buritaca, Magdalena, Colombia**
- Propuesta: *Disfruta Buritaca. Regresa a descansar.*
- Catálogo de **6 categorías** (no se publican habitaciones físicas numeradas):
  - Privada 2, 3, 4 y 5 personas — se reserva la habitación completa, baño privado
  - Compartida 6 y 7 personas — se reserva **una cama individual**, baño compartido y locker individual
- Amenidades generales confirmadas: **Wi-Fi** y **tomas de corriente**
- Restaurante propio, integrado a un entorno natural, abierto a huéspedes y a visitantes
- Destinos de la zona mencionados (sin distancias): Tayrona, Palomino, Quebrada Valencia, playas, río Buritaca, entretenimiento cercano, supermercado, transporte público
- Logo en PNG (header, pie y favicon)

Cualquier corrección a lo anterior debe indicarse de forma explícita.

---

## 4. Lista de contenido pendiente

### 4.1 Prioridad 1 — Datos operativos (bloquean reservas y contacto)

| ID | Qué se necesita | Formato de entrega | Dónde se usa | Estado actual en el sitio |
|----|-----------------|--------------------|--------------|---------------------------|
| TBD-001 | **URL del motor de reservas** (Andario u otro), enlace completo `https://…` | Un enlace que abra la reserva real | Botón **Reservar** (todas las páginas, abre en pestaña nueva) | Botón visible pero **deshabilitado** |
| TBD-002 | **Número de WhatsApp de atención**, con indicativo de país (ej. `57300…`) | Dígitos internacionales, sin espacios | Botón WhatsApp, botón flotante, mensajes contextuales | Visible pero **deshabilitado** |
| TBD-003 | **NAP exacto:** calle / vereda / referencia; teléfono de recepción si es distinto de WhatsApp; correo público | Texto + teléfono + email | Pie de página, Contacto, Ubicación, datos estructurados SEO | Solo se publica “Buritaca, Magdalena, Colombia” |
| TBD-004 | **Coordenadas GPS** del predio (latitud y longitud) y, si existe, enlace de Google Maps / ficha de Place | Dos números + URL opcional | Mapa de Ubicación y pin de Google | El mapa apunta a la **localidad**, no al hostal |

**Preguntas para la reunión**

1. ¿La URL de reserva ya está activa y se puede probar con fechas reales?
2. ¿El WhatsApp es de recepción, de reservas o de un comunitario? ¿Atiende en español e inglés?
3. ¿El teléfono de recepción es el mismo que WhatsApp?
4. ¿Pueden pinchar el punto exacto en Google Maps durante la reunión?

---

### 4.2 Prioridad 2 — Alojamiento

| ID | Qué se necesita | Detalle de lo que debe incluir | Dónde se usa |
|----|-----------------|--------------------------------|--------------|
| TBD-008 | **Tarifas por categoría** | Precio desde (COP) por categoría, o confirmación de que **no** se publican precios y solo se consulta el motor. Si hay temporada alta/baja, indicarlo. Moneda. | Fichas de alojamiento y detalle. Hoy: “consulte el motor” |
| TBD-009 | **Amenidades restantes, por categoría** | Para **cada una** de las 6 categorías, confirmar sí / no / no aplica: aire acondicionado, ventilador, agua caliente, TV, balcón, vista, cocina, desayuno incluido, toallas, ropa de cama, mosquitero, caja fuerte, nevera, escritorio, capacidad real de camas (doble, literas, individuales). **No publicar lo que no exista.** | Bloque “Qué incluye” en cada ficha. Hoy solo: baño, locker (compartidas), Wi-Fi, tomas |
| TBD-010 | **Políticas de alojamiento** | Check-in, check-out, cancelación, edad mínima, mascotas, ruido, depósitos, métodos de pago aceptados en el motor, normas de habitación compartida | Alojamiento, detalle, Términos. Hoy: aviso de validación |

**Plantilla sugerida para amenidades (una fila por categoría)**

| Categoría | Aire | Ventilador | Agua caliente | Tipo de camas | Otras |
|-----------|------|------------|---------------|---------------|-------|
| Privada 2 |      |            |               |               |       |
| Privada 3 |      |            |               |               |       |
| Privada 4 |      |            |               |               |       |
| Privada 5 |      |            |               |               |       |
| Compartida 6 |   |            |               |               |       |
| Compartida 7 |   |            |               |               |       |

**Textos opcionales a revisar:** las descripciones actuales son breves y genéricas. Si el cliente quiere un párrafo propio por categoría (tono, público, qué se siente al llegar), se puede sustituir sin inventar características.

---

### 4.3 Prioridad 2 — Restaurante

| ID | Qué se necesita | Detalle | Dónde se usa |
|----|-----------------|---------|--------------|
| TBD-011 | **Carta y horarios** | Horario por servicio (desayuno / almuerzo / cena) y días. Si cierra algún día, indicarlo. Carta vigente o al menos: platos estrella, rangos de precio, opciones vegetarianas, si hay menú del día. En material interno se mencionaron pasta, hamburguesas, smoothies y opciones vegetarianas: **hay que confirmarlas o descartarlas** antes de publicarlas. Política: ¿abierto a no huéspedes? (el concepto actual sí lo dice; confirmar). Reservas de mesa: WhatsApp, walk-in u otro. | Página Restaurante. Hoy: concepto publicado; carta y horarios en validación |

**Preguntas para la reunión**

1. ¿El restaurante abre todos los días?
2. ¿Hay desayuno? ¿Está incluido en la habitación o se cobra aparte?
3. ¿Quieren publicar la carta completa o solo una selección?

---

### 4.4 Prioridad 2 — Experiencias y bienestar

| ID | Qué se necesita | Detalle | Dónde se usa |
|----|-----------------|---------|--------------|
| TBD-012 | **Tours: propios vs. aliados** | Por cada actividad: nombre, si la opera BARUCH o un aliado (nombre del operador), duración aproximada, tarifa o “consultar”, cómo se reserva, qué incluye, nivel de dificultad, si sale desde el hostal. Destinos ya nombrados en el sitio: Tayrona, Palomino, Quebrada Valencia, playas, río Buritaca. | Experiencias. Hoy: listado de destinos **sin** operadores ni precios |
| TBD-013 | **Servicios de bienestar** | Nombre exacto (yoga, masaje, etc.), proveedor, propio o aliado, duración, tarifa, forma de reserva, condiciones. Si **aún no hay** servicios, confirmarlo para no dejar el bloque vacío con un aviso. | Experiencias / Home (pilar naturaleza y bienestar) |

Sin esta ficha, el sitio **no afirmará** que BARUCH opera un tour ni que existe un spa.

---

### 4.5 Prioridad 2 — Ubicación y destino

| ID | Qué se necesita | Detalle | Dónde se usa |
|----|-----------------|---------|--------------|
| TBD-014 | **Distancias y tiempos verificados** | Desde el hostal hacia: Tayrona, Palomino, Quebrada Valencia, playa más usada, río, supermercado, parada de transporte. Indicar medio (a pie, moto, carro, colectivo) y si el tiempo es en temporada normal. Un documento interno habla de “Tayrona a ~20 minutos”: **no se publica hasta verificarlo**. | Ubicación, Experiencias |
| — | **Cómo llegar, texto oficial** | Instrucciones desde Santa Marta, aeropuerto Simón Bolívar, Palomino y transporte público. Punto de encuentro si el acceso no es obvio. | Ubicación. Hoy hay un texto genérico del corredor costero |
| — | **Guías de “Descubre Buritaca”** | El hub editorial está creado, **sin artículos**. Temas previstos: qué hacer, cómo llegar, río Buritaca, playas y naturaleza, experiencias de la región, consejos prácticos. El cliente puede entregar borradores o puntos clave; no hace falta que estén redactados como web. | Descubre Buritaca / Home |

---

### 4.6 Prioridad 3 — Confianza, redes y medición

| ID | Qué se necesita | Detalle | Dónde se usa |
|----|-----------------|---------|--------------|
| TBD-015 | **Reseñas reales y fuente** | Enlaces a Google, Booking u otra plataforma **oficial**. No se publican testimonios sueltos ni estrellas inventadas. Ideal: 3–6 reseñas con nombre, fecha, plataforma y enlace. | Home (“Lo que dicen quienes se quedaron”). Hoy no se muestra ninguna |
| TBD-016 | **Redes sociales oficiales** | URL completa de Instagram, Facebook, TikTok y/o YouTube, **solo las que existan**. Las vacías no aparecen en el sitio. | Pie de página |
| TBD-017 | **Google Business Profile** | Enlace de la ficha (si está creada). Si no existe, conviene crearla con la misma NAP que el sitio. | Contacto / SEO local |
| TBD-018 | **Buzón del formulario de contacto** | Correo o webhook donde deben llegar los mensajes del formulario | Contacto. Sin esto el envío no está activo |
| TBD-019 | **Google Analytics 4** | Measurement ID (`G-XXXXXXXX`) si desean medición. El sitio no carga analítica hasta tenerlo. | Todo el sitio |
| TBD-020 | **Revisión legal** | Aprobación o texto definitivo de Privacidad, Cookies y Términos. Incluir condiciones de alojamiento cuando existan. | Páginas legales. Hoy hay borrador + aviso de revisión |

---

### 4.7 Prioridad 4 — Marca

| ID | Qué se necesita | Detalle | Dónde se usa |
|----|-----------------|---------|--------------|
| TBD-007 | **Logo vectorial** | Archivo SVG, AI o PDF del isotipo (el PNG comprimido ya está en el sitio). Paleta exacta si hay manual. | Header, favicon de alta calidad, papelería digital |

---

## 5. Inventario de fotografía y video

**Situación actual:** las imágenes del sitio son **provisionales** (generadas para composición). El pie de página lo declara. **No se presentan como fotos reales de BARUCH.** En cuanto llegue fotografía propia, se reemplazan.

**Regla de honestidad visual:** no se usarán fotos que muestren aire acondicionado, piscina, desayuno buffet, vistas o amenidades que el hostal no haya confirmado. No se distorsiona el tamaño de las habitaciones con gran angular extremo.

### 5.1 Especificaciones técnicas (todas las fotos)

| Aspecto | Requisito |
|---------|-----------|
| Formato | JPEG o HEIC original de cámara; también aceptamos PNG. Evitar WhatsApp comprimido como único original |
| Resolución mínima | 2.400 px en el lado largo; ideal 3.000–4.500 px |
| Color | Luz natural preferible; sin filtros pesados ni HDR agresivo |
| Personas | Si aparecen huéspedes o staff, se necesita autorización de uso en web |
| Entrega | Carpeta Drive / WeTransfer, **sin recortar** los originales; nosotros adaptamos recortes |
| Nombres de archivo | `sesion-tema-numero.jpg` (ej. `C-privada-2-01.jpg`) |
| Idioma de pie de foto | Una línea en español describiendo lo que se ve (ayuda al texto alternativo accesible) |

Formatos de recorte que usa el sitio:

- **16:9 apaisado** — home hero, atardecer, compartir en redes  
- **4:3 apaisado** — restaurante, naturaleza, destino  
- **3:4 vertical** — fichas de habitación (móvil)

Conviene disparar un poco más amplio de lo que se ve en pantalla: el recorte web recorta bordes.

---

### 5.2 Sesión A — Fachada, llegada y entorno del predio

**Páginas:** Inicio (hero), Ubicación, compartir en redes (Open Graph).

| Cód. | Tipo de toma | Prioridad | Descripción de lo que se necesita |
|------|--------------|-----------|-----------------------------------|
| A-01 | Exterior gran plano, **16:9**, hora dorada o tarde | **Obligatoria** | La imagen icónica del lugar: vegetación, luz caribeña y la atmósfera de BARUCH. No un stock de “selva genérica”: debe reconocerse como el predio. Sustituye el hero actual. |
| A-02 | Fachada / acceso principal, **4:3 o 16:9**, día | **Obligatoria** | Cómo se ve el hostal al llegar. Entrada, sendero o frente, con el entorno real. Sirve a Ubicación y a “¿estoy en el lugar correcto?” |
| A-03 | Señalética o nombre en el predio | Recomendada | Logo o letrero BARUCH en contexto, si existe. Refuerza marca y confianza. |
| A-04 | Entorno inmediato (camino, vegetación, sombra) | Recomendada | El visitante entiende que no es un hotel urbano. Útil en Ubicación y Home. |
| A-05 | Atardecer **en el predio o desde el predio**, 16:9 | **Obligatoria** | Cierre emocional del sitio (CTA final). Palmas, cielo, costa o jardín al atardecer; debe ser del lugar o de la vista real desde BARUCH, no de otra playa. |
| A-06 | Anochecer / luces cálidas del hostal | Opcional | Variante para redes y temporada. |

---

### 5.3 Sesión B — Áreas comunes, jardín y descanso

**Páginas:** Inicio (naturaleza y bienestar), Experiencias.

| Cód. | Tipo de toma | Prioridad | Descripción |
|------|--------------|-----------|-------------|
| B-01 | Hamacas o zona de descanso bajo vegetación, **4:3** | **Obligatoria** | El pilar “sombra, hamacas y silencio”. Plano amplio, gente opcional (si hay consentimiento). Sustituye la imagen de jardín actual. |
| B-02 | Zona social / terraza / área común | **Obligatoria** | Dónde se convive sin ser habitación ni restaurante. Honestidad: no inventar un lobby de resort. |
| B-03 | Detalle de vegetación y materiales (madera, plantas, texturas) | Recomendada | Apoya el look eco-boutique. |
| B-04 | Espacio de no-hacer-nada (lectura, red, sombra) | Recomendada | Refuerza “regresa a descansar”. |
| B-05 | Área de bienestar **solo si el servicio existe** | Condicionada | Esterillas, masaje, yoga, etc. **No disparar si el servicio no está confirmado.** |

---

### 5.4 Sesión C — Habitaciones (las seis categorías)

**Páginas:** Alojamiento (grid) y cada ficha de detalle (hero + galería).

Hoy cada categoría tiene **una sola imagen vertical provisional**. Lo mínimo publicable es **1 foto real por categoría**. Lo recomendable es una **galería de 3 a 5 fotos** por categoría.

Disparar **cada categoría por separado**. No reutilizar la foto de la privada 2 en la de 5 personas.

#### C1 — Privada para 2 personas

| Cód. | Tipo | Prioridad | Descripción |
|------|------|-----------|-------------|
| C1-01 | Plano general vertical **3:4** | **Obligatoria** | Habitación completa, cama (o camas) reales, luz natural. No ocultar el tamaño real. Esta es la foto de la ficha. |
| C1-02 | Cama y ropa de cama, 4:3 | Recomendada | Sensación de descanso; sábanas, almohadas, orden. |
| C1-03 | Baño privado | **Obligatoria para galería** | Lavamanos, ducha, estado real. Sin staging engañoso. |
| C1-04 | Ventana / luz / detalle | Recomendada | Relación con el exterior si existe. |

#### C2 — Privada para 3 personas

| Cód. | Tipo | Prioridad | Descripción |
|------|------|-----------|-------------|
| C2-01 | Plano general 3:4 con **las tres camas visibles** | **Obligatoria** | Debe leerse como habitación para tres, no como doble recortada. |
| C2-02 | Distribución de camas | Recomendada | Que el huésped entienda cómo se duerme. |
| C2-03 | Baño privado | **Obligatoria para galería** | Igual criterio de honestidad. |
| C2-04 | Almacenamiento / percheros | Opcional | Útil para grupos. |

#### C3 — Privada para 4 personas

| Cód. | Tipo | Prioridad | Descripción |
|------|------|-----------|-------------|
| C3-01 | Plano general 3:4, **cuatro plazas visibles** | **Obligatoria** | Familia o grupo; no recortar camas. |
| C3-02 | Ángulo alterno (desde la puerta o la ventana) | Recomendada | Segunda toma de galería. |
| C3-03 | Baño privado | **Obligatoria para galería** | |
| C3-04 | Detalle de convivencia (mesa, maletas, espacio de paso) | Opcional | |

#### C4 — Privada para 5 personas

| Cód. | Tipo | Prioridad | Descripción |
|------|------|-----------|-------------|
| C4-01 | Plano general 3:4, **cinco plazas visibles** | **Obligatoria** | Es la categoría más grande; el tamaño debe ser legible. |
| C4-02 | Ángulo alterno | Recomendada | |
| C4-03 | Baño privado | **Obligatoria para galería** | |
| C4-04 | Detalle de capacidad (literas si las hay, o camas extra) | Recomendada | Evita sorpresas al llegar. |

#### C5 — Compartida para 6 personas (venta por cama)

| Cód. | Tipo | Prioridad | Descripción |
|------|------|-----------|-------------|
| C5-01 | Plano general 3:4 del dormitorio | **Obligatoria** | Camas individuales ordenadas; se entiende que es compartida. |
| C5-02 | **Lockers individuales** en contexto | **Obligatoria** | Amenidad confirmada; debe verse. |
| C5-03 | Baño compartido | **Obligatoria para galería** | Estado real, limpio, sin promesas de spa. |
| C5-04 | Detalle de una cama (lo que reserva el huésped) | Recomendada | La unidad de venta es la cama, no la habitación. |

#### C6 — Compartida para 7 personas (venta por cama)

| Cód. | Tipo | Prioridad | Descripción |
|------|------|-----------|-------------|
| C6-01 | Plano general 3:4 | **Obligatoria** | Distinta de la de 6 personas. |
| C6-02 | Lockers | **Obligatoria** | |
| C6-03 | Baño compartido | **Obligatoria para galería** | Si es el mismo baño que C5, se puede reutilizar **solo** esta toma, y se indica. |
| C6-04 | Detalle de cama | Recomendada | |

**Notas de sesión C**

- Encender luces cálidas si el día está plano; preferir luz de mañana.
- Camas tendidas, suelo despejado, sin maletas de staff.
- Si hay aire o ventilador, fotografiarlo **solo** si se va a confirmar en el listado de amenidades.
- No usar fotos de otro hostal ni de renders.

---

### 5.5 Sesión D — Restaurante

**Páginas:** Inicio (bloque restaurante) y página Restaurante.

| Cód. | Tipo de toma | Prioridad | Descripción |
|------|--------------|-----------|-------------|
| D-01 | Comedor en entorno vegetal, **4:3**, luz natural | **Obligatoria** | El concepto “no es un salón cerrado”. Mesas, plantas, atmósfera. Sustituye la imagen actual. |
| D-02 | Segunda toma del mismo espacio (otro ángulo u hora) | Recomendada | Galería de la página. |
| D-03 | Mesa servida **sin platos inventados** (agua, menaje, ambiente) | Recomendada | Hospitalidad, no carta falsa. |
| D-04 | Barra / zona de servicio, si existe | Opcional | |
| D-05 | Exterior del restaurante (si se distingue del hostal) | Recomendada | Apoya el funnel “vine a comer y conocí BARUCH”. |
| D-06 a D-09 | **Platos reales de la carta confirmada** (cenital o 45°) | Condicionada | Pasta, hamburguesa, smoothie, opción vegetariana **solo si están en la carta vigente**. Fondo limpio, porción real. |

---

### 5.6 Sesión E — Destino: Buritaca y alrededores

**Páginas:** Inicio (Descubre), Ubicación, Experiencias, futuras guías.

Estas fotos pueden ser del **entorno al que se accede desde BARUCH**, no hace falta que sean dentro del predio. Deben ser propias o con derechos de uso web.

| Cód. | Tipo de toma | Prioridad | Descripción |
|------|--------------|-----------|-------------|
| E-01 | Río Buritaca, **4:3** | **Obligatoria** | Paisaje del río que da nombre al lugar. Sustituye la imagen de destino. |
| E-02 | Playa de la zona (la que recomiendan a huéspedes) | **Obligatoria** | Costa caribeña real de la zona, no una playa de otro departamento. |
| E-03 | Vegetación / naturaleza inmediata | Recomendada | Puente entre hostal y destino. |
| E-04 | Parque Tayrona (acceso o paisaje), si tienen toma propia | Recomendada | No usar fotos oficiales del parque sin derecho. Si no hay foto propia, se omite. |
| E-05 | Palomino | Opcional | Pueblo / playa, con derechos. |
| E-06 | Quebrada Valencia (pozos, cascada) | Recomendada | Experiencia de naturaleza. |
| E-07 | Transporte o llegada (carretera, parada, colectivo) | Opcional | Apoya “cómo llegar” sin textos técnicos. |
| E-08 | Vida local / comercio cercano, con respeto | Opcional | Supermercado o ambiente; no fotografiar personas sin permiso. |

---

### 5.7 Sesión F — Marca, detalle y redes

| Cód. | Tipo | Prioridad | Descripción |
|------|------|-----------|-------------|
| F-01 | Logo vectorial (archivo, no foto) | **Obligatoria** | Ver TBD-007. |
| F-02 | Recorte 1200 × 630 px o original 16:9 del hero para **compartir en WhatsApp / Facebook** | **Obligatoria** (puede recortarse de A-01) | Imagen al pegar el enlace del sitio. |
| F-03 | Retrato del espacio (detalle de marca: taza, toalla, señal) | Opcional | Redes. |
| F-04 | Equipo / anfitriones, con consentimiento | Opcional | Confianza; no obligatorio. |

---

### 5.8 Resumen de fotografía — cantidades

| Sesión | Obligatorias (mínimo para reemplazar provisionales) | Recomendadas (galerías completas) |
|--------|------------------------------------------------------|-----------------------------------|
| A Llegada | 3 (A-01, A-02, A-05) | 6 |
| B Comunes | 2 | 5 |
| C Habitaciones | 6 (una por categoría) | 24 (4 por categoría) |
| D Restaurante | 1 | 5 + platos si hay carta |
| E Destino | 2 | 8 |
| F Marca | 1 recorte OG + vector | 4 |
| **Total** | **~15 archivos reales** | **~45–55 archivos** |

Con **15 fotos reales bien hechas** se puede retirar el aviso de imágenes provisionales en las secciones principales. Con la galería completa, las fichas de habitación quedan al nivel de un hostal que compite en canales digitales.

---

## 6. Inventario de video

El sitio no depende de video para lanzar, pero un set corto eleva conversión y redes. Formato: **horizontal 16:9**, 4K o 1080p, sin música con copyright, sin textos pegados en el cuadro (el sitio pone los titulares).

| Cód. | Pieza | Duración | Sesión | Dónde se usaría | Descripción |
|------|-------|----------|--------|-----------------|-------------|
| V-01 | Loop de atmósfera | 8–15 s, silencioso o con ambiente | A + B | Hero de Home (fondo o modal) | Travelling lento de vegetación / luz / hamaca. Sin logos animados. |
| V-02 | Recorrido del hostal | 45–90 s | A + B + D | Home o Ubicación; también Reels/TikTok recortado | Llegada → comunes → restaurante → jardín. Voz opcional en español. |
| V-03 | Habitación privada | 15–25 s | C | Ficha privada 2 (se puede reutilizar tono en otras) | Entrar, mostrar cama y baño. Honestidad de tamaño. |
| V-04 | Habitación compartida | 15–25 s | C | Fichas shared | Cama, locker, baño. Deja claro el modelo “por cama”. |
| V-05 | Restaurante | 15–25 s | D | Página Restaurante | Mesas, vegetación, un plato **solo si está confirmado**. |
| V-06 | Destino | 30–45 s | E | Experiencias / Descubre | Río, playa o salida; no vender un tour no confirmado. |

**Mínimo útil:** V-01 + V-02. El resto es ampliación.

Si solo hay celular: filmar en **horizontal**, 4K si el teléfono lo permite, 30 fps, caminar despacio, no usar el zoom digital.

---

## 7. Orden sugerido de la reunión (45–60 min)

1. **10 min — Conversión:** URL de reserva, WhatsApp, dirección, pin de mapa, correo. El dominio `www.baruchhostal.com` ya está confirmado.  
2. **10 min — Alojamiento:** amenidades por categoría (tabla), políticas, decisión de publicar o no tarifas.  
3. **8 min — Restaurante:** horarios, desayuno, carta o selección, acceso de no huéspedes.  
4. **8 min — Experiencias:** qué opera BARUCH, qué es de aliados, bienestar sí/no.  
5. **5 min — Confianza:** ficha de Google, Instagram, 3 reseñas con enlace.  
6. **10 min — Producción visual:** quién fotografía, fechas, acceso a las 6 categorías y al restaurante, autorización de personas. Entregar este inventario al fotógrafo.  
7. **Cierre:** fecha de entrega de P1 (ideal: en la misma reunión o en 48 h) y de las fotos (ideal: 1–2 semanas).

---

## 8. Cómo entregar el material

| Material | Canal preferido |
|----------|-----------------|
| URLs, teléfonos, coordenadas, horarios | Este documento contestado, o un correo / WhatsApp con los campos P1 |
| Amenidades y políticas | Tabla o PDF interno; no hace falta diseño |
| Carta del restaurante | PDF, foto nítida de la carta vigente, o lista |
| Reseñas | Enlaces, no capturas recortadas |
| Fotos y videos | Google Drive o WeTransfer con originales; carpetas por sesión (A–F, V) |
| Logo vectorial | SVG / AI / PDF |

Todo lo que no llegue **no se inventa y no se publica**. El sitio puede salir a producción con P1 resuelto y fotografía provisional, pero la recomendación es no presentar el sitio al público final hasta tener **P1 + al menos las 15 fotos obligatorias**.

---

## 9. Contacto de seguimiento

Tras la reunión, el equipo de implementación cargará en el sitio únicamente lo **confirmado por escrito** (acta, correo o este documento diligenciado).

**Versión:** 1.0 · septiembre 2026 · alineado con el backlog de validación del sitio BARUCH Hostal.
