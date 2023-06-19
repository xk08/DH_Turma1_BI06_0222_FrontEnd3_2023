import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import DetailCard from '../components/Details/DetailCard';

describe("<DetailCard /> testes no componente", () => {

    const mockHotel = {
        name: 'Hotel ABC',
        img: 'hotelimage.jpg',
        description: 'Descrição do hotel',
        city: 'Cidade XYZ',
        daily_price: 100,
        stars: 4,
        wifi: true,
        air_conditioned: false,
        email: 'hotel@example.com',
        phone: '1234567890',
    };


    test("Enviou objetoJS mockado via prop e renderizou o componente", () => {
        render(
            <BrowserRouter>
                <DetailCard
                    hotel={mockHotel}
                />
            </BrowserRouter>
        );
    });

    test("Está exibindo titulo e descrição ao renderizar o componente", () => {
        render(
            <BrowserRouter>
                <DetailCard
                    hotel={mockHotel}
                />
            </BrowserRouter>
        );
        expect(screen.getByText('Hotel ABC')).toBeInTheDocument();
        expect(screen.getByText('Descrição do hotel')).toBeInTheDocument();
    });

}); 