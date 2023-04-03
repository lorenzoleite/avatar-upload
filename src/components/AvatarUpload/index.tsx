import React from 'react'
import { useDropzone, DropzoneOptions, DropzoneState } from 'react-dropzone'

import { Dropzone, Title, Subtitle } from './styles'

export function AvatarUpload() {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpeg, .jpg'] },
      maxFiles: 1
    })
  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      <Title>Organization Logo</Title>
      <Subtitle>Drop the image here or click to browse.</Subtitle>
    </Dropzone>
  )
}
