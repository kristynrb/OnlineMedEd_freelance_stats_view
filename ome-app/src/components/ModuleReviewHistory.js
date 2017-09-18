import React, { Component } from 'react';
import { ProgressBar, Panel, Table, Tab, Col, Row, Nav, NavItem } from 'react-bootstrap';

class ModuleReviewHistory extends Component{
  render() {

    const tableTitle = (<Panel key={this.props.dummyData.type} className="card-header">{this.props.dummyData[1].type }</Panel>);

    const tableHeadTitle = this.props.dummyData[1].tableHead.map(function(title, index){
      return(
        <th key={index+title}>{title}</th>)
      });

      const tableData = this.props.chartData.map(function(testData, index) {
        return(
          <tr key={index+testData}>
          <td key={index+testData.date}>{testData.date}</td>
          <td key={index+testData.number}>{testData.number}</td>
          <td key={index+testData.accuracy}>{testData.accuracy}</td>
          <td key={index+testData.status}>{testData.status}</td>
          <td key={index+testData.action}>{testData.action}</td>
          </tr>
        );
      });

      const tableInstance = (
        <div className="card-content">
        <Table >
        <thead>
        <tr>
        {tableHeadTitle}
        </tr>
        </thead>
        <tbody>
        {tableData}
        </tbody>
        </Table>
        </div>
      );

      return(
        <div className="card-container">
        {tableTitle}
        {tableInstance}
        </div>
      );
    }
  }

  export default ModuleReviewHistory;
