import { useAuth } from '../../hooks/use-auth';
import LoginForm from '../LoginForm';
import { useParams } from 'react-router-dom';
import useProject from '../../hooks/use-project';
import putProject from '../../api/put-project';

const EditProjectForm = () => {

    const {auth, setAuth} = useAuth();

    const { id } = useParams();

    const { project, pledges, isLoading: isLoadingProject, error: errorProject, setProject, setPledges } = useProject(id)

    if (isLoadingProject) {
        return (<p>Loading...</p>)
    }

    if (errorProject) {
        console.log("errorProject", errorProject)
        return (<p>{errorProject.message}</p>)
    }
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
        
        console.log("user after setUser", project);

    };

    const handleSubmit = (event) => {
        console.log("got to handleSubmit",project);
        event.preventDefault();
                putProject(
                    project.id,
                    project.title,
                    project.description,
                    project.goal,
                    project.image,
                ).then((response) => {
                    navigate("/")
                    // console.log("Project details updated");
                });
    };

    const dateStrip = project.date_end.substr(0, 10);


    if ( auth.token ) {
        if (auth.id == project.owner) {
            return (
                // changed the handleSubmit to form onSubmit rather than on button onClick to  use standard HTML user input required validation
                <div className='user-page'>
                    <>
                        
                        {/* <img src={user.image} alt='avatar' className='avatar' />                           */}
                            <h3>EDIT PROJECT</h3>
                            <h3 className='login-text'>Welcome {project.owner}</h3> 
                <form className='user-form' onSubmit={handleSubmit}>
        
                    <li className='label'>
                        <label htmlFor='title'>Title</label>
                        </li><li className='label'>
                        <input 
                            type='text' 
                            required
                            id='title' 
                            defaultValue={project.title}
                            onChange = {handleChange}
                        />
                        </li>
                        <li className='label'>
                        <label htmlFor='description'>Description</label>
                        </li><li className='label'>
                        {/* <input  */}
                        <textarea
                            type='text' 
                            id='description' 
                            required
                            rows='10'
                            cols='36'
                            defaultValue={project.description}
                            onChange = {handleChange}
                        />
                        </li>
                        <li className='label'>
                            <label htmlFor='goal'>Goal $</label>
                        </li>
                        <li>
                            <input 
                                type='number' 
                                id='goal' 
                                onChange = {handleChange}
                                required
                                defaultValue={project.goal}    
                                min='1'               
                            />
                        </li>                                   
                        <li className='label'>
                            <label htmlFor='image'>Image</label>
                        </li>
                        <li>
                            <input 
                                type='url' 
                                id='image' 
                                onChange = {handleChange}
                                required
                                defaultValue={project.image}
                            />
                        </li> 
                        <li className='label'>
                            <label htmlFor='date_end'>End Date</label>
                        </li>
                        <li>
                            <input 
                                type='date' 
                                id='date_end' 
                                onChange = {handleChange}
                                required
                                defaultValue={dateStrip}
                            />
                        </li> 
                    <button type='submit'><Save></Save></button>
                </form>
                        </>
                        </div>
                        );
        } else {
            return (
                <p>Not authorised</p>
            );
        }


    } else {
        return (
            <div>
            <LoginForm />
            </div>
        );
    }
}

export default EditProjectForm