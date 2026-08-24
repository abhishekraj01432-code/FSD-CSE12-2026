// console.log("Hello")

const root = document.getElementById("container");
const btn = document.getElementById("btn");
console.log(root)

const h2 = document.createElement('h2');
h2.innerHTML = 'Resume Builder';
const loader = document.createElement('h2');
root.appendChild(loader);
const img = document.createElement('img');
function buildResume() {
    try {
        loader.innerHTML = 'Building...';
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwRHgONzy5Kh1V3_3wUTn9dPqNww-egjEpuauzyjm2b5mXuDDaQNh8dYK&s=10';
        img.setAttribute('width', '100px');
        img.setAttribute('height', '100px');
    root.appendChild(img);
    root.appendChild(h2);
    } catch (error) {
        console.log(error)
        loader.innerHTML = 'Error in building resume';
    }
    finally {
        root.removeChild(loader);
    }
}
btn.addEventListener("click", buildResume);
