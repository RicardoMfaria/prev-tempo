import { Card } from 'primereact/Card'

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
            title={cidade}
            className='mb-4 p-2 mx-5'
            style={{backgroundColor:'#00FFFF'}}>
                <div className="mt-3 flex flex-column align-items-center">
                    <img
                        src={`https://openweathermap.org/img/wn/${nomeIconeIlustrativo}@2x.png`}
                        alt="ícone do clima"/>
                    <p><strong>Temperatura mínima:</strong> {temperaturaMinima} °C</p>
                    <p><strong>Temperatura máxima:</strong> {temperaturaMaxima} °C</p>
                    <p><strong>Umidade relativa do ar:</strong> {umidadeRelativaAr}%</p>
                    <p><strong>Nome de um ícone ilustrativo :</strong> {nomeIconeIlustrativo}</p>
                    <p><strong>Descricão:</strong> {descricao}</p> 
                </div>
        </Card>
    )   
}
export default Exibir;