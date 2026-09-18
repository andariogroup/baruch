# BARUCH Hostal — TBD

**Regla:** no inventar. Si un dato no está confirmado, no se publica.

Última actualización: septiembre 2026

## Bloquea producción o conversión completa

| ID | Item | Estado en el MVP |
|----|------|------------------|
| TBD-001 | URL del motor de reservas externo | CTA deshabilitado hasta `NEXT_PUBLIC_BOOKING_ENGINE_URL` |
| TBD-002 | Número de WhatsApp | CTA oculto hasta `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| TBD-003 | NAP exacto (calle, teléfono, email) | Solo se publica Buritaca, Magdalena, Colombia |
| TBD-004 | Coordenadas | El mapa apunta a la localidad, no a un pin |
| TBD-005 | Dominio definitivo | `NEXT_PUBLIC_SITE_URL` usa localhost en desarrollo |
| TBD-006 | Fotografía real | Assets temporales gobernados como `AI_GENERATED` |
| TBD-007 | Logo vectorial | PNG en uso en header, footer y favicon; el vector sigue pendiente |

## Contenido comercial pendiente

| ID | Item |
|----|------|
| TBD-008 | Tarifas por categoría |
| TBD-009 | Amenidades restantes (aire, ventilador, agua caliente, etc.) |
| TBD-010 | Políticas de alojamiento |
| TBD-011 | Carta y horarios del restaurante |
| TBD-012 | Tours propios vs. aliados, tarifas y operadores |
| TBD-013 | Servicios de bienestar |
| TBD-014 | Distancias y tiempos verificados |
| TBD-015 | Reseñas reales y fuente |
| TBD-016 | Perfiles de redes sociales |
| TBD-017 | Google Business Profile |
| TBD-018 | Webhook de contacto (`CONTACT_WEBHOOK_URL`) |
| TBD-019 | Measurement ID de GA4 |
| TBD-020 | Revisión legal de privacidad, cookies y términos |

## Cómo resolver un TBD

1. Confirmar el dato con BARUCH.
2. Actualizar `.env.local` (o `src/data/` / el diccionario si es contenido).
3. Quitar el `PendingNote` o el estado vacío asociado.
4. Marcar el ítem como resuelto aquí, con fecha.
