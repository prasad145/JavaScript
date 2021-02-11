let usersObj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
    let cnt = 0;
    for(let user in usersObj){
      if(usersObj[user]['online'] === true)
      {
        cnt++;
      }
    }
    return cnt;
}

console.log(Object.keys(usersObj)); //user names
console.log(countOnline(usersObj)); // total online