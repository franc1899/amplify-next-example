//import { DataStore } from '@aws-amplify/datastore';
//import { Todo } from '../models';
import { API } from 'aws-amplify';
import { useUser } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { listTodos } from '../graphql/queries';


export default function TodoPage(){
    const { user } = useUser();
    const [todos, setTodos] = useState([]);
    const getTodo = async () => {
        const models = await API.graphql({ query: listTodos });
        setTodos(models.data.listTodos.items);
        //const models = await DataStore.query(Todo);
        //setTodos(models);
    } 

    useEffect(() => {
        getTodo();
    }, [])

    useEffect(() => {
        console.log(todos);
    }, [todos])


    console.log(user);
    return(
        <>
            <h1>Todo Page</h1>
            <h2>{user?.username}</h2>
            <h2>{user?.attributes.email}</h2>

            <ul>
                {todos?.map((todo, index) => (
                    <div key={index}>
                        <li>{todo.name}</li>
                    </div>

                ))}
            </ul>
        </>
    )

}
