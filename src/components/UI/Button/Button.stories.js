import Button from "./Button";

export default {
  title: 'UI/Button',
  component: 'Button',

}

const Template = (args) => <Button {...args} />;

const props = {
  text: 'Hello',
  onClick: () => console.log('Hello? click'),
  disabled: false,
  theme: 'button__dark',
  classes: '',
}

export const BottonDark = Template.bind({});

BottonDark.args = {
  ...props,
  theme: 'button__dark',
};

export const BottonLight = Template.bind({});

BottonLight.args = {
  ...props,
  theme: 'button__light',
};

export const BottonDisabled = Template.bind({});

BottonDisabled.args = {
  ...props,
  disabled: true,
};