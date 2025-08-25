import { Heading } from "@chakra-ui/react"
import styled from "styled-components"

const HeaderSection = styled.header`
  width: 100%;
  background-color: #fdb002;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  position: relative;
`

export default function Header () {

    return(
        <HeaderSection>
            <div>
                <Heading size="5xl">Header</Heading>
            </div>
        </HeaderSection>
    )
}