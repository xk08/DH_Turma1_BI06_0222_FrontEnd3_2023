import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Jest', () => {

  test('Exibe o texto em tela', () => {

    render(<App />);

    expect(
      screen.getByRole('heading', { name: "Projeto modelo" }) /// Sem usar Regexp
      // screen.getByRole('heading', { name: /projeto modelo/i }) /// Usando Regexp
    ).toBeInTheDocument();

  });
});