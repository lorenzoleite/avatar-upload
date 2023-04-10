import { StyledError, FilePreview, ErrorTitle } from './styles';

import { AttentionIcon } from '../../assets/AttentionIcon';
import { CloseIcon } from '../../assets/CloseIcon';

import { Flex } from '../atoms/Flex';

import { Button } from '../Button';

type ErrorProps = {
  messageError: string;
  onClose: () => void;
};

export function Error({ messageError, onClose }: ErrorProps) {
  return (
    <StyledError>
      <Flex align="center">
        <FilePreview>
          <AttentionIcon />
        </FilePreview>
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
