import { ImgHTMLAttributes, useState } from 'react';

import { StyledCrop, FilePreview, CropTitle } from './styles';

import { AttentionIcon } from '../../assets/AttentionIcon';
import { CloseIcon } from '../../assets/CloseIcon';

import { Flex } from '../atoms/Flex';

import { Button } from '../Button';
import { Slider } from '../Slider';

type CropProps = {
  preview: React.ReactNode;
  handleResetFile: () => void;
  onSaveFile: () => void;
};

export function Crop({ preview, handleResetFile, onSaveFile }: CropProps) {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  return (
    <StyledCrop>
      <Flex align="center">
        <FilePreview>{preview}</FilePreview>
        <Flex direction="column">
          <CropTitle>Crop</CropTitle>
          <Slider
            type="range"
            id="crop-slider"
            min="0"
            max="100"
            step="1"
            value={value}
            onChange={handleSliderChange}
          />
          <Flex direction="row" width="100%" justify="flex-end">
            <Button variant="solid" onClick={() => onSaveFile()}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex align="flex-start">
        <Button variant="icon" onClick={() => handleResetFile()}>
          <CloseIcon />
        </Button>
      </Flex>
    </StyledCrop>
  );
}
