import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import logo from '../../assets/logo.png';
import {Link } from 'react-router-dom';

function SignUp() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const {signUp} = useContext(AuthContext);
    function handleSubmit(e){
      e.preventDefault();
      if(email != '' && senha != '' && nome != ''){
          signUp(email, senha, nome);
      }
    }
    return (
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo}
                        alt="sistema Logo"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>
                       Cadastrar
                    </h1>
                    <input type="text" placeholder="Nome" value = {nome} onChange={(e)=> setNome(e.target.value)} />
                    <input type="text" placeholder="Digite seu E-mail" onChange={(e) =>setEmail(e.target.value)} />
                    <input type="password" placeholder="Digite sua Senha" onChange={(e) =>setSenha(e.target.value)}/>
                    <button type='submit'>Cadastrar</button> 
                </form>
                <Link to="/">Já  possui uma conta? Login</Link>
            </div>
        </div>
    );
}

export default SignUp;
