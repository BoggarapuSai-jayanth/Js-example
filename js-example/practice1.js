function validation(userRole, isAuthenticated, useAge){
    
if (isAuthenticated == false){
    console.log("Please log in");
    return;
}

if (userRole === "admin"){
    console.log("Welcome admin");
} else if(userRole === "editor"){
    console.log("Welcome editor");
 } else {
    console.log("Welcome guest")
    }
}

validation("admin",true,25);