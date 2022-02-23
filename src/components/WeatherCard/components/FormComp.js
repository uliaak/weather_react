import React from "react";

export default class FormComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        

        this.handleSearchCity = this.handleSearchCity.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSearchCity(e) {
        e.preventDefault();
        this.props.onSearch(this.state.value);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return(
            <div>
                <form className='form' name='form' onSubmit={this.handleSearchCity}>
                    <input className='inputCity' type='text' value={this.state.value} onChange={this.handleChange}/>
                    <input className='button' type='submit' value='Go'/>
                </form>
            </div>
        )
    }
}