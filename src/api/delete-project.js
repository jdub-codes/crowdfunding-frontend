async function deleteProject(projectId) {
    const url =`${import.meta.env.VITE_API_URL}/projects/${projectId}`

    const response = await fetch(url,{method:"DELETE",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Token ${window.localStorage.getItem('token')}`
        },
    });

    if (!response.ok) {
        const fallbackError =`Error deleting project with id ${projectId}`

        const data = await response.json().catch(() => {
            throw new Error(fallbackError)
        });

        const errorMessage = data?.detail?? fallbackError        
        throw new Error(errorMessage)
    }
        return await response.json()
}

export default deleteProject