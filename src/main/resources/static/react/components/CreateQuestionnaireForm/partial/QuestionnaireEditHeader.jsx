var QuestionnaireEditHeader = React.createClass({

    validate: function(event) {
        var foundElementsRequiredValidation = document.querySelectorAll('[data-required]');
        var stopSubmit = false;
        foundElementsRequiredValidation.forEach(function(element) {
            if (!element.value) {
                stopSubmit = true;
                element.classList.add('required_field_red');
            }
        });
        document.querySelectorAll('[data-requiredanswer=true]').forEach(function(element) {
            if (element.querySelectorAll('[data-answer]').length < 1) {
                stopSubmit = true;
                element.classList.add('required_field_red');
            };
        });
        if (stopSubmit) {
            event.preventDefault();
        }
    },

    render: function() {
        return(
            <div className="questionnaire-edit--header">
                <div className="newsurvey">
                    <button onClick={this.validate} className="newitem">Сохранить </button>
                </div>
                <textarea data-required placeholder="Введите название анкеты" className="questionnaire-edit--questionnaire-title" name="title"></textarea>
            </div>
        );
    }
});