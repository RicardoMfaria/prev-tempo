//rafce
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

const Busca = () => {

  const [cidade, setCidade] = useState('Sao Paulo')

  useEffect(() =>{
    const buscar = async () => {
      const {data} = await axios.get('http://localhost:3000/forecast', {
        params:{
        city: cidade
        }
      })
      console.log(res.data)
      setResultados(data.query.search)
    };
      if (cidade.length >= 3) {
      const timeoutID = setTimeout(() => {
        buscar();
      }, 2000);

      return () => {
        clearTimeout(timeoutID);
      };
    }
  },[cidade])

  return (
    <div>
        <IconField iconPosition='left'>
          <InputIcon className='pi pi-search'/>
            <InputText 
              placeholder='Buscar'
              onChange={(e) => {setCidade(e.target.value)}}
              value={cidade}/>
      </IconField>
    </div>
  )
}

export default Busca