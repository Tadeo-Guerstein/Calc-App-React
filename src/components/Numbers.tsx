import React, { FC } from 'react';
import Button, { ButtonClickHandler } from './Button/Button';
// DRY: Don't repeat yourself
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = (onClickNumber: ButtonClickHandler) => {
    const renderButton = (number: number) =>(
        <Button key={number} text={number.toString()} clickHandler={onClickNumber}/>
    )
    return numbers.map(renderButton)
}

type Props = {
    onClickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({onClickNumber}) => {
    return (<section className="numbers">
        {renderButtons(onClickNumber)}
    </section>)
}

export default Numbers