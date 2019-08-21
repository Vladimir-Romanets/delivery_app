import React, { Component } from 'react';
import { Colgroup } from '../common/colgroup';
import Checkbox from '../common/checkbox';

// TODO: Заменить вид услуги на объект {id, serviceName}
const color = {
  'Пересылка ч/з ПОЧТА РФ': '#0f0',
  'Хранение': '#00f',
  'Обработка документов': '#ac5f00'
}

class TableBody extends Component{
  static defaultProps = {
    list: [],
    checkedList: {},
  }


  renderBody = () => {
    const { list, fields, dblClickHeandler, checkedList, mtSelectItem } = this.props;

    return list.map(({ delivery_id, ...el }) => (
      <div
        className={`table__row income-stat--${el.status_coming} expense-stat--${el.status_consumption}`}
        key={delivery_id.toString()}
        data-id={delivery_id}
        onDoubleClick={() => dblClickHeandler(delivery_id)}
      >
        <div className="table__cell" title={delivery_id}>
          {delivery_id.toString().substr(-4)}
        </div>
        {
          // TODO: Заменить вид услуги на объект {id, serviceName}
          fields.map((field, j) => (
            <div className={`table__cell --${field}`} key={`${j}${field}`} style={{background: (color[el[field]] || '')}}>
              {el[field]}
            </div>
          ))
        }
        <div className="table__cell">
          <Checkbox
            type="checkbox"
            name={delivery_id}
            isChecked={!!checkedList[delivery_id]}
            mtSelectItem={mtSelectItem}
          />
        </div>
      </div>
    ))
  }

  render() {
    const { list } = this.props;
    return (
      <div className='table__body'>
        {list ? this.renderBody() : <Colgroup text="Записи отсутствуют" />}
      </div>
    )
  }
}

export default TableBody;
