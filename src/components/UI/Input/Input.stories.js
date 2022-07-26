import { useState } from "react";
import Input from "./Input";

export default {
  title: 'UI/Input',
  component: 'Input',

}

const Template = (args) => {
  const [value, setValue] = useState('');

  const habdleInputChange = value => {
    setValue(value);
  }
  return (
    <Input
      {...args}
      value={value}
      habdleInputChange={habdleInputChange}
    />
  )
}

const props = {
  value: '',
  habdleInputChange: () => console.log('input change'),
  placeholder: "placeholder",
  classes: '',
}

export const Default = Template.bind({});

Default.args = {
  ...props,
};

