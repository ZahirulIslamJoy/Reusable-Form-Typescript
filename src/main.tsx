import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Container from './components/Container/Container.tsx'
import NormalForm from './components/NormalForm.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container>
      <NormalForm></NormalForm>
    </Container>
  </React.StrictMode>,
)
