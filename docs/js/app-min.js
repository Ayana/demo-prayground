"use strict";var element=document.querySelector(".element"),width=window.innerWidth,height=window.innerHeight,renderer=new THREE.WebGLRenderer({antialias:!0});renderer.setSize(width,height);var scene=new THREE.Scene,cubeGeometry=new THREE.CubeGeometry(100,100,100),cubeMaterial=new THREE.MeshLambertMaterial({color:16777215}),cube=new THREE.Mesh(cubeGeometry,cubeMaterial);cube.rotation.y=45*Math.PI/180,scene.add(cube);var camera=new THREE.PerspectiveCamera(45,width/height,.1,1e4);camera.position.y=160,camera.position.z=400,camera.lookAt(cube.position),scene.add(camera);var skyboxGeometry=new THREE.CubeGeometry(1e4,1e4,1e4),skyboxMaterial=new THREE.MeshBasicMaterial({color:0,side:THREE.BackSide}),skybox=new THREE.Mesh(skyboxGeometry,skyboxMaterial);scene.add(skybox);var pointLight=new THREE.PointLight(16777215);pointLight.position.set(0,300,200),scene.add(pointLight);var button=document.querySelector(".button");function onClick(){if("function"==typeof DeviceOrientationEvent.requestPermission)DeviceOrientationEvent.requestPermission().then(function(e){"granted"===e&&window.addEventListener("deviceorientation",function(e){document.body.style.background="blue",element.appendChild(renderer.domElement),function n(){requestAnimationFrame(n),cube.rotation.y+=e.alpha/20,renderer.render(scene,camera)}()})}).catch(console.error);else{document.body.style.background="blue",element.appendChild(renderer.domElement),function e(){requestAnimationFrame(e),cube.rotation.y+=.01,renderer.render(scene,camera)}()}}button.addEventListener("click",onClick);