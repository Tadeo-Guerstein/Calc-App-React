import React, { FC } from 'react';
import Button, { ButtonClickHandler } from './Button/Button';

type Props = {
    onClickOperation: ButtonClickHandler,
    onClickEqual: ButtonClickHandler
}

const MathOperations: FC<Props> = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation}></Button>
        <Button text="-" clickHandler={onClickOperation}></Button>
        <Button text="*" clickHandler={onClickOperation}></Button>
        <Button text="/" clickHandler={onClickOperation}></Button>
        <Button text="=" clickHandler={onClickEqual}></Button>
    </section>
)


export default MathOperations