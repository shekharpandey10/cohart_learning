console.log(THREE)

const scene=new THREE.Scene()

console.log(scene)
const geometry=new THREE.BoxGeometry(2,2,2)
const meterial=new THREE.MeshBasicMaterial({color:'red'})


const box=new THREE.Mesh(geometry,meterial)

scene.add(box)
const size={width:700,height:500}
const camera= new THREE.PerspectiveCamera(75,size.width/size.height)
camera.position.z=9
camera.position.y=1
scene.add(camera)

const target=document.getElementsByClassName('wbgl')[0]
// wbgl.
const renderer = new THREE.WebGLRenderer({ canvas: target });
renderer.setSize(size.width,size.height)
renderer.render(scene,camera)