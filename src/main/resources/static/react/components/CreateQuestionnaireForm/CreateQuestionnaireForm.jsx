var CreateQuestionnaireForm = React.createClass({
    getInitialState: function() {
        return({questions: []});
    },

    addQuestion: function(e) {
        let previousQuestionsState = this.state.questions;
        let nameQuestion = 'question_' + previousQuestionsState.length;
        let typeQuestion = e.currentTarget.dataset.type;
        previousQuestionsState.push({name: nameQuestion, type: typeQuestion});
        this.setState({questions: previousQuestionsState});
    },

    removeQuestion: function(e) {
        let removedQuestionName = e.currentTarget.dataset.questionname;
        let previousQuestionsState = this.state.questions.filter(function(item) {
            return item.name !== removedQuestionName;
        });
        this.setState({questions: previousQuestionsState});
    },

    render: function() {
        let removeQuestion = this.removeQuestion;
        let questionsState = this.state.questions;
        let questions = questionsState.map(function (item) {
            return <CreateQuestionForm key={item.name} name={item.name} type={item.type} removeQuestion={removeQuestion}/>;
        });
        return(
            <form method="post" action="/questionnaire/save">
                <div>
                    <span>Сделать анкету приватной: </span><input type="checkbox" name="gated"/>
                    Выберите раздел:
                    <select name="topic">
                        <option value="OTHER">Остальное</option>
                        <option value="SPORT">Спорт</option>
                        <option value="SOCIETY">Общество</option>
                        <option value="ART">Искусство</option>
                    </select>
                </div>
                <QuestionnaireEditHeader questionList={questionsState}/>
                <div>
                    <QuestionTypeSwitcher addQuestion={this.addQuestion}/>
                </div>

                <div>
                    {questions}
                </div>
            </form>
        );
    }
});

components.register("CreateQuestionnaireForm", CreateQuestionnaireForm);