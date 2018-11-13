import React from 'react';
import {connect} from 'react-redux';
import './single-email.css';

export function SingleEmail(props) {
    return (
        <div className="single-email">
            <div className="single-email-headers">
                <h2 className="single-email-title">{props.title}</h2>
                <div className="single-email-from"><strong>From: </strong>{props.from}</div>
                <div className="single-email-to"><strong>To: </strong>{props.to}</div>
            </div>
            <div className="single-email-content">
                {props.content}
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    if(props.match) {
        const { folderId, emailId } = props.match.params;
        return state[folderId].emails[emailId];
    }
    return state[props.folderId].emails[props.emailId]
    
};

export default connect(mapStateToProps)(SingleEmail);
