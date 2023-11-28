import styled from 'styled-components';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { violet, blackA } from '@radix-ui/colors';

const CheckboxRoot = styled(CheckboxPrimitive.Root)`
    button {
        all: unset;
    }

    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px ${blackA.blackA7};
    :hover {
        background-color: ${violet.violet3};
    }
    :focus {
        box-shadow: 0 0 0 2px black;
    }
`;

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
    color: ${violet.violet11};
`;

const Label = styled.label`
    color: white;
    padding-left: 15px;
    font-size: 15px;
    line-height: 1;
`;

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
    label: string;
}

export function Checkbox(props: CheckboxProps) {
    const { label } = props;

    return (
        <form>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <CheckboxRoot
                    defaultChecked
                    id='checkbox-1'>
                    <CheckboxIndicator>
                        <CheckIcon />
                    </CheckboxIndicator>
                </CheckboxRoot>
                <Label htmlFor='checkbox-1'>{label}</Label>
            </div>
        </form>
    );
}
