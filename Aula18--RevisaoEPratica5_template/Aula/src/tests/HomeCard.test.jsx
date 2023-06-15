import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HomeCard from '../components/Home/HomeCard';

describe("<HomeCard /> testes no componente", () => {


    const mockHotel = {
        name: 'Hotel ABC',
        img: 'https://www.hotelimage.jpg',
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
                <HomeCard
                    hotel={mockHotel}
                />
            </BrowserRouter>
        );
    });

    test("O botão 'Ver mais' está executando corretamente a ação de click", () => {
        render(
            <BrowserRouter>
                <HomeCard
                    hotel={mockHotel}
                />
            </BrowserRouter>
        );
        const button = screen.getByRole("button");
        fireEvent.click(button);
    });

});