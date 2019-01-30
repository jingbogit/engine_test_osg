console.log('engine', engine)

localStorage.clear()

// change FOREST_CAPACITY to control how many lod nodes to display
localStorage.setItem('FOREST_CAPACITY', 400) // total number of lod nodes in scene
localStorage.setItem('CACHE_CAPACITY', 450) // must be larger than FOREST_CAPACITY

let earth = new engine.EarthViewer('page-content', {
  camera: {
    poseTo: { "lng": 114, "lat": 22.25, "alt": 15000, "north": 0, "tilt": 60, "up": 0 },
    flyTo: { "lng": 114, "lat": 22.25, "alt": 15000, "north": 0, "tilt": 60, "up": 0 }
  },
  renderItems: {
    earth: false,
    earthUseTexture: false
  }
})

const osgInfo = new engine.OSGInfo({
  id: '0',
  cloudPath: {
    local: {
      dataPath: 'https://www.altizure.com/data2/5c406bb75ff6e01ace8a643f/web/',
      rootFileName: 'Model.ab'
    }
  },
  modelTransform: {
    quaternion: {x: 0, y: 0, z: 0, w: 1},
    position: {x: 0, y: 0, z: 500}
  },
  maxLevel: 20
})

earth.addOSGProject({ osgInfo, position: { lng: 114, lat: 22.25 } })
  .then(function (p) {
    console.log('added', p)
  })

if (Stats) {
  earth._stats = new Stats()
  earth.threeContainer.appendChild(earth._stats.dom)
}
