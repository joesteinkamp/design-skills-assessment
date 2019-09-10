import React, { Component } from 'react';
import './App.css';
import {Radar} from 'react-chartjs-2';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diagramVisible: false,
      resetRadios: false,
      valueOne: 0,
      valueTwo: 0,
      valueThr: 0,
      valueFou: 0,
      valueFiv: 0,
      valueSix: 0,
      valueSev: 0,
      valueEig: 0,
      valueNin: 0,
      valueTen: 0,
      data: {
        labels: ['Information Architecture', 'Visual Design', 'Interaction Design', 'Storytelling', 'Design Toolset', 'Technical Literacy', 'Business Literacy', 'Service Design', 'Human Factors', 'Research'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(74,144,226,0.6)',
            borderColor: 'rgba(74,144,226,1)',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: 'transparent',
            pointHoverBorderColor: 'transparent',
            pointHitRadius: 0,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      options: {
        backgroundColor: '#000',
        legend: {
          display: false
        },
        title: {
          display: false,
          text: 'Product Designer Skills Assessment'
        },
        responsive: true,
        tooltips: {
          enabled: false
        },
        scale: {
          display: true,
          pointLabels: {
            fontSize: 13,
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontColor: '#333',
            fontStyle: 'normal'
          },
          angleLines: {
            display: true,
            lineWidth: 1,
            color: 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
              min: 0,
              max: 3,
              stepSize: 1,
              display: false
          },
          gridLines: {
            display: true,
            color: 'rgba(0, 0, 0, 0.1)',
          }
        }
      }
    };

  }

  handleTypeChange(i) {

    if (i === 1) {
      this.setState({
        diagramVisible: false,
        data: {
          labels: ['Information Architecture', 'Visual Design', 'Interaction Design', 'Storytelling', 'Design Toolset', 'Technical Literacy', 'Business Literacy', 'Service Design', 'Human Factors', 'Research']
        }
      });
    }
    else if (i === 2) {
      this.setState({
        diagramVisible: false,
        data: {
          labels: ['Information Design', 'Graphic Design', 'Motion Design', 'Storytelling', 'Brand Identity Design', 'Content Strategy', 'Business Literacy', 'Service Design', 'Human Factors', 'Research']
        }
      });
    }
    else if (i === 3) {
      this.setState({
        diagramVisible: false,
        data: {
          labels: ['Information Design', 'Graphic Design', 'Motion Design', 'Storytelling', 'Brand Identity Design', 'Content Strategy', 'Business Literacy', 'Service Design', 'Human Factors', 'Research']
        }
      });
    }

    /* Clear radio buttons if selected */
    var x = document.getElementsByClassName('Assessment-Form')[0].getElementsByTagName("input");
    for (var z = 0; z < x.length; z++) {
      x[z].checked = false;
    }

  }

  handleRatingChange(i) {
    switch(i) {
			default:
				break;
			case "IA1":
        this.setState({valueOne: 1});
				break;
			case "IA2":
        this.setState({valueOne: 2});
				break;
			case "IA3": 
        this.setState({valueOne: 3});
        break;
      case "VD1":
        this.setState({valueTwo: 1});
				break;
			case "VD2":
        this.setState({valueTwo: 2});
				break;
			case "VD3": 
        this.setState({valueTwo: 3});
        break;
      case "ID1":
        this.setState({valueThr: 1});
				break;
			case "ID2":
        this.setState({valueThr: 2});
				break;
			case "ID3": 
        this.setState({valueThr: 3});
        break;
      case "PT1":
        this.setState({valueFou: 1});
				break;
			case "PT2":
        this.setState({valueFou: 2});
				break;
			case "PT3": 
        this.setState({valueFou: 3});
        break;
      case "TL1":
        this.setState({valueFiv: 1});
				break;
			case "TL2":
        this.setState({valueFiv: 2});
				break;
			case "TL3": 
        this.setState({valueFiv: 3});
        break;
      case "BL1":
        this.setState({valueSix: 1});
				break;
			case "BL2":
        this.setState({valueSix: 2});
				break;
			case "BL3": 
        this.setState({valueSix: 3});
        break;
      case "SD1":
        this.setState({valueSev: 1});
				break;
			case "SD2":
        this.setState({valueSev: 2});
				break;
			case "SD3": 
        this.setState({valueSev: 3});
        break;
      case "WT1":
        this.setState({valueEig: 1});
				break;
			case "WT2":
        this.setState({valueEig: 2});
				break;
			case "WT3": 
        this.setState({valueEig: 3});
        break;
      case "HF1":
        this.setState({valueNin: 1});
				break;
			case "HF2":
        this.setState({valueNin: 2});
				break;
			case "HF3": 
        this.setState({valueNin: 3});
        break;
      case "RS1":
        this.setState({valueTen: 1});
				break;
			case "RS2":
        this.setState({valueTen: 2});
				break;
			case "RS3": 
        this.setState({valueTen: 3});
				break;
    }
  }

  handleSubmit(i) {

    var valueOne = this.state.valueOne;
    var valueTwo = this.state.valueTwo;
    var valueThr = this.state.valueThr;
    var valueFou = this.state.valueFou;
    var valueFiv = this.state.valueFiv;
    var valueSix = this.state.valueSix;
    var valueSev = this.state.valueSev;
    var valueEig = this.state.valueEig;
    var valueNin = this.state.valueNin;
    var valueTen = this.state.valueTen;
    var assessmentData = [valueOne, valueTwo, valueThr, valueFou, valueFiv, valueSix, valueSev, valueEig, valueNin, valueTen];

    var labels = this.state.data.labels;

    this.setState({
      diagramVisible: true,
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(74,144,226,0.6)',
            borderColor: 'rgba(74,144,226,1)',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: 'transparent',
            pointHoverBorderColor: 'transparent',
            pointHitRadius: 0,
            data: assessmentData
          }
        ]
      }
    }); 
  }
  
  componentDidUpdate () {
    if (this.state.diagramVisible === true) {
      window.scrollBy({ 
        top: document.body.scrollHeight, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
    }
  }


  render() {
    return (
      <div className="App">
        
        <div className="Assessment-Card">
          <div className="Designer-Type">
            <input id="designerTypeProd" type="radio" name="designerType" value="1" onChange={(i) => this.handleTypeChange(1)} defaultChecked />
            <label htmlFor="designerTypeProd">Product Designer</label>
            <input id="designerTypeComm" type="radio" name="designerType" value="2" onChange={(i) => this.handleTypeChange(2)} />
            <label htmlFor="designerTypeComm">Communication Designer</label>
          </div>
          <AssessmentForm labels={this.state.data.labels} onChange={(i) => this.handleRatingChange(i)} />
          <div ref="diagram" className="Button-Box">
            <button onClick={(i) => this.handleSubmit(i)}>Generate Your  Diagram</button>
          </div>
        </div>
        
        {
          this.state.diagramVisible
            ? <div className="Assessment-Diagram"><Radar data={this.state.data} options={this.state.options} width={380} height={380} /></div>
            : null
        }
        
      </div>
    );
  }
}

function AssessmentForm(props) {
  return(
    <div className="Assessment-Form">
      <FormLineItem skillClass="IA" skillName={props.labels[0]} skillNo="1" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="VD" skillName={props.labels[1]} skillNo="2" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="ID" skillName={props.labels[2]} skillNo="3" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="PT" skillName={props.labels[3]} skillNo="4" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="TL" skillName={props.labels[4]} skillNo="5" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="BL" skillName={props.labels[5]} skillNo="6" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="SD" skillName={props.labels[6]} skillNo="7" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="WT" skillName={props.labels[7]} skillNo="8" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="HF" skillName={props.labels[8]} skillNo="9" onChange={(i) => props.onChange(i)} />
      <FormLineItem skillClass="RS" skillName={props.labels[9]} skillNo="10" onChange={(i) => props.onChange(i)} />
    </div>
  );
}

function FormLineItem(props) {
  return(
    <div className={"item " + props.skillClass}>
      <h3>{props.skillNo}. {props.skillName}</h3>
      <div className="options">
        <input id={props.skillClass+1} type="radio" name={props.skillClass} value="1" onChange={(i) => props.onChange(props.skillClass+1)} />
        <label htmlFor={props.skillClass+1}>Passable</label>
        <input id={props.skillClass+2} type="radio" name={props.skillClass} value="2" onChange={(i) => props.onChange(props.skillClass+2)} />
        <label htmlFor={props.skillClass+2}>Capable</label>
        <input id={props.skillClass+3} type="radio" name={props.skillClass} value="3" onChange={(i) => props.onChange(props.skillClass+3)} />
        <label htmlFor={props.skillClass+3}>Proficient</label>
      </div>
      
    </div>
  );
}

export default App;
