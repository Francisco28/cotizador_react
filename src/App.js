import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
        <Header 
        title='Insurance quote'
        />

        <ContainerForm>
          
        </ContainerForm>
      
    </Container>
  );
}

export default App;
