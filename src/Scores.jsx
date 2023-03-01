export default function Scores(props){ 

    const lists = props.lists;
    const totalPoints = {};
    const numIterationsForItem = {};
    lists.forEach(list => {
        list.forEach((item, index) => {
            item = item.toLowerCase();
            if (item in totalPoints)
            {
                totalPoints[item] += index + 1;
            }
            else
            {
                totalPoints[item] = index + 1;
            }
            
            numIterationsForItem[item] = (item in numIterationsForItem) ? numIterationsForItem[item] + 1 : 1;
            
        })
    })

    //Compute averages and make array
    let averages = {};
    let arrOfKeys = [];
    const dormNames = Object.keys(totalPoints);
    dormNames.forEach(name => {
        averages[name] = totalPoints[name] / numIterationsForItem[name];
        arrOfKeys.push(name);
    });
    arrOfKeys.sort( (a, b) => {return averages[a] - averages[b]});

    arrOfKeys.sort((a, b) => {return averages[a] - averages[b]});

    const divs = arrOfKeys.map(key => {
        const fKey = key.split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

        return (
            <h3 key={key}>{fKey + ': ' + averages[key]}</h3>
        )
    })



    return (
        <div>
            <h2>Rankings:</h2>
            {divs}

        </div>
    )
}