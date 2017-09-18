import React, { Component } from 'react';
import { ProgressBar, Panel, Table, Tab, Col, Row, Nav, NavItem } from 'react-bootstrap';

class RemediationHistory extends Component{
  render() {
    const tableTitle = (<Panel key={this.props.dummyData.type} className="card-header">{this.props.dummyData[2].type }</Panel>);

    const tableHeadTitle = this.props.dummyData[2].tableHead.map(function(title, index){
      return(
        <th key={index+title}>{title}</th>)
      });

      const tableData = this.props.remediationData.map(function(data, index) {
        return(
          <tr key={index+data}>
          <td key={index+data.clerkship}>{data.clerkship}</td>
          <td key={index+data.duration}>{data.duration}</td>
          {
            (data.finalScore.status)
            ? <td key={index+data.finalScore}>{data.finalScore.status}</td>
            :   <td key={index+data.finalScore}><strong>{data.finalScore.studentScore}</strong>/{data.finalScore.maxScore}</td>
          }
          <td key={index+data.status}>{data.status}</td>
          <td key={index+data.action}>{data.action}</td>
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

  export default RemediationHistory;
