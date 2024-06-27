import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AdvancedLazyLoad } from "./AdvancedLazyLoad";

export const Clients = () => {
  const settingsClients = {
    dots: false,
    arrows: true,
    infinite: true,
    // speed: 500,
    // slidesToShow: 7,
    // slidesToScroll: 1,
    accessibility: true,
    // autoplaySpeed: 2000,
    // speed: 9000,
    // autoplay: true,
    // autoplaySpeed: 0,
    // cssEase: "linear",
    slidesToShow: 8,
    slidesToScroll: 1,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          // infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
        },
      },
    ],
  };

  return (
    <div className="testomonials-container clients">
      {/* <div className="subheading-container">
        <h2>Brands & Companies</h2>
      </div> */}
      <Slider {...settingsClients}>
        <div className="client-item">
          <h3>Rolex</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/rolex_ihkvqf.png"
            alt="Rolex's logo"
            width="80"
            height="43"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/rolex_ihkvqf"
            imgALT="Rolex's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:100,f_auto,q_auto/v1654430864/img/brand-logos/rolex_ihkvqf"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"43px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>NEXT</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/next_ax8vcj.png"
            alt="NEXT's logo"
            width="80"
            height="23"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/next_ax8vcj"
            imgALT="Next's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:100,f_auto,q_auto/v1654430864/img/brand-logos/next_ax8vcj"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"23px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Shell</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1693173998/shell-logo_yytzh7.png"
            alt="Shell's logo"
            width="80"
            height="23"
            loading="lazy"
            style={{ width: "70px" }}
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1693173998/shell-logo_yytzh7"
            imgALT="Shell's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:100,f_auto,q_auto/v1693173998/shell-logo_yytzh7"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"74px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Google</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/google_pbncid.png"
            alt="Googles logo"
            width="80"
            height="27"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/google_pbncid"
            imgALT="Googles logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:60,f_auto,q_auto/v1654430864/img/brand-logos/google_pbncid"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"27px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Nike</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/nike_jz49d3.png"
            alt="Nike's logo"
            width="80"
            height="30"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/nike_jz49d3"
            imgALT="Nike's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:70,f_auto,q_auto/v1654430864/img/brand-logos/nike_jz49d3"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"30px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Adidas</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/adidas_xaxixt.png"
            alt="Adidas's Logo"
            width="80"
            height="58"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/adidas_xaxixt"
            imgALT="Adidas's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:60,f_auto,q_auto/v1654430864/img/brand-logos/adidas_xaxixt"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"58px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Goldsmiths</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/goldsmiths_v7vkux.png"
            alt="Goldsmiths logo"
            width="80"
            height="15"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/goldsmiths_v7vkux"
            imgALT="Goldsmiths logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:60,f_auto,q_auto/v1654430864/img/brand-logos/goldsmiths_v7vkux"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"15x"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Watches of Switzerland Group PLC</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430865/img/brand-logos/wos_wfpxrd.png"
            alt="Watches of switzerland group's logo"
            width="80"
            height="86"
            loading="lazy"
            style={{ width: "75px" }}
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430865/img/brand-logos/wos_wfpxrd"
            imgALT="Watches of switzerland group's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:60,f_auto,q_auto/v1654430865/img/brand-logos/wos_wfpxrd"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"75px"}
            imgHeight={"80x"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Arclight Music</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/arclight-music_guktkm.png"
            alt="Arclight music's logo"
            width="80"
            height="30"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/img/brand-logos/arclight-music_guktkm"
            imgALT="Arclight music's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:80,f_auto,q_auto/img/brand-logos/arclight-music_guktkm"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"30x"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Cartier</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/cartier_hxcnhj.png"
            alt="Cartier's logo"
            width="80"
            height="26"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/cartier_hxcnhj"
            imgALT="Cartier's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:50,f_auto,q_auto/v1654430864/img/brand-logos/cartier_hxcnhj"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"26x"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Vans</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/Vans_stjm6l.png"
            alt="Vans logo"
            width="80"
            height="29"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/Vans_stjm6l"
            imgALT="Vans logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:70,f_auto,q_auto/v1654430864/img/brand-logos/Vans_stjm6l"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"29x"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Emporio Armani</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/ea_jcjmal.png"
            alt="Emporio Armani's logo"
            width="80"
            height="8"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/ea_jcjmal"
            imgALT="Emporio Armani's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:30,f_auto,q_auto/v1654430864/img/brand-logos/ea_jcjmal"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"8px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Superdry</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/superdry_pp25fj.png"
            alt="Superdry's logo"
            width="80"
            height="7"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/superdry_pp25fj"
            imgALT="Superdry's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:30,f_auto,q_auto/v1654430864/img/brand-logos/superdry_pp25fj"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"7px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Levi&apos;s</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/levis_culqaf.png"
            alt="Levi's logo"
            width="80"
            height="32"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/levis_culqaf"
            imgALT="Levi's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:20,f_auto,q_auto/v1654430864/img/brand-logos/levis_culqaf"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"32px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Victoria&apos;s Secret</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/victoria-secret_yp2zya.png"
            alt="Victoria's Secrets logo"
            width="80"
            height="8"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/victoria-secret_yp2zya"
            imgALT="Victoria's Secrets logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:40,f_auto,q_auto/v1654430864/img/brand-logos/victoria-secret_yp2zya"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"8px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Converse</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/converse_yzks6u.png"
            alt="Converse's logo"
            width="80"
            height="13"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/converse_yzks6u"
            imgALT="Converse's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:60,f_auto,q_auto/v1654430864/img/brand-logos/converse_yzks6u"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"40px"}
            imgHeight={"6px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Timberland</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/timberland_ogbzan.png"
            alt="Timberland's logo"
            width="80"
            height="14"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/timberland_ogbzan"
            imgALT="Timberland's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:60,f_auto,q_auto/v1654430864/img/brand-logos/timberland_ogbzan"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"14px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
        </div>
        <div className="client-item">
          <h3>Gucci</h3>
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654430864/img/brand-logos/gucci_xfb176.png"
            alt="Gucci's logo"
            width="80"
            height="13"
            loading="lazy"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654430864/img/brand-logos/gucci_xfb176"
            imgALT="Gucci's logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_35/e_blur:50,f_auto,q_auto/v1654430864/img/brand-logos/gucci_xfb176"
            imgIdName={undefined}
            elemName="client-img-container"
            imgTransparent={true}
            imgWidth={"80px"}
            imgHeight={"13px"}
            imgClassName={undefined}
            containerClassName={undefined}
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
