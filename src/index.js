import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function DisplayEmployeeInfo(employee){
    return <div>
        <h1> Page...!</h1>
        <p>
            <label>Bobby: <b>{employee.Id}</b></label>
        </p>
        <p>
            <label>Employee Id: <b>{employee.Name}</b></label>
        </p>
        <p>
        <label>Employee Id: <b>{employee.Location}</b></label>
        </p>
        <p>
        <label>Employee Id: <b>{employee.Salary}</b></label>
        </p>
    </div>;
}

const element=<DisplayEmployeeInfo Id="100" Name="Bobby" Location="Bhimavaram" Salary="1,00,000"></DisplayEmployeeInfo>;
ReactDOM.render(element,document.getElementById("root"));
// const element=React.createElement("div",{className:"testClass"},
// React.createElement("h1",null,"Hai bobby"),
// React.createElement("h2",null,"this is sai"));
// ReactDOM.render(element,document.getElementById("root"));

// const element=React.createElement("h1",null,"Welcome to react programming world");
// ReactDOM.render(element,document.getElementById("root"));
// const element=<h1 className="testClass">Welcome to React Js</h1>;

// ReactDOM.render(element,document.getElementById("root"));

// const newElement=<h1 className="testClass">Welcome to React Jsssss</h1>;

// ReactDOM.render(newElement,document.getElementById("app"));

// const element=(
//     <div className="testClass">
//         <h1>Hai this is ReactDOM</h1>
//         <h1>Hai Bobby</h1>
//     </div>
// );
// ReactDOM.render(element,document.getElementById("root"));