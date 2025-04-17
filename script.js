function openModal() {
    document.getElementById("matchModal").style.display = "block";
}

function closeModal() {
    document.getElementById("matchModal").style.display = "none";

    let classValue = document.querySelector("#class").selectedIndex = 0;
    let sub = document.querySelector("#subj");
    sub.selectedIndex = 0;
    document.querySelector(".subBox").style.display = "none";

}


// Optional: Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("matchModal");
    if (event.target === modal) {
        closeModal();
    }
}

function handleClass() {
    let classValue = parseInt(document.querySelector("#class").value);
    let subBox = document.querySelector(".subBox");


    if (classValue != "") {
        subBox.style.display = "block"
    }
}

function submitSubject() {
    let subjectValue = document.querySelector("#subj").value;
    let classValue = parseInt(document.querySelector("#class").value);

    if (classValue === "" || subjectValue === "") {
        alert("Please select all options!");
        return;
    } else {
        alert("Matching you with someone who is searching as you!!");
        closeModal();
    }
}

