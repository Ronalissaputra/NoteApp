import React from "react";
import Search from "../Event/SearchInput";

function Header() {
    return (
        <div className="header">
            <div className="container head">
                <h2>NoteApp</h2>
                <Search />
            </div>
        </div>
    );
};

    export default Header;