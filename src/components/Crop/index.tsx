import { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

import { StyledCrop, ImagePreview, CropTitle } from './styles';

import { CloseIcon } from '../../assets/CloseIcon';
import { Flex } from '../atoms/Flex';
import { Button } from '../Button';
import { Slider } from '../Slider';

type CropProps = {
  imageFile: File;
  onSave: (imageUrl: string) => void;
  onClose: () => void;
};

export function Crop({ imageFile, onSave, onClose }: CropProps) {
  const [scale, setScale] = useState(1);
  const [editor, setEditor] = useState<AvatarEditor | null>(null);

  const handleCrop = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScale(Number(event.target.value));
  };

  const handleSave = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas();
      canvas.toBlob(blob => {
        if (blob) {
          const newImageUrl = URL.createObjectURL(blob);
          onSave(newImageUrl);
        }
      });
    }
  };

  return (
    <StyledCrop>
      <Flex align="center">
        <ImagePreview>
          <AvatarEditor
            ref={ref => setEditor(ref)}
            image={imageFile}
            scale={scale}
            width={114}
            height={114}
            borderRadius={57}
            border={0}
          />
        </ImagePreview>
        <Flex direction="column">
          <CropTitle>Crop</CropTitle>
          <Slider type="range" id="crop-slider" min="1" max="2" step="0.1" value={scale} onChange={handleCrop} />
          <Flex direction="row" width="100%" justify="flex-end">
            <Button variant="solid" onClick={handleSave}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex align="flex-start">
        <Button variant="icon" onClick={() => onClose()}>
          <CloseIcon />
        </Button>
      </Flex>
    </StyledCrop>
  );
}
