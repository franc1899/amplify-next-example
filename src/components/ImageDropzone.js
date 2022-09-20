import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { Image } from "next/image";

export default function ImageDropzone({ file, setFile }) {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <>
      {!file ? (
        <section
          className="container"
          style={{
            borderStyle: "dashed",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.5)",
            minHeight: 128,
          }}
        >
          <div
            {...getRootProps({ className: "dropzone" })}
            style={{ padding: 16 }}
          >
            <input {...getInputProps()} />
            <p>
              Drag and drop the image you want to upload for your post.
            </p>
          </div>
        </section>
      ) : (
        <div
        style={{
          alignItems:"center",
          justify:"center",
          direction:"column",
          spacing:1}}

        >
          <div>
            <h4>Your Image:</h4>
          </div>
          <div style={{  
              display: 'inline-flex',
              marginBottom: 8,
              marginRight: 8,
              width: 100,
              height: 100,
              padding: 4}}>
            <img
              alt="Preview"
              src={URL.createObjectURL(file)}
              style={{ width: "auto", maxHeight: 320 }}
            />
          </div>
        </div>
      )}
    </>
  );
}