var QuestionnaireItem = React.createClass({
    redirectOnQuestionnaire: function() {
        window.open('/questionnaire/answer?id=' + this.props.idQuestionnaire);
    },

    render: function() {
        let questionnaireTitle = this.props.title;
        return(
            <div onClick={this.redirectOnQuestionnaire} className="questionnaire_list_item">
                <div className="questionnaire_list_item__title">{questionnaireTitle}</div>
            </div>
        );
    }
});