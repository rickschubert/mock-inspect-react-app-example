import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import {mockRequest} from 'mock-inspect';

test('Shows Thank You page on correct submittal', async () => {
  const demoRequest = mockRequest({
    requestPattern: 'https://someapi.com/request-demo',
    requestMethod: "POST",
    responseStatus: 200,
  })

  render(<App />);
  const submitButton = screen.getByDisplayValue("Submit")
  expect(submitButton).toBeInTheDocument();
  fireEvent.click(submitButton)
  await waitFor(() => {
    expect(submitButton).not.toBeInTheDocument();
    const thankYouPage = screen.getByText("Thank you! We will send you a confirmation e-mail.")
    expect(thankYouPage).toBeInTheDocument();
  })

  demoRequest.expectRequestToHaveBeenMade()
  const {requestBody} = demoRequest.inspect()
  expect(requestBody).toEqual({name: "", email: "", demoType: ""})
});
