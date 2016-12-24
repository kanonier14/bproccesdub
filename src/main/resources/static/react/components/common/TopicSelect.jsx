var TopicSelect = React.createClass({
    render: function() {
        let changeState = this.props.changeState;
        return(
            <select onChange={changeState} name="topic">
                <option value="ALL">Все</option>
                <option value="SPORT">Спорт</option>
                <option value="SOCIETY">Общество</option>
                <option value="ART">Искусство</option>
                <option value="OTHER">Остальное</option>
            </select>
        );
    }
});