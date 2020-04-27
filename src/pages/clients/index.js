import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClientsForm from './components/clientsForm';
import { TableHeader } from './components/tableHeader';
import { TableBody } from './components/tableBody';
import { EditBlock } from './editBlock';
import ScrollTopHOC from '../../components/HOC';
import Paginavi from '../../components/pagination';
import {
  clientsGet,
  clientsAdd,
  clientsSearch,
  clientsEdit,
  clientsEditReset,
  clientsEditSave,
  clientsDelete,
  clientsReset
} from '../../actions';
import './style.css';

class Clients extends Component {
  componentDidMount() {
    const { auth, list } = this.props;
    if (auth && list === null) {
      this.props.clientsGet({ page: 1 });
    }
  }

  componentWillUnmount() {
    this.props.clientsReset();
  }

  clientsAdd = (data) => this.props.clientsAdd(data)

  clientsSearch = (data) => this.props.clientsSearch(data)

  handlerPageChange = (pageObj) => this.props.clientsGet(pageObj)

  render() {
    const { list, editingItem, ...rest } = this.props;
    return (
      <div className='clients'>
        <div className='table'>
          <TableHeader />
          <ClientsForm
            parentClass='table__row'
            onSubmit={this.clientsAdd}
            onChange={this.clientsSearch}
            noteField={false}
            mngBtn={false}
            form='ClientsForm'
          />
          <TableBody
            list={list}
            clientsEdit={rest.clientsEdit}
          />
        </div>
        {
          editingItem ?
            <ScrollTopHOC>
              <EditBlock
                editingItem={editingItem}
                clientsEditReset={rest.clientsEditReset}
                clientsEditSave={rest.clientsEditSave}
                clientsDelete={rest.clientsDelete}
              />
            </ScrollTopHOC> : null
        }
        <Paginavi handlerPageChange={this.handlerPageChange} />
      </div>
    )
  }
};


const mapStateToProps = state => ({
  auth: state.authorization.auth,
  ...state.clients
});

const mapDispatchToProps = {
  clientsGet,
  clientsAdd,
  clientsSearch,
  clientsEdit,
  clientsEditReset,
  clientsEditSave,
  clientsDelete,
  clientsReset
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);