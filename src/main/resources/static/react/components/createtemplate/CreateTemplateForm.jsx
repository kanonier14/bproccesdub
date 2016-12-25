var CreateTemplateForm = React.createClass({
    getInitialState: function() {
        return({steps: []});
    },

    addStep: function() {
        let previousStepsState = this.state.steps;
        let nameStep = 'step_' + previousStepsState.length;
        previousStepsState.push({name: nameStep, order: previousStepsState.length});
        this.setState({steps: previousStepsState});
    },

    render: function() {
        let stepsState = this.state.steps;
        let steps = stepsState.map(function (item) {
            return <Step name={item.name} order={item.order}></Step>;
        });
        return(
            <form action="/template/create" method="post">
                Введите название процесса: <textarea name="process_name"/><br/>
                <a onClick={this.addStep}>Добавить шаг</a>
                {steps}
                <br/><button>Создать шаблон</button>
            </form>
        );
    }
});

var Step = React.createClass({
    render: function() {
        let stepName = this.props.name;
        let order = this.props.order;
        let stepTitle = stepName + '_title';
        let stepOrder = stepTitle + '_order';
        return(
            <div>
                Введите название шага: <input name={stepTitle} type="text"/>
                <input name={stepOrder} value={order} type="hidden"/>
            </div>
        );
    }
});

components.register("CreateTemplateForm", CreateTemplateForm);