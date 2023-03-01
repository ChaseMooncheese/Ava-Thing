import { useState } from "react"

function turnIntoString(list){
    let str = '';
    list.forEach((item, index) => {
        let temp = (index + 1) + '. ' + item + ' ';
        str += temp;
    })
    return str;
}

function Item(props){
    return (
        <div>
            <h3>{props.itemText}</h3>
        </div>
    );
    
}

export default function Container(props){

    const strings = props.lists.map(list => {
        return turnIntoString(list);
    })

    const items = strings.map(item => {
        return (
            <Item itemText={item}></Item>
        )
    })


    return (
        <div className='ItemContainer'>
            {items}
        </div>
    )
}