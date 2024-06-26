import styled from "styled-components";

const Nav = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: red;
    font-size: 12px;
`;

const Col = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.svg`
    margin-right: 50px;
`;

const Items = styled.ul`
    display: flex;
    align-items: center;
`;

const Item = styled.li`
    margin-right: 20px;
`;

export default function Header() {
    return (
        <Nav>
            <Col>
                <Logo></Logo>
                <Items>
                    <Item>Home</Item>
                    <Item>Tv Shows</Item>
                </Items>
            </Col>
            <Col>
                <button>search</button>
            </Col>
        </Nav>
    );
}
