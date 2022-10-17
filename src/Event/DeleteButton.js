import React from "react";

function DeleteButton({ id, Hapus}) {
    return (
      <React.StrictMode>
          <button className="btn btn-danger" onClick={() => Hapus(id)}>Hapus</button>
      </React.StrictMode>
    )
  }
  
    export default DeleteButton;