import { useState } from "react"
import { useNavigate } from "react-router-dom"
import postUsers from "../api/post-users.js"

function CreateUser() {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault()
            postUsers(credentials.username, credentials.password)
            .then((response) => {
                navigate("/login")
            });
        }

    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    id="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create
            </button>
        </form>
    )
}

export default CreateUser