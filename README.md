## OSG example

Display a LOD tree, whose node is a compressed `osgjs` data group.

## usage

* openg `index.html` with chrome to see the model.

* Change the `dataPath` in `./js/index.js` to use another set of data.


## Meta file

### required
* `uuid`: uuid for this set of lod data
* `dataPath`: `dataPath` + `fileName` -> tile file path
* root tile `fileName`

### optional
* center longitudee, latitude, altitude
* center x, y, z (for CGCS2000, beijing84 etc.)
* `orientation`: a quaternion vector (x, y, z, w), default (0, 0, 0, 1). After applying this rotation, the up direction is (0, 0, 1), east (1, 0, 0), north (0, 1, 0). 
* `position`: (x, y, z), default (0, 0, 0). An offset from the obj space, for display.
* `scale`: (x, y, z), default (1, 1, 1)
