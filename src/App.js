import CSS from "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Iframe from "./components/Iframe";

const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark">
        <a
          class="navbar-brand"
          href="file://sql-srv/commun/Company%20Shared%20Folders/Syst%C3%A8me%20de%20management%20Fournier/Ressources%20humaines/IntranetRH/securite%20informatique.html"
        >
          <img
            class="logo"
            src="../images/Fournier_Logo_officiel.jpg"
            alt="logoFI"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <Header></Header>
      <Iframe></Iframe>
      <Footer></Footer>

      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"
      ></script>
      <script src="../js/camera.js" crossorigin="anonymous"></script>
    </div>
  );
};

export default App;
