<template>
  <div class="app">
    <!-- Header -->
    <header class="navbar">
      <div class="logo">
        <a href="/" class="logo-link">
          <img src="./assets/logo-icon.png" alt="Logo Icono" class="logo-icon" />
          <img src="./assets/logo-text.png" alt="Logo Texto" class="logo-text" />
        </a>
      </div>
        <!-- Botón hamburguesa en móvil -->
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <!-- Menú de navegación web-->
      <nav class="menu">
        <a href="#funciona">¿Cómo funciona?</a>
        <a href="#caracteristicas">Características</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#faq">Preguntas frecuentes</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a href="#call-to-action" class="cta">Comienza gratis</a>
    </header>
    <!-- Hero -->
    <section id="hero" class="section">
      <section class="hero">
        <h1>LabIoT</h1>
        <h2>Inventario inteligente</h2>
        <p>Olvídate del conteo manual. Sensores, RFID y QR que vigilan tus insumos 24/7.</p>
        <div class="buttons">
          <a href="#contacto" class="btn btn-primary">Solicitar demo</a>
          <a href="#funciona" class="btn btn-outline">Ver cómo funciona</a>
        </div>
      </section>
    </section>
    <!-- Problema -->
    <section id="problema" class="section">
      <section class="container">
        <h2>¿Por qué LabIoT?</h2>
        <p>¿Cansado de perder tiempo contando frascos o lidiando con Excel? LabIoT automatiza tu inventario y te alerta antes de que algo salga mal.</p>
      </section>
    </section>
    <!-- Cómo funciona -->
    <section id="funciona" class="section">
      <section class="section bg-light">
        <h2>Así funciona en 3 pasos</h2>
        <div class="grid">
          <div class="card">
            <h3>1. Etiquetar</h3>
            <p>Ponemos RFID o QR a cada insumo para identificarlo al instante.</p>
          </div>
          <div class="card">
            <h3>2. Monitorear</h3>
            <p>Sensores vigilan temperatura, humedad y ubicaciones 24/7.</p>
          </div>
          <div class="card">
            <h3>3. Actuar</h3>
            <p>La plataforma te avisa en tiempo real y te muestra qué hacer.</p>
          </div>
        </div>
      </section>
    </section>
    <!-- Características -->
    <section id="caracteristicas" class="section">
      <section class="container">
        <h2>Características clave</h2>
        <div class="grid">
          <div class="card"><h3>Identificación rápida</h3><p>RFID y QR para búsquedas instantáneas.</p></div>
          <div class="card"><h3>Alertas en tiempo real</h3><p>Notificaciones por email o dentro de la app.</p></div>
          <div class="card"><h3>Monitoreo ambiental</h3><p>Temperatura y humedad controladas.</p></div>
          <div class="card"><h3>Integraciones</h3><p>Conecta con tu ERP o sistema de compras.</p></div>
          <div class="card"><h3>Escalable</h3><p>Funciona desde un laboratorio pequeño hasta uno grande.</p></div>
          <div class="card"><h3>Módulos a medida</h3><p>Elige entre inventario básico o monitoreo avanzado.</p></div>
        </div>
      </section>
    </section>
    <!-- Beneficios -->
    <section id="beneficios" class="section">
      <section class="section bg-light">
        <h2>Resultados que importan</h2>
        <ul class="list">
          <li>✔️ Menos tiempo en inventarios → más tiempo para investigar</li>
          <li>✔️ Evita pérdidas por caducidad o mal almacenamiento</li>
          <li>✔️ Cumple normas y facilita auditorías</li>
        </ul>
        <div class="problem-tags">
          <span><span class="material-symbols-outlined">bolt</span> Rápido</span>
          <span><span class="material-symbols-outlined">devices</span> Multiplataforma</span>
          <span><span class="material-symbols-outlined">security</span> Seguro</span>
        </div>
      </section>
    </section>
    <!-- FAQ -->
    <section id="faq" class="section">
      <section class="container">
        <h2>Preguntas frecuentes</h2>
        <div class="faq">
          <div><h3>¿Hace falta cambiar todo el equipamiento?</h3><p>No, LabIoT se adapta y puede empezar por un área piloto.</p></div>
          <div><h3>¿Funciona con reactivos sensibles?</h3><p>Sí, los sensores envían alertas antes de que haya pérdidas.</p></div>
          <div><h3>¿Se integra con mis sistemas?</h3><p>Sí, diseñamos integraciones según tus sistemas de compras o ERP.</p></div>
        </div>
      </section>
    </section>
    <!-- Contacto -->
    <section id="contacto" class="section">
      <section class="section bg-light">
        <h2>Contáctanos</h2>
        <form class="form" @submit.prevent="submitForm">
          <input v-model="form.nombre" type="text" placeholder="Nombre">
          <input v-model="form.email" type="email" placeholder="Correo electrónico">
          <input v-model="form.organizacion" type="text" placeholder="Organización">
          <textarea v-model="form.mensaje" placeholder="Mensaje"></textarea>
          <button type="submit" class="btn btn-outline">Enviar mensaje</button>
        </form>
      </section>
    </section>
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <h2>LabIoT</h2>
          <p>Una plataforma inteligente para laboratorios que automatiza el control de inventarios con IoT, RFID y sensores. Nuestro objetivo es ayudarte a ahorrar tiempo, reducir errores y garantizar la seguridad de tus materiales.</p>
        </div>
        <div class="footer-links">
          <a href="#"><span class="material-symbols-outlined">language</span> Web</a>
          <a href="mailto:info@labiot.com"><span class="material-symbols-outlined">mail</span> Email</a>
          <a href="#"><span class="material-symbols-outlined">share</span> Redes</a>
        </div>
      </div>
      <div class="footer-copy">
        © 2025 LabIoT. Todos los derechos reservados.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'
const isMenuOpen = ref(false)
const form = reactive({
  nombre: '',
  email: '',
  organizacion: '',
  mensaje: ''
})

function submitForm() {
  console.log('Formulario enviado:', form)
  alert('Gracias por tu mensaje, nos pondremos en contacto pronto.')
  form.nombre = ''
  form.email = ''
  form.organizacion = ''
  form.mensaje = ''
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;      /* ocupa toda la pantalla */
  max-width: 100%;  /* quita límites */
  box-sizing: border-box;
}
/* Header */
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25rem;
  background: white;
  border-bottom: 1px solid #dbeafe;
  padding: 1.2rem 2rem;  
  position: sticky;
  top: 0;
  z-index: 50;
}
/* Logo */
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.8rem;
}
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.logo-icon {
  width: 32px;
  height: auto;
}

.logo-text {
  height: 28px;
  width: auto;
}

.menu {
  display: flex;
  gap: 2rem;
}

.menu a {
  text-decoration: none;
  color: #004AAD;
  font-weight: 500;
  transition: color 0.3s;
}

.menu a:hover {
  color: #38bdf8;
}

/* Botón CTA */
.cta {
  background: #004AAD;
  color: #f1f1f1;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  transition: background 0.3s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.cta:hover {
  background: #1d4ed8;
}

/* Botón hamburguesa */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
}

/* --- Responsivo --- */
@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    top: 60px;
    right: 20px;
    background: white;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
  }

  .menu.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333;
}

.hero {
  max-width: 600px;
  margin: 0 auto;
  background: linear-gradient(to right, #004AAD, #00B894);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

h2 {
  color: #333333;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.hero h2 {
  color: #f1f1f1;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.card h3 {
  color: #333333;
}
.card p {
  color: #333333;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #004AAD;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #004AAD;
}

.btn-outline {
  background: linear-gradient(135deg, #004AAD, #00B894);
  border: 2px solid white;
  color: white;
}

.section {
  padding: 3rem 2rem;
  text-align: center;
  scroll-margin-top: 87px;
}

.section.bg-light {
  background: none;
  color: inherit;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}
.problem-tags {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.problem-tags span {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #004AAD;
  font-weight: 600;
  font-size: 1rem;
}
.material-symbols-outlined {
  font-size: 20px;
}

.bg-light {
  max-width: 800px;
  margin: 0 auto;
  background-color: #f1f1f1;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.list {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.faq div {
  margin-bottom: 1.5rem;
  text-align: center;
}

.form {
  display: grid;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.form input,
.form textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.footer {
  background-color: #222;
  color: #aaa;
  padding: 1rem;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  text-align: center;
}

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}
.footer-brand h2 {
  color: #00B894;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.footer-brand p {
  color: #00B894; /* Celeste suave */
  max-width: 400px;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: #00B894;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.footer-copy {
  text-align: center;
  color: #00B894;
  font-size: 0.85rem;
  margin-top: 20px;
}

#hero {
  background: url("./assets/lp-bg.jpg") no-repeat center center/cover;
  color: white;
}

#problema {
  background-color: #f9fafb;
}

#funciona {
  background: linear-gradient(135deg, #004AAD, #00B894);
  color: white;
}

#caracteristicas {
  background-color: #ffffff;
}

#beneficios {
  background-color: #F1F1F1;
}

#faq {
  background-color: #ffffff;
}

#contacto {
  background: linear-gradient(135deg, #004AAD, #00B894);
  color: white;
}
#contacto .form input,
#contacto .form textarea {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #F1F1F1;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

#contacto .form input::placeholder,
#contacto .form textarea::placeholder {
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
</style>