const Navbar = () => {
    return (
        <div className="Nav">
            <div className="logo">
                <h2>Focus</h2>
            </div>
            <div className="rightside flex-1">
                <div className="more">
                    <img src="./more.png" alt="" />
                </div>
                <div className="setting">Setting</div>
                <div className="signin">Sign in</div>
                <div className="report">Report</div>
            </div>
        </div>
    )
}

export default Navbar