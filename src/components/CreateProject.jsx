import { useState } from "react"
import { useNavigate } from "react-router-dom"
import postLogin from "../api/post-login.js"

function CreateProject() {
    const navigate = useNavigate()

    const [projectDetails, setProjectDetails] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target
        setProjectDetails((prevprojectDetails) => ({
            ...prevprojectDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault()
            postProject(
                projectDetails.title,
                projectDetails.description,
                projectDetails.goal,
                projectDetails.image
            ).then((response) => {
                window.localStorage.setItem("token", response.token)
                setProjectDetails({
                    token: response.token,
                });
                navigate("/")
            });
        }


    return (
        <form>
            <div>
                <label htmlFor="title">Project name:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter your Project name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Project description:</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Enter your Project description"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Goal amount:</label>
                <input
                    type="number"
                    id="goal"
                    placeholder="Enter your goal amount"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                    type="url"
                    id="goal"
                    placeholder="Enter the URL for your image"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    )
}


export default CreateProject