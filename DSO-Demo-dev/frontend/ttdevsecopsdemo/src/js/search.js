function searchFAQ() {
    // Declare variables
    var input, filter, questions, li, a, i;
    input = document.getElementById('mySearch');
    filter = input.value.toUpperCase();
    questions = document.getElementById("questions");
    panel = questions.getElementsByClassName("panel");
    li = questions.getElementsByClassName("panel-title");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        //a = li[i].getElementsByTagName("a")[0];
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            panel[i].style.display = "";
        } else {
            panel[i].style.display = "none";
        }
    }
}