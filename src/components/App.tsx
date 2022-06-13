import { EmbedHTMLAttributes, FC } from 'react';
import Container from './Container/Container';
import '../scss/style.scss';
import '../styles/style.css';
import Style from './Border.module.scss';
import TestOrder from './TestOrder';

type BorderElementProps = EmbedHTMLAttributes<HTMLEmbedElement>;
const BorderElement: FC<BorderElementProps> = ({ className, children, ...rest }) => (
  <em className={`${className} ${Style.borderEl}`} {...rest}>
    {children}
  </em>
);

const App: FC = () => {
  return (
    <div>
      <h1>react render</h1>
      <Container>without as</Container>
      <Container as={BorderElement} letterSpacing={12}>
        as ellement
      </Container>
      <TestOrder age={22} name="TRex" />
    </div>
  );
};
export default App;
