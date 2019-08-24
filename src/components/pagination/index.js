import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";

import * as actions from '../../actions';
import './style.css';

const { pagiReset } = actions;
const options = [10, 50, 100, 200].map(el => (
	<option
		key={el.toString()} 
		value={el}>{el}
	</option>
));

class Paginavi extends PureComponent {

	static propTypes = {
		handlerPageChange: PropTypes.func.isRequired,
		pageCount: PropTypes.number.isRequired,
		currentPage: PropTypes.number.isRequired
	};

	static defaultProps = {
		currentPage: 1,
		pageCount: 0,
		pageRangeDisplayed: 5,
	};

	componentWillUnmount(){
		this.props.pagiReset();
	}

	limitChange = ({target}) =>
		this.props.handlerPageChange({
			page: this.props.pageNumber,
			limit: Number(target.value)
		});


	handlerPageChange = (pageNumber) => {
		const { currentPage, handlerPageChange } = this.props;

		pageNumber !== currentPage && handlerPageChange({page: Number(pageNumber)});
	}

	render() {
		const { pageCount, currentPage, pageRangeDisplayed, limit } = this.props;
		const showPagination = limit < pageCount;

		return (
			<div className="pagi-container">
				<span>Записей на страницу:&nbsp;</span>
				<select onChange={this.limitChange} defaultValue={limit}>
					{options}
				</select>
				{
					showPagination ?
						<Pagination
							activePage={currentPage}
							itemsCountPerPage={limit}
							totalItemsCount={pageCount}
							pageRangeDisplayed={pageRangeDisplayed}
							onChange={this.handlerPageChange}
							activeLinkClass={null}
							itemClass='pagination__item'
							linkClassPrev='pagination__item-step'
							linkClassNext='pagination__item-step'
						/> : null
				}
			</div>
		)
	}
};

const mapStateToProps = (state, ownProps) => ({
	...ownProps,
	...state.pagination
});

const mapDispatchToProps = {
	pagiReset
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginavi);