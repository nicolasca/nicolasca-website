import React from "react";
import "./hogwarts-express.scss";

const HogwartsExpress = () => {
  return (
    <div className="container">
      <div className="main-ticket">
        <div className="title">Hogwarts Express</div>
        <div className="passenger info-box">
          <span>Passenger</span>
          <span>Hermione Granger</span>
        </div>
        <div className="depart info-box">
          <span>Départ</span>
          <span>London</span>
        </div>
        <div className="arrival info-box">
          <span>Arrival</span>
          <span>Hogwart</span>
        </div>
        <div className="date info-box">
          <span>Date</span>
          <span>12/07/2019</span>
        </div>
        <div className="time info-box">
          <span>Time</span>
          <span>10:00 am</span>
        </div>
        <div className="car info-box">
          <span>Car</span>
          <span>8</span>
        </div>
        <div className="platform">
          <span className="platform-depart"> Depart </span>
          <span className="platform-from">from</span>
          <span className="platform-platform"> platform</span>
          <div className="platform-number">
            <div className="platform-9">9</div>
            <div className="platform-34">
              <div>3</div>
              <div>4</div>
            </div>
          </div>
        </div>
        <div className="condition">
          Boarding begins 30 minutes before departure. Snacks available for
          purchase from The Honeydukes Express. This ticket is Non-refundable •
          Hogwarts Express Railway Authority
        </div>
        <div className="barcode">
          <div className="barcode-scan"></div>
          <div className="barcode-number">435353633</div>
        </div>
      </div>
      <div className="removable-ticket">
        <div className="r-title">Hogwarts Express</div>
        <div className="r-depart r-info">
          <span>Départ</span>
          <span>London</span>
        </div>
        <div className="r-arrival r-info">
          <span>Arrival</span>
          <span>Hogwart</span>
        </div>
        <div className="r-date r-info">
          <span>Date</span>
          <span>12/07/2019</span>
        </div>
        <div className="r-time r-info">
          <span>Time</span>
          <span>10:00 am</span>
        </div>

        <div className="r-barcode">
          <div className="barcode-scan"></div>
          <div className="barcode-number">435353633</div>
        </div>
      </div>
    </div>
  );
};

export default HogwartsExpress;
