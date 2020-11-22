import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Button = styled.div`
    outline: none;
    border: 0;
    padding: 4px 8px;
    font-size: 24px;

    cursor: pointer;

    background: #828282;

    border-radius: 4px;


`;

const lifts = [
    'Squat',
    'Bench',
    'Deadlift',
    'OHP'
]

function SelectView() {


    return (
        <Container>

            {lifts.map((lift, i) => {
                return (
                    <Button
                        key={i}
                    >
                        {lift}
                    </Button>
                )
            })}
        </Container>
    );
}

export default SelectView;
