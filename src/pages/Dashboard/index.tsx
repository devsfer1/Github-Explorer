import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    
    <Repositories>
      <a href="teste">
        <img src="https://avatars.githubusercontent.com/u/58652794?s=460&u=5e958d3ff943457144e89dcbf444133f1404f056&v=4" alt="Fernando Chaves"/>
        <div>
          <strong>rocketseat/unform</strong>    
          <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
        </div>
        <FiChevronRight size={20}/>
      </a>
      <a href="teste">
        <img src="https://avatars.githubusercontent.com/u/58652794?s=460&u=5e958d3ff943457144e89dcbf444133f1404f056&v=4" alt="Fernando Chaves"/>
        <div>
          <strong>rocketseat/unform</strong>    
          <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
        </div>
        <FiChevronRight size={20}/>
      </a>
      <a href="teste">
        <img src="https://avatars.githubusercontent.com/u/58652794?s=460&u=5e958d3ff943457144e89dcbf444133f1404f056&v=4" alt="Fernando Chaves"/>
        <div>
          <strong>rocketseat/unform</strong>    
          <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
        </div>
        <FiChevronRight size={20}/>
      </a>
    </Repositories>
    </> 
  )
};

export default Dashboard;