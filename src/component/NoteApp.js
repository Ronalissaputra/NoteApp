import React from "react";
import Header from "./NoteHead";
import FormInput from "./NoteForm";
import NoteList from "./NoteList";
import { NoteData } from '../Utils/DataNote';

class NoteApp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        notes: NoteData()
      };
  
      this.HapusEventHandler = this.HapusEventHandler.bind(this);
      this.TambahEventHandler = this.TambahEventHandler.bind(this);
      this.ArsipEventHandler = this.ArsipEventHandler.bind(this);
  };

  HapusEventHandler(id) {
      const notes = this.state.notes.filter((note) => note.id !== id );
        this.setState(() => {
          return {
            notes: notes,
          };
      });
  };

  TambahEventHandler({ title, body }) {
      this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: +new Date(),
              }
            ]
          };
      });
  };

  ArsipEventHandler(id) {
    const notes = this.state.notes.map((note) => {
      return note.id === id 
        ? { ...note, archived: !note.archived }
        : note;
    });
  
    this.setState(() => {
      return {
        notes: notes,
      }
    })
  }

  render() {

    const Aktif = this.state.notes.filter((note) => {
      return !note.archived;
    });
    const Arsip = this.state.notes.filter((note) => {
      return note.archived;
    });

    return (
      <div className="App">
        <Header />
        <div className="container">
            <FormInput addNotes={this.TambahEventHandler} />
            <hr/>
            {/* List UI*/}
            <h4>Note List</h4>
                {
                  Aktif.length < 1
                  ? <h6 className="message">Catatan Kosong</h6>
                  : <NoteList
                    Notes={Aktif}
                    Hapus={this.HapusEventHandler}
                    Arsipkan={this.ArsipEventHandler}
                    />
                }
            <br/>
            <hr/>
            <h4>Note Arsip</h4>
                {
                    Arsip.length < 1
                    ? <h6 className="message">Catatan Kosong</h6>
                    : <NoteList
                      Notes={Arsip}
                      Hapus={this.HapusEventHandler}
                      Arsipkan={this.ArsipEventHandler}
                      />
                }
        </div>
      </div>
    );
  }
}


export default NoteApp;
