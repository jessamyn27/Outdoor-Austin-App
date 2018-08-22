import React, { Component } from 'react';

class CreateActivity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            photo_url: ''
        }
    }
    updateActivity = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render() {
        console.log(this.props, ' this is props');

        return (
            <form onSubmit={this.props.addActivity.bind(this, this.state)}>

                <label>
                    Outdoor Activity:
                    <input type="text" name="name"  onChange={this.updateActivity}/>
                </label>
                <input type="submit"/>
                <br></br>
                <label>
                    Outdoor Photo:
                    <input name="photo_url" onChange={this.updateActivity}/>
                </label>

                <input type="submit"/>
            </form>
        )
    }
}

export default CreateActivity;
