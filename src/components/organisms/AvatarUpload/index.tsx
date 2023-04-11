import { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Dropzone, DropzoneTitle, DropzoneSubtitle, Image } from './styles';

import { theme } from '../../../themes/theme';

import { MediaIcon } from '../../atoms/MediaIcon';
import { ImagePreview } from '../../molecules/ImagePreview';
import { Flex } from '../../molecules/Flex';
import { Error } from '../Error';
import { Crop } from '../Crop';

type AvatarUploadProps = {};

const acceptStyle = {
  borderColor: theme.color['blue.200'],
};

const rejectStyle = {
  borderColor: theme.color['orange.100'],
};

export function AvatarUpload({}: AvatarUploadProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
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

  const style = useMemo(
    () => ({
      ...(isDragAccept && acceptStyle),
      ...(isDragReject && rejectStyle),
    }),
    [isDragAccept, isDragReject],
  );

  return (
    <Flex>
      {!imageFile && !hasError && (
        <Dropzone {...getRootProps({ style })} justify={croppedImage ? 'flex-start' : 'center'} role="dropzone">
          <input {...getInputProps()} data-testid="inputDropzone" />
          <Flex align="center">
            {croppedImage && (
              <ImagePreview marginRight="5rem">
                <Image src={croppedImage} alt="Image Preview" data-testid="imagePreview" />
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
