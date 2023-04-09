import { StyledError, FilePreview, ErrorTitle } from './styles';

import { AttentionIcon } from '../../assets/AttentionIcon';
import { CloseIcon } from '../../assets/CloseIcon';

import { Flex } from '../atoms/Flex';

import { Button } from '../Button';

type ErrorProps = {
  handleResetFile: () => void;
};

export function Error({ handleResetFile }: ErrorProps) {
  return (
    <StyledError>
      <Flex align="center">
        <FilePreview>
          <AttentionIcon />
        </FilePreview>
        <Flex direction="column" gap="0.2rem">
          <ErrorTitle>Sorry, the upload failed.</ErrorTitle>
          <Button variant="underline" onClick={() => handleResetFile()}>
            Try again
          </Button>
        </Flex>
      </Flex>
      <Flex align="flex-start">
        <Button variant="icon" onClick={() => handleResetFile()}>
          <CloseIcon />
        </Button>
      </Flex>
    </StyledError>
  );
}
