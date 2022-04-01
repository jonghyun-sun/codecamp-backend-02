const obj = {
    title: 'The Title',
    name: 'Jane',
    contents: 'Nothing to say'
  };
  let a= ""
  
  
  
  for (let key in obj) {

    if( key === 'title' || key === 'name' ){
      a= (obj[key].toUpperCase())
      obj[key] = a
      console.log(a)
    }
  }
  
  console.log(obj);