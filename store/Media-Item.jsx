import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import axios from 'axios';

export const MediaContext = createContext({
    post: [],                    //Context Structure 
    deletePost: () => { },
    getDataPost: () => { }
})

const MediaContextProvider = ({ children }) => {
    const [post, setPost] = useState([])
    const [fetching, setFetching] = useState(false)


    // Data recieve from craete form
    const getDataPost = (val) => {
        const newPost = { id: Date.now(), ...val }
        setPost([newPost, ...post])
    }


    // Delete post Functionility based on id 
    const deletePost = useCallback((id) => {
        if (id !== undefined) {
            if (confirm('Are you sure want to delete this post?')) {
                const deletePostItem = post.filter(e => e.id !== id)
                setPost(deletePostItem)
            }
        }

    }, [post])


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal
        //Fetch all post from API

        setFetching(true)
        axios.get('https://dummyjson.com/posts', { signal })
            .then((response) => {
                setPost(response.data.posts);
                setFetching(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        return () => {
            // cancel the request before component unmounts
            controller.abort();
        }

    }, [])

    // Custom hooks
    const useMedia = () => {
        return useContext(MediaContext)
    }


    return <MediaContext.Provider value={{ post, setPost, fetching, getDataPost, deletePost, useMedia }}>
        {children}
    </MediaContext.Provider>
}
export default MediaContextProvider
// export { useMedia }