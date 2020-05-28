import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';

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

  const [ summary, saveSummary ] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  //extract data
  const { data } = summary;

  return (
    <Container>
        <Header 
          title='Insurance quote'
        />

        <ContainerForm>
          <Form 
              saveSummary={saveSummary}
          />

          <Summary 
              data={data}
          />
        </ContainerForm>
      
    </Container>
  );
}

export default App;
