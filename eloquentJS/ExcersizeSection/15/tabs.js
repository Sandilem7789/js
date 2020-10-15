/* Tabs */

function asTabs(node){                                                          //function asTabs takes in a node as an argument
    let tabs = Array.from(node.children).map(node => {                          //binding tabs variable to child nodes
        let button = document.createElement("button");                          //creating a button for every node
        button.textContent = node.getAttribute("data-tabname");                 //naming the button with the contents of the data-tabname attribute
        let tab = {node, button};                                               //object tab, has a button and a node in it
        button.addEventListener("click", () => selectTab(tab));                 //adding an event handler to the button
        return tab;                                                             //returning the tab
    });
    
    let tabList = document.createElement("div");                                //creating a div that is going to house the tab buttons
    for(let {button} of tabs) tabList.appendChild(button);                      //append every button linked to tabs
    node.insertBefore(tabList, node.firstChild);                                //insert the buttons before the first child
    
    function selectTab(selectedTab){                                            //this functions hides the contents of tabs that are not selected
        for(let tab of tabs){                                                   //for every tab
            let selected = tab === selectedTab;                                 //I not sure about this one yet, lol
            tab.node.style.display = selected ? "" : "none";                    //line for hiding other tab contents
            tab.button.style.color = selected ? "red" : "grey";                 //if selected the button will turn red if not selected it will be grey
        }
    }
    selectTab(tabs[0]);
}


