const icon = document.querySelector(".icon");     //To access hamburger menu icon
const menu = document.querySelector(".menu");     //To access menu list


icon.addEventListener("click", () => {            
    menu.classList.toggle("active");              //Menu list opens when icon is clicked
    icon.textContent = menu.classList.contains("active") ? "X" : "☰"; //Hamburger icon changes to close mark icon, when it is clicked and menu list opens  
   
    
});
document.addEventListener("click", (event) => {
    /*Conditions to close the menu list when clicked outside of hamburger icon and menu list, 
    when the menu list is opened*/
    if (menu.classList.contains("active") && (!menu.contains(event.target)) && (!icon.contains(event.target))) {     
        menu.classList.remove("active");
        icon.textContent = "☰";     //Close icon changes to hamburger icon once the menu list is closed
    }
});
var entry = document.getElementById("searchbar");       //To access the user search in input box
var list_container = document.getElementById("list-container");   //To access the unordered list
function search() {  //Denotes what will happen when search button is clicked
    
    var list_items = document.createElement("li");   //Creates a new element to store the user inputs
    list_items.textContent = entry.value;     //Storing the users' searches in the new element created
    list_container.append(list_items);        //Stored values are added in the unordered list
    
    entry.value = "";           //To clear the search bar after clicking search button
    
    /*Condition to display the unordered list if there's atleast one search,
     not working correctly, so minor refining needed*/
    if (list_container.children.length > 0) {     
        list-container.classList.add("active");   //To display the searches list 
    }

}