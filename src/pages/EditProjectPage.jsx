import { useAuth } from '../hooks/use-auth'
import LoginForm from '../components/LoginForm'
import EditProjectForm from '../components/EditProjectForm'
import { useParams } from 'react-router-dom'

const EditProjectPage = () => {

    const {auth, setAuth} = useAuth();
    const { id } = useParams();

    return (

        <div>
            { auth.token ? (
                <>
                    <h3 className='login-text'>EDIT PROJECT</h3>    
                        {/* <EditUserForm userId={auth.id}/> */}
                        <EditProjectForm id={id}/>
                </>
                ) : (
                    <LoginForm />
                ) }
        </div>
    ) 
}

export default EditProjectPage