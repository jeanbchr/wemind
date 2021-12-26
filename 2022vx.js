const masks = ['b', 'o', 'n1', 'n2', 'e11', 'e12', 'e13', 'a1', 'a2', 'n3', 'n4', 'e21', 'e22', 'e23', 'e24', 'e31', 'e32', 'e33', '21', '0', '22', '23', 'p', 't']
 
masks.forEach((mask, index, el) => {
  const id = `#mask-${mask}` 
  let path = document.querySelector(id)
  const length = path.getTotalLength() 
  path.style.strokeDasharray = length; 
  path.style.strokeDashoffset = length; 
})
