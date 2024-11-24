import './UI/navbar.css'

const Navbar = () => {
    return (
        <div className="Nav">
            <div className="logo">
                <h2>Focus</h2>
            </div>
            <div className="rightside">
                <div className="setting"><button>Setting</button></div>
                <div className="report"><button>Report</button></div>
                <div className="signin"><button>Sign in</button></div>
                <div className="more">
                    <img src="./moree.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar