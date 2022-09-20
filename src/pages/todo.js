import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../models';
import { API } from 'aws-amplify';
import { useUser } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { listTodos, getTodo } from '../graphql/queries';
import { useRouter } from 'next/router';
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from '../graphql/mutations';


export default function TodoPage() {
    const router = useRouter();
    const { user } = useUser();
    const [selected, setSelected] = useState(null);
    const [todos, setTodos] = useState([]);
    const getQuery = async () => {
        const models = await API.graphql({ query: listTodos });
        setTodos(models.data.listTodos.items);
        //const todoList = await DataStore.query(Todo);
        //const individualTodo = await DataStore.query(Todo, "9f291123-f090-4461-ac00-005fd74edb8e");
        //const individualTodo = await API.graphql({ query: getTodo, variables: { id: "9f291123-f090-4461-ac00-005fd74edb8e" } });
        //console.log(individualTodo);
    }

    /*
    const handleDelete = async () => {
        await API.graphql({ query: deleteTodoMutation, variables: { input: { id: "c38d7a55-5998-4cc7-b95e-551b2dc7f741", _version: "4" } } });
    }
    */

    const handleCreate = async () => {
        router.push('/todo/create');
    }

    useEffect(() => {
        getQuery();
    }, [])


    useEffect(() => {
        console.log(todos);
    }, [todos])

    const handleClick = (e) => {
        console.log(Object.keys(e))
    }

    const handleBack = () => {
        router.push('/');
    }

    return (
        <>
            <h1>Todo Page</h1>
            <h2>{user?.username}</h2>
            <h2>{user?.attributes.email}</h2>

            <ul>
                {todos?.map((todo, index) => (
                    <div key={index} onClick={handleClick}>
                        {todo._deleted ? <></> : <li key={todo.id} onClick={() => router.push(`/todo/${todo.id}`)}>{todo.name}</li>}
                    </div>

                ))}
            </ul>
            <p> {selected} </p>
            <button onClick={handleCreate}>Create Todo!</button>
            <button onClick={handleBack}> Go Back!</button>
        </>
    )

}
