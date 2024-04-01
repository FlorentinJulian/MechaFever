export const navItems = [
  { label: "Genero", href: "./Components/Description" },
  { label: "Recomendaciones", href: "./Components/FeatureSection" },
  { label: "Autores", href: "./Components/Artist" },
];

import Gunbuster from "../Imagenes/Gunbuster.jpg";
import Diebuster from "../Imagenes/Diebuster.jpg";
import Z from "../Imagenes/Z.jpg";
import Getter from "../Imagenes/Getter.png";
import Robo from "../Imagenes/Robo.jpg";
import Tengen from "../Imagenes/Tengen.jpg";

import Tezuka from "../Imagenes/Imagenes2/Tezuka.jpg";
import Nagai from "../Imagenes/Imagenes2/Nagai.jpg";
import Ishikawa from "../Imagenes/Imagenes2/Ishikawa.jpg";
import Anno from "../Imagenes/Imagenes2/Anno.jpg";
import Tomino from "../Imagenes/Imagenes2/Tomino.jpg";
import Yokoyama from "../Imagenes/Imagenes2/Yokoyama.jpg";

const imagenes = [Gunbuster, Diebuster, Z, Getter, Robo, Tengen];

const Imagenes2 = [Tezuka, Nagai, Ishikawa, Tomino, Yokoyama, Anno];

export const features = [
  {
    IMG: imagenes[0],
    text: "Gunbuster",
  },
  {
    IMG: imagenes[1],
    text: "Diebuster",
  },
  {
    IMG: imagenes[2],
    text: "Shin Mazinger Z",
  },
  {
    IMG: imagenes[3],
    text: "Getter Robo Armageddon",
  },
  {
    IMG: imagenes[4],
    text: "Giant Robo The animation",
  },
  {
    IMG: imagenes[5],
    text: "Gurren Lagann",
  },
];

export const checklistItems = [
  {
    title: "Super robot",
    description:
      "Este subgénero se caracteriza por robots gigantes con habilidades casi mágicas o muy avanzadas, que a menudo son únicos y tienen personalidades propias. Estos robots y sus historias tienden a enfocarse en el drama, la acción espectacular y a veces elementos de fantasía. Las narrativas suelen ser más episódicas y centradas en la lucha contra villanos o invasores. Ejemplos clásicos incluyen series como Mazinger Z y Gurren Lagann",
  },
  {
    title: "Real robot",
    description:
      " En contraste, el subgénero real robot presenta mechas más anclados en la ciencia ficción realista. Son vistos como herramientas de guerra avanzadas o vehículos, con un enfoque en su operatividad, mantenimiento y las implicaciones políticas o sociales de su uso en conflictos. Las historias suelen ser más maduras, tratando temas como la guerra, la política, y las relaciones humanas en contextos bélicos o de tensión. Mobile Suit Gundam es un ejemplo icónico de este subgénero, estableciendo muchos de los tropos y temas recurrentes.",
  },
];

export const testimonials = [
  {
    user: "Osamu Tezuka",
    img: Imagenes2[0],

    text: "Fue un mangaka,  animador, productor, y uno de los artistas más influyentes en la historia del manga y el anime. Creador de la famosa obra Astro boy. Es considerada la primera serie de manga y anime exitosa a nivel internacional. La historia sigue las aventuras de Astro Boy, un niño robot con emociones y un corazón de oro, luchando por la justicia en un mundo donde humanos y robots coexisten.",
  },
  {
    user: "Yokoyama Mitsuteru",
    img: Imagenes2[4],
    text: "Yokoyama Mitsuteru fue un influyente mangaka creador de Tetsujin 28-gō, en particular, es considerado uno de los primeros ejemplos del género mecha en manga y anime, presentando a un gigantesco robot controlado por un joven, y ha sido adaptado en varias series de televisión, películas y otros medios a lo largo de los años.",
  },
  {
    user: "Go nagai",
    img: Imagenes2[1],
    text: "Prolífico mangaka creador del exitoso Mazinger Z. Esta serie es a menudo considerada como el primer anime en presentar un robot gigante controlado por un piloto humano a través de un cockpit. Mazinger Z se convirtió en un fenómeno cultural en Japón y en todo el mundo, estableciendo muchas de las convenciones que luego serían seguidas por otras series de mechas.",
  },
  {
    user: "Ken Ishikawa",
    img: Imagenes2[2],
    text: "Fue un mangaka japonés, famoso por su trabajo en el género de los mechas y los superhéroes. shikawa es conocido principalmente por ser el creador de Getter Robo, una de las series pioneras en el género mecha. Junto con el legendario mangaka Go Nagai, Ishikawa creó esta serie en 1974. Getter Robo se destacó por su enfoque en robots gigantes pilotados por humanos que enfrentan amenazas alienígenas y otras fuerzas destructivas. ",
  },
  {
    user: "Yoshiyuki Tomino",
    img: Imagenes2[3],
    text: "Es un reconocido director de anime y guionista japonés.  Es considerado una figura influyente en la industria del anime, especialmente por su trabajo en la creación y dirección de la serie de anime Mobile Suit Gundam , que es uno de los pilares del género mecha y una de las franquicias más icónicas y populares en la historia del anime.",
  },
  {
    user: "Hideaki Anno",
    img: Imagenes2[5],
    text: "Famoso director, guionista, productor y animador japonés,  Es conocido principalmente por ser el creador y director de la serie de anime Neon Genesis Evangelion, una de las obras más influyentes y aclamadas en la historia del anime.",
  },
];
