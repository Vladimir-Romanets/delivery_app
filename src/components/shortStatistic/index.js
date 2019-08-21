import React, { PureComponent } from 'react';

import './style.css';

const list = [
    { propName: 'servQuantity', icoName:'receipt', description: 'Количество услуг' },
    { propName: 'totalSpend', icoName: 'cash', description: 'Итоговый расход' },
    { propName: 'totalIncome', icoName: 'handCoins', description: 'Итоговый приход' },
    { propName: 'difference', icoName: 'financeScale', description: 'Итоговая прибыль' }
];

class ShortStatistic extends PureComponent {

    static defaultProps = {
        servQuantity: 0,
        totalSpend: 0,
        totalIncome: 0,
        difference: 0,
    }

    renderList = () => list.map(
        ({ propName, icoName, description}) =>(
            <li className="short-statistic__item" key={propName}>
                <div className="ico">
                    <img src={require(`../icons/${icoName}.svg`)} alt={description} title={description} />
                </div>
                <div>
                    <div className="description">
                        { description }
                    </div>
                    <div className="result">
                        { this.props[propName] }
                    </div>
                </div>   
            </li>
        )
    )

    render(){
        return(
            <ul className="short-statistic">
                {this.renderList()}
            </ul>
        )
    }
};

export default ShortStatistic;