import React from 'react';

import s from './QuestionItemFragment.module.css';
import isUndefined from "../../../common/IsUndefined";

class QuestionItemFragment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answerType: props.answerType,
            answerText: props.answerText,
            onRightAnswer: props.onRightAnswer,
            onWrongAnswer: props.onWrongAnswer,
            isRightAnswer: props.isRightAnswer
        }

    }

    render() {
        return (
            <div className={s.answer_item} onClick={this.state.isRightAnswer ? this.state.onRightAnswer : this.state.onWrongAnswer}>
                {
                    this.state.answerType === 'str' ?
                        (<div className={s.text} >
                            {this.state.answerText}
                        </div>) : ''
                }
            </div>

        )
    }

}
export default QuestionItemFragment;