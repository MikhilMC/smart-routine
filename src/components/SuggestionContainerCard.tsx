import { Card, Title } from "@mantine/core";
import { ReactElement } from "react";

type SuggestionContainerCardProps = {
  children: ReactElement;
  title: string;
};

function SuggestionContainerCard({
  children,
  title,
}: SuggestionContainerCardProps) {
  return (
    <Card shadow="xs" withBorder p="sm" h={430} mih={430} w={314} radius="md">
      <Card.Section p="xs">
        <Title order={4} ta="center">
          {title}
        </Title>
      </Card.Section>
      <Card.Section p="sm">{children}</Card.Section>
    </Card>
  );
}

export default SuggestionContainerCard;
