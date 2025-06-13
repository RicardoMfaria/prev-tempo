//rafce
import { useEffect, useState } from 'react'
import axios from 'axios'
import striptags from 'striptags'
import Exibir from './Exibir'

const Busca = () => {

  const [cidade, setCidade] = useState('São Paulo')
  
  const [previsoes, setPrevisoes] = useState([])

  const estiloDiv = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
  padding: '30px',
  };

  const estiloInput = {
  width: '300px',
  padding: '15px',
  fontSize: '1.1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginBottom: '2rem',
  marginTop: '10px'
  };
  
  useEffect(() =>{
    const buscar = async () => {
      const {data} = await axios.get('http://localhost:3000/forecast', {
        params:{
        city: cidade
        }
      })
      console.log(data)
      setPrevisoes(data.previsoes)
    };
    if (cidade.length >= 3) {
      const timeoutID = setTimeout(() => {
        buscar();
    }, 2000);
    return () => {
      clearTimeout(timeoutID);
    }}
  },[cidade])

  return (
    <div >
      <div style={estiloDiv}>
      <label htmlFor="cidade" style={{ marginBottom: '0.5rem' }}>
        Cidade:
      </label>
        <input
          style={estiloInput}
          id = "cidade"
          type = "text"
          value = {cidade}
          onChange={(e) => setCidade(striptags(e.target.value))}
        />
      </div>
      <div>
        {
          previsoes.map((previsao, index) => (
            <Exibir 
              key={index} 
              cidade={cidade} 
              dados={previsao}/>
          ))
        }
      </div>
    </div>
  )
}

export default Busca