const Navbar = ()=>{
    return(
        <div className="navbar">
            <span className="logo">Lama App</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80" alt="" className="avatar"/>
                </li>
                <li className="listItem">John Doe</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
};

export {Navbar}