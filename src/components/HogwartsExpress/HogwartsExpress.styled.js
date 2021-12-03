import styled from "styled-components"

const InfoBoxStyle = `
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  span:first-child {
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.2em;
  }

  span:last-child {
    font-weight: 600;
    letter-spacing: 0.2em;
  }
`

export const Container = styled.div`
  color: black;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  display: grid;
  max-width: 740px;
  grid-template-columns: auto 140px;
  border: 2px solid black;
  border-radius: 10px;

  span {
    color: black;
  }
`

export const MainTicket = styled.div`
  border-radius: 10px 0 0 10px;
  padding: 10px;
  background-color: #f3f1c9;
  display: grid;
  grid-template-rows: repeat(4, min-content) auto;
  grid-template-columns: repeat(8, 1fr);

  & > div {
    padding: 8px;
  }
`

export const Title = styled.div`
  background-color: black;
  color: #f3f1c9;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 2rem;
  text-align: center;
  grid-column: 1 / span 8;
`

export const Passenger = styled.div`
  ${InfoBoxStyle};
  grid-column: 1 / span 6;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
`

export const Departure = styled.div`
  ${InfoBoxStyle};
  grid-column: 1 / span 3;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
`

export const Arrival = styled.div`
  ${InfoBoxStyle};
  grid-column: 4 / span 3;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
`
export const DateLeave = styled.div`
  ${InfoBoxStyle};
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  grid-column: 1 / span 2;
  span {
    font-size: 1rem;
  }
`

export const Time = styled.div`
  ${InfoBoxStyle};
  grid-column: 3 / span 2;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
`

export const Car = styled.div`
  ${InfoBoxStyle};
  grid-column: 5 / span 2;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
`

export const Platform = styled.div`
  background-color: #c02a28;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  color: white;
  grid-column: 7 / span 2;
  grid-row: 2 / span 3;
  text-align: center;
`

export const PlatformDeparture = styled.span`
  font-size: 1.7rem;
  font-weight: 900;
  line-height: 1;
`

export const PlatformFrom = styled.span`
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
`

export const PlatformPlatform = styled.span`
  font-size: 1.1rem;
  font-weight: 900;
  line-height: 1;
`

export const PlatformNumber = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Platform9 = styled.div`
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
`

export const Platform34 = styled.div`
  font-size: 1.5rem;
  line-height: 1;
  align-self: center;

  & > div {
    padding: 0.3em;
  }

  & > div:first-child {
    border-bottom: 1px solid white;
  }
`

export const Condition = styled.div`
  font-size: 12px;
  grid-row: 5;
  grid-column: 1 / span 6;
  border: 0;
`

export const BarCode = styled.div`
  grid-column: 7 / span 2;
  grid-row: 5;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const BarCodeScan = styled.div`
  height: 50px;
  background: linear-gradient(
    to right,
    #333 2%,
    #333 4%,
    transparent 4%,
    transparent 5%,
    #333 5%,
    #333 6%,
    transparent 6%,
    #333 6%,
    #333 8%,
    transparent 8%,
    transparent 9%,
    #333 9%,
    #333 10.5%,
    transparent 10.5%,
    transparent 11%,
    #333 11%,
    #333 12%,
    transparent 12%,
    transparent 13.5%,
    #333 13.5%,
    #333 15%,
    #333 17%,
    transparent 17%,
    transparent 19%,
    #333 19%,
    #333 20%,
    transparent 20%,
    transparent 21%,
    #333 21%,
    #333 22%,
    transparent 22%,
    transparent 23.5%,
    #333 23.5%,
    #333 25%,
    transparent 25%,
    transparent 26.5%,
    #333 26.5%,
    #333 27.5%,
    transparent 27.5%,
    transparent 28.5%,
    #333 28.5%,
    #333 30%,
    transparent 30%,
    transparent 32%,
    #333 32%,
    #333 34%,
    #333 36%,
    transparent 36%,
    transparent 37.5%,
    #333 37.5%,
    #333 40%,
    transparent 40%,
    transparent 41.5%,
    #333 41.5%,
    #333 43%,
    transparent 43%,
    transparent 46%,
    #333 46%,
    #333 48%,
    transparent 48%,
    transparent 49%,
    #333 49%,
    transparent 49%,
    transparent 50%,
    #333 50%,
    #333 51%,
    transparent 51%,
    transparent 53%,
    #333 53%,
    #333 54.5%,
    transparent 54.5%,
    transparent 56%,
    #333 56%,
    #333 58%,
    transparent 58%,
    transparent 59%,
    #333 59%,
    #333 60%,
    #333 62.5%,
    transparent 62.5%,
    transparent 64%,
    #333 64%,
    #333 64%,
    #333 67%,
    transparent 67%,
    transparent 69%,
    #333 69%,
    #333 70%,
    transparent 70%,
    transparent 71%,
    #333 71%,
    #333 72%,
    transparent 72%,
    transparent 73.5%,
    #333 73.5%,
    #333 76%,
    transparent 76%,
    transparent 79%,
    #333 79%,
    #333 80%,
    transparent 80%,
    transparent 82%,
    #333 82%,
    #333 82.5%,
    transparent 82.5%,
    transparent 84%,
    #333 84%,
    #333 87%,
    transparent 87%,
    transparent 89%,
    #333 89%,
    #333 91%,
    transparent 91%,
    transparent 92%,
    #333 92%,
    #333 95%,
    transparent 95%
  );
`

export const BarCodeNumber = styled.div`
  color: #c02a28;
  letter-spacing: 0.3em;
`

export const RemovableTicket = styled.div`
  border-radius: 0 10px 10px 0;
  background-color: #eac9a9;
  border-left: 1px dashed black;
  padding: 10px;
  padding-top: 11px;

  display: grid;
  grid-template-rows: repeat(2, 124px) 60px;
  grid-template-columns: 30px repeat(2, 45px);
`

export const RTitle = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  background-color: #c02a28;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: white;
  text-align: center;
  padding: 0 0 0 5px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`

const RInfoStyle = `
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding: 5px;

  span:first-child {
    font-size: 11px;
    font-weight: 400;
    margin-bottom: 0.2em;
  }

  span:last-child {
    font-size: 12px;
    font-weight: 600;
  }
`

export const RDeparture = styled.div`
  ${RInfoStyle};
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  border-width: 3px;
  border-top: 3px solid #c02a28;
  border-bottom: 3px solid #c02a28;
`
export const RArrival = styled.div`
  ${RInfoStyle};
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  border-bottom: 3px solid #c02a28;
`

export const RDate = styled.div`
  ${RInfoStyle};
  grid-row: 2 / span 1;
  grid-column: 3 / span 1;
  border: 3px solid #c02a28;
`

export const RTime = styled.div`
  ${RInfoStyle};
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  border-bottom: 3px solid #c02a28;
  border-right: 3px solid #c02a28;
  border-left: 3px solid #c02a28;
`

export const RBarCode = styled.div`
  grid-row: 3 / span 1;
  grid-column: 1 / span 3;
  margin-top: 7px;
`
