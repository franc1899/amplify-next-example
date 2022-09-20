import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import Image from "next/image";

export default function TodoComponent({ todo }) {
    const [todoImage, setTodoImage] = useState();
    useEffect(() => {
        async function fetchTodoImage (){
            try{
                const imageURL = await Storage.get(todo.image);
                console.log(imageURL)
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
            {todo.image && todoImage && (
                  <Image
                    src={todoImage}
                    height={540}
                    width={980}
                    alt="Todo Image"
                  />
              )}
        </div>
    )
}