import { StyledError, ErrorTitle } from './styles';

import { AttentionIcon } from '../../atoms/AttentionIcon';
import { CloseIcon } from '../../atoms/CloseIcon';
import { ImagePreview } from '../../molecules/ImagePreview';
import { Button } from '../../molecules/Button';
import { Flex } from '../../molecules/Flex';

type ErrorProps = {
  messageError: string;
  onClose: () => void;
};

export function Error({ messageError, onClose }: ErrorProps) {
  return (
    <StyledError>
      <Flex align="center">
        <ImagePreview>
          <AttentionIcon />
        </ImagePreview>
        <Flex direction="column" gap="0.2rem">
          <ErrorTitle>Sorry, {messageError.toLowerCase()}.</ErrorTitle>
          <Button variant="underline" onClick={() => onClose()}>
            Try again
          </Button>
        </Flex>
      </Flex>
      <Flex align="flex-start">
        <Button variant="icon" onClick={() => onClose()}>
          <CloseIcon />
        </Button>
      </Flex>
    </StyledError>
  );
}
