import React, {PropsWithChildren} from 'react';
import styled, {css, StyledComponent} from 'styled-components';

export interface SkeletonProps extends PropsWithChildren<{}> {
    size?: number;
    borderRadius?: string;
    backgroundColor?: string;
}

const StyledSkeleton: StyledComponent<'div', any, SkeletonProps> = styled.div.attrs((props: SkeletonProps) => ({
    onClick: console.log,
}))`
    width: 100%;
    background-color: ${({backgroundColor}: SkeletonProps) => backgroundColor || '#333'};
    min-height: ${({size}: SkeletonProps) => `${size || 1}em`};
    ${({borderRadius}: SkeletonProps) => css`border-radius: ${borderRadius};`}
    ${({children}) => children ? css`
            padding: .5em;
            > ${StyledSkeleton}:not(:first-child) {
                margin-top: .5em;
            }
        ` : undefined}
`;

const Skeleton = (props: SkeletonProps) => <StyledSkeleton {...props} />

export default Skeleton;
