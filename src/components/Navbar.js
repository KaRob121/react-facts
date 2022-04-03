import logo from '../logo.svg'

function Navbar() {
    return (
        <header className="header">
            <div className="pg-name">
                <img className="logo" src={logo} />
                <h3>ReactFacts</h3>
            </div>

            <h4>React Course - Project 1</h4>
        </header>
    )
}

export default Navbar