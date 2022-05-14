import { EmbedHTMLAttributes, FC } from 'react';
import Container from './Container/Container';
import '../scss/style.scss';
import '../styles/style.css';
import Style from './Border.module.scss';
import img33 from '../img/2A19YJO1NXo.jpg';

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
      <img src={img33} alt="usefull info reaaly" />
      <img src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="usefull info reaaly" />
    </div>
  );
};
export default App;
