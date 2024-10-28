import { SAMPLE_PERSONALISED_SUGGESTIONS } from "./SampleData";
import { Accordion, Title } from "@mantine/core";
import SuggestionItem from "./SuggestionItem";
import SuggestionContainer from "./SuggestionContainer";

function PersonalisedSuggestions() {
  const suggestions = SAMPLE_PERSONALISED_SUGGESTIONS.map((suggestion) => (
    <SuggestionItem key={suggestion.title} item={suggestion} />
  ));

  return (
    <SuggestionContainer>
      <>
        <Title order={3} mb="xs">
          Personalized Suggestions
        </Title>
        <Accordion variant="separated">{suggestions}</Accordion>
      </>
    </SuggestionContainer>
  );
}

export default PersonalisedSuggestions;
