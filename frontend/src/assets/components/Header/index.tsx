import "./styles.css";

function Header(){
  return(
    <>
    <header>
    <div className="container">
        <nav>
            <input type="checkbox" id="nav" className="hidden"/>
            <label htmlFor="nav" className="menu">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div className="Search">
                <ul>
                    {/* <li>
                        <input type="search" onsearch="debug(event)" name="usuario" placeholder="Pesquisa">
                        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRIie2Wu04CQRSGP0G2EUtIbHwA8B3EQisLIcorEInx8hbEZ9DKy6toDI1oAgalNFpDoYWuxZzJjoTbmSXERP7kZDbZ859vdmb27MJcf0gBUAaugRbQk2gBV3IvmDa0BLwA4Zh4BorTACaAU6fwPXAI5IAliTxwBDScvJp4vWWhH0BlTLEEsC+5Fu6lkgNdV/gKDnxHCw2I9rSiNQNV8baBlMZYJtpTn71KAg9SY3dUYn9xezLPgG8P8BdwLteq5X7CzDbnAbXKS42WxtQVUzoGeFlqdEclxXrnhmhhkqR+8KuMqzHA1vumAddl3IwB3pLxVmOyr1NjwKQmURJ4lBp7GmOAafghpg1qdSDeDrCoNReJWmZB4dsAPsW7rYVa1Rx4FbOEw5TEPKmFvgMZX3DCgYeYNniMaQ5piTXghGhPLdTmZ33hYNpem98f/UHRwSxvhqhXx4anMA3/EmhiOlJPJnSBOb3uQcpOE65VhujPpAms/Bu4u+x3swRbeB24mTV4LgB+AFuLedkPkcmmAAAAAElFTkSuQmCC"/> -->
                    </li> */}
                </ul>
            </div>
            <div className="login">
                <ul>
                    <li>
                        <a href="./pages/login.html">Login</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="./pages/login.html">Resgitro</a>
                    </li>
                </ul>
            </div>
            <div className="logo">
                    <a href="./index.html">
                        Balanced Nature
                    </a>
            </div>
            <div className="nav-menu">
                <ul>
                    <li><a href="./monteseupc.html">Desconto Verde</a></li>
                    <li><a href="./perifericos.html">Alimentos</a></li>
                    <li><a href="./perifericos.html">Bebidas</a></li>
                    <li><a href="./perifericos.html">Mercearia</a></li>
                    <li><a href="./perifericos.html">Suplementos</a></li>
                </ul>
            </div>
        </nav>
    </div>
    </header>
    </>
  )
}

export default Header;