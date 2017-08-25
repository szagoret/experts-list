import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchExperts } from '../actions';

class ExpertsList extends Component {
    componentDidMount() {
        this.props.fetchExperts();
    }

    renderExperts() {
        return _.map(this.props.experts, (expert) => {
            return (
                <li className="list-group-item" key={expert.id}>
                    {expert.name}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderExperts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { experts: state.experts };
}

export default connect(mapStateToProps, { fetchExperts })(ExpertsList);