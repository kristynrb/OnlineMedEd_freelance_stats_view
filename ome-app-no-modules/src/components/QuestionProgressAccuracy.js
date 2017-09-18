import React, { Component } from 'react';
import { ProgressBar, Panel, Table, Tab, Col, Row, Nav, NavItem } from 'react-bootstrap';

class QuestionProgressAccuracy extends Component {
  render() {
    const graphTitle = (<Panel className="card-header"> {this.props.dummyData[0].type }</Panel>);

    const progressLabels = (
      <div className="graph-progress-labels">
      <div>0</div>
      <div>10</div>
      <div>20</div>
      <div>30</div>
      <div>40</div>
      <div>50</div>
      <div>60</div>
      <div>70</div>
      <div>80</div>
      <div>90</div>
      <div>100</div>
      </div>
    );

    const barCompletion = this.props.graphData.map(function(testData, index) {
      return(
        <div key={index+testData}>
        <h5 className="graph-progress-title" key={index}>{testData.title}</h5>
        <ProgressBar className="graph-progress" key={index+testData.percentage} now={testData.percentage}
        aria-valuemin='0'
        aria-valuemax='100'
        />
        </div>
      );
    });

    const barAccuracy = this.props.graphData.map(function(testData, index) {
      return(
        <div key={index+testData}>
        <h5 className="graph-progress-title" key={index}>{testData.title}</h5>
        <ProgressBar className="graph-progress" key={index+testData.percentage} now={testData.percentage-20} />
        </div>
      );
    });

    const tileCompletion = this.props.graphData.map(function(testData, index) {
      return(
        <div key={index+testData}>
        <h5 className="graph-progress-title" key={index}>{testData.title}</h5>
        <ProgressBar className="graph-progress" key={index+testData.percentage} now={testData.percentage+10} />
        </div>
      );
    });

    const tileAccuracy = this.props.graphData.map(function(testData, index) {
      return(
        <div key={index+testData}>
        <h5 className="graph-progress-title" key={index}>{testData.title}</h5>
        <ProgressBar className="graph-progress" key={index+testData.percentage} now={testData.percentage+20} />
        </div>
      );
    });

    const tabsInstance = (
      <Tab.Container id="tab-headers" defaultActiveKey="first">
      <Row className="clearfix">
      <Row className="graph-nav-parent">
      <Nav bsStyle="pills" className="graph-nav-pills">
      <NavItem className="graph-pill" eventKey="first">
      Bar Completion
      </NavItem>
      <NavItem className="graph-pill" eventKey="second">
      Bar Accuracy
      </NavItem>
      <NavItem className="graph-pill" eventKey="third">
      Tile Completion
      </NavItem>
      <NavItem className="graph-pill" eventKey="fourth">
      Tile Accuracy
      </NavItem>
      </Nav>
      </Row>
      <Col sm={12}>
      <Tab.Content animation>
      {progressLabels}
      <Tab.Pane eventKey="first">
      {barCompletion}
      </Tab.Pane>
      <Tab.Pane eventKey="second">
      {barAccuracy}
      </Tab.Pane>
      <Tab.Pane eventKey="third">
      {tileCompletion}
      </Tab.Pane>
      <Tab.Pane eventKey="fourth">
      {tileAccuracy}
      </Tab.Pane>
      </Tab.Content>
      </Col>
      </Row>
      </Tab.Container>
    );

    return(
      <div className="card-container">
      {graphTitle}
      <div className="card-content">
      {tabsInstance}
      </div>
      </div>
    );
  }
};

export default QuestionProgressAccuracy;
