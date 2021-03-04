import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './index';

export default {
    title: 'Interaction/Button',
    component: Button,
    argTypes: {
        $backgroundColor: {
            control: 'color',
            required: false,
        },
        $backgroundColor_hover: {
            control: 'color',
            required: false,
        },
    },
    args: {
        children: 'Button',
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
    outline: true,
};

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
};
