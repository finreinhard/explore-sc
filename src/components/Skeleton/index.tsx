import React, {PropsWithChildren} from 'react';
import styled, {css} from 'styled-components';

interface BaseSkeletonProps {
    backgroundColor?: string;
}

interface AngularSkeletonStyleProps extends BaseSkeletonProps {
    borderRadius?: string;
    isChildren?: boolean;
}

export interface AngularSkeletonProps extends AngularSkeletonStyleProps {
    size: number;
    childColor?: string;
}

export interface RoundSkeletonProps extends BaseSkeletonProps {
    size: string;
}

const BaseSkeleton = styled.div.attrs(() => ({
    // Add a event handler on all skeleton divs directly
    onClick: console.log,
}))`background-color: ${({backgroundColor}: BaseSkeletonProps) => backgroundColor || '#333'};`;

const StyledAngularSkeleton = styled(BaseSkeleton)`
    min-height: 1em;
    display: flex;
    flex-direction: column;
    ${({borderRadius}: AngularSkeletonStyleProps) => css`border-radius: ${borderRadius};`}
    ${({isChildren}: AngularSkeletonStyleProps) => isChildren ? css`margin: .5em` : undefined}
`;

export const AngularSkeleton = (props: PropsWithChildren<AngularSkeletonProps>) => {
    const {size, childColor, ...styleProps} = props;

    return (
        <StyledAngularSkeleton {...styleProps}>
            {Array.from(Array(Math.max(0, size)))
                .map((e, i) => (
                <StyledAngularSkeleton
                    key={i}
                    {...styleProps}
                    backgroundColor={childColor || '#888'}
                    isChildren
                />
            ))}
        </StyledAngularSkeleton>
    );
}

const StyledRoundSkeleton = styled(BaseSkeleton)`
    width: ${({size}: RoundSkeletonProps) => size};
    height: ${({size}: RoundSkeletonProps) => size};
    border-radius: 50%;
`;

export const RoundSkeleton = (props: RoundSkeletonProps) => <StyledRoundSkeleton {...props} />;
