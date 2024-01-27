import styled from 'styled-components';
import * as LabelPrimitive from '@radix-ui/react-label';
import type { LabelProps as LabelPrimitiveProps } from '@radix-ui/react-label';

const LabelRoot = styled(LabelPrimitive.Root)`
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    color: black;
`;

export interface LabelProps extends LabelPrimitiveProps {
    label: string;
}

export function Label(props: LabelProps) {
    const { label, ...others } = props;

    return <LabelRoot {...others}>{label}</LabelRoot>;
}
