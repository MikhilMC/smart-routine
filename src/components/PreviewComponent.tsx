import { ActionIcon, Card, Flex, Image } from "@mantine/core";
import { FC } from "react";
import IconX from "./UI/icons/IconX";
import { Imagetype } from "../types/SuggestionType";
import { isFile } from "../utils/helpers";

interface PreviewComponentProps {
  files: (File | Imagetype)[];
  onRemove: (index: number) => void;
}

const PreviewComponent: FC<PreviewComponentProps> = ({ files, onRemove }) => {
  if (files.length === 0) return null;

  return (
    <Flex gap="xs" wrap="wrap">
      {files.map((file, index) => (
        <Card
          key={index}
          w="100px"
          h="100px"
          bd="1px solid #e0e0e0"
          radius="xs"
          style={{ overflow: "hidden" }}
          pos="relative"
          p={0}
        >
          <Image
            w="100%"
            h="100%"
            src={isFile(file) ? URL.createObjectURL(file) : file.image}
            alt={isFile(file) ? file.name : "Routine Image"}
          />

          <ActionIcon
            variant="default"
            pos="absolute"
            top="4px"
            right="4px"
            radius="50%"
            color="white"
            style={{ cursor: "pointer" }}
            onClick={() => onRemove(index)}
          >
            <IconX size="1.4rem" stroke={1.5} />
          </ActionIcon>
        </Card>
      ))}
    </Flex>
  );
};

export default PreviewComponent;
