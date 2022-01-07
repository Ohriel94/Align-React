import * as React from "react";

const iframe = document.getElementById("iframe");
const canvas = document.getElementById("canvas");
const contexte = canvas.getContext("2d");
const thkSlider = document.getElementById("thkSlider");
const alpSlider = document.getElementById("alpSlider");
const denSlider = document.getElementById("denSlider");
const thkValue = document.getElementById("thkValue");
const alpValue = document.getElementById("alpValue");
const denValue = document.getElementById("denValue");
const chkRefresh = document.getElementById("chkRefresh");

var couleurLignes = "";
var couleurChoisit = "bleu";
var alpha = 0.75;
var epaisseur = 10;
var densite = 10;
var unBoutonAEtePresse = false;
var refreshRate = 12000;

canvas.width = iframe.width;
canvas.height = iframe.height;

window.setInterval(() => {
  console.log("chkRefresh.checked : ", chkRefresh.checked);
  if (chkRefresh.checked) refreshRate = 1500;
  else refreshRate = 12000;
  document.getElementById("iframe").src =
    "https://10.0.1.95/ISAPI/Streaming/Channels/101/picture";
}, refreshRate);

const DessinerCanvas = () => {
  EffacerCanvas(contexte);
  RecupererValeurs();
  contexte.fillStyle = "rgba(120,120,120,0.10)";
  contexte.fillRect(0, 0, canvas.width, canvas.height);
  if (!unBoutonAEtePresse) couleurChoisit = "bleu";
  switch (couleurChoisit) {
    case "rouge":
      couleurLignes = "RGBA(175,27,27," + alpha + ")";
      break;
    case "bleu":
      couleurLignes = "RGBA(31,80,190," + alpha + ")";
      break;
    case "vert":
      couleurLignes = "RGBA(37,156,41," + alpha + ")";
      break;
    case "orange":
      couleurLignes = "RGBA(255,145,46," + alpha + ")";
      break;
    case "violet":
      couleurLignes = "RGBA(133, 64, 255," + alpha + ")";
      break;
    case "blanc":
      couleurLignes = "RGB(255,255,255," + alpha + ")";
      break;
  }
  //Dessiner les lignes verticales. S'ajuste en fonction des dimensions de l'écran par rapport a la densité
  //de lignes choisit
  let nbLignesVerticales = Math.round((canvas.width / canvas.height) * densite);
  let nbLignesHorizontales = Math.round(
    (canvas.height / canvas.width) * densite * 2
  );

  contexte.beginPath();
  for (var i = 1; i < nbLignesVerticales; i++) {
    contexte.lineCap = "flat";
    contexte.strokeStyle = couleurLignes;
    contexte.moveTo((canvas.width / nbLignesVerticales) * i, 0);
    contexte.lineTo((canvas.width / nbLignesVerticales) * i, canvas.height);
    contexte.lineWidth = epaisseur;
  }
  //Dessiner les lignes horizontales. S'ajuste en fonction des dimensions de l'écran par rapport a la densité
  //de lignes choisit
  for (var j = 1; j < nbLignesHorizontales; j++) {
    contexte.lineCap = "flat";
    contexte.strokeStyle = couleurLignes;
    contexte.moveTo(0, (canvas.height / nbLignesHorizontales) * j);
    contexte.lineTo(canvas.width, (canvas.height / nbLignesHorizontales) * j);
    contexte.lineWidth = epaisseur;
  }
  contexte.stroke();
  contexte.globalCompositeOperation = "destination-atop";
};

const ChoisirCouleur = (boutonPressé) => {
  couleurChoisit = boutonPressé.value;
  unBoutonAEtePresse = true;
  DessinerCanvas();
};

const RecupererValeurs = () => {
  epaisseur = thkSlider.value;
  alpha = alpSlider.value / 100;
  densite = denSlider.value;
  thkValue.innerHTML = epaisseur;
  alpValue.innerHTML = alpha;
  denValue.innerHTML = densite;
};

const EffacerCanvas = (contexte) => {
  contexte.clearRect(0, 0, canvas.width, canvas.height);
};
thkSlider.onmouseup = () => {
  DessinerCanvas();
};
alpSlider.onmouseup = () => {
  DessinerCanvas();
};
denSlider.onmouseup = () => {
  DessinerCanvas();
};

const Iframe = () => {
  return (
    <div onload={DessinerCanvas()}>
      <article class="row">
        <aside class="side">
          <div class="slider-container">
            <h2>Controls</h2>
            <input type="checkbox" id="chkRefresh" checked="checked" />
            <label for="slow">Accèlérer Rafraichissement </label>
            <hr />
            <label for="epaisseur">
              Épaisseur:
              <span id="thkValue">0</span>
            </label>
            <input type="range" id="thkSlider" min="5" max="25" value="10" />
            <label for="alpha">
              Alpha:
              <span id="alpValue">0</span>
            </label>
            <input type="range" id="alpSlider" min="20" max="100" value="75" />
            <label for="densite">
              Densité:
              <span id="denValue">0</span>
            </label>
            <input type="range" id="denSlider" min="3" max="20" value="10" />
          </div>
          <br />
          <div class="boutons-container">
            <input
              type="button"
              id="btn-rouge"
              class="boutons"
              onclick={ChoisirCouleur(this)}
              value="rouge"
            />
            <br />
            <input
              type="button"
              id="btn-bleu"
              class="boutons"
              onclick={ChoisirCouleur(this)}
              value="bleu"
            />
            <br />
            <input
              type="button"
              id="btn-vert"
              class="boutons"
              onclick={ChoisirCouleur(this)}
              value="vert"
            />
            <br />
            <input
              type="button"
              id="btn-orange"
              class="boutons"
              onclick={ChoisirCouleur(this)}
              value="orange"
            />
            <br />
            <input
              type="button"
              id="btn-violet"
              class="boutons"
              onclick={ChoisirCouleur(this)}
              value="violet"
            />
            <br />
            <input
              type="button"
              id="btn-blanc"
              class="boutons"
              onclick={ChoisirCouleur(this)}
              value="blanc"
            />
            <br />
          </div>
        </aside>
        <main class="main">
          <h2>View</h2>
          <canvas id="canvas"></canvas>
          <iframe
            id="iframe"
            width="1920"
            height="1080"
            title="retourCamera"
            src=""
            scrolling="no"
            loading="eager"
          ></iframe>
        </main>
      </article>
    </div>
  );
};

export default Iframe;
