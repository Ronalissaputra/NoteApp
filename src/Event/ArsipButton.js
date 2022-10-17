import React from 'react';

function ArchiveButton({ id, Arsipkan, archived }) {
  return (
    <React.StrictMode>
        <button className="btn btn-secondary" onClick={() => Arsipkan(id)}>{archived ? "Pindahkan" : "Arsipkan"}</button>
    </React.StrictMode>
  )
}

export default ArchiveButton;
