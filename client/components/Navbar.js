import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/properties">Properties</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar

