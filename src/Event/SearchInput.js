import React from "react";

  function SearchInput() {
      return (
        <React.StrictMode>
            <div className="search">
                <input type="text" className= "form-control" placeholder="Search.." disabled/>
            </div>
        </React.StrictMode>
      );
  };

    export default SearchInput;