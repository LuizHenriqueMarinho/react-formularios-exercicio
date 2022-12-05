import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from '../../hooks/useForm'

function MainPage() {
 
  const [formulario, onChangeForm] = useForm({nome:"", modulos:"", tecnologias:"", responsavel:""})

  const handleClick = (event) => {
    event.preventDefault() //previne que a pagina seja atulaizada ao enviar o formulario

    //console.log(`nome: ${formulario.nome}, idade: ${formulario.idade}, e-mail: ${formulario.email} `)
  }

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          name='nome'
          id="nome"
          value={formulario.nome}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          name='modulos'
          id="modulos"
          value={formulario.modulos}
          onChange={onChangeForm}
          required
          pattern='[2-9]|[0-9]{2}'
          title='O número não pode ser menor que 2 nem maior que 99'
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          name='tecnologias'
          id="tecnologias"
          value={formulario.tecnologias}
          onChange={onChangeForm}
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          name='responsavel'
          id="responsavel"
          value={formulario.responsavel}
          onChange={onChangeForm}
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage