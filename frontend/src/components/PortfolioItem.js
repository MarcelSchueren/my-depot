import styled from "styled-components/macro";

export default function PortfolioItem({stock}) {
    return (
        <Wrapper>
            <h3>{stock.displayName}</h3>
            <h4>{stock.quantity} pcs. á {stock.regularMarketPrice} </h4>
            <h4> = {stock.quantity * stock.regularMarketPrice}</h4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  border: 3px solid darkblue;
  background-color: ghostwhite;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
`

