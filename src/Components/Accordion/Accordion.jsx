import React, { useState } from 'react'
import data from './data';
import './Accordion.css';
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [buttonText, setButtonText] = useState("Click Me");
  const handlesingleSelect = (getId) => {
    setSelected(selected === getId ? null : getId);
  }

  const handleMultiselect = (getId) => {
    let multiples = [...multiple];
    const indexes = multiples.indexOf(getId)

    if (indexes === -1) {
      multiples.push(getId);
    } else {
      multiples.splice(indexes, 1)
    }
    setMultiple(multiples)

  }

  const handleButtonClick=()=>{
    setEnable(!enable);
    setButtonText(enable ? "Enable Multiple-Selection" :"Enable Single-Selection");
  }


  return (<div className='wrapper'>
    <button onClick={() => handleButtonClick()}>{buttonText}</button>
    <div className='accordion'>
      {
        data && data.length > 0 ?
          data.map(dataItems => <div className='items'>
            <div onClick={enable ?
              () => handleMultiselect(dataItems.id)
              :
              () => handlesingleSelect(dataItems.id)} className='title'>
              <h3>{dataItems.Name}</h3>
              <span className='symbol'>{'>'}</span>
            </div>
            {enable ? multiple.indexOf(dataItems.id) !== -1 && <div className='content'>
              <h4>
                {dataItems.Profession}
              </h4>
            </div>
              :
              selected === dataItems.id && <div className='content'>
                <h4>
                  {dataItems.Profession}
                </h4>
              </div>
            }
          </div>)
          :
          <div> 403</div>
      }

    </div>
  </div>

  )
}

export default Accordion