import React, { useState } from 'react';
import './App.css';
import Popform from './components/Popform';

import {
  Container,
  Button,
} from 'react-bootstrap';

function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="app">

      <section>
        <Container>
          <header className="app-header">
            <h1 className="app-title">Nested Components</h1>
          </header>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="title">Popform</h2>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Open modal
          </Button>

          <Popform
            show={modalShow}
            onHide={() => setModalShow(false)} />

        </Container>
      </section>
    </div>
  );
}

export default App;
