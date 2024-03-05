import React,{useState, useEffect} from 'react'

const RandomColor = () => {
  const [color, setColor] = useState("#ffffff");
  const [typeoof, setTypeoof ] = useState('hex');

    const Random=(length)=>{
      return Math.floor(Math.random()*length);
    }

  const handleHex=()=>{
    let hex =[1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let result = "#"
    for (let i = 0; i<6; i++){
      result += hex[Random(hex.length)]
    }
    setColor(result);
  }

  const handleRgb=()=>{
    let r = Random(255);
    let g = Random(255);
    let b = Random(255);
    let result = `rgb(${r},${g},${b})`
   setColor(result);

  }
  useEffect(()=>{
   typeoof === 'rgb' ? handleRgb() : handleHex()

  },[typeoof]);

 
  return (
    <div
    style={{
      height: "100vh",
      width: "100vw",
      background: color,
    }} 
    >
        <button style={{
          padding:"10px, 20px",
          margin: "10px",
          alignItems:"center",
        }} onClick={()=>setTypeoof('hex')}>HEX Color</button>
        <button style={{
          padding:"10px, 20px",
          margin: "10px",
          alignItems:"center",
        }}  onClick={()=>setTypeoof('rgb')}>RGB Color</button>
        <button style={{
          padding:"20px, 40px",
          margin: "10px",
          alignItems:"center",
        }} onClick={typeoof === 'hex' ? ()=>handleHex() : ()=> handleRgb()}>Generate</button>
        
        <div>
          <h2 style={{
          justifyContent:"center",
          alignItems:"center",
          display: 'flex',
          color: '#ffffff',
          marginTop: "50px",
        }}>{typeoof === 'hex'? `Hex color code: ${color}`: `RGB color Code: ${color}`}</h2>

        </div>
      </div>
  )
}

export default RandomColor