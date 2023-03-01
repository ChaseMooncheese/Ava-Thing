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
            <p>{props.itemText}</p>
        </div>
    );
    
}

export default function Container(props){

    const strings = props.lists.map(list => {
        return turnIntoString(list);
    })

    const items = strings.map((item, index) => {
        return (
            <Item itemText={item} key={index}></Item>
        )
    })


    return (
        <div className='ItemContainer'>
            {items}
        </div>
    )
}