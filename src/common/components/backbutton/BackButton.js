import React from 'react';
import s from "./BackButton.module.css";
import { withRouter } from 'react-router-dom';
import isUndefined from "../../IsUndefined";

class BackButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onClick: !isUndefined(this.props.onClick) ? this.props.onClick : () => "",
            disabled: !isUndefined(props.disabled)
        };
    }

    render() {
        return (
            <button
                className={s.button}
                onClick={!this.state.disabled ? this.props.history.goBack : this.state.onClick}/>
        );
    }
}

export default withRouter(BackButton);