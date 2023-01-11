import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class AddEvent {
    @ApiProperty({
        required: true,
        description: 'Registered sessionId of the session where you want to add this event to.',
        example: "c9a83232-91cb-11ed-a1eb-0242ac120002",
        type: String,
    })
    sessionId: string;

    @ApiPropertyOptional({
        required: false,
        description: 'Event action. Check enum for possible options.',
        example: "Found",
        type: String,
        enum: ["Found", "Dropped", "PickedUp"]
    })
    action: "Found" | "Dropped" | "PickedUp";
   

    @ApiProperty({
        required: true,
        description: 'UserId of the user who caused this event.',
        example: "Peaches445",
        type: String,
    })
    userId: string;

    @ApiPropertyOptional({
        required: false,
        description: 'Evidence Id. If this field is filled in, it means a piece of evidence is found.',
        example: "63089f8a-91cb-11ed-a1eb-0242ac120002",
        type: String,
    })
    evidenceId?: string;

    @ApiPropertyOptional({
        required: false,
        description: 'Relevance level. Check enum for possible options.',
        example: "Low",
        type: String,
        enum: ["Low", "Medium", "High"]
    })
    relevance?: "Low" | "Medium" | "High";

    @ApiPropertyOptional({
        required: false,
        description: 'Light type. Check enum for possible options.',
        example: "FlashLightWhite",
        type: String,
        enum: ["FlashLightWhite", "FlashLightViolet_425nm", "FlashLightBlue_450nm", "FlashLightBlue/Green_485nm", "FlashLightGreen_520nm"]
    })
    light?: "FlashLightWhite" | "FlashLightViolet_425nm" | "FlashLightBlue_450nm" | "FlashLightBlue/Green_485nm" | "FlashLightGreen_520nm";


    @ApiPropertyOptional({
        required: false,
        description: 'Filter type. Check enum for possible options.',
        example: "GlassesBase",
        type: String,
        enum: ["GlassesBase", "Glasses435", "Glasses476", "Glasses529", "Glasses549"]
    })
    filter?: "GlassesBase" | "Glasses435" | "Glasses476" | "Glasses529" | "Glasses549";
}

export class Event {
    id: string
    action: number
    timeStamp: string
    userId: string
    sessionId: string
    evidenceId?: any
    light?: any
    filter?: any
}