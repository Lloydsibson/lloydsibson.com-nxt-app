import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import { ReadMoreBtn } from "../components/ReadMore";

export const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 900,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <section className="testomonials-container">
      {/* <div className="testomonials-container__title">
          <h2>Testimonials</h2>
        </div> */}
      <Slider {...settings}>
        <div className="review-item">
          <article className="review-container">
            <div className="review-container__image-container">
              <img
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1663239791/img/kiran-review_pr5tj6.jpg"
                alt="Kirandeep Gills's selfie"
                width="80"
                height="80"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <section className="review-container__text-container">
              <p>
                One of the most knowledgeable Devs Monetate has had in a very
                long time! Always looking at ways we can better develop a
                ticket.
              </p>
              {/* <ReadMoreBtn text={"Read More"} /> */}
            </section>
            <section className="review-container__client-details">
              <h2>Kirandeep Gill</h2>
              <h3>Senior QA Tester @ NEXT</h3>
              {/* <h4>NEXT PLC</h4> */}
            </section>
          </article>
        </div>

        <div className="review-item">
          <article className="review-container">
            <div className="review-container__image-container">
              <img
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655935855/img/car-review_ewlz1v.jpg"
                alt="Carla Cabeça's selfie"
                width="80"
                height="80"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <section className="review-container__text-container">
              <p>
                Lloyd is exceptional at using HTML, CSS, and JavaScript to
                deliver pixel perfect and responsive pages from our UI/UX
                designs.
                {/* I worked with Lloyd on the same Agile team at WOS Group. He is
                  a very passionate and knowledgeable Front-End Developer. Also
                  exceptional at using HTML, CSS, And JavaScript to deliver
                  pixel perfect user interfaces and responsive content pages
                  from our UI/UX designs. A natural problem solver, creative and
                  easily approachable. Lloyd is a great asset to any company and
                  he has my full recommendation. */}
              </p>
              {/* <ReadMoreBtn text={"Read More"} /> */}
            </section>
            <section className="review-container__client-details">
              <h2>Carla Cabeça</h2>
              <h3>UI/UX Designer @ FARFETCH</h3>
              {/* <h4>FARFETCH</h4> */}
            </section>
          </article>
        </div>
        <div className="review-item">
          <article className="review-container">
            <div className="review-container__image-container">
              <img
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1663858758/img/jess-review_lesw90.jpg"
                alt="Jess Bevans's selfie"
                width="80"
                height="80"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <section className="review-container__text-container">
              <p>
                An extremely talented Dev who can quickly put things right
                should there be a problem. Always friendly when resolving issues
                for QA.
              </p>
              {/* <ReadMoreBtn text={"Read More"} /> */}
            </section>
            <section className="review-container__client-details">
              <h2>Jess Bevans</h2>
              <h3>Test Analyst @ NEXT</h3>
              {/* <h4>NEXT PLC</h4> */}
            </section>
          </article>
        </div>
        <div className="review-item">
          <article className="review-container">
            <div className="review-container__image-container">
              <img
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655935855/img/cam-review_yawxaz.jpg"
                alt="Cameron Hamilton's selfie"
                width="80"
                height="80"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <section className="review-container__text-container">
              <p>
                Awesome team to work with, have done an incredible job on my
                website and the ongoing design. Would 10/10 recomend!!
              </p>
              {/* <ReadMoreBtn text={"Read More"} /> */}
            </section>
            <section className="review-container__client-details">
              <h2>Cameron Hamilton</h2>
              <h3>Founder @ Arclight Music</h3>
              {/* <h4>Arclight Music</h4> */}
            </section>
          </article>
        </div>
        <div className="review-item">
          <article className="review-container">
            <div className="review-container__image-container">
              <img
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655935855/img/be-review_wsfols.jpg"
                alt="Beatriz Meireles's selfie"
                width="80"
                height="80"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <section className="review-container__text-container">
              <p>
                Such creative and perfectionist team, Lloyd has been doing a
                great job with my website, highly recommend to anyone.
              </p>
              {/* <ReadMoreBtn text={"Read More"} /> */}
            </section>
            <section className="review-container__client-details">
              <h2>Beatriz Meireles</h2>
              <h3>Director @ Bea Sports Clinic</h3>
              {/* <h4>Bea Sports Injury Clinic</h4> */}
            </section>
          </article>
        </div>
        <div className="review-item">
          <article className="review-container">
            <div className="review-container__image-container">
              <img
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655935855/img/liv-review_micmm0.jpg"
                alt="Livia Nestianu's selfie"
                width="80"
                height="80"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <section className="review-container__text-container">
              <p>
                Lloyd has looked at processes and devised more functional and
                seamless ways for customers to have a pleasant journey.
                {
                  // Lloyd has joined the team as a front end developer and has
                  // showed focus and commitment, he has been proactive, always
                  // holding customer experience in mind. He has looked at
                  // processes and devised more functional and seamless ways for
                  // customers to either have a pleasant browsing journey or get
                  // the product they are looking for, all while being a great team
                  // member.
                }
              </p>
              {
                // <ReadMoreBtn text={"Read More"} />
              }
            </section>
            <section className="review-container__client-details">
              <h2>Livia Nestianu</h2>
              <h3>SEO Manager @ WOS Group</h3>
              {
                // <h4>Watches of Switzerland</h4>
              }
            </section>
          </article>
        </div>
        {/* <div className="review-item">
          <article className="review-container">
            <div className="review-container__image-container">
              <img
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655935855/img/j-review_uet9o1.jpg"
                alt="Jacob Baker's selfie"
                width="80"
                height="80"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <section className="review-container__text-container">
              <p>
                A great guy to work with. He did a fantastic job on my new logo
                and marketing material. Brilliant support too. 5 Stars!
              </p>
            </section>
            <section className="review-container__client-details">
              <h2>Jacob Baker</h2>
              <h3>Director @ JMBG</h3>
            </section>
          </article>
        </div> */}
      </Slider>
    </section>
  );
};