import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './App.scss';
import { mainSelector } from '../../selectors';

class App extends Component {

    static propTypes = {
        title: PropTypes.string
    }

    static defaultProps = {
        title: ''
    }

    render() {
        const { title } = this.props;

        return (
            <div className={styles.main}>{ title }</div>
        );
    }
}

export default connect(mainSelector(), null)(App);