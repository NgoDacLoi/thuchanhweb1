import * as React from "react";

function fetchUser(){
    return new Promise((resolve)=>
    {
        setTimeout(() => {
            resolve({ id: 1, name: "Adam"})
        }, 5000);
    });
}
function App() {
        const [id,setId]= React.useState("loading...");
       const[name,setName]= React.useState("loading...");

        React.useEffect(()=> {
           fetchUser().then((user)=>{
            setId(user.id);
            setName(user.name);
            });
        });
    return(
        <>
        <p>id: {id}</p>
        <p>name: {name}</p>
        </>
    );
  
}

export default App;
