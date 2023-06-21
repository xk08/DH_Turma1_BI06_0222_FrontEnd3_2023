function ServiceCard({ service }) {

    return (

        <div className='divServices'>

            <div className='serviceType'>
                <div className="serviceLabel">Atendimento</div>
                {service.type}
            </div>

            <div className='serviceTime'>
                <div className="serviceLabel">Tempo estimado</div>
                {service.time}
            </div>

            <button style={{
                backgroundColor: "#8a6df1",
                color: "#2F2D2D"
            }} onClick={() => { /* Aqui vai a função de remoção que chama o dispacth do reducer */ }}>Remover
            </button>

        </div>

    );
}

export default ServiceCard;