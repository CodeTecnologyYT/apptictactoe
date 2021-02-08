import React from 'react';
import {VerticalList} from "../../molecules/verticalList";
import {Button} from "../../atoms/button";

export const TimeLine = ({histories, onClick}) => {
    const handlerClick = (index) =>{
        onClick(index);
    }

    const moves = histories.map((item,key) =>{
        const descripcion = (key === 0) ? 'Go start': "Go to move #"+ key;
        return <Button onClick={()=>handlerClick(key)} key={key}> {descripcion} </Button>;
    });

    return(
        <VerticalList>
            {moves}
        </VerticalList>
    )
}