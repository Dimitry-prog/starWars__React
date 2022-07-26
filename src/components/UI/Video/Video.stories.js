import Video from "./Video";
import video from './video/video.mp4'

export default {
  title: 'UI/Video',
  component: 'Video',

}

const Template = (args) => <Video {...args} />;

const props = {
  src: video,
  playbackRate: 1.0,
  classes: '',
}

export const Default = Template.bind({});

Default.args = {
  ...props,
}