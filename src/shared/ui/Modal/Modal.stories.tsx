import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal
        {...args}
    >
        {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi'
            + 'impedit incidunt necessitatibus possimus quis saepe sunt totam.\n '}
    </Modal>
);

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
};
