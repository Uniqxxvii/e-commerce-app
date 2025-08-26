import "./header.css"

function Header({ toggleCart }) {


    return (
        <div className="header">
            <form className="header-search">
                <input className="header-input" />
                <button 
                    className="header-button" 
                    type="submit"
                >Search</button>
            </form>
            <button 
                    className="header-cart"
                    onClick={toggleCart}
                >Cart</button>
        </div>
    )
}

export default Header