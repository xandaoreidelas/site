import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Certifique-se de importar Link aqui

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const RegisterForm = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const MessageText = styled.p`
  margin-top: 1rem;
`;

export const LoginLink = styled(Link)` // Certifique-se de que o Link é usado aqui
  display: block;
  margin-top: 1rem;
  color: #007bff;
  text-align: center;
  
  &:hover {
    text-decoration: underline;
  }
`;