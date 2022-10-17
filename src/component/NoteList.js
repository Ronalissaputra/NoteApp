import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ Notes, Hapus, Arsipkan}) {
    return (
        <div className="note-item">
            <div className="row">
                {
                    Notes.map((note) => (
                        <NoteItem 
                        key={note.id} 
                        Hapus= { Hapus }
                        Arsipkan= { Arsipkan }
                        {...note} />
                        )
                    )
                }
            </div>
        </div>
    )
};

    export default NoteList;