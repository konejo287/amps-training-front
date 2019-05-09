import React from "react";
import { connect } from 'react-redux';
import * as courseActions from '../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ContactForm from './ContacForm';

class App extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    handleChange = () => {
        const registry = { ...this.state };
        this.setState({ registry: registry });
    }

    handleSubmit = (event, values) => {
        console.log(values);
        event.preventDefault();
        this.props.actions.createCourse(this.state);
    }

    render() {
        return (
            <div>
                <ContactForm onSubmit={this.handleSubmit} />,
                { 
                    this.props.registry.map(register => (
                        <div key={register.firstName}>{register.firstName}{register.lastName}</div>
                    ))
                }
            </div>
            /*<form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add course</h3>
                <input 
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />
                
                <input type="submit" value="Save"/>
                { 
                    this.props.courses.map(course => (
                        <div key={course.title}>{course.title}</div>
                    ))
                }
            </form>*/
        );
    }
}

App.propTypes = {
    registry: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        registry: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);