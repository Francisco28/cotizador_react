import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

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

  //spinner state
  const [ loading, saveLoading ] = useState(false);


  //extract data
  const { quotation, data } = summary;

  return (
    <Container>
        <Header 
          title='Insurance quote'
        />

        <ContainerForm>
          <Form 
              saveSummary={saveSummary}
              saveLoading={saveLoading}
          />
          
          { loading ? <Spinner /> : null }

          <Summary 
              data={data}
          />

          { !loading ? <Result 
                         quotation={quotation}
                       />
                     : null  }
        </ContainerForm>
      
    </Container>
  );
}

export default App;
