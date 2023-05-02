import { Container } from "../Component.styled";

export default function Button(props) {
  const { label, onClick } = props;

  return (
    <Container onClick={onClick}>
      <h3>{label}</h3>
    </Container>
  );
}
