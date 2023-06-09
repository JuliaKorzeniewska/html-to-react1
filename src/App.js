import logo from "./logo.svg";
import "./App.css";

function OfferBox({ isNew, title }) {
  return (
    <div className="square">
      {isNew && <div className="circle"></div>}
      <p className={isNew ? "new-offer" : ""}>{title}</p>
    </div>
  );
}

function EmployeeRow({ firstName, lastName, position, description, image }) {
  return (
    <div className="specialist">
      <div className="specialist-img"></div>
      <div className="specialists-info-wraper">
        <p className="name">{`${firstName} ${lastName} [${position}]`}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

function App() {
  const offers = [
    { title: "Usługa 1", isNew: true },
    { title: "Usługa 2", isNew: false },
    { title: "Usługa 3", isNew: false },
    { title: "Usługa 4", isNew: false },
    { title: "Usługa 5", isNew: false },
    { title: "Usługa 6", isNew: false },
  ];

  const employees = [
    {
      firstName: "Dane",
      lastName: "Crook",
      position: "Java Developer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea  quidem laboriosam, odit natus voluptatibus, autem rerum deserunt, tempore itaque porro dolorem architecto dolorum magnam nihil harum consequatur quod aliquid voluptatum! Autem itaque atque, ratione harum dicta similique cumque ipsam in maiores nam cupiditate animi eius nesciunt excepturi natus saepe culpa! Illo nobis eligendi, neque incidunt natus dolore. Rem, magnam error?",
      image: "user1.jpg",
    },
    {
      firstName: "Jane",
      lastName: "Heart",
      position: "UX Designer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea  quidem laboriosam, odit natus voluptatibus, autem rerum deserunt, tempore itaque porro dolorem architecto dolorum magnam nihil harum consequatur quod aliquid voluptatum! Autem itaque atque, ratione harum dicta similique cumque ipsam in maiores nam cupiditate animi eius nesciunt excepturi natus saepe culpa! Illo nobis eligendi, neque incidunt natus dolore. Rem, magnam error?",
      image: "user2.jpg",
    },
  ];

  return (
    <div className="body">
      <nav className="navbar">
        <div className="container">
          <a href="#" className="company-name">
            moja firma
          </a>
          <ul className="nav-links">
            <i className="fa-sharp fa-solid fa-bars"></i>
            <li>
              <a href="#about">o nas</a>
            </li>
            <li>
              <a href="#offers" className="offers-m">
                oferta
              </a>
            </li>
            <li>
              <a href="#" className="disabled">
                kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <div className="shadow">
          <div className="container">
            <h1 className="heading">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className="par-head">Nie wierz nam na słowo - sprawdź</p>
            <a href="#offers" className="offer-btn">
              oferta
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="specialists" id="about">
          <div className="container">
            <h2>Nasi specjaliści</h2>
            <div className="specialists-list">
              {employees.map((employee, index) => (
                <EmployeeRow key={index} {...employee} />
              ))}
            </div>
          </div>
        </section>
        <section className="offers" id="offers">
          <div className="container">
            <h2>Czym zajmuje się nasza firma?</h2>
            <div className="wrapper">
              {offers.map((offer, index) => (
                <OfferBox key={index} {...offer} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-content">
            <p className="text-footer">
              Nazwa firmy - wszelkie prawa zastrzeżone, 2023
            </p>
            <div className="social-icons">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
