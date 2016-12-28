var CreateTemplateForm = React.createClass({
    getInitialState: function() {
        var self = this;
        let promise = fetch('/usersgroup/get')
            .then(function(response) {
                return response.json();
            })
            .then(function(users){
                let newState = Object.assign(self.state, {
                    users: users
                });
                self.setState(newState);
            });
        return({steps: [], flowChartState: {nodes:[], links: []}});
    },

    addStep: function() {
        let previousStepsState = this.state.steps;
        let nameStep = 'step_' + previousStepsState.length;
        previousStepsState.push({name: nameStep, order: previousStepsState.length});
        this.addNode(nameStep);
        this.setState({steps: previousStepsState});
    },

    addNode: function(stepName) {
        let newFlowChartState = this.state.flowChartState;
        newFlowChartState.nodes.push({key: stepName, color: 'lightgreen'});
        this.setState(Object.assign(this.state, newFlowChartState));
        load(this.state.flowChartState);
    },

    componentDidMount: function() {
        initFlowChart();
    },
    render: function() {
        let stepsState = this.state.steps;
        let users = this.state.users;
        let steps = stepsState.map(function (item) {
            return <Step users={users} name={item.name} order={item.order} steps={stepsState}></Step>;
        });
        return(
        <div>
            <form className="create_process_form" action="/template/create" method="post">
                <div className="create_process_form__header">
                    Введите название процесса: <br/>
                    <textarea className="questionnaire-edit--questionnaire-title" name="process_name"/>
                </div>
                <div className="newsurvey">
                    <a className="newitem" onClick={this.addStep}>Добавить шаг</a>
                </div>
                {steps}
                <br/><div className="newsurvey"><button className="newitem">Создать шаблон</button></div>
            </form>
            <div id="myDiagramDiv" className="myDiagramDiv"></div>
        </div>
        );
    }
});

var Step = React.createClass({
    getInitialState: function() {
        return({perehody:[]});
    },
    addPerehod: function() {
        let previousPrehodyState = this.state.perehody;
        let namePerehod = this.props.name + '_perehod_' + previousPrehodyState.length;
        previousPrehodyState.push({name: namePerehod});
        this.setState({perehody: previousPrehodyState});
    },

    render: function() {
        let steps = this.props.steps;
        let stepName = this.props.name;
        let order = this.props.order;
        let stepTitle = stepName + '_title';
        let stepOrder = stepTitle + '_order';
        let perehody = this.state.perehody.map(function (item) {
                    return <Perehod name={item.name} steps={steps}></Perehod>;
                });
         let usersOption;
         if (this.props.users !== null) {
            usersOption = this.props.users.map(function(item) {
                return <option value={item.idUserGroup}>{item.groupName}</option>
            });
         }
         let assigneeParam = stepTitle + '_assignee';
        return(
            <div className="create_step">
                Шаг #{order}<br/>
                Введите название шага: <textarea name={stepTitle}/>
                <input name={stepOrder} value={order} type="hidden"/>
                <br/>
                Выберите ответственного за шаг:
                <select name={assigneeParam}>
                    {usersOption}
                </select>
                <br/>
                <a onClick={this.addPerehod}>Добавить условие перехода</a>
                {perehody}
            </div>
        );
    }
});

var Perehod = React.createClass({
    render: function() {
        let name = this.props.name;
        let steps = this.props.steps;
        let selectName = name + '_select';
        let options = steps.map(function(item){
            let stepTitle = item.name + '_title';
            return <option value={stepTitle}>Шаг #{item.order}</option>
        });
        return(
            <div>
                <textarea name={name}/><br/>
                <select name={selectName}>
                    {options}
                </select>
            </div>
        );
    }
});

components.register("CreateTemplateForm", CreateTemplateForm);