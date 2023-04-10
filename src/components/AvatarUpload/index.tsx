import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Dropzone, DropzoneTitle, DropzoneSubtitle, Image, ImagePreview } from './styles';

import { Flex } from '../atoms/Flex';

import { Error } from '../Error';
import { Crop } from '../Crop';

import { MediaIcon } from '../../assets/MediaIcon';

type AvatarUploadProps = {};

export function AvatarUpload({}: AvatarUploadProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'] },
    maxFiles: 1,
    onDropAccepted: file => {
      setImageFile(file[0]);
    },
    onDropRejected: file => {
      setHasError(true);
      setMessageError(file[0].errors[0].message);
    },
  });

  const handleClose = () => {
    setImageFile(null);
    setCroppedImage(null);
    setHasError(false);
    setMessageError(null);
  };

  const handleSave = (imageUrl: string) => {
    setImageFile(null);
    setCroppedImage(imageUrl);
  };

  return (
    <Flex>
      {!imageFile && !hasError && (
        <Dropzone {...getRootProps()} justify={croppedImage ? 'flex-start' : 'center'}>
          <input {...getInputProps()} />
          <Flex align="center">
            {croppedImage && (
              <ImagePreview>
                <Image src={croppedImage} />
              </ImagePreview>
            )}
            <Flex direction="column" align="center">
              <Flex align="center" gap="1.2rem">
                <MediaIcon />
                <DropzoneTitle>Organization Logo</DropzoneTitle>
              </Flex>
              <DropzoneSubtitle>Drop the image here or click to browse.</DropzoneSubtitle>
            </Flex>
          </Flex>
        </Dropzone>
      )}
      {hasError && messageError && <Error messageError={messageError} onClose={handleClose} />}
      {imageFile && <Crop imageFile={imageFile} onSave={handleSave} onClose={handleClose} />}
    </Flex>
  );
}
