const submitData = (name, email) => {
    //function that takes the two input strings, 
    //calls and returns FETCH

    return fetch('http://localhost:3000/users', {
      method: 'POST',//add data
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(data => {
        const newLi = document.createElement('li');
        const newId = document.createTextNode(`user ${data.id} created`);//creates a random ID
        newLi.appendChild(newId);
        document.getElementById('data').appendChild(newLi);//from our html, the ul is with id data
        return data;
      })
      .catch(err => {
        const newP = document.createElement('p');//our err message 
        const newMessage = document.createTextNode(err.message);
        newP.appendChild(newMessage);
        document.getElementById('data').appendChild(newP);
      })
  };

  submitData("kelly", "gmailss");