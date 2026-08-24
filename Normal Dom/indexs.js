const root = document.getElementById("container");
const btn = document.getElementById("btn");
console.log(root);

const h2 = document.createElement("h2");
h2.innerText = "RESUME";

const loader = document.createElement("h2");
root.appendChild(loader);

const table = document.createElement("table");
const img = document.createElement("img");

function buildResume() {
    try {
        loader.innerText = "Building...";

        table.setAttribute("cellpadding", "15");
        table.setAttribute("width", "600");
        table.style.borderCollapse = "collapse";

        const row1 = document.createElement("tr");
        const row2 = document.createElement("tr");
        const row3 = document.createElement("tr");
        const row4 = document.createElement("tr");

        const left1 = document.createElement("td");
        const right1 = document.createElement("td");

        const left2 = document.createElement("td");
        const right2 = document.createElement("td");

        const left3 = document.createElement("td");
        const right3 = document.createElement("td");

        const left4 = document.createElement("td");
        const right4 = document.createElement("td");

        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwRHgONzy5Kh1V3_3wUTn9dPqNww-egjEpuauzyjm2b5mXuDDaQNh8dYK&s=10";
        img.setAttribute("width", "100");
        img.setAttribute("height", "100");
        img.style.borderRadius = "50%";
        h2.style.marginLeft = "160px";
        h2.style.fontWeight = "bold";
        h2.style.fontSize = "45px";

        left1.appendChild(img);
        right1.innerText = "Abhishek Verma";
        right1.style.fontWeight = "bold";
        right1.style.fontSize = "35px";

        left2.innerText = "Skill ";
                left2.style.fontWeight = "bold";    
        left2.style.fontSize = "25px";
        right2.innerText = "CSE";
        right2.style.fontWeight = "bold";
        right2.style.fontSize = "25px";

        left3.innerText = "Stream";
                left3.style.fontWeight = "bold";    
        left3.style.fontSize = "25px";
        right3.innerText = "B.Tech";
        right3.style.fontWeight = "bold";
        right3.style.fontSize = "25px";

        left4.innerText = "Qualification";
        left4.style.fontWeight = "bold";
        left4.style.fontSize = "25px";
        right4.innerText = "Full Stack Developer";
        right4.style.fontWeight = "bold";
        right4.style.fontSize = "25px";

        row1.appendChild(left1);
        row1.appendChild(right1);

        row2.appendChild(left2);
        row2.appendChild(right2);

        row3.appendChild(left3);
        row3.appendChild(right3);

        row4.appendChild(left4);
        row4.appendChild(right4);

        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);
        table.appendChild(row4);

        root.appendChild(h2);
        root.appendChild(table);

    } catch (error) {
        console.log(error);
        loader.innerText = "Error in building resume";
    } finally {
        root.removeChild(loader);
    }
}

btn.addEventListener("click", buildResume);