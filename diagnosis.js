// Disease names translation
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

// Diagnosis rules
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

function diagnose() {
    const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptoms"]:checked')).map(cb => cb.value);

    const uniqueDiseases = new Set();

    rules.forEach(rule => {
        if (rule.conditions.every(condition => selectedSymptoms.includes(condition))) {
            uniqueDiseases.add(rule.result);
        }
    });

    const resultDiv = document.getElementById("result");
    if (uniqueDiseases.size > 0) {
        let resultHTML = `<h3>Diagnosis Results</h3>`;
        uniqueDiseases.forEach(diseaseCode => {
            const diseaseName = diseaseNames[diseaseCode];
            resultHTML += `<p>The disease <strong>${diseaseName}</strong> is possible.</p>`;
        });
        resultDiv.innerHTML = resultHTML;
    } else {
        resultDiv.innerHTML = `<h3>Diagnosis Result</h3><p>No matching diseases found for the selected symptoms.</p>`;
    }
}