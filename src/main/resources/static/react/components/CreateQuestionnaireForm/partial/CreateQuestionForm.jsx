var CreateQuestionForm = React.createClass({
    getInitialState: function() {
        return({answers: []});
    },

    addAnswer: function() {
        let answersState = this.state.answers;
        let nameAnswer = this.props.name + '_answer_' + answersState.length;
        answersState.push({name: nameAnswer});
        this.setState({answers: answersState});
    },

    removeAnswer: function(event) {
        let removedAnswerName = event.currentTarget.dataset.answername;
        let previousAnswersState = this.state.answers.filter(function(item) {
            return item.name !== removedAnswerName;
        });
        this.setState({answers: previousAnswersState});
    },

    render: function() {
        let title_name = this.props.name + '_title';
        let type_name = this.props.name + '_type';
        let removeAnswer = this.removeAnswer;
        let type = this.props.type;
        let answers = this.state.answers.map(function (item) {
            return <AnswerEditRadioButton key={item.name} name={item.name} removeAnswer={removeAnswer}/>;
        });

        let createQuestionButton = type != 'OPEN'
            ? <div className="btn btn-primary btn-lg" onClick={this.addAnswer}>
                  Добавить ответ
              </div> : '';
        let requiredAnswer = type != 'OPEN' ? 'true' : '';
        return(
            <div data-requiredanswer={requiredAnswer} className="question-edit-form">
                <div>Тип вопроса: {type}</div>
                <div className="remove_question_button" data-questionname={this.props.name} onClick={this.props.removeQuestion}>X</div>
                <textarea data-required name={title_name} className="question-edit-form__text" placeholder="Введите текст вопроса"></textarea>
                <input data-required type="hidden" name={type_name} value={this.props.type}/>
                <div className="question-edit-form__answers">
                    {answers}
                </div>
                {createQuestionButton}
            </div>
        );
    }
});