import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

import {
  Container,
  Dropzone,
  FilePreview,
  Flex,
  Image,
  Title,
  Subtitle,
  Wrapper
} from './styles'

import { MediaIcon } from '../../assets/MediaIcon'

type AvatarUploadProps = {}

export function AvatarUpload({}: AvatarUploadProps) {
  const [file, setFile] = useState<any>([])
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'] },
      maxFiles: 1,
      onDrop: acceptedFiles => {
        setFile(
          acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        )
      }
    })

  const Preview = file.map((file: any) => (
    <Image src={file.preview} alt="Preview Image" />
  ))

  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      <Wrapper>
        <FilePreview>{Preview}</FilePreview>
        <Container>
          <Flex>
            <MediaIcon />
            <Title>Organization Logo</Title>
          </Flex>
          <Subtitle>Drop the image here or click to browse.</Subtitle>
        </Container>
      </Wrapper>
    </Dropzone>
  )
}
