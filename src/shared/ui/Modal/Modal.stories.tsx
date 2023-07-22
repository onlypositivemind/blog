import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal {...args}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos dolor
            eos quam sunt. Debitis dolorem dolorum error excepturi explicabo, facilis id maiores
            nemo perferendis quos soluta ut. Autem doloribus eligendi excepturi perspiciatis
            similique. Alias dolorem eum in magni maxime minima nam nisi voluptatem. Itaque quia
            quisquam quod ut?
        </p>
    </Modal>
);

export const AllOptions = Template.bind({});
