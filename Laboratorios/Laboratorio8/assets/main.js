var idCounter = 0;

var parseLateSwitch = value => {
    if (value) {
        return "Tarde prro";
    } else {
        return "A tiempo";
    }
};

function addStudent(carnet, schedule, late, tbody) {
    let newRow = document.createElement("tr");
    let date = new Date();

    newRow.innerHTML = `<td><b>${carnet}</b></td>
  <td><b>${schedule}</b></td>
  <td><b>${date.toLocaleString()}</b></td>
  <td><b>${late}</b></td>`;

    let cellContainer = document.createElement("td");
    let newBtn = document.createElement("button");
    newBtn.classList.add("btn");
    newBtn.classList.add("btn-danger");
    newBtn.innerText = "Drop";
    newBtn.value = idCounter;

    let inputContainer = document.createElement("td");
    let newInput = document.createElement("input");
    newInput.classList.add("form-control");
    newInput.type = "text";
    newInput.id = idCounter;

    cellContainer.appendChild(newBtn);
    inputContainer.appendChild(newInput);
    newRow.appendChild(cellContainer);
    newRow.appendChild(inputContainer);

    newBtn.addEventListener("click", event => {
        let idElement = event.srcElement.value;
        let elementNode = document.querySelector(
            `tr>td>button[value='${idElement}']`
        ).parentElement.parentElement;

        if (elementNode.firstChild.firstChild.innerHTML === elementNode.lastChild.firstChild.value) {
            tbody.removeChild(elementNode);
        }
    });

    idCounter++;
    tbody.appendChild(newRow);
}

window.onload = () => {
    let btn = document.querySelector("#submit_btn");
    let carnet = document.getElementById("carnet_field");
    let schedule = document.getElementById("schedule_field");
    let late = document.getElementById("late_switch");
    let tbody = document.getElementById("table_body");

    var carnetRegex = new RegExp("^[0-9]{8}$");

    btn.addEventListener("click", () => {
        let carnetV = carnet.value;
        let scheduleV = schedule.options[schedule.selectedIndex].text;
        let lateB = parseLateSwitch(late.checked);

        if (carnetRegex.test(carnetV)) addStudent(carnetV, scheduleV, lateB, tbody);
    });

    carnet.addEventListener("keyup", () => {
        let carnetV = carnet.value;
        if (carnetRegex.test(carnetV)) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });
};