var AnswerEditRadioButton = React.createClass({
    render: function() {
        let name = this.props.name;
        return(
            <div data-answer className="question-edit-form__answer-edit-text">
                <textarea className="question-edit-form__text-answer" rows="4" data-required placeholder="введите ответ" name={name}></textarea>
                <a data-answername={name} onClick={this.props.removeAnswer}>X</a>
            </div>
        );
    }
});