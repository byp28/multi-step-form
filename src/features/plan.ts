export interface IPlan{
    name : string,
    logo : string,
    mouthPrice : number,
    yearPrice : number
}

export const currentPlan : IPlan[] =[
    {
        name : "Arcade",
        logo : "/assets/images/icon-arcade.svg",
        mouthPrice : 9,
        yearPrice : 90
    },
    {
        name : "Advanced",
        logo : "/assets/images/icon-advanced.svg",
        mouthPrice : 12,
        yearPrice : 120
    },
    {
        name : "Pro",
        logo : "/assets/images/icon-pro.svg",
        mouthPrice : 15,
        yearPrice : 150
    }
] 