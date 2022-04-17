//INDEX
//------------------------------------------------------------------------

//IMAGE ENLARGE.
var img = document.getElementById("dp");
img.onmouseover = function() {
    img.style.transform = "scale(1.2)";
};
img.onmouseout = function() {
    img.style.transform = "scale(1.0)";
};

//INITIAL PROJECTS
var count = 8;

function AddProject() {

    project_title = document.getElementById("project_title").value;
    project_year = document.getElementById("project_year").value;
    tech = document.getElementById("tech").value;
    desc = document.getElementById("desc").value;

    //CHECKING INPUTS
    //CANNOT ENTER INVALID FIELDS IN YEAR OR TECH SINCE ITS DROPDOWN
    //TITLE IS REQUIERED
    if (project_title == "" || project_year == "" || tech == "") {
        alert("Invalid/Incomplete Fields.");
        return;
    }

    //PROJECT COUNT
    count++;
    document.getElementById("count").innerHTML = "Projects ( " + count + ")";

    //ADDING PROJECT
    var project = document.getElementById("projects");
    var div = document.createElement("div");
    project.appendChild(div);

    var title = document.createElement("h2");
    title.innerHTML = project_title + " (" + project_year + ")";
    div.appendChild(title);

    var description = document.createElement("p");
    description.innerHTML = desc + "<br />" + tech;
    div.appendChild(desc);


}
//------------------------------------------------------------------------
//TIME TABLE

function isEmpty(str) {
    return !str.trim().length;
}

function Search() {

    var input = document.getElementById("val");
    input = input.value.toUpperCase();

    var tr = document.getElementsByTagName("tr");
    //LOOPING THROUGH ROWS
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");
        //LOOPING THROUGH COLS
        for (var j = 0; j < td.length; j++) {
            //COMPARING
            if (td[j]) {
                let match = td[j].textContent || td[j].innerText;
                //CHANGING COLOR ON MATCH
                if (match.toUpperCase().indexOf(input) > -1 && !isEmpty(input)) {
                    td[j].style.color = "Red";
                } else {
                    td[j].style.color = "Black";
                }
            }
        }
    }
}

function Add() {

    var table = document.getElementById("TimeTable");

    //CREATING NEW ROW AND ASSIGING ID
    var tr = document.getElementsByTagName("tr");
    var row = table.insertRow(tr.length - 1);
    row.setAttribute("id", "r" + String(tr.length - 3));
    var col = tr[1].getElementsByTagName("td");

    //INSERTING COLUMNS AND VALUES
    for (var i = 0; i < col.length - 1; i++) {
        var inp = document.getElementById("inp" + i).value;
        var column = row.insertCell(i);
        column.innerHTML = inp;
        column.colSpan = 2;
    }

    //INSERTING EDIT BUTTON IN LAST COLUMN
    var inp_btn = tr.length - 3;
    var btn_row = row.insertCell(7);
    btn_row.colSpan = 2;
    var btn = document.createElement('input');
    btn.type = "button";
    btn.id = "editButton";
    btn.value = "Edit";
    btn.onclick = (function(inp_btn) { return function() { Edit(inp_btn); } })(inp_btn);
    btn_row.appendChild(btn);

    //INSERTING DELETE BUTTON IN LAST COLUMN
    var btn = document.createElement('input');
    btn.type = "button";
    btn.id = "deleteButton";
    btn.value = "Delete";
    btn.onclick = (function(inp_btn) { return function() { Delete(inp_btn); } })(inp_btn);
    btn_row.appendChild(btn);

    for (var i = 0; i < col.length - 1; i++) {
        document.getElementById("inp" + i).value = "";
    }

}

//NOTE: AFTER EDITING, CLICK EDIT AGAIN TO SAVE.
var save = false;

function Edit(val) {

    //EDITING
    if (!save) {
        var tr = document.getElementById("r" + val);
        var td = tr.getElementsByTagName("td");
        for (var j = 0; j < td.length - 1; j++) {
            td[j].innerHTML = "<input type='text' id='col" + val + "' " + "' value='" + td[j].textContent + "'>"
        }
        //console.log(td.input);
        //td[td.length - 1].getElementById("editButton").value = "SAVE";
        save = true;
    }
    //SAVING AFTER EDITING
    else {
        var tr = document.getElementById("r" + val);
        var td = tr.getElementsByTagName("td");
        for (var j = 0; j < td.length - 1; j++) {
            var inp = document.getElementById("col" + val).value;
            td[j].innerHTML = inp;
        }
        save = false;
    }

}

function Delete(val) {
    //REMOVING ROW USING ID
    document.getElementById("r" + val).outerHTML = "";
}


// COURSEVIDEOS
//------------------------------------------------------------------------

function play(num) {
    var controls = document.getElementById("vid" + num)
    controls.play();
}

function pause(num) {
    var controls = document.getElementById("vid" + num)
    controls.pause(num);
}

function changeSpeed(value, num) {
    var controls = document.getElementById("vid" + num)
    if (value == 'up') {
        controls.playbackRate += 0.1;
    } else if (value == 'down') {
        controls.playbackRate -= 0.1;
    }

}

function changeVolume(value, num) {
    var controls = document.getElementById("vid" + num)
    if (value == 'up') {
        controls.volume += 0.1;
    } else if (value == 'down') {
        controls.volume -= 0.1;
    }

}