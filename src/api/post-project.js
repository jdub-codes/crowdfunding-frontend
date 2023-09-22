async function postProject(title, description, goal, image, date_created) {
    const url =`${import.meta.env.VITE_API_URL}/projects/`  
    const response = await fetch (url, {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Token ${window.localStorage.getItem('token')}`
        },
        body:JSON.stringify({
            "title": title,
            "description": description,
            "goal": goal,
            "image": image,
            "is_open": true,
            "date_created": new Date(),
        }),
    });

    if (!response.ok) {
        const fallbackError =`Error trying to create a new project`

        const data = await response.json().catch(() => {
            throw new Error(fallbackError)
        });

        const errorMessage = data?.detail?? fallbackError
        throw new Error(errorMessage)
    }

    return await response.json()
}

export default postProject