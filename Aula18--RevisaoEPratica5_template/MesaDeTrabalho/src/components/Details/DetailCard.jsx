function DetailCard({ hotel }) {
    return (
        <div style={
            {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                transition: "all ease 0.3s",
                cursor: "pointer",
            }
        }>
            <div className="title-details">{hotel.name}</div>

            <img
                src={hotel.img}
                alt={hotel.name}
                style={{
                    width: "80%",
                    borderRadius: "5%",
                    border: "5px solid #F7F6F9",
                }}
            />

            <div className="description-details-title">Descrição</div>
            <div className="description-details">{hotel.description}</div>

            <div className="description-details-title">Informações</div>
            <ul>
                <li>Cidade: {hotel.city}</li>
                <li>Preço da diária: {hotel.daily_price}</li>
                <li>Classificação: {hotel.stars} estrelas</li>
                <li>Possui Wi-Fi: {hotel.wifi ? "Sim" : "Não"} </li>
                <li>Possui Ar-condicionado: {hotel.air_conditioned ? "Sim" : "Não"} </li>
            </ul>

            <div className="description-details-title">Contato</div>
            <ul>
                <li>E-mail: {hotel.email}</li>
                <li>WhatsApp: {hotel.phone}</li>
            </ul>

        </div>
    );
}

export default DetailCard;