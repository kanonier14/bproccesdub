var QuestionTypeSwitcher = React.createClass({
    render: function() {
        return(
            <div className="question_type_switcher">
                <div className="question_type_item" onClick={this.props.addQuestion} data-type="RADIO">Одиночный выбор</div>
                <div className="question_type_item" onClick={this.props.addQuestion} data-type="CHECKBOX">Множественный выбор</div>
                <div className="question_type_item" onClick={this.props.addQuestion} data-type="OPEN">Открытый вопрос</div>
            </div>
        );
    }
});