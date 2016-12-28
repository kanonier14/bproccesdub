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
var myDiagram;
function initFlowChart(jsonData) {
    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
    var $$ = go.GraphObject.make;  // for conciseness in defining templates, avoid $ due to jQuery

    myDiagram = $$(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
                   {
                     initialContentAlignment: go.Spot.Center,  // center the content
                     "undoManager.isEnabled": true
                   });

    // define a simple Node template
    myDiagram.nodeTemplate =
      $$(go.Node, "Auto",  // the Shape will go around the TextBlock
        $$(go.Shape, "RoundedRectangle",
          // Shape.fill is bound to Node.data.color
          new go.Binding("fill", "color")),
        $$(go.TextBlock,
          { margin: 3 },  // some room around the text
          // TextBlock.text is bound to Node.data.key
          new go.Binding("text", "key"))
      );

    // but use the default Link template, by not setting Diagram.linkTemplate

    // The previous initialization is the same as the minimal.html sample.
    // Here we request JSON-format text data from the server, in this case from a static file.
  }

  function load(jsondata) {
    // create the model from the data in the JavaScript object parsed from JSON text
    myDiagram.model = new go.GraphLinksModel(jsondata["nodes"], jsondata["links"]);
  }