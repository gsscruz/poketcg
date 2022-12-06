import { Container, Title } from './styles';

type Props = {
  mensagem: String;
};
export const Header = ({ mensagem }: Props) => {
  return (
    <Container>
      <Title>{mensagem}</Title>
    </Container>
  );
};
