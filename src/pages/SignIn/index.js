import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import './signin.css';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {signIn} = useContext(AuthContext);
    function handleSubmit(e){
      e.preventDefault();
      if(email != '' && senha!=''){
        signIn(email,senha);
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
                        Entrar
                    </h1>
                    <input type="text" placeholder="Digite seu E-mail" onChange={(e) =>setEmail(e.target.value)} />
                    <input type="password" placeholder="Digite sua Senha" onChange={(e) =>setSenha(e.target.value)}/>
                    <button type='submit'>Acessar</button> 
                </form>
                <Link to="register">Criar uma conta</Link>
            </div>
        </div>
    );
}

export default SignIn;
