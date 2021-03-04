import React from 'react';
import {Story, Meta} from '@storybook/react';
import {AngularSkeletonProps, AngularSkeleton} from './index';

export default {
    title: 'Placeholder/AngularSkeleton',
    component: AngularSkeleton,
    argTypes: {
        size: {
            control: 'number',
            defaultValue: 1,
        },
        borderRadius: {
            control: 'text',
            required: false,
        },
        backgroundColor: {
            control: 'color',
            required: false,
            defaultValue: '#333',
        },
        childColor: {
            control: 'color',
            required: false,
            defaultValue: '#888',
        },
    },
} as Meta;

const Template: Story<AngularSkeletonProps> = (args) => <AngularSkeleton {...args} />;

export const Default = Template.bind({});

export const Rounded = Template.bind({});
Rounded.args = {
    borderRadius: '5px',
};

export const Large = Template.bind({});
Large.args = {
    size: 4,
};

export const Colored = Template.bind({});
Colored.args = {
    backgroundColor: 'red',
};
