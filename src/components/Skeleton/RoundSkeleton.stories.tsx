import React from 'react';
import {Story, Meta} from '@storybook/react';
import {RoundSkeletonProps, RoundSkeleton} from './index';

export default {
    title: 'Placeholder/RoundSkeleton',
    component: RoundSkeleton,
    argTypes: {
        size: {
            control: 'text',
            defaultValue: '5em',
        },
        backgroundColor: {
            control: 'color',
            required: false,
            defaultValue: '#333',
        },
    },
} as Meta;

const Template: Story<RoundSkeletonProps> = (args) => <RoundSkeleton {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
    size: '150px',
};

export const Small = Template.bind({});
Small.args = {
    size: '1em',
};

export const Colored = Template.bind({});
Colored.args = {
    backgroundColor: 'red',
};
