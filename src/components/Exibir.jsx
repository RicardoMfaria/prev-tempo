import { Card } from 'primereact/Card'
import striptags from 'striptags';

const Exibir = ({ cidade, dados }) => {

    const {
    temperaturaMinima,
    temperaturaMaxima,
    umidadeRelativaAr,
    nomeIconeIlustrativo,
    descricao
    } = dados;

    return (
        <Card
            title={striptags(String(cidade))}
            className='mb-4 p-2 mx-5'
            style={{backgroundColor:'#00FFFF'}}>
                <div className="mt-3 flex flex-column align-items-center">
                    <img
                        src={`https://openweathermap.org/img/wn/${nomeIconeIlustrativo}@2x.png`}
                        alt="ícone do clima"/>
                    <p><strong>Temperatura mínima:</strong> {striptags(String(temperaturaMinima))} °C</p>
                    <p><strong>Temperatura máxima:</strong> {striptags(String(temperaturaMaxima))} °C</p>
                    <p><strong>Umidade relativa do ar:</strong> {striptags(String(umidadeRelativaAr))}%</p>
                    <p><strong>Nome de um ícone ilustrativo :</strong> {striptags(String(nomeIconeIlustrativo))}</p>
                    <p><strong>Descricão:</strong> {striptags(String(descricao))}</p> 
                </div>
        </Card>
    )   
}
export default Exibir;