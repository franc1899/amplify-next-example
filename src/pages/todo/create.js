import DropzoneComponent from "../../components/ImageDropZone";
import { useForm } from "react-hook-form";
import { Todo } from '../../models';
import { DataStore } from "aws-amplify";
import { useState } from 'react';
import { API, Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { createTodo } from "../../graphql/mutations";
import { useUser } from "../../context/AuthContext";
import { useRouter } from "next/router";

export default function CreateTodo() {
    const {user} = useUser();
    const router = useRouter();
    const [file, setFile] = useState();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        if (file) {
            try {
                const imagePath = uuidv4();
        
                await Storage.put(imagePath, file, {
                  contentType: file.type, // contentType is optional
                });
        
                const createNewTodoInput = {
                  name: data.name,
                  description: data.description,
                  nuevo: data.nuevo,
                  image: imagePath,
                };
    
                const createNewTodo = (await API.graphql({
                  query: createTodo,
                  variables: { input: createNewTodoInput },
                  authMode: "AMAZON_COGNITO_USER_POOLS",
                }));
                router.push(`/todo/${createNewTodo.data.createTodo.id}`);
              
                /*
               const createNewTodo = await DataStore.save(
                new Todo({
                  name: data.name,
                  description: data.description,
                  nuevo: data.nuevo,
                  image: imagePath,
                })
                );
                router.push(`/todo/${createNewTodo.id}`);
                */
              } catch (error) {
                console.error("Error uploading file: ", error);
              }
        }
    }

    return (
        <div>
            <h1>Create ToDo</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <label>Name:</label>
                    <input {...register("name")} />
                    <label>Description:</label>
                    <input {...register("description")} />
                    <label>Nuevo</label>
                    <input {...register("nuevo")} />
                    <label>Image:</label>
                    <DropzoneComponent file={file} setFile={setFile} />
                    <button type="submit">Create Todo</button>
                </form>
            </div>
        </div>
    );
}