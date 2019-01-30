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


### LOD controls

* In localStorage, `FOREST_CAPACITY` defines the total number of lod nodes in scene. The larger the number, more 3D details will be displayed.
* In localStorage, `CACHE_CAPACITY` defines the number of cached nodes. This number must be larger than `FOREST_CAPACITY` to normally display.

* `osgInfo::maxLevel` defines the max depth of the lod tree. More depth grants more details, but need to wait longer for downloading.