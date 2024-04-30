import "./styles/MenuList.css";
import React from 'react';
import "./styles/Bestsellers.css";
import { Link } from 'react-router-dom';

const MenuList = () => {
    return ( 
        <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span> Mama's Sweet Treats<></> Menu</span>
      </h2>

      <div className="projects__container container grid">
        {/* Project Card 1 */}
        <article className="projects__card">
          <div className="projects__image">
            <img
              src="https://bunsbakery.co.za/wp-content/uploads/2023/03/red-velvet-cupcakes-500x667.jpg"
              alt="image"
              className="projects__img"
            />


          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">1.</h3>
            <h2 className="projects__title">Red Velvet Cupcakes (6s)</h2>

            <p className="projects__description">
              R290
            </p>
          </div>

          <div className="projects__buttons">
            <Link to="/contact"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> Order Now
            </Link>
          </div>
        </article>
{/* Project Card 1 */}
<article className="projects__card">
          <div className="projects__image">
            <img
              src="https://bunsbakery.co.za/wp-content/uploads/2022/07/Biscoff-scaled-500x667.jpeg"
              alt="image"
              className="projects__img"
            />


          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">2.</h3>
            <h2 className="projects__title">Biscoff Cupcakes (6s)</h2>

            <p className="projects__description">
              R250
            </p>
          </div>

          <div className="projects__buttons">
          <Link to="/contact"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> Order Now
            </Link>
          </div>
        </article>
        {/* Project Card 1 */}
        <article className="projects__card">
          <div className="projects__image">
            <img
              src="https://bunsbakery.co.za/wp-content/uploads/2022/06/Reese_s-scaled-500x667.jpg"
              alt="image"
              className="projects__img"
            />

          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">3.</h3>
            <h2 className="projects__title">Reese’s Cupcakes (6s)</h2>

            <p className="projects__description">
              R450
            </p>
          </div>
          <div className="projects__buttons">
          <Link to="/contact"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> Order Now
            </Link>
          </div>
        </article>
     
      </div>


      <div className="projects__container container grid">
        {/* Project Card 1 */}
        <article className="projects__card">
          <div className="projects__image">
            <img
              src="https://bunsbakery.co.za/wp-content/uploads/2022/11/Trio-500x667.jpeg"
              alt="image"
              className="projects__img"
            />


          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">4.</h3>
            <h2 className="projects__title">Thanksgiving Trio</h2>

            <p className="projects__description">
              R640
            </p>
          </div>

          <div className="projects__buttons">
          <Link to="/contact"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> Order Now
            </Link>
          </div>
        </article>
{/* Project Card 1 */}
<article className="projects__card">
          <div className="projects__image">
            <img
              src="https://bunsbakery.co.za/wp-content/uploads/2022/06/vegan-bundt-scaled-500x667.jpg"
              alt="image"
              className="projects__img"
            />


          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">5.</h3>
            <h2 className="projects__title">Vegan Chocolate Bundt (4s)</h2>

            <p className="projects__description">
              R950
            </p>
          </div>

          <div className="projects__buttons">
          <Link to="/contact"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> Order Now
            </Link>
          </div>
        </article>
        {/* Project Card 1 */}
        <article className="projects__card">
          <div className="projects__image">
            <img
              src="https://bunsbakery.co.za/wp-content/uploads/2022/06/Vegan-Peanut-butter-choc-scaled-500x667.jpg"
              alt="image"
              className="projects__img"
            />

          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">6.</h3>
            <h2 className="projects__title">Vegan Peanut Butter Chocolate Cake</h2>

            <p className="projects__description">
              R750
            </p>
          </div>
          <div className="projects__buttons">
          <Link to="/contact"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> Order Now
            </Link>
          </div>
        </article>
     
      </div>
    </section>

     );
}
 
export default MenuList;