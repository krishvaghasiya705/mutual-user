import React, { useRef } from "react";
import "./werdeslider.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Werdeslidermobileone from "../../../assets/image/werdeslidemobileone.png";
import Werdeslidermobiletwo from "../../../assets/image/werdeslidemobiletwo.png";

export default function Werdeslider() {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.002,
    slidesToScroll: 1,
    centerMode: true,
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="werde-slider-section-main">
      <div className="werde-slider-main">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div className="werde-slider-boxe-alignment">
              <div>
                <img src={Werdeslidermobileone} alt="Restaurant aussuchen slide" />
              </div>
              <div className="restaurant-box-main">
                <div className="restaurant-box-scroll-main">
                  <h1>Restaurant aussuchen</h1>
                  <p>
                    Durch die einfachen Filterfunktionen und die Kartenansicht siehst du welche Anbieter sich in deiner Nähe befinden. Wenn du das Restaurant, Café oder die Bar deiner Wahl betrittst, scannst du einfach über die MUTUALZ-App den
                    QR-Code. Dadurch kannst du dir direkt die Karte online ansehen und die Coupons und Rabatte, die dir zur Verfügung stehen.
                  </p>
                  <h1>Restaurant aussuchen</h1>
                  <p>
                    Durch die einfachen Filterfunktionen und die Kartenansicht siehst du welche Anbieter sich in deiner Nähe befinden. Wenn du das Restaurant, Café oder die Bar deiner Wahl betrittst, scannst du einfach über die MUTUALZ-App den
                    QR-Code. Dadurch kannst du dir direkt die Karte online ansehen und die Coupons und Rabatte, die dir zur Verfügung stehen.
                  </p>
                  <h1>Restaurant aussuchen</h1>
                  <p>
                    Durch die einfachen Filterfunktionen und die Kartenansicht siehst du welche Anbieter sich in deiner Nähe befinden. Wenn du das Restaurant, Café oder die Bar deiner Wahl betrittst, scannst du einfach über die MUTUALZ-App den
                    QR-Code. Dadurch kannst du dir direkt die Karte online ansehen und die Coupons und Rabatte, die dir zur Verfügung stehen.
                  </p>
                </div>
                <div className="custom-slider-dots">
                  <span className="dot active" onClick={() => goToSlide(0)}></span>
                  <span className="dot" onClick={() => goToSlide(1)}></span>
                  <span className="dot" onClick={() => goToSlide(2)}></span>
                  <span className="dot" onClick={() => goToSlide(3)}></span>
                  <span className="dot" onClick={() => goToSlide(4)}></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="werde-slider-boxe-alignment">
              <div>
                <img src={Werdeslidermobiletwo} alt="Second slide" />
              </div>
              <div className="restaurant-box-main">
                <div className="restaurant-box-scroll-main">
                  <h1>Über die App bestellen</h1>
                  <p>
                    Wenn du dich entschieden hast, bestellst du einfach über die Gastronomie-Seite in der App, ohne eine Servicekraft rufen zu müssen. Dazu musst du nur den „Bestellen / Zahlen“-Button anklicken und deine Tischnummer eingeben, die
                    entweder schon auf deinem Tisch steht oder durch den QR-Code übermittelt wurde.
                  </p>
                  <h1>Über die App bestellen</h1>
                  <p>
                    Wenn du dich entschieden hast, bestellst du einfach über die Gastronomie-Seite in der App, ohne eine Servicekraft rufen zu müssen. Dazu musst du nur den „Bestellen / Zahlen“-Button anklicken und deine Tischnummer eingeben, die
                    entweder schon auf deinem Tisch steht oder durch den QR-Code übermittelt wurde.
                  </p>
                  <h1>Über die App bestellen</h1>
                  <p>
                    Wenn du dich entschieden hast, bestellst du einfach über die Gastronomie-Seite in der App, ohne eine Servicekraft rufen zu müssen. Dazu musst du nur den „Bestellen / Zahlen“-Button anklicken und deine Tischnummer eingeben, die
                    entweder schon auf deinem Tisch steht oder durch den QR-Code übermittelt wurde.
                  </p>
                </div>
                <div className="custom-slider-dots">
                  <span className="dot" onClick={() => goToSlide(0)}></span>
                  <span className="dot active" onClick={() => goToSlide(1)}></span>
                  <span className="dot" onClick={() => goToSlide(2)}></span>
                  <span className="dot" onClick={() => goToSlide(3)}></span>
                  <span className="dot" onClick={() => goToSlide(4)}></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="werde-slider-boxe-alignment">
              <div>
                <img src={Werdeslidermobileone} alt="Third slide" />
              </div>

              <div className="restaurant-box-main">
                <div className="restaurant-box-scroll-main">
                  <h1>Angebot einlösen</h1>
                  <p>
                    Wenn du dazu bereit bist, die Lokalität zu verlassen, klickst du in der App auf der Seite des jeweiligen Restaurants auf Bestellen / Zahlen". Dort hast du dann einen Überblick über deine bestellten Produkte und die Möglichkeit,
                    deine Coupons einzulösen.
                  </p>
                  <h1>Angebot einlösen</h1>
                  <p>
                    Wenn du dazu bereit bist, die Lokalität zu verlassen, klickst du in der App auf der Seite des jeweiligen Restaurants auf Bestellen / Zahlen". Dort hast du dann einen Überblick über deine bestellten Produkte und die Möglichkeit,
                    deine Coupons einzulösen.
                  </p>
                  <h1>Angebot einlösen</h1>
                  <p>
                    Wenn du dazu bereit bist, die Lokalität zu verlassen, klickst du in der App auf der Seite des jeweiligen Restaurants auf Bestellen / Zahlen". Dort hast du dann einen Überblick über deine bestellten Produkte und die Möglichkeit,
                    deine Coupons einzulösen.
                  </p>
                </div>
                <div className="custom-slider-dots">
                  <span className="dot" onClick={() => goToSlide(0)}></span>
                  <span className="dot" onClick={() => goToSlide(1)}></span>
                  <span className="dot active" onClick={() => goToSlide(2)}></span>
                  <span className="dot" onClick={() => goToSlide(3)}></span>
                  <span className="dot" onClick={() => goToSlide(4)}></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="werde-slider-boxe-alignment">
              <div>
                <img src={Werdeslidermobileone} alt="Fourth slide" />
              </div>

              <div className="restaurant-box-main">
                <div className="restaurant-box-scroll-main">
                  <h1>Easy bezahlen</h1>
                  <p>Als nächstes wählst du nur noch die Zahloption aus, die am besten zu dir passt und schon hast du bezahlt. Deine Rechnung wird in der App gespeichert. Falls du einen Papier-Bon benötigst, sprich bitte das Servicepersonal an.</p>
                  <h1>Easy bezahlen</h1>
                  <p>Als nächstes wählst du nur noch die Zahloption aus, die am besten zu dir passt und schon hast du bezahlt. Deine Rechnung wird in der App gespeichert. Falls du einen Papier-Bon benötigst, sprich bitte das Servicepersonal an.</p>
                  <h1>Easy bezahlen</h1>
                  <p>Als nächstes wählst du nur noch die Zahloption aus, die am besten zu dir passt und schon hast du bezahlt. Deine Rechnung wird in der App gespeichert. Falls du einen Papier-Bon benötigst, sprich bitte das Servicepersonal an.</p>
                </div>
                <div className="custom-slider-dots">
                  <span className="dot" onClick={() => goToSlide(0)}></span>
                  <span className="dot" onClick={() => goToSlide(1)}></span>
                  <span className="dot" onClick={() => goToSlide(2)}></span>
                  <span className="dot active" onClick={() => goToSlide(3)}></span>
                  <span className="dot" onClick={() => goToSlide(4)}></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="werde-slider-boxe-alignment">
              <div>
                <img src={Werdeslidermobileone} alt="Fifth slide" />
              </div>
              <div className="restaurant-box-main">
                <div className="restaurant-box-scroll-main">
                  <h1>Community Funktion</h1>
                  <p>
                    Du bist total begeistert von deinem Restaurantbesuch und möchtest unbedingt deinen Freund:innen und deiner Familie davon erzählen? Kein Problem, poste einfach deine Erfahrungen mit schnellem Sternesystem und Bild und alle deine
                    Follower sehen deine Bewertung.
                  </p>
                  <h1>Community Funktion</h1>
                  <p>
                    Du bist total begeistert von deinem Restaurantbesuch und möchtest unbedingt deinen Freund:innen und deiner Familie davon erzählen? Kein Problem, poste einfach deine Erfahrungen mit schnellem Sternesystem und Bild und alle deine
                    Follower sehen deine Bewertung.
                  </p>
                  <h1>Community Funktion</h1>
                  <p>
                    Du bist total begeistert von deinem Restaurantbesuch und möchtest unbedingt deinen Freund:innen und deiner Familie davon erzählen? Kein Problem, poste einfach deine Erfahrungen mit schnellem Sternesystem und Bild und alle deine
                    Follower sehen deine Bewertung.
                  </p>
                </div>
                <div className="custom-slider-dots">
                  <span className="dot" onClick={() => goToSlide(0)}></span>
                  <span className="dot" onClick={() => goToSlide(1)}></span>
                  <span className="dot" onClick={() => goToSlide(2)}></span>
                  <span className="dot" onClick={() => goToSlide(3)}></span>
                  <span className="dot active" onClick={() => goToSlide(4)}></span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
