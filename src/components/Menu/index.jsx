import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

function Menu() {
    const navigator = useNavigate()

    const {logged, setLogged } = useContext(AuthContext)

    const handleExit = () => {
        if (logged === false) {
            setLogged(false)
            return navigator('/')
            
        } 
    }

    return ( 
        <div>
            <h1>Logo</h1>

            <nav>
                <ul>
                    
                      <ul>
                      
                            <a href="/"
                            onClick={handleExit}
                            >Logout</a>
                        
                      </ul>
                </ul>
            </nav>
        </div>
     );
}

export default Menu;