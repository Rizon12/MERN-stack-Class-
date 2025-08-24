let x=100;
const sum=(a,b)=>{
    return a+b;
}

const list=[
    {
        name:'Apple',
        price:200,
        id:1
    },
      {
        name:'Samsung',
        price:100,
        id:2
    },
      {
        name:'Redmi',
        price:300,
        id:3
    },
      {
        name:'Oppo',
        price:240,
        id:4
    },
];
const user={
    name:'Ram',
    Address:'KTM',
};

export{x,list,sum,user};// This we will use when we want to export multiple functions or variables at the same line.
//like if we dont do this then we need to write export before each functions or variables. 
//For Ex:
// export let x=100;
// export const sum=(a,b)=>{
//     return a+b;