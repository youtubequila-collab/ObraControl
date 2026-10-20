# ObraControl – Sistema de Roles que Cumple

> **“Controlar es construir con seguridad”**  
> *“Cada tarea tiene un nombre, cada resultado tiene un responsable. Controlar es construir con seguridad”*

Plataforma web integral para la definición, asignación, seguimiento y evaluación de responsabilidades en la gestión de materiales de obras de construcción civil.

- **Sede Regional:** Rioja, San Martín, Perú
- **Fecha de Presentación:** Octubre de 2026
- **Idioma:** Español
- **Moneda de Valorizaciones:** Soles peruanos (S/)

---

## 🏛️ 1. Arquitectura y Tecnologías

El sistema está desarrollado sobre una arquitectura moderna, modular y desacoplada:

- **Frontend:**
  - **React 18** con **TypeScript**.
  - **Tailwind CSS** con paleta corporativa oficial:
    - Naranja corporativo: `#EE6F23`
    - Blanco: `#FFFFFF`
    - Gris oscuro: `#2D3034`
    - Gris claro: `#F5F6F7`
    - Verde cumplido: `#10B981`
    - Rojo alertas / incumplimientos: `#EF4444`
    - Amarillo pendientes: `#F59E0B`
  - **Recharts** para gráficos dinámicos de barras y distribución sectorial.
  - **Lucide Icons** para iconografía moderna y consistente.
  - **jsPDF & jspdf-autotable** para exportación formal de informes y Matriz RACI a PDF.
  - **xlsx (SheetJS)** para exportación a hojas de cálculo Excel.

- **Backend:**
  - **Node.js** con **Express**.
  - **Autenticación Segura:** JWT (*JSON Web Tokens*) y contraseñas cifradas mediante **bcryptjs** (10 salt rounds).
  - **Control de Acceso Basado en Roles (RBAC):** Middleware en servidor con verificación estricta de permisos por endpoint.
  - **Protección contra ataques:** Límite de intentos de inicio de sesión (*rate limiting* por IP/cuenta), sanitización de parámetros y manejo centralizado de excepciones sin fuga de datos sensibles.

- **Capa de Persistencia y Base de Datos:**
  - **PostgreSQL Ready:** Esquema relacional formal DDL completo con claves foráneas, restricciones de integridad e índices estratégicos en `database/schema.sql`.
  - **Datos Semilla Oficiales:** Script de inserción SQL en `database/seed.sql` con proyectos viales de Rioja, los 10 roles institucionales y las 10 actividades RACI.
  - **Dual-Engine Persistence:** Almacén persistente local JSON atómico de alta disponibilidad integrado (`server/db/data.json`) que permite ejecutar la aplicación al 100% de inmediato sin dependencias externas obligatorias de servicios de base de datos, conmutable automáticamente a PostgreSQL mediante `DATABASE_URL`.

---

## 📋 2. Módulos Implementados

### Módulo 1: Inicio / Dashboard
- Tarjetas de KPIs calculadas en tiempo real: Total usuarios, roles, responsabilidades, tareas cumplidas, pendientes, alertas e incumplimientos.
- Indicador de cumplimiento general: `(Cumplidas / Total) × 100`.
- Indicador de cumplimiento en plazo: `(A tiempo / Total Cumplidas) × 100`.
- Gráfico de barras semanal con Recharts (Sem 36 a Sem 41).
- Gráfico circular de distribución de carga de responsabilidades por área.
- Alertas de responsabilidades críticas y vencidas.
- Bitácora en vivo de actividades recientes desde el registro de auditoría.
- Accesos directos rápidos para registrar usuarios, editar la matriz RACI y emitir reportes.

### Módulo 2: Gestión de Usuarios
- Directorio de usuarios con búsqueda en tiempo real por nombre, cargo, DNI o email.
- Filtros por departamento, rol de obra y estado (Activo / Inactivo).
- Registro de nuevos usuarios asociándolos a proyectos de obra en Rioja.
- Edición de información laboral, teléfonos y reasignación de roles múltiples.
- Activación y desactivación de cuentas con confirmación.
- Restablecimiento seguro de contraseñas.
- Modal de consulta de historial de asignaciones y responsabilidades por usuario.

### Módulo 3: Gestión de Roles y Permisos
- Administración de los **10 perfiles clave**:
  1. *Dirección / Gerencia*
  2. *Jefe de Materiales*
  3. *Coordinador de Compras*
  4. *Jefe de Almacén*
  5. *Auxiliar de Almacén*
  6. *Supervisor de Obra*
  7. *Inspector Técnico*
  8. *Analista de Control*
  9. *Finanzas*
  10. *Calidad*
- Ficha estructurada con: Nombre, código, nivel de autoridad, objetivo, funciones, responsabilidades específicas, KPIs de evaluación y permisos técnicos.
- Creación y edición de roles personalizados.

### Módulo 4: Matriz RACI Interactiva
- Matriz interactiva de doble entrada para las **10 actividades de gestión de materiales**:
  1. *Recepción de materiales*
  2. *Verificación de especificaciones*
  3. *Registro de movimientos en ObraControl*
  4. *Emisión de reportes*
  5. *Autorización de salidas*
  6. *Control de inventarios*
  7. *Solicitud de materiales*
  8. *Evaluación de proveedores*
  9. *Registro de incidencias*
  10. *Conciliación de existencias*
- **Regla de Integridad Obligatoria:** Validación algorítmica de **un único rol Accountable (A)** por actividad y al menos un ejecutor **Responsible (R)**.
- Edición interactiva celda por celda en vivo.
- Detección y visualización de advertencias de consistencia.
- Exportación directa a formatos **Excel (.xlsx)** y **PDF (.pdf)** con membrete institucional.
- Modo de impresión optimizado.

### Módulo 5: Fichas de Cargos y Funciones
- Visualizador de perfiles de puesto con sus funciones normativas detalladas para materiales.
- Editor administrativo para ajustar funciones, responsabilidades y metas de desempeño (KPIs).

### Módulo 6: Flujo de Asignación y Comunicación
- Protocolo formal de **7 pasos**:
  1. *Definición del puesto y funciones.*
  2. *Designación del responsable.*
  3. *Comunicación oficial de la asignación.*
  4. *Capacitación sobre ObraControl.*
  5. *Confirmación de lectura y aceptación.*
  6. *Seguimiento de responsabilidades.*
  7. *Traspaso formal ante cambios de titular con acta y observaciones.*
- Trazabilidad de fecha, usuario emisor, titular anterior y titular nuevo.

### Módulo 7: Seguimiento y Cumplimiento
- Matriz de control con estados: *Pendiente*, *En proceso*, *Cumplido*, *Vencido*, *En revisión*, *Requiere mejora*.
- Registro de porcentaje de avance físico (0 al 100%) con notas descriptivas.
- Carga de evidencias documentales o fotográficas (URL digitalizada de guías/ensayos).
- Detección automática de tareas vencidas.
- Fórmulas de cálculo de cumplimiento expuestas con transparencia.

### Módulo 8: Reportes Dinámicos
- Informes predefinidos: Resumen Ejecutivo, Cumplimiento Individual, Por Departamento, Tareas Vencidas, e Incidencias.
- Filtros por rango de fechas, área, usuario, rol y estado.
- Cuadros comparativos con gráficos Recharts.
- Descarga en un clic a **Excel (.xlsx)** y **PDF (.pdf)** y botón para impresión física.

### Módulo 9: Centro de Notificaciones
- Alertas en tiempo real por nuevas asignaciones, vencimientos, desvíos y cambios RACI.
- Filtrado por tipo y por estado (leídas / no leídas).
- Botón de marcado masivo y enlaces directos a cada módulo correspondiente.

### Módulo 10: Auditoría Inmutable
- Bitácora cronológica inalterable de eventos: inicio de sesión, creación de usuarios, cambios de roles, aprobaciones y exportaciones.
- Registro de fecha y hora, usuario actor, entidad intervenida, detalle JSON y dirección IP.

---

## 🔑 3. Cuentas de Demostración

Para evaluar inmediatamente el sistema y sus diferentes permisos según el rol, puede usar cualquiera de las siguientes cuentas precargadas:

| Nombre y Cargo | Correo Electrónico | Contraseña | Rol Principal |
| :--- | :--- | :--- | :--- |
| **Ing. Carlos Mendoza Ruiz** (Director) | `carlos.mendoza@obracontrol.pe` | `ObraControl2026!` | Dirección / Gerencia |
| **Ing. Lucía Paredes Silva** (Jefa Materiales) | `lucia.paredes@obracontrol.pe` | `ObraControl2026!` | Jefe de Materiales |
| **Lic. Roberto Salazar Gómez** (Compras) | `roberto.salazar@obracontrol.pe` | `ObraControl2026!` | Coordinador de Compras |
| **Téc. Marco Antonio Ríos** (Almacén) | `marco.rios@obracontrol.pe` | `ObraControl2026!` | Jefe de Almacén |
| **Jorge Luis Chávez Vega** (Auxiliar) | `jorge.chavez@obracontrol.pe` | `ObraControl2026!` | Auxiliar de Almacén |
| **Ing. Walter Pinedo Fasabi** (Residente) | `walter.pinedo@obracontrol.pe` | `ObraControl2026!` | Supervisor de Obra |
| **Ing. Diana Morales Chuquizuta** (Inspector) | `diana.morales@obracontrol.pe` | `ObraControl2026!` | Inspector Técnico |
| **Lic. Fernando Tafur Vela** (Control) | `fernando.tafur@obracontrol.pe` | `ObraControl2026!` | Analista de Control |
| **C.P.C. Sandra Vargas Reátegui** (Costos) | `sandra.vargas@obracontrol.pe` | `ObraControl2026!` | Finanzas |
| **Ing. Patricia Lozano Coral** (Calidad) | `patricia.lozano@obracontrol.pe` | `ObraControl2026!` | Calidad |

> *Nota:* En la pantalla de inicio de sesión encontrará además un selector rápido de perfiles demo para acceder con un solo clic.

---

## 🚀 4. Instalación y Ejecución

### Requisitos Previos
- **Node.js**: v18 o superior (recomendado v20+ o v24).
- **npm**: v9 o superior.

### Comandos de Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Modo Desarrollo (Frontend Vite con HMR + Backend Express):**
   ```bash
   npm run dev
   ```
   - Frontend disponible en: `http://localhost:5173`
   - Backend API en: `http://localhost:5000`

3. **Compilación para Producción:**
   ```bash
   npm run build
   ```
   Compila el frontend TypeScript en `dist/client`.

4. **Ejecución en Producción:**
   ```bash
   npm start
   ```
   Inicia el servidor Express sirviendo tanto los endpoints de la API REST como la aplicación web en `http://localhost:5000`.

---

## 🗄️ 5. Base de Datos PostgreSQL (Opcional)

Si desea conectar una base de datos PostgreSQL externa:

1. Cree la base de datos:
   ```sql
   CREATE DATABASE obracontrol_db;
   ```
2. Ejecute el script de estructura relacional:
   ```bash
   psql -U postgres -d obracontrol_db -f database/schema.sql
   ```
3. Cargue los datos iniciales de Rioja:
   ```bash
   psql -U postgres -d obracontrol_db -f database/seed.sql
   ```
4. Configure en su archivo `.env`:
   ```env
   DATABASE_URL=postgresql://postgres:su_clave@localhost:5432/obracontrol_db
   ```

---

## 🛡️ 6. Seguridad y Buenas Prácticas

- **Cifrado de contraseñas:** Hash bcrypt unidireccional con sal aleatoria.
- **Tokens criptográficos:** JWT firmados con clave secreta y caducidad configurada.
- **Protección contra fuerza bruta:** Bloqueo temporal por intentos fallidos recurrentes.
- **Trazabilidad:** Toda creación, actualización o cambio de estado genera un registro inmutable en la tabla de auditoría con fecha, usuario e IP.
- **Validación de entradas:** Sanitización en cliente y validación estricta de reglas de negocio en el backend.

---

*ObraControl Rioja, San Martín, Perú – Octubre 2026*




🏛️ 1. Identidad Institucional y Visual
Nombre: ObraControl – Sistema de Roles que Cumple
Eslogan Oficial: “Controlar es construir con seguridad”
Frase Institucional: “Cada tarea tiene un nombre, cada resultado tiene un responsable. Controlar es construir con seguridad”
Sede: Rioja, San Martín, Perú
Fecha de Presentación: Octubre de 2026
Moneda: Soles peruanos (S/)
Paleta de Colores Corporativa Aplicada:
Naranja corporativo: #EE6F23
Blanco: #FFFFFF
Gris oscuro: #2D3034
Gris claro: #F5F6F7
Verde para cumplidos: #10B981
Rojo para alertas e incumplimientos: #EF4444
Amarillo para tareas pendientes: #F59E0B
💻 2. Tecnologías y Arquitectura
Capa	Tecnologías
Frontend	React 18, TypeScript, Tailwind CSS, Lucide Icons, Recharts, jsPDF, jspdf-autotable, SheetJS (xlsx).
Backend	Node.js con Express, arquitectura REST modular, JWT (JSON Web Tokens), bcryptjs (hashing seguro), control de intentos de login y CORS.
Persistencia	Arquitectura Dual: Esquema formal PostgreSQL (database/schema.sql y database/seed.sql) + Almacén persistente local atómico JSON (server/db/data.json) que garantiza ejecución inmediata sin requerir servicios de bases de datos externos encendidos.
Seguridad	RBAC (Role-Based Access Control) verificado tanto en middleware de servidor como en componentes de interfaz, bitácora inmutable de auditoría.
🧩 3. Módulos Desarrollados y Funcionales

Módulo 1: Inicio / Dashboard

Tarjetas de indicadores calculadas en tiempo real: usuarios registrados, roles activos, responsabilidades, tareas cumplidas, pendientes, vencidas e incidencias.
Fórmulas de cumplimiento: 
Porcentaje de Cumplimiento
=
(
Tareas Cumplidas
Total de Tareas
)
×
100
Porcentaje de Cumplimiento=(
Total de Tareas
Tareas Cumplidas
	​

)×100 
Cumplimiento en Plazo
=
(
Cumplidas en Plazo
Total Cumplidas
)
×
100
Cumplimiento en Plazo=(
Total Cumplidas
Cumplidas en Plazo
	​

)×100
Gráfico de barras semanal con Recharts (Sem 36 a Sem 41).
Gráfico circular de distribución de responsabilidades por departamento.
Alertas críticas de tareas vencidas y bitácora en vivo de actividades recientes.

Módulo 2: Gestión de Usuarios

Directorio con filtros multidimensionales (búsqueda rápida, área, rol y estado).
Modal de registro y edición de usuarios vinculados a obras de Rioja.
Activación y desactivación de cuentas con diálogo de confirmación.
Restablecimiento seguro de credenciales cifradas con bcrypt.
Modal de historial de asignaciones y responsabilidades por colaborador.

Módulo 3: Gestión de Roles y Permisos

Implementación de los 10 perfiles clave: Dirección / Gerencia, Jefe de Materiales, Coordinador de Compras, Jefe de Almacén, Auxiliar de Almacén, Supervisor de Obra, Inspector Técnico, Analista de Control, Finanzas, Calidad.
Fichas completas: nivel de autoridad, objetivo, funciones, responsabilidades específicas, KPIs de evaluación y permisos técnicos.
Creación, modificación y activación/desactivación de roles personalizados.

Módulo 4: Matriz RACI Interactiva

Grilla interactiva para las 10 actividades iniciales de gestión de materiales: Recepción de materiales, Verificación de especificaciones, Registro de movimientos en ObraControl, Emisión de reportes, Autorización de salidas, Control de inventarios, Solicitud de materiales, Evaluación de proveedores, Registro de incidencias, Conciliación de existencias.
Validación Estricta: Verificación de un único rol Accountable (
𝐴
A) por actividad y al menos un ejecutor Responsible (
𝑅
R).
Edición interactiva en vivo por celda (
𝑅
→
𝐴
→
𝐶
→
𝐼
→
Vac
ı
ˊ
o
R→A→C→I→Vac
ı
ˊ
o).
Exportación directa a Excel (.xlsx) y PDF (.pdf) con membrete institucional e impresión optimizada.

Módulo 5: Fichas de Cargos y Funciones

Fichas detalladas con las funciones normativas y específicas de cada cargo en obra.
Panel administrativo editable para modificar objetivos, funciones, responsabilidades y metas de desempeño (KPIs).

Módulo 6: Flujo de Asignación y Comunicación

Protocolo estructurado de 7 pasos:
Definición del puesto y funciones.
Designación del responsable.
Comunicación oficial.
Capacitación sobre ObraControl.
Confirmación de lectura y aceptación.
Seguimiento de responsabilidades.
Traspaso formal con acta y observaciones.
Trazabilidad de traspasos de titulares con registro de usuario emisor, titular anterior y titular entrante.

Módulo 7: Seguimiento y Cumplimiento

Matriz de control con 6 estados: Pendiente, En proceso, Cumplido, Vencido, En revisión, Requiere mejora.
Registro de avances físicos porcentuales (
0
%
0% a 
100
%
100%) con justificación técnica.
Enlace y carga de evidencias documentales (guías de remisión, certificados de laboratorio).
Detección automática de fechas límites vencidas.

Módulo 8: Reportes Dinámicos

Informes predefinidos: Resumen Ejecutivo, Cumplimiento Individual, Por Departamento, Tareas Vencidas, e Incidencias.
Filtros por rango de fechas, departamento, titular, rol y estado.
Cuadros comparativos con gráficos de barras Recharts y totales calculados.
Descarga con un clic a Excel (.xlsx), PDF (.pdf) e impresión física.

Módulo 9: Centro de Notificaciones

Campanilla global en el encabezado con conteo de alertas no leídas y menú desplegable.
Alertas por nuevas asignaciones, vencimientos de materiales, incumplimientos y cambios RACI.
Marcado individual o masivo de alertas leídas con enlaces directos al módulo pertinente.

Módulo 10: Auditoría y Configuración

Bitácora cronológica inalterable (tamper-proof) de eventos del sistema (inicios de sesión, cambios de roles, modificaciones, aprobaciones y exportaciones) con fecha, usuario, entidad y dirección IP.
Panel de ajustes con datos institucionales de Rioja, San Martín, parámetros de seguridad y descarga de respaldo JSON.
🔑 4. Cuentas de Demostración Precargadas

La pantalla de inicio de sesión incluye un selector rápido de perfiles de demostración para ingresar con un solo clic. También puede ingresar manualmente con cualquiera de las siguientes credenciales:

Titular	Correo Electrónico	Contraseña	Rol Principal
Ing. Carlos Mendoza Ruiz	carlos.mendoza@obracontrol.pe	ObraControl2026!	Dirección / Gerencia
Ing. Lucía Paredes Silva	lucia.paredes@obracontrol.pe	ObraControl2026!	Jefe de Materiales
Lic. Roberto Salazar Gómez	roberto.salazar@obracontrol.pe	ObraControl2026!	Coordinador de Compras
Téc. Marco Antonio Ríos	marco.rios@obracontrol.pe	ObraControl2026!	Jefe de Almacén
Jorge Luis Chávez Vega	jorge.chavez@obracontrol.pe	ObraControl2026!	Auxiliar de Almacén
Ing. Walter Pinedo Fasabi	walter.pinedo@obracontrol.pe	ObraControl2026!	Supervisor de Obra
Ing. Diana Morales Chuquizuta	diana.morales@obracontrol.pe	ObraControl2026!	Inspector Técnico
Lic. Fernando Tafur Vela	fernando.tafur@obracontrol.pe	ObraControl2026!	Analista de Control
C.P.C. Sandra Vargas Reátegui	sandra.vargas@obracontrol.pe	ObraControl2026!	Finanzas
Ing. Patricia Lozano Coral	patricia.lozano@obracontrol.pe	ObraControl2026!	Calidad
🚀 5. Comandos de Ejecución y Pruebas

Para trabajar en el proyecto, abra una terminal en el directorio C:\Users\RUDEUS\.gemini\antigravity\scratch\ObraControl:

Modo Desarrollo (Frontend Vite con recarga rápida + Backend Express simultáneo):

bash
npm run dev
Aplicación web: http://localhost:5173
API Backend: http://localhost:5000

Compilación de Producción:

bash
npm run build

(Verificado: compila 2,458 módulos con 0 errores TypeScript en dist/client).

Ejecución en Producción (Servidor unificado):

bash
npm start
npm start
Inicia el servidor en http://localhost:5000 sirviendo la API REST y la aplicación web completa.

Archivos de Base de Datos PostgreSQL:

Esquema relacional DDL: database/schema.sql
Datos iniciales de demostración: database/seed.sql
Documentación técnica: README.md#   O b r a C o n t r o l  
 