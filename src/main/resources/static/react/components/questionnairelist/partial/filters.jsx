var Filters = React.createClass({
    render: function() {
        let changeState = this.props.changeFilterState;
        return(
            <div className="questionnaire-list__filters">
                Дата создания:
                <select onChange={changeState} name="date_sort">
                    <option value='asc'>По возрастанию</option>
                    <option value='desc'>По убыванию</option>
                </select>
                Раздел:
                <TopicSelect changeState={changeState}/>
            </div>
        );
    }
});