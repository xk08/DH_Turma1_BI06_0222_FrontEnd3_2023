import { renderContext, screen } from "../../test-utils"
import Login from '../../../Routes/Login';

test.skip('should show login form', () => {
  renderContext(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});