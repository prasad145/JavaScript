
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  
  function updateRecords(object, id, prop, value) {
    if(value === "")
      delete object[id][prop];
  
    if(prop == "artist" || prop == "albumTitle")
      if(value != "")
        object[id][prop] = value;
      else
        delete object[id][prop];
    else
      {
        if(prop == "tracks")
        {
          if(value != "")
          {
            if(!object[id].hasOwnProperty(prop)) //checking whether the given id has prop property 
            {
              object[id][prop] = [value];
              //object[id][prop].push(value);
            }
            else
            {
                object[id][prop].push(value);
            }
          }
        }
        
      }
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');