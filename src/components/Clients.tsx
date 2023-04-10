import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Clients = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // speed: 500,
    // slidesToShow: 7,
    // slidesToScroll: 1,
    accessibility: false,
    // autoplaySpeed: 2000,
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 1230,
    //     settings: {
    //       slidesToShow: 7,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    // ],
  };

  return (
    <div className="testomonials-container clients">
      {/* <div className="subheading-container">
        <h2>Brands & Companies</h2>
      </div> */}
      <Slider {...settings}>
        <div className="client-item">
          <h3>Timberland</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/timberland_ogbzan.png"
            alt="Timberland's logo"
            width="80"
            height="14"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Gucci</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/gucci_xfb176.png"
            alt="Gucci's logo"
            width="80"
            height="13"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Rolex</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/rolex_ihkvqf.png"
            alt="Rolex's logo"
            width="80"
            height="43"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>NEXT</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/next_ax8vcj.png"
            alt="NEXT's logo"
            width="80"
            height="23"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Nike</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/nike_jz49d3.png"
            alt="Nike's logo"
            width="80"
            height="30"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Google</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/google_pbncid.png"
            alt="Googles logo"
            width="80"
            height="27"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Adidas</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/adidas_xaxixt.png"
            alt="Adidas's Logo"
            width="80"
            height="58"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Goldsmiths</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/goldsmiths_v7vkux.png"
            alt="Goldsmiths logo"
            width="80"
            height="15"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Vans</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/Vans_stjm6l.png"
            alt="Vans logo"
            width="80"
            height="29"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Watches of Switzerland Group PLC</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430865/img/brand-logos/wos_wfpxrd.png"
            alt="Watches of switzerland group's logo"
            width="80"
            height="86"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Cartier</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/cartier_hxcnhj.png"
            alt="Cartier's logo"
            width="80"
            height="26"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Arclight Music</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/arclight-music_guktkm.png"
            alt="Arclight music's logo"
            width="80"
            height="30"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Emporio Armani</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/ea_jcjmal.png"
            alt="Emporio Armani's logo"
            width="80"
            height="8"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Superdry</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/superdry_pp25fj.png"
            alt="Superdry's logo"
            width="80"
            height="7"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Levi&apos;s</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/levis_culqaf.png"
            alt="Levi's logo"
            width="80"
            height="32"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Victoria&apos;s Secret</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/victoria-secret_yp2zya.png"
            alt="Victoria's Secrets logo"
            width="80"
            height="8"
            loading="lazy"
          />
        </div>
        <div className="client-item">
          <h3>Converse</h3>
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/converse_yzks6u.png"
            alt="Converse's logo"
            width="80"
            height="13"
            loading="lazy"
          />
        </div>
      </Slider>
    </div>

    //    <div className="client-item">
    // <h3>Rolex</h3>
    // </div>
    // <div className="client-item">
    // <h3>Nike</h3>
    // </div>
    // <div className="client-item">
    // <h3>Adidas</h3>
    // </div>
    // <div className="client-item">
    // <h3>Tudor</h3>
    // </div>
    // <div className="client-item">
    // <h3>Tag Heuer</h3>
    // </div>
    // <div className="client-item">
    // <h3>Ray Ban</h3>
    // </div>
    // <div className="client-item">
    // <h3>Hugo</h3>
    // </div>
    // <div className="client-item">
    // <h3>Cartier</h3>
    // </div>
    // <div className="client-item">
    // <h3>Armani</h3>
    // </div>

    // <div className="client-item">
    // <h3>Gucci</h3>
    // </div>
    // <div className="client-item">
    // <h3>Vans</h3>
    // </div>
    // <div className="client-item">
    // <h3>Timberland</h3>
    // </div>
    // <div className="client-item">
    // <h3>The North Face</h3>
    // </div>
    // <div className="client-item">
    // <h3>Levi's</h3>
    // </div>
    // <div className="client-item">
    // <h3>Superdry</h3>
    // </div>
    // <div className="client-item">
    // <h3>Topshop</h3>
    // </div>
    // <div className="client-item">
    // <h3>Clarks</h3>
    // </div>
    // <div className="client-item">
    // <h3>Converse</h3>
    // </div>

    // <div className="client-item">
    // <h3>Channel</h3>
    // </div>
    // <div className="client-item">
    // <h3>Goldsmiths</h3>
    // </div>
    // <div className="client-item">
    // <h3>Next PLC</h3>
    // </div>
    // <div className="client-item">
    // <h3>Mappin & Webb</h3>
    // </div>
    // <div className="client-item">
    // <h3>Ben Sherman</h3>
    // </div>
    // <div className="client-item">
    // <h3>Triumph</h3>
    // </div>
    // <div className="client-item">
    // <h3>Swarovski</h3>
    // </div>
    // <div className="client-item">
    // <h3>Tesco</h3>
    // </div>
    // <div className="client-item">
    // <h3>Watches of Switzerland</h3>
    // </div>
  );
};
