import { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

function Login() {

    const navigator = useNavigate()
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const { username, password, logged, setLogged } = useContext(AuthContext)

    function handleLogin() {
        if (username === user && password === pass) {
            setLogged(true)
            return navigator('/home')
            alert('Login autorizado!')
        } else {
            alert('Senha ou Login invalido!')
        }






    }



    return (
        <div>
            <h1>Login</h1>

            <input type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
            />

            <input type="password"
                value={pass}
                onChange={e => setPass(e.target.value)}
            />

            <button
                onClick={handleLogin}
            >Entrar</button>




        </div>
    );
}

export default Login;

