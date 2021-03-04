import React from 'react';
import {Story, Meta} from '@storybook/react';
import Skeleton, {SkeletonProps} from './index';

export default {
    title: 'Placeholder/Skeleton',
    component: Skeleton,
    argTypes: {
        size: {
            control: 'number',
            defaultValue: '1',
            required: false,
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
    },
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

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

export const Nested = Template.bind({});
Nested.args = {
    children: (
        <>
            <Skeleton backgroundColor="#333" />
            <Skeleton backgroundColor="#333" />
            <Skeleton backgroundColor="#333" />
        </>
    ),
    backgroundColor: '#111',
};
