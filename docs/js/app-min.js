"use strict";var scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight),renderer=new THREE.WebGLRenderer({antialias:!0});renderer.setSize(window.innerWidth,window.innerHeight);var element=document.querySelector(".element");element.appendChild(renderer.domElement);var geometry=new THREE.BoxGeometry(1,1,1),material=new THREE.MeshBasicMaterial({color:16711680}),cube=new THREE.Mesh(geometry,material);function onClick(){"function"==typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then(function(e){"granted"===e&&window.addEventListener("deviceorientation",function(e){!function n(){cube.rotation.x+=e.beta,renderer.render(scene,camera),requestAnimationFrame(n)}()})}).catch(console.error):document.body.style.background="red"}scene.add(cube),cube.position.z=-5,cube.rotation.x=10,cube.rotation.y=5,renderer.render(scene,camera),element.addEventListener("click",onClick);