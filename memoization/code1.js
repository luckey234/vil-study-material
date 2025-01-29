const obj = [
    {   
        name: 'a',
        children: [{
            name: 'b',
            children: [{
                name: 'c',
                children: null
            }],
        },
        {
            name: 'd',
            children: null,
        }]
    },
    {
        name: 'e',
        children: null
    }
];

function flatten(objArray, parentName = '') {
    let result = [];
    debugger

    for (const item of objArray) {
        const currentName = parentName ? `${parentName}.${item.name}` : item.name;

        if (item.children && item.children.length > 0) {
            result = result.concat(flatten(item.children, currentName));
        } else {
            result.push(currentName);
        }
    }

    return result;
}

const output = flatten(obj);
console.log(output); // Output: ['a.b.c', 'a.d', 'e']







// const obj = [
//     {   
//         name: 'a',
//         children: [{
//             name: 'b',
//             children: [{
//                 name: 'c',
//                 children: null
//             }],
//         },
//         {
//             name: 'd',
//             children: null,
//         }]
//     },
//     {
//         name: 'e',
//         children: null
//     }
// ];

// function flatten(objArray, parentName = '') {
//     let result = [];

//     for (const item of objArray) {
//         const currentName = parentName ? `${parentName}.${item.name}` : item.name;

//         if (item.children && item.children.length > 0) {
//             result = result.concat(flatten(item.children, currentName));
//         } else {
//             result.push(currentName);
//         }
//     }

//     return result;
// }

// const output = flatten(obj);
// console.log(output); // Output: ['a.b.c', 'a.d', 'e']