export interface IAddOn{
    name : string,
    text : string,
    mouthPrice : number,
    yearPrice : number
}

export const currentAddon : IAddOn[] =[
    {
        name : "Online service",
        text : "Access to multiplayer games",
        mouthPrice : 1,
        yearPrice : 10
    },
     {
        name : "Larger storage",
        text : "Extra 1TB of cloud save",
        mouthPrice : 2,
        yearPrice : 10
    },
    {
        name : "Customizable profile",
        text : "Custom theme on your profile",
        mouthPrice : 2,
        yearPrice : 20
    },
] 