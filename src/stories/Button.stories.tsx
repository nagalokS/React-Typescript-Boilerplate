import { action } from '@storybook/addon-actions';
import Button, { ButtonType } from '../components/Button/Button';
import { Story, Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    // variant: {
    //   options: ['primary', 'secondary'],
    //   control: { type: 'select' },
    // },
    children: {
      defaultValue: 'Primary Button',
    },
    onClick: { action: 'clicked' },
    // onClick: action('clicked'),
  },
};
export default meta;

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', children: 'Secondary' };

// export const Primary: ComponentStory<typeof Button> = () => (
// <Button variant="primary" onClick={action('clicked')}>
//   Primary Button
// </Button>
// );
// export const Secondary: ComponentStory<typeof Button> = () => (
//   <Button variant="secondary" onClick={action('clicked')}>
//     Secondary Button
//   </Button>
// );
