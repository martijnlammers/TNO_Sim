export enum Evidence {
    gunPowder,
    sperm, 
    saliva, 
    blood,
    fibers,
    fingerPrints,
    fingerPrintsDeveloped
}

export enum Role {
    Trainee,
    Supervisor,
}

export enum Light {
    FlashLightWhite,
    FlashLightViolet_425nm,
    FlashLightBlue_450nm,
    "FlashLightBlue/Green_485nm",
    FlashLightGreen_520nm
}

export enum Action {
    Found,
    Dropped,
    PickedUp,
}

export enum Filter { 
    GlassesBase,
    Glasses435,
    Glasses476,
    Glasses529,
    Glasses549 
}

export enum Relevance {
    Low,
    Medium,
    High
}