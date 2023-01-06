export enum Evidence {
    Gunpowder = 0,
    Sperm = 1, 
    Saliva = 2, 
    Blood = 3,
    Fibers = 4,
    Fingerprints = 5,
}

export enum Role {
    Trainee = 0,
    Supervisor = 1
}

export enum Light {
    FlashLightWhite = 0,
    FlashLightViolet_425nm = 1,
    FlashLightBlue_450nm = 2,
    "FlashLightBlue/Green_485nm" = 3,
    FlashLightGreen_520nm = 4,
}

export enum Action {
    Found = 0,
    Dropped = 1,
    PickedUp = 2
}

export enum Filter { 
    GlassesBase = 0,
    Glasses435 = 1,
    Glasses476 = 2,
    Glasses529 = 3,
    Glasses549 = 4
}

export enum Relevance {
    Low = 0,
    Medium = 1,
    High = 2
}