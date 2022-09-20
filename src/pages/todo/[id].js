import React, { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Todo } from '../../models';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import { API, withSSRContext } from 'aws-amplify';
import { listTodos, getTodo } from '../../graphql/queries';
import { useRouter } from 'next/router';
import { Storage } from "aws-amplify";


export default function IndividualTodo({todo}) {
    const router = useRouter();
    const [todoImage, setTodoImage] = useState();

    useEffect(() => {
        async function fetchTodoImage() {
            try{
                const imageURL = await Storage.get(todo.image);
                setTodoImage(imageURL);
            } catch (error){
                console.log(
                    "Error getting image for todo"
                );
            }
        }
        fetchTodoImage();
    }, []);
    return (
        <div>
            <p>{todo.name}</p>
            <p>{todo.description}</p>
            <p>{todo.nuevo}</p>
            <img src={todoImage} style={{ width: "auto", maxHeight: 320 }} />
            <button onClick={() => router.push('/')}>Go home!</button>
        </div>
    );
}


// This function gets called at build time
export async function getStaticPaths() {
    //Get the paths we want to pre-render based on todos with graphql
    const SSR = withSSRContext();
    // Call an external API endpoint to get todos
    const response = await SSR.API.graphql({ query: listTodos });
  
    // Get the paths we want to pre-render based on todos
    const paths = response.data.listTodos.items.map((todo) => ({
      params: { id: todo.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // { fallback: false } means other routes should 404.
    return { paths, fallback: "blocking" }


    /*
    // Get the paths we want to pre-render based on todos with DataStore
    const SSR = withSSRContext();
    const response = await SSR.DataStore.query(Todo);
    const paths = response.map((todo) => ({
        params: { id: todo.id },
    }))
    return { paths, fallback: "blocking" }
    */
  };

  // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the todo `id`.
    // If the route is like /todos/1, then params.id is 1

    //Get props with graphql query
    const SSR = withSSRContext();
    const todoQuery = await SSR.API.graphql({ query: getTodo, variables: { id: params.id } });
    // Pass post data to the page via props
    return {
        props: {
            todo: todoQuery.data.getTodo
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 1, // In seconds
    }
    
    /*
    // Get props from DataStore query
    const SSR = withSSRContext();
    const todoQuery = await SSR.DataStore.query(Todo, params.id);
    return {
        props: {
            todo: serializeModel(todoQuery)
        },
        revalidate: 1, // In seconds
    }
    */
  }