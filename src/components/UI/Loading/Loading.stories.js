import Loading from "./Loading";

export default {
  title: 'UI/Loading',
  component: 'Loading',

}

const Template = (args) => <Loading {...args} />;

const props = {
  theme: "black",
  isShadow: false,
  classes: '',
}

export const Black = Template.bind({});

Black.args = {
  ...props,
  theme: 'black',
};

export const Blue = Template.bind({});

Blue.args = {
  ...props,
  theme: 'Blue',
};

export const White = Template.bind({});

White.args = {
  ...props,
  theme: 'white',
  isShadow: true,
};