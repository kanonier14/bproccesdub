var Paginator = React.createClass({
    render: function() {
        let countPages = this.props.countPages;
        let numberCurrentPage = this.props.currentPage;
        var Pages = [];
        for (let number = 1; countPages >= number; number++) {
            let itemPaginatorClass = numberCurrentPage != number ? 'paginator__page-item' : 'paginator__page-item--current';
            Pages.push(
                <PaginatorItem  loadPage={this.props.loadPage} number={number} itemPaginatorClass={itemPaginatorClass}/>
            );
        }
        return(
            <div className="paginator">
                {Pages}
            </div>
        );
    }
});

var PaginatorItem = React.createClass({
    render: function() {
        let loadPage = this.props.loadPage;
        let number = this.props.number;
        let itemPaginatorClass = this.props.itemPaginatorClass;
        return(
            <a className="link_paginator" onClick={loadPage} data-pagenumber={number}>
                <div className={itemPaginatorClass}>{number}</div>
            </a>
        );
    }
});