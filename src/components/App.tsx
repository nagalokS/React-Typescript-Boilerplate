import { EmbedHTMLAttributes, FC, VFC } from 'react';
import Container from './Container/Container';
import '../scss/style.scss';
import '../styles/style.css';
import Style from './Border.module.scss';

type BorderElementProps = EmbedHTMLAttributes<HTMLEmbedElement>;
const BorderElement: FC<BorderElementProps> = ({ className, children, ...rest }) => (
  <em className={`${className} ${Style.borderEl}`} {...rest}>
    {children}
  </em>
);

const App: VFC = () => {
  return (
    <div>
      <h1>react render</h1>
      <Container>without as</Container>
      <Container as={BorderElement} letterSpacing={12}>
        as ellement
      </Container>
    </div>
  );
};
export default App;
