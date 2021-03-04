import {ButtonProps as RsButtonProps, Button as RsButton} from 'reactstrap';
import styled, { css } from 'styled-components';

export interface ButtonProps extends RsButtonProps {
    // Props with a $ sign in front, dont get passed to the child component.
    $backgroundColor?: string;
    $backgroundColor_hover?: string;
}

const StyledButton = styled(RsButton)`
    ${({$backgroundColor}: ButtonProps) => css`background-color: ${$backgroundColor};`}
    ${({$backgroundColor_hover}: ButtonProps) => css`&:hover { background-color: ${$backgroundColor_hover}; }`}
    border-radius: 0;
`;

// Hide StyledButton, so the usage is limited to ButtonProps.
const Button = (props: ButtonProps) => <StyledButton {...props} />;

export default Button;
