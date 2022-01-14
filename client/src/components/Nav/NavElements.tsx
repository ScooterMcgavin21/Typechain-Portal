import styled from 'styled-components';

/** <nav> tag */
export const Navbar = styled.nav`
  height: 5rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5), -1px -1px 2px #aaa,
    1px 1px 2px #555;
  backdrop-filter: blur(0.8rem);
  padding: 1.5rem;
  color: aqua;
`;
/** <span> tag once wallet is connected */
export const DotConnect = styled.span`
  display: inline-block;
  margin: 1px 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #34d399;
  box-shadow: 0 0 30px 10px #0ff;
  padding-left: 10px;
`;
export const NavButton = styled.div`
  display: inline-block;
  cursor: pointer;
  background: linear-gradient(rgba(31, 41, 55), rgba(31, 41, 55)) padding-box,
    linear-gradient(to right, #7b4397 0%, #dc2430 100%) border-box;
  border: 3px solid transparent;
  color: aqua;
  background-color: rgba(31, 41, 55);
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  padding: 7px 22px;
  transition: all 0.5s ease;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  &:hover,
  &:focus {
    background: linear-gradient(to right, #7b4397 0%, #dc2430 100%) border-box;
    border: 3px solid transparent;
    color: yellow;
    transition: all 0.5s ease;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
`;
