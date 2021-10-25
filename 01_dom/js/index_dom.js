import hamburgerMenu from "./dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortCuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtros_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones-formulario.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma")
  countdown("countdown", "Oct 01, 2021", "Feliz Cumpleaños")
  scrollTopButton(".scroll-top-btn")
  responsiveMedia(
    "youtube",
    "(min-width: 600px)",
    `<a href="https://www.youtube.com/watch?v=TURbeWK2wwg" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/TURbeWK2wwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
  responsiveMedia(
    "gmaps",
    "(min-width: 600px)",
    `<a href="https://goo.gl/maps/Eg4zsZtR1Pb6MHir9" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.9469338333847!2d-90.51556698567913!3d14.658952979575144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a209e1ffbfdd%3A0x12b0303b26e4ecd6!2sUniversidad%20Mariano%20G%C3%A1lvez%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1632172875572!5m2!1ses!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
  responsiveTester("responsive-tester")
  userDeviceInfo("user-device")
  webCam("webcam")
  getGeolocation("geolocation")
  searchFilters(".card-filter", ".card")
  draw("#winner-btn", ".player")
  slider()
  scrollSpy()
  smartVideo()
  contactFormValidations()

})

d.addEventListener("keydown", e => {
  shortCuts(e)
  moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")
networkStatus()
speechReader()