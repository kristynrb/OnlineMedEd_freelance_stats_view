import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var JSON = {
  "data": [
    { "style": "chart",
    "type": "Question Progress & Accuracy",
    "stats": [
      {"title": "Gatroenterology",
      "percentage": 50},
      {"title": "Surgery: Subspeciality",
      "percentage": 70},
      {"title": "Pediatrics",
      "percentage": 40},
      {"title": "Gynecology",
      "percentage": 80}
    ]},
    {"style": "table",
    "type": "Module Review History",
    "tableHead": ["Date", "# of questions", "Accuracy", "Status", ""],
    "stats": [
      {"date": "Mar 27, 2017", "number": 44, "accuracy": 9, "status": "Completed", "action": "Review"}, {"date": "Mar 3, 2017", "number": 10, "accuracy": 20, "status": "Completed", "action": "Review"}, {"date": "Feb 12, 2017", "number": 39, "accuracy": 30, "status": "Completed", "action": "Review"}, {"date": "Feb 10, 2017", "number": 20, "accuracy": 88, "status": "Completed", "action": "Review"},
      {"date": "Dec 18, 2016", "number": 20, "accuracy": 60, "status": "Completed", "action": "Review"},
      {"date": "Dec 1, 2016", "number": 23, "accuracy": 44, "status": "Completed", "action": "Review"}
    ]},
    {"style": "table",
    "type": "Remediation History",
    "tableHead": ["Clerkship", "Duration", "Final Assessment Score", "Status", ""],
    "stats": [
      {"clerkship": "Pediatrics", "duration": "4 Weeks", "finalScore": {"status":"Incomplete"}, "status": "In Progress", "action": "View"},
      {"clerkship": "Internal Medicine", "duration": "6 Weeks", "finalScore": {"studentScore": "280", "maxScore": "300"}, "status": "Completed", "action": "Print"}
    ]}
  ]
}

ReactDOM.render(<App jsonData={JSON} />, document.getElementById('main'));
registerServiceWorker();
