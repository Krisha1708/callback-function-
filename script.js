// Dummy User Data
const users = {
  {
    id: 1,
      name: "John Doe",
      email: "john.doe@example.com"
  },
  {
    id: 2,
      name: "jonny",
      email: "jonny.Ber@example.com"
  };

function getUserData(id, callback){
  setTimeout(() => {
    callback(users);
  }, 2000);
};

//function to display user Data
function displayUser(users){
  console.log("User Details");
  console.log("ID : ", `${users.id});
  console.log("Name :", `${users.name});
  console.log("Email :", `${users.email});
}

// call the getUserData with User ID
getUserData(2, displayUser);
