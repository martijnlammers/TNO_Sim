export interface Session {
    id: string
    description: string
    startTime: string
    stopTime: any
    sceneId: string
    participants: Participant[]
    scene: Scene
    events: any[]
  }
  
  export interface Participant {
    userId: string
  }
  
  export interface Scene {
    id: string
    name: string
    description: string
    mapImage: string
    scaleX: number
    scaleY: number
    evidences: Evidence[]
  }
  
  export interface Evidence {
    id: string
    x: number
    y: number
    z: number
    type: number
  }
  