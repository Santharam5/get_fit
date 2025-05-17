import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bmipic from './Asset/bmi.jpg';
import './bmicalc.css';
const Bmicalc=()=>{
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const [bmi,setBmi]=useState('');
    const [status,setStatus]=useState('');
    const handleCalculate=()=>{
        const h=parseFloat(height)/100;//convert cm to meters
        const w=parseFloat(weight);
        if(!h||!w||h<=0||w<=0){
            setBmi(null);
            setStatus('Please Enter valid No.');
            return;
        }     
        const bmivalue=w/(h*h);
        setBmi(bmivalue.toFixed(2));
         if (bmivalue < 18.5) setStatus('Underweight');
        else if (bmivalue < 24.9) setStatus('Normal');
        else if (bmivalue < 29.9) setStatus('Overweight');
        else setStatus('Obese');
    };
      const handleReset = () => {
    setHeight('');
    setWeight('');
    setBmi('');
    setStatus('');
  };
return(
    <>
    <section className="Bmical" id="Bmical">
    <div><h2 className="bmi-h2">BMI Calculator</h2> <hr></hr>
    <Container className="border">
        <Row>
        <Col><h3 className="bmi-para">📝 What is BMI?</h3>
        <p className="bmi-para">Body Mass Index (BMI) is a simple calculation using a person’s height and weight to estimate body fat and assess health risk. It is widely used to categorize underweight, normal weight, overweight, and obesity in adults.</p>
        <hr></hr>
        <h3 className="bmi-para">⚙️ How BMI is Calculated:</h3><br></br>
        <p className="bmi-para">BMI= Weight(kg)/[Height(m)]<sup>2</sup></p>
        <p className="bmi-para">Example: If you are 170 cm tall and weigh 65 kg:</p>
        <p className="bmi-para">BMI=65/(1.70)<sup>2</sup>=22.5</p>
        <hr></hr>
        <h3 className="bmi-para">📊 BMI Categories (WHO Standards):</h3>
        <table className="bmi-table"><thead><tr><th>BMI Range</th><th>Category</th></tr></thead>
        <tbody><tr><td>Below 18.3</td><td>Under weight</td></tr>
        <tr><td>18.5-24.9</td><td>Normal weight</td></tr>
        <tr><td>25-29.9</td><td>Over weight</td></tr>
        <tr><td>30 and above</td><td>Obese</td></tr></tbody>
        </table>
        </Col>
        <Col className="mx-auto" >
        <div className="styleBmi inputBmi p-4 shadow rounded bg-white">
      <h2 className="bmi-para">BMI Calculator</h2>

      <input
       className="styleBmi inputBmi"
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
       
      />

      <input
      className="styleBmi inputBmi"
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={handleCalculate} className="styleBmi button">Calculate BMI</button><br></br><br></br>
      <button onClick={handleReset} className="styleBmi button reset-btn">Reset</button>
      {bmi && (
        <p>Your BMI is <strong>{bmi}</strong> ({status})</p>
      )}

      {!bmi && status && <p>{status}</p>}

    </div>
    <img src={bmipic} className="bmi-pic"/>
    </Col>
      </Row>
    </Container></div></section>
    </>
)
}
export default Bmicalc