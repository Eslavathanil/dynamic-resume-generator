// Get elements
const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");
let isHidden = true;

// Toggle between input form and resume preview
function toggleView() {
  if (isHidden) {
    main.style.display = "none";
    isHidden = false;

    outputContainer.style.display = "block";
    outputContainer.innerHTML = `
      <div id="resume-content" class="output">
        <div class="heading">
          <h1>${inputField["name"].value || "Your Name"}</h1>
          <h4>${inputField["title"].value || ""}</h4>
        </div>
        <div class="info">
          <div class="left">
            <div class="box">
              <h2>Objective</h2>
              <p>${inputField["objective"].value || ""}</p>
            </div>
            <div class="box">
              <h2>Skills</h2>
              <p>${inputField["skills"].value || ""}</p>
            </div>
            <div class="box">
              <h2>Academic Details</h2>
              <p>${inputField["academic_details"].value || ""}</p>
            </div>
            <div class="box">
              <h2>Contact</h2>
              <p>${inputField["contact"].value || ""}</p>
            </div>
          </div>
          <div class="right">
            <div class="box">
              <h2>Work Experience</h2>
              <p>${inputField["work_experience"].value || ""}</p>
            </div>
            <div class="box">
              <h2>Achievements</h2>
              <p>${inputField["achievements"].value || ""}</p>
            </div>
            <div class="box">
              <h2>Projects</h2>
              <p>${inputField["projects"].value || ""}</p>
            </div>
          </div>
        </div>
      </div>
      <button onclick="window.print()">🖨 Print Resume</button>
      <button onclick="downloadPDF()">📥 Download PDF</button>
      <button onclick="toggleView()">✏️ Edit Again</button>
    `;
  } else {
    main.style.display = "block";
    isHidden = true;

    outputContainer.style.display = "none";
    outputContainer.innerHTML = "";
  }
}

// Download as PDF using html2pdf
function downloadPDF() {
  const resumeElement = document.getElementById("resume-content");
  const options = {
    margin: 0.5,
    filename: `${inputField["name"].value || "resume"}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(options).from(resumeElement).save();
}
