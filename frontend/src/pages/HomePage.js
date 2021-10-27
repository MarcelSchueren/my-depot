import styled from "styled-components/macro";
import PortfolioItem from "../components/PortfolioItem";

export default function HomePage({stocks}) {

    return (
        <Wrapper>
            <h1>HomePage</h1>
            {stocks.map(stock => {
                return <PortfolioItem stock={stock} key={stock.id}/>
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  text-align: center;
  background-color: yellow;
`

