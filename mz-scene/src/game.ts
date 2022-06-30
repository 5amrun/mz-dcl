// import * as utils from '@dcl/ecs-scene-utils'


/// Ground
const mainEntity = new Entity()
mainEntity.addComponent(new GLTFShape('models/mz_scene.glb'))
mainEntity.addComponent(
  new Transform({
    scale: new Vector3(0.46, 0.5, 0.5),
    position: new Vector3(7.2, 0, 8)
  })
)

// mainEntity.addComponent(new utils.ScaleTransformComponent(
//   new Vector3(1,1,1), 
//   new Vector3(5, 5, 5), 
//   10
// ))


engine.addEntity(mainEntity)




const discordEntity = new Entity()
discordEntity.addComponent(new GLTFShape('models/discord.glb'))
discordEntity.addComponent(
  new Transform({
    scale: new Vector3(0.46, 0.5, 0.5),
    position: new Vector3(7.2, 0, 8)
  })
)

discordEntity.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://discord.gg/xFcumxAk")
  })
)

engine.addEntity(discordEntity)




const twitterEntity = new Entity()
twitterEntity.addComponent(new GLTFShape('models/twitter.glb'))
twitterEntity.addComponent(
  new Transform({
    scale: new Vector3(0.46, 0.5, 0.5),
    position: new Vector3(7.2, 0, 8)
  })
)

twitterEntity.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://twitter.com/MetaZand")
  })
)


engine.addEntity(twitterEntity)





const diskEntity = new Entity()
diskEntity.addComponent(new GLTFShape('models/disk.glb'))
diskEntity.addComponent(
  new Transform({
    scale: new Vector3(0.46, 0.5, 0.5),
    position: new Vector3(7.2, 0, 8)
  })
)

diskEntity.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://metazand.com")
  })
)

engine.addEntity(diskEntity)


// import { getUserData } from "@decentraland/Identity"

// executeTask(async () => {
//   let data = await getUserData()
//   log('hey')
//   log(data)
// })






// NFT picture frame
const entity = new Entity()
const shapeComponent = new NFTShape(
  'ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/105684473173060692136972143849472457656009882529654129981582167566578278737680',
  { color: Color3.Gray(), style: PictureFrameStyle.Metal_Rounded }
)
entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
    position: new Vector3(7, 2, 12.5),
    scale: new Vector3(3, 3, 1),
  })
)

entity.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/105684473173060692136972143849472457656009882529654129981582167566578278737680")
  })
)

engine.addEntity(entity)

// // fixed wall
// const wall1 = new Entity()
// wall1.addComponent(
//   new Transform({
//     position: new Vector3(4, 3, 4),
//     scale: new Vector3(1, 1, 1),
//   })
// )
// wall1.addComponent(new BoxShape())
// engine.addEntity(wall1)







// import { SmokeSource, ThrowSmoke } from './modules/smokeSource'
// import { SmokeSystem } from './modules/smoke'



// // add fireplace
// const fire = new Entity()
// fire.addComponent(new GLTFShape('models/Fireplace.glb'))
// fire.addComponent(
//   new Transform({
//     position: new Vector3(8, 0, 8)
//   })
// )

// // Add a smoke source that creates a smoke puff every 0.2 seconds
// fire.addComponent(new SmokeSource(0.2))
// engine.addEntity(fire)



// // Initiate systems
// engine.addSystem(new ThrowSmoke())
// engine.addSystem(new SmokeSystem())












// // Reference scale values
// const deflatedScale = new Vector3(0.05, 0.05, 0.065)
// const inflatedScale = new Vector3(0.11, 0.11, 0.075)

// // Create fish
// const puffer = new Entity()
// puffer.addComponent(new GLTFShape('models/puffer.gltf'))
// puffer.addComponent(
//   new Transform({
//     position: new Vector3(8, 1, 8),
//     scale: deflatedScale
//   })
// )
// engine.addEntity(puffer)

// // sound when deflating
// const deflatedSound = new AudioClip('sounds/deflate.wav')
// puffer.addComponent(new AudioSource(deflatedSound))





// // Reaction when clicked
// puffer.addComponent(
//   new OnPointerDown(
//     (e) => {
//       inflateFish()
//     },
//     { button: ActionButton.POINTER, hoverText: 'Puff up!' }
//   )
// )

// // trigger when player walks near fish
// puffer.addComponent(
//   new utils.TriggerComponent(new utils.TriggerSphereShape(2), {
//     onCameraEnter: () => {
//       inflateFish()
//     }
//   })
// )

// // Flag to avoid re-triggering
// let isInflating = false

// /// Reusable function to inflate fish, called both by the click and the trigger
// function inflateFish() {
//   // Avoid retriggering
//   if (isInflating) return
//   isInflating = true

//   // Enlarge
//   puffer.addComponent(
//     new utils.ScaleTransformComponent(
//       deflatedScale,
//       inflatedScale,
//       1,
//       null,
//       utils.InterpolationType.EASEINQUAD
//     )
//   )

//   // Wait, then shrink back
//   puffer.addComponent(
//     new utils.Delay(2000, () => {
//       puffer.getComponent(AudioSource).playOnce()
//       puffer.addComponent(
//         new utils.ScaleTransformComponent(
//           inflatedScale,
//           deflatedScale,
//           3,
//           () => {
//             // When finished, reset flag to allow triggering again
//             isInflating = false
//           }
//         )
//       )
//     })
//   )
// }














// /// --- Set up a system ---

// class RotatorSystem {
//   // this group will contain every entity that has a Transform component
//   group = engine.getComponentGroup(Transform)

//   update(dt: number) {
//     // iterate over the entities of the group
//     for (const entity of this.group.entities) {
//       // get the Transform component of the entity
//       const transform = entity.getComponent(Transform)

//       // mutate the rotation
//       transform.rotate(Vector3.Up(), dt * 10)
//     }
//   }
// }

// // Add a new instance of the system to the engine
// engine.addSystem(new RotatorSystem())

// /// --- Spawner function ---

// function spawnCube(x: number, y: number, z: number) {
//   // create the entity
//   const cube = new Entity()

//   // add a transform to the entity
//   cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

//   // add a shape to the entity
//   cube.addComponent(new BoxShape())

//   // add the entity to the engine
//   engine.addEntity(cube)

//   return cube
// }

// /// --- Spawn a cube ---

// const cube = spawnCube(8, 1, 8)

// cube.addComponent(
//   new OnPointerDown(() => {
//     cube.getComponent(Transform).scale.z *= 1.1
//     cube.getComponent(Transform).scale.x *= 0.9

//     spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
//   })
// )
