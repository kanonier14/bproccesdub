var QuestionnaireList = React.createClass({

    getInitialState: function() {
        return({questionnaries: [], currentPage: 1, topic: '', date_sort: ''});
    },

    componentWillMount: function() {
        this.loadQuestionnaire();
    },

    loadQuestionnaire: function() {
        var self = this;
        let promise = fetch('/questionnaires/get')
            .then(function(response) {
                return response.json();
            })
            .then(function(result){
                let newState = Object.assign(self.state, {
                    questionnaries: result.questionnaires,
                    pagesCount: result.pagesCount
                });
                self.setState(newState);
            });
    },

    loadPage: function(event) {
        let requestedPage = event.currentTarget.dataset.pagenumber;
        let dateOrder = this.state.date_sort;
        let topic = this.state.topic;
        let parameters = this.buildParameters(requestedPage, dateOrder, topic);
        var self = this;
        let promise = fetch('/questionnaires/get?' + parameters)
            .then(function(response) {
                return response.json();
            })
            .then(function(result){
                let newState = Object.assign(self.state, {
                    questionnaries: result.questionnaires,
                    pagesCount: result.pagesCount,
                    currentPage: requestedPage
                });
                self.setState(newState);
            });
    },

    loadByFilter: function(event) {
        let filterName = event.currentTarget.name;
        let filterValue = event.currentTarget.value;
        this.newFilterState(filterName, filterValue);
        let dateOrder = this.state.date_sort;
        let topic = this.state.topic;
        let page = 1;
        let parameters = this.buildParameters(page, dateOrder, topic);
        var self = this;
        let promise = fetch('/questionnaires/get?' + parameters)
            .then(function(response) {
                return response.json();
            })
            .then(function(result){
                let newState = Object.assign(self.state, {
                    questionnaries: result.questionnaires,
                    pagesCount: result.pagesCount,
                    currentPage: 1
                });
                self.setState(newState);
            });
    },

    newFilterState: function(filterName, filterValue) {
        var self = this;
        switch(filterName) {
            case 'topic':
                self.setState(Object.assign(self.state, {topic: filterValue}));
                break;
            case 'date_sort' :
                self.setState(Object.assign(self.state, {date_sort: filterValue}));
                break;
            default: break
        }
    },

    buildParameters: function(pageNumber, dateOrder, topic) {
        let parameters = 'pagenumber=' + pageNumber + '&dateOrder=' + dateOrder + '&topic=' + topic;
        return parameters;
    },

    render: function() {
        let Questionnaries = this.state.questionnaries.map(function (item) {
            return <QuestionnaireItem key={item.idQuestionnaire} idQuestionnaire={item.idQuestionnaire} title={item.title}/>;
        });

        let PaginatorElement = this.state.pagesCount > 1 ? <Paginator currentPage={this.state.currentPage} loadPage={this.loadPage} countPages={this.state.pagesCount}/> : '';
        return(
            <div className="wrapper">
                <ContentHeader/>
                <Filters changeFilterState={this.loadByFilter}/>
                <div className="questionnaire-list__items">
                    {Questionnaries}
                </div>
                {PaginatorElement}
            </div>
        )
    }
});

components.register("QuestionnaireList", QuestionnaireList);