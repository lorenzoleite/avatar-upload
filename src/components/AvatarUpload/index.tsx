import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Dropzone, FilePreview, Image, DropzoneTitle, DropzoneSubtitle } from './styles';

import { Flex } from '../atoms/Flex';

import { Error } from '../Error';
import { Crop } from '../Crop';

import { MediaIcon } from '../../assets/MediaIcon';

type AvatarUploadProps = {};

type FileImage = File & {
  preview?: string;
};

export function AvatarUpload({}: AvatarUploadProps) {
  const [file, setFile] = useState<FileImage | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [sucess, setSucess] = useState<boolean>(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'] },
    maxFiles: 1,
    onDrop: file => {
      try {
        setFile(
          Object.assign(file[0], {
            preview: URL.createObjectURL(file[0]),
          }),
        );
      } catch (err) {
        setHasError(true);
      }
    },
    disabled: !!file,
  });

  const Preview = <Image src={file?.preview} alt="Preview Image" />;

  const handleResetFile = () => {
    setFile(null);
    setHasError(false);
  };

  const onSaveFile = () => {
    setSucess(true);
  };

  return (
    <Flex>
      {!file && !hasError && (
        <Dropzone {...getRootProps()}>
          <input {...getInputProps()} />
          <Flex align="center">
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
      {hasError && <Error handleResetFile={handleResetFile} />}
      {file && <Crop preview={Preview} handleResetFile={handleResetFile} onSaveFile={onSaveFile} />}
    </Flex>
  );
}
