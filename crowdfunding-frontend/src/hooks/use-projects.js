import { useState, useEffect } from "react"

import getProject from "../api/get-project"

export default function useProject(projectId) {
    const [project, setProject] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() =>{
        getProject(projectId)
            .then((projects) => {
                setProject(projects);
                setIsLoading(false);
            })
            .catch((error) =>{
                setError(error);
                setIsLoading(false);
            });
    
    }, [projectId]);

    return { project, isLoading, error };
}