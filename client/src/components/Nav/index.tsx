import useDetectWallet from '../../hooks/useDetectWallet';
import { DotConnect, Navbar, NavButton } from './NavElements';
/**
 * Contains component for nav bar with connect to wallet
 */
const Nav: React.FC = (): React.ReactElement => {
  const { currentAccount, connectWallet, isLoading, isConnected } =
    useDetectWallet();

  return (
    <Navbar>
      <h1>TypeChain Portal</h1>
      {isConnected && currentAccount && (
        <div>
          <DotConnect />
          Wallet Connected
        </div>
      )}
      <div>
        {!currentAccount && !isLoading && (
          <NavButton onClick={connectWallet}>Connect Wallet</NavButton>
        )}
      </div>
    </Navbar>
  );
};
export default Nav;
