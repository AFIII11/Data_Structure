import React, { useState } from 'react';
import './datastructures.css';
import user from './../Image/user.png';

export default function Datastructures() {
    const [divCount, setDivCount] = useState(1);
    const [leftButtons, setLeftButtons] = useState([]);
    const [rightButtons, setRightButtons] = useState([]);

    const addNewDiv = (position) => {
        setDivCount(divCount + 1);
        const newDiv = (
            <div className="smalldiv" key={divCount}>
                <div className="one"></div>
                <img className="two" src={user} alt={`User ${divCount}`} />
                <div className="three"></div>
            </div>
        );

        if (position === 'right') {
            setRightButtons([...rightButtons, newDiv]);
        } else if (position === 'left') {
            setLeftButtons([...leftButtons, newDiv]);
        }
    };
    const [state,setState] = useState()

    const input = (event)=>{
        const value= event.target.value
        setState(value)
    }
    const save = ()=>{
        console.log(state);
        addNewDiv(state)
    }

    return (
        <>
            <div className="fix" key={divCount}>
                <div className="fixone"></div>
                <img className="fixtwo" src={user} alt={`User ${divCount}`} />
                <div className="fixthree"></div>
            </div>
            <h6>Plan1: MF<br></br><br></br>Value: 2000</h6>
            <div className="bigdiv">
                <div className="smalldivthree">
                    <div className="oness"></div>
                    <div className="threess">
                        {leftButtons.map((button, index) => (
                            <div key={index}>{button}</div>
                        ))}

                    </div>
                </div>
                <div className="smalldivtwo">
                    <div className="ones"></div>
                    <div className="threes">
                        {rightButtons.map((button, index) => (
                            <div key={index}>{button}</div>
                        ))}

                    </div>
                </div>
            </div>
           <>
            </>
            <div className='sec'>

                <div className='tm'>

                    <table class="table">


                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }} scope="col">S. No</th>
                                <th style={{ textAlign: 'center' }} scope="col">ID</th>
                                <th style={{ textAlign: 'center' }} scope="col">Parent ID</th>
                                <th style={{ textAlign: 'center' }} scope="col">Value</th>
                                <th style={{ textAlign: 'center' }} scope="col">L/R</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{ textAlign: 'center' }}>1</th>
                                <th style={{ textAlign: 'center' }}>A1</th>
                                <th style={{ textAlign: 'center' }}><span>Null</span></th>
                                <th style={{ textAlign: 'center' }}><span class="old">2000</span></th>
                                <th style={{ textAlign: 'center' }}>Null</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>2</th>
                                <th style={{ textAlign: 'center' }}>A2</th>
                                <th style={{ textAlign: 'center' }}><span>A1</span></th>
                                <th style={{ textAlign: 'center' }}><span class="old">200</span></th>
                                <th style={{ textAlign: 'center' }}>L</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>3</th>
                                <th style={{ textAlign: 'center' }}>A3</th>
                                <th style={{ textAlign: 'center' }}><span>A1</span></th>
                                <th style={{ textAlign: 'center' }}><span class="old">20000</span></th>
                                <th style={{ textAlign: 'center' }}>L</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>4</th>
                                <th style={{ textAlign: 'center' }}>A4</th>
                                <th style={{ textAlign: 'center' }}><span>A2</span></th>
                                <th style={{ textAlign: 'center' }}><span class="old">2000</span></th>
                                <th style={{ textAlign: 'center' }}>R</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>5</th>
                                <th style={{ textAlign: 'center' }}>A5</th>
                                <th style={{ textAlign: 'center' }}><span>A2</span></th>
                                <th style={{ textAlign: 'center' }}><span class="old">2000</span></th>
                                <th style={{ textAlign: 'center' }}>L</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>6</th>
                                <th style={{ textAlign: 'center' }}>A6</th>
                                <th style={{ textAlign: 'center' }}><span>A2</span></th>
                                <th style={{ textAlign: 'center' }}><span class="young">2000</span></th>
                                <th style={{ textAlign: 'center' }}>R</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>7</th>
                                <th style={{ textAlign: 'center' }}>A7</th>
                                <th style={{ textAlign: 'center' }}><span>A3</span></th>
                                <td style={{ textAlign: 'center' }}><span class="young">20000</span></td>
                                <th style={{ textAlign: 'center' }}>R</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>8</th>
                                <th style={{ textAlign: 'center' }}>A8</th>
                                <th style={{ textAlign: 'center' }}><span>A3</span></th>
                                <th style={{ textAlign: 'center' }}><span class="old">2000</span></th>
                                <th style={{ textAlign: 'center' }}>L</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>9</th>
                                <th style={{ textAlign: 'center' }}>A9</th>
                                <th style={{ textAlign: 'center' }}><span>A4</span></th>
                                <th style={{ textAlign: 'center' }}><span class="old">2000</span></th>
                                <th style={{ textAlign: 'center' }}>Null</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>10</th>
                                <th style={{ textAlign: 'center' }}>A10</th>
                                <th style={{ textAlign: 'center' }}><span>A4</span></th>
                                <th style={{ textAlign: 'center' }}><span class="old">2000</span></th>
                                <th style={{ textAlign: 'center' }}>L</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>11</th>
                                <th style={{ textAlign: 'center' }}>A11</th>
                                <th style={{ textAlign: 'center' }}><span>A4</span></th>
                                <th style={{ textAlign: 'center' }}><span class="middleaged">20000</span></th>
                                <th style={{ textAlign: 'center' }}>R</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>12</th>
                                <th style={{ textAlign: 'center' }}>A12</th>
                                <th style={{ textAlign: 'center' }}><span>A10</span></th>
                                <th style={{ textAlign: 'center' }}><span class="young">2000</span></th>
                                <th style={{ textAlign: 'center' }}>Null</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>13</th>
                                <th style={{ textAlign: 'center' }}>A13</th>
                                <th style={{ textAlign: 'center' }}><span>A10</span></th>
                                <th style={{ textAlign: 'center' }}><span class="young">2000</span></th>
                                <th style={{ textAlign: 'center' }}>L</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }}>14</th>
                                <th style={{ textAlign: 'center' }}>A14</th>
                                <th style={{ textAlign: 'center' }}><span>A10</span></th>
                                <th style={{ textAlign: 'center' }}><span class="young">20000</span></th>
                                <th style={{ textAlign: 'center' }}>R</th>
                            </tr>


                        </tbody>
                    </table>
                    <button class="btn default">ID</button>
                    <button class="btns default">Position</button>
                    

                    <button class="btnss default" onClick={save}>Save</button>
                    <div class="col-md-6 mb-3">
                        <label></label>
                        <select class="custom-select menu" id="validationDefault04" name="catagories" >
                            <option selected disabled value="" name="groundspace">Select ID A2 2000</option>
                            <option>A2 20000</option>
                            <option>A3 20000</option>
                            <option>A4 2000</option>
                            <option>A5 2000</option>
                            <option>A6 2000</option>
                        </select>
                    </div>
                </div>
                <div className='radio-position'>
                        <input type="radio" id="html" name="fav_language" value='left' onChange={input}></input>
                        <label for="html">Left</label><br></br>
                        <input type="radio" id="css" name="fav_language" value='right' onChange={input}></input>
                        <label for="css">Right</label>
                    </div>
            </div>
        </>


    );
}
