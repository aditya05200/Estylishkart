export const color = [
    "White",
    "Black",
    "Red",
    "marun",
    "beige",
    "pink",
    "green",
    "yellow",
];

export const filters = [
    {
        id: 'color',
        name: "Color",
        options: [
            {value: "White", label: "White"},
            {value: "Black", label: "Black"},
            {value: "Grey", label: "Grey"},
            {value: "Burgundy", label: "Burgundy"},   
        ]
    },
    {
        id: "size",
        name: 'Size',
        options: [
            {value: "38", label: "38"},
            {value: "40", label: "40"},
            {value: "42", label: "42"},
        ]
    }
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            {value: "159-399", label: "159 to 399"},
            {value: "399-999", label: "399 to 999"},
            {value: "999-1999", label: "999 to 1999"},
            {value: "1999-2999", label: "1999 to 2999"},
            {value: "3999-4999", label: "3999 to 4999"},
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {value: "10", label: "10% And Above"},
            {value: "19", label: "20% And Above"},
            {value: "29", label: "30% And Above"},
            {value: "39", label: "40% And Above"},
            {value: "49", label: "50% And Above"},
            {value: "59", label: "60% And Above"},
            {value: "79", label: "80% And Above"},
            {value: "89", label: "90% And Above"},
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options:[
            {value:"in_stock", label:"In Stock"},
            {value:"out_of_stock", label:"Out of Stock"},
        ]
    }
]