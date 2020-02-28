function validateUsernameAndPassword(username,password)
{
    // let tempUsername= javascript98;
    // let tempPassword= javascript123;

    if(username==="javascript98" && password==="javascript123")
    {
        return "login successful";
    }
    else{
        return "invalid username and password";
    }
}
let result=validateUsernameAndPassword("javascript98","javascript123");
console.log(result);
