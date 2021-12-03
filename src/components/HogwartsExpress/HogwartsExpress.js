import React from "react"
import "./HogwartsExpress.styled.js"
import {
  Arrival,
  BarCode,
  BarCodeNumber,
  BarCodeScan,
  Car,
  Condition,
  Container,
  DateLeave,
  Departure,
  MainTicket,
  Passenger,
  Platform,
  Platform34,
  Platform9,
  PlatformDeparture,
  PlatformFrom,
  PlatformNumber,
  PlatformPlatform,
  RArrival,
  RBarCode,
  RDate,
  RDeparture,
  RemovableTicket,
  RTime,
  RTitle,
  Time,
  Title,
} from "./HogwartsExpress.styled.js"

const HogwartsExpress = () => {
  const today = new Date()
  const formattedDate = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`
  return (
    <Container>
      <MainTicket>
        <Title>Hogwarts Express</Title>
        <Passenger>
          <span>Passenger</span>
          <span>Hermione Granger</span>
        </Passenger>
        <Departure>
          <span>Départ</span>
          <span>London</span>
        </Departure>
        <Arrival>
          <span>Arrival</span>
          <span>Hogwart</span>
        </Arrival>
        <DateLeave>
          <span>Date</span>
          <span>{formattedDate}</span>
        </DateLeave>
        <Time>
          <span>Time</span>
          <span>10:00 am</span>
        </Time>
        <Car>
          <span>Car</span>
          <span>8</span>
        </Car>
        <Platform>
          <PlatformDeparture> Depart </PlatformDeparture>
          <PlatformFrom>from</PlatformFrom>
          <PlatformPlatform> platform</PlatformPlatform>
          <PlatformNumber>
            <Platform9>9</Platform9>
            <Platform34>
              <div>3</div>
              <div>4</div>
            </Platform34>
          </PlatformNumber>
        </Platform>
        <Condition>
          Boarding begins 30 minutes before departure. Snacks available for
          purchase from The Honeydukes Express. This ticket is Non-refundable •
          Hogwarts Express Railway Authority
        </Condition>
        <BarCode>
          <BarCodeScan></BarCodeScan>
          <BarCodeNumber>435353633</BarCodeNumber>
        </BarCode>
      </MainTicket>
      <RemovableTicket>
        <RTitle>Hogwarts Express</RTitle>
        <RDeparture>
          <span>Départ</span>
          <span>London</span>
        </RDeparture>
        <RArrival>
          <span>Arrival</span>
          <span>Hogwart</span>
        </RArrival>
        <RDate>
          <span>Date</span>
          <span>12/07/2019</span>
        </RDate>
        <RTime>
          <span>Time</span>
          <span>10:00 am</span>
        </RTime>

        <RBarCode>
          <BarCodeScan></BarCodeScan>
          <BarCodeNumber>435353633</BarCodeNumber>
        </RBarCode>
      </RemovableTicket>
    </Container>
  )
}

export default HogwartsExpress
