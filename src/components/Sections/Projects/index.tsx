export const Projects = () => {
  return (
    <section className="centered py-y-default " id="projects__section">
      <div className="content-width container-config">
        <h2 className="title-2">
          <span className="text-border">Meus</span> projetos
        </h2>

        <ul className="projects__list">
          <li className="project__item">
            <a
              className="project__link"
              href="https://eubiel178.github.io/sunnyside-agency-landing-page/"
              target="_blank"
            >
              {/* <img
                className="project__image"
                src={sunnysideAgencyLandingPage}
                alt='Imagem da landing page da "Sunnyside agency'
              /> */}

              <p>Sunnyside agency</p>
            </a>
          </li>

          <li className="project__item">
            <a
              className="project__link"
              href="https://ecommerce-product-page-three-chi.vercel.app/"
              target="_blank"
            >
              {/* <img
                className="project__image"
                src={ecommerceProductPage}
                alt='Imagem da pagina do produto "Sneakers"'
              /> */}

              <p>Sneakers</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
