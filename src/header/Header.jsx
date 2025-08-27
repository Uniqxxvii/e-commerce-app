import "./header.css"

function Header({ toggleCart, handleSearch, searchTerm, totalQty }) {


    return (
        <header className="header">
            <div className="header-content">
                <form className="header-search" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        className="header-input" 
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch} 
                    />
                    <button 
                        className="header-button" 
                        type="submit"
                    >Search</button>
                </form>
                <button 
                        className="header-cart"
                        onClick={toggleCart}
                    >Cart ({totalQty})</button>
            </div>
        </header>
    )
}

export default Header