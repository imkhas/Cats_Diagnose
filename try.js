const diseaseNames = {
    P01: "Diabetes",
    P02: "Feline Leukemia Virus",
    P03: "Fungal Infection",
    P04: "Urinary Tract Disease",
    P05: "Feline Panleukopenia",
    P06: "Rabies",
    P07: "Stud Tail",
    P08: "Respiratory Infection (Cat Flu)",
    P09: "Ringworm",
    P10: "Worm Infestation"
};

const diseaseDescriptions = {
    P01: "Diabetes is a chronic disease in cats whereby either insufficient insulin response or insulin resistance leads to persistently high blood glucose concentrations.",
    P02: "Feline Leukemia Virus (FeLV) is a viral infection that affects a cat's immune system. This makes them more susceptible to other infections and diseases.",
    P03: "Fungal infections in cats can affect the skin, ears, and respiratory system, causing symptoms such as itching, hair loss, and respiratory issues.",
    P04: "Urinary Tract Disease in cats can cause difficulty urinating, frequent urination, and blood in the urine. It can be caused by infections, bladder stones, or other issues.",
    P05: "Feline Panleukopenia, also known as feline distemper, is a highly contagious viral disease that affects cats' gastrointestinal tract and immune system.",
    P06: "Rabies is a viral disease that affects the nervous system of mammals. It is usually transmitted through the bite of a rabid animal and can be fatal if not treated.",
    P07: "Stud Tail is a condition in cats that results in an overproduction of oil near the base of the tail, causing hair loss and greasy, scaly skin.",
    P08: "Respiratory Infection, or Cat Flu, is a common condition in cats that causes symptoms like sneezing, nasal discharge, and eye discharge.",
    P09: "Ringworm is a fungal infection that affects the skin, hair, and nails of cats. It causes circular patches of hair loss and can be contagious to humans.",
    P10: "Worm Infestation refers to various parasitic worms that can infect cats, causing symptoms like diarrhea, vomiting, and weight loss."
};

const rules = [
    { conditions: ["G01", "G02", "G03", "G04"], result: "P01", cf: 1 },
    { conditions: ["G01", "G02", "G03"], result: "P01", cf: 0.75 },
    { conditions: ["G01", "G02"], result: "P01", cf: 0.5 },
    { conditions: ["G04", "G07", "G08", "G10", "G13", "G14", "G15", "G16", "G17", "G18", "G19"], result: "P02", cf: 1 },
    { conditions: ["G04", "G07", "G08", "G10", "G13", "G14", "G15", "G16", "G17", "G18"], result: "P02", cf: 0.95 },
    { conditions: ["G04", "G07", "G08", "G10", "G13", "G14", "G15", "G16", "G17"], result: "P02", cf: 0.9 },
    { conditions: ["G04", "G07", "G08", "G10", "G13", "G14", "G15", "G16"], result: "P02", cf: 0.85 },
    { conditions: ["G04", "G07", "G08", "G10", "G13", "G14", "G15"], result: "P02", cf: 0.8 },
    { conditions: ["G04", "G07", "G08", "G10", "G13", "G14"], result: "P02", cf: 0.75 },
    { conditions: ["G04", "G07", "G08", "G10", "G13"], result: "P02", cf: 0.7 },
    { conditions: ["G04", "G07", "G08", "G10"], result: "P02", cf: 0.65 },
    { conditions: ["G04", "G07", "G08"], result: "P02", cf: 0.6 },
    { conditions: ["G04", "G07"], result: "P02", cf: 0.55 },
    { conditions: ["G07", "G15", "G30", "G31"], result: "P03", cf: 1 },
    { conditions: ["G07", "G15", "G30"], result: "P03", cf: 0.75 },
    { conditions: ["G07", "G15"], result: "P03", cf: 0.5 },
    { conditions: ["G02", "G03", "G08", "G11", "G20", "G21", "G22", "G23"], result: "P04", cf: 1 },
    { conditions: ["G02", "G03", "G08", "G11", "G20", "G21", "G22"], result: "P04", cf: 0.9 },
    { conditions: ["G02", "G03", "G08", "G11", "G20", "G21"], result: "P04", cf: 0.8 },
    { conditions: ["G02", "G03", "G08", "G11"], result: "P04", cf: 0.7 },
    { conditions: ["G02", "G03", "G08"], result: "P04", cf: 0.6 },
    { conditions: ["G02", "G03"], result: "P04", cf: 0.5 },
    { conditions: ["G03", "G08", "G11", "G24"], result: "P05", cf: 1 },
    { conditions: ["G03", "G08", "G11"], result: "P05", cf: 0.75 },
    { conditions: ["G03", "G08"], result: "P05", cf: 0.5 },
    { conditions: ["G07", "G08", "G14", "G23", "G25", "G26", "G27", "G28", "G29"], result: "P06", cf: 1 },
    { conditions: ["G07", "G08", "G14", "G23", "G25", "G26", "G27", "G28"], result: "P06", cf: 0.95 },
    { conditions: ["G07", "G08", "G14", "G23", "G25", "G26", "G27"], result: "P06", cf: 0.9 },
    { conditions: ["G07", "G08", "G14", "G23", "G25", "G26"], result: "P06", cf: 0.85 },
    { conditions: ["G07", "G08", "G14", "G23", "G25"], result: "P06", cf: 0.8 },
    { conditions: ["G07", "G08", "G14", "G23"], result: "P06", cf: 0.75 },
    { conditions: ["G07", "G08", "G14"], result: "P06", cf: 0.7 },
    { conditions: ["G07", "G08"], result: "P06", cf: 0.65 },
    { conditions: ["G30", "G31", "G32"], result: "P07", cf: 1 },
    { conditions: ["G30", "G31"], result: "P07", cf: 0.85 },
    { conditions: ["G04", "G05", "G06", "G08", "G09", "G12", "G19"], result: "P08", cf: 1 },
    { conditions: ["G04", "G05", "G06", "G08", "G09", "G12"], result: "P08", cf: 0.9 },
    { conditions: ["G04", "G05", "G06", "G08", "G09"], result: "P08", cf: 0.8 },
    { conditions: ["G04", "G05", "G06", "G08"], result: "P08", cf: 0.7 },
    { conditions: ["G04", "G05", "G06"], result: "P08", cf: 0.6 },
    { conditions: ["G04", "G05"], result: "P08", cf: 0.5 },
    { conditions: ["G08", "G15", "G17", "G30", "G31"], result: "P09", cf: 1 },
    { conditions: ["G08", "G15", "G17", "G30"], result: "P09", cf: 0.9 },
    { conditions: ["G08", "G15", "G17"], result: "P09", cf: 0.8 },
    { conditions: ["G08", "G15"], result: "P09", cf: 0.7 },
    { conditions: ["G04", "G08", "G09", "G24", "G30", "G33"], result: "P10", cf: 1 },
    { conditions: ["G04", "G08", "G09", "G24", "G30"], result: "P10", cf: 0.9 },
    { conditions: ["G04", "G08", "G09", "G24"], result: "P10", cf: 0.8 },
    { conditions: ["G04", "G08", "G09"], result: "P10", cf: 0.7 },
    { conditions: ["G04", "G08"], result: "P10", cf: 0.6 }
];

function addSymptom() {
    const symptomDropdown = document.getElementById("symptomDropdown");
    const selectedValue = symptomDropdown.value;
    const selectedText = symptomDropdown.options[symptomDropdown.selectedIndex].text;

    // Check if the symptom is already added
    const existingSymptoms = Array.from(document.querySelectorAll('#symptomList li')).map(li => li.getAttribute('data-value'));
    if (existingSymptoms.includes(selectedValue)) {
        alert("This symptom is already added.");
        return;
    }

    // Add the symptom to the list
    const symptomList = document.getElementById("symptomList");
    const listItem = document.createElement("li");
    listItem.textContent = selectedText;
    listItem.setAttribute("data-value", selectedValue);
    listItem.appendChild(createRemoveButton());
    symptomList.appendChild(listItem);
}

function createRemoveButton() {
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        this.parentElement.remove();
    };
    return removeButton;
}

function diagnose() {
    const selectedSymptoms = Array.from(document.querySelectorAll('#symptomList li')).map(li => li.getAttribute('data-value'));

    let highestCf = 0;
    let probableDiseases = [];

    rules.forEach(rule => {
        if (rule.conditions.every(condition => selectedSymptoms.includes(condition))) {
            if (rule.cf > highestCf) {
                highestCf = rule.cf;
                probableDiseases = [rule.result];
            } else if (rule.cf === highestCf) {
                probableDiseases.push(rule.result);
            }
        }
    });

    const resultDiv = document.getElementById("result");
    if (probableDiseases.length > 0) {
        let resultHTML = `<h3>Diagnosis Result</h3>`;
        resultHTML += `<p>The following diseases are most likely:</p><ul>`;
        probableDiseases.forEach(disease => {
            const diseaseName = diseaseNames[disease];
            const diseaseDescription = diseaseDescriptions[disease];
            resultHTML += `<li><strong>${diseaseName}</strong>: ${diseaseDescription}</li>`;
        });
        resultHTML += `</ul>`;
        resultDiv.innerHTML = resultHTML;
    } else {
        resultDiv.innerHTML = `<h3>Diagnosis Result</h3><p>No matching diseases found for the selected symptoms.</p>`;
    }
}
