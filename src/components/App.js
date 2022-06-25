import React, {Component, useState} from "react";
import '../styles/App.css';

let flamesArr = ["Siblings","Friends","Love","Affection","Marriage","Enemy"];
function App () {
    firstName = " ";
    secondName =" ";
    const[output,setOutput] = useState('No Relatiionship');

    function changeHandler1 (event) {
        firstName = event.target.value;
    }

    function changeHandler2 (event) {
        secondName = event.target.value;
    }

    function mergeString(firstInput, secondInput) {
        let firstMap = {};
        let secondMap = {};
        for(let i=0; i<firstInput; i++) {
            if(!firstMap[firstInput[i]]) {
                firstMap[firstInput[i]] = 0;
            }
            else {
                firstMap[firstInput[i]] += 1;
            }
        }

        for(let i=0; i<secondInput; i++) {
            if(!secondMap[secondInput[i]]) {
                secondMap[secondInput[i]] = 0;
            }
            else {
                secondMap[secondInput[i]] += 1;
            }
        }

        let count = 0;
        for(let first in firstMap) {
            for(let second in secondMap) {
                if(firstMap[first] !=0 && secondMap[second] !=0) {
                    if(secondMap[first]) {
                        firstMap[first]--;
                        second[second]--;
                    }
                }
            }
        }

        for(let item in firstMap) {
            count += firstMap[item];
        }

        for(let item in secondMap) {
            count += second[item];
        }

        function calculate () {
            let finalOutput = mergeString(firstName.toLowerCase(), secondName.toLowerCase());
            setOutput(flamesArr[finalOutput])
        }
    }
    function clear () {
        firstName = " ";
        secondName =" ";
    }
     return(
            <div id="main">
               {/* Do not remove the main div */}
               <h3 data-testid="answer">{output}</h3>
               <label>First Name:</label>
               <input data-testid="input1" onChange={changeHandler1}/>
               <label>second Name:</label>
               <input data-testid="input2"  onChange={changeHandler2}/>
               <button data-testid="calculate_relationship"  onClick={calculate}>Calculate Relationship Future</button>
               <button data-testid="clear" onClick={clear}>Click</button>
            </div>
        )
}


export default App;
