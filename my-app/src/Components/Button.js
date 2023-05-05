import { ContainerButton } from "../Component.styled";

export default function Button(props) {
  const { label, onClick } = props;

  return (
    <ContainerButton onClick={onClick}>
      <h3>{label}</h3>
    </ContainerButton>
  );
}
