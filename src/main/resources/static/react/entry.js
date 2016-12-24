google.load("visualization", "1", {packages:["corechart"]});

var registeredComponents = new Map();

var components = {
    register: function(name, component) {
        registeredComponents.set(name, component);
    }
}

var application = {
    render: function() {
        var foundComponentsInstance = document.querySelectorAll('[data-component]');

        foundComponentsInstance.forEach( function(elem) {
         let componentName = elem.dataset.component;
         ReactDOM.render(React.createElement(registeredComponents.get(componentName)), elem);
        });
    },

    renderResults: function() {
        var questions = document.querySelectorAll('[data-resultComponent]');
        questions.forEach(function(elem) {
            var Answers = [['Ответ', 'Голосов']];
            elem.querySelectorAll('.question-result__answer-data--hidden').forEach(function(elem) {
                let answerTitle = elem.querySelectorAll('[name=title]')[0].value;
                let answerResult = parseInt(elem.querySelectorAll('[name=countVotes]')[0].value);
                let answerRow = [answerTitle, answerResult];
                Answers.push(answerRow);
            });
            let chartDiv = elem.querySelectorAll('.chart')[0];
            var data = google.visualization.arrayToDataTable(Answers);
            var options = {
                title: 'Результат',
                is3D: true,
                pieResidueSliceLabel: 'Остальное',
                backgroundColor: 'transparent'
            };
            var chart = new google.visualization.PieChart(chartDiv);
            chart.draw(data, options);
        });
    }
}