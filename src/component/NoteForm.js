import React from "react";
import SubmitButton from "../Event/SubmitButton";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            maxKarakter: 60,
            'Sisa-karakter': 60,
        };

        this.ontitleChangeEventHandler = this.ontitleChangeEventHandler.bind(this);
        this.onbodyChangeEventHandler = this.onbodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    ontitleChangeEventHandler(event) {
        const totalCharacterOnInput = parseInt(event.target.value.length);
            if (totalCharacterOnInput <= this.state.maxKarakter) {
                this.setState(() => {
                return {
                    title: event.target.value,
                    'Sisa-karakter': this.state.maxKarakter - totalCharacterOnInput,
                };
            });
        };
    };

    onbodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    };

    render() {
        return (
            <div className="box-input">
                <h4>Form Input</h4>
                <div className="input">
                    <form onSubmit={this.onSubmitEventHandler}>
                        <div className="number">
                            <p className="count">{this.state['Sisa-karakter']}</p>
                        </div>
                        <input type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={this.ontitleChangeEventHandler}/>
                        <textarea className="form-control" placeholder="Create your Note.." value={this.state.body} onChange={this.onbodyChangeEventHandler}></textarea>
                        <SubmitButton />
                    </form>
                </div>
            </div>
        );
    };
};

export default FormInput;