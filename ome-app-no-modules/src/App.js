import React, { Component } from 'react';
import './App.css';
import { ProgressBar, Panel, Table, Tab, Col, Row, Nav, NavItem } from 'react-bootstrap';
import {DataTable} from 'datatables.net';
// Components & Utilities
import ModuleReviewHistory from './components/ModuleReviewHistory.js';
import QuestionProgressAccuracy from './components/QuestionProgressAccuracy.js';
import RemediationHistory from './components/RemediationHistory.js';
import DataTableSetup from './utilities/DataTableSetup.js';

class App extends Component {
  componentDidMount() {
    DataTableSetup();
  }

  render() {
    return (
      <div className="App">

      <div>
      <QuestionProgressAccuracy
      dummyData={this.props.jsonData.data}
      graphData={this.props.jsonData.data[0].stats}
      />
      </div>

      <div>
      <ModuleReviewHistory
      dummyData={this.props.jsonData.data}
      chartData={this.props.jsonData.data[1].stats}
      />
      </div>

      <div>
      <RemediationHistory
      dummyData={this.props.jsonData.data}
      remediationData={this.props.jsonData.data[2].stats}
      />
      </div>
      </div>
    );
  }
}

export default App;
