const api = "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";
const inp = document.getElementById('inp');
const Images = document.querySelector('.Images');

const getImage = async () => {
    
    const methods = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt": inp.value,
                "n":3,
                "size": "256x256",
            }
        )

    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)

    const data = await res.json()
    const listImages = data.data;
    Images.innerHTML=''
    listImages.map(photo => {
        const container = document.createElement("div")
        Images.append(container)
           const img = document.createElement("img")
           container.append(img)
           img.src=photo.url
    })


}


// Add a variable to track the current mode
let isDarkMode = false;

// Function to toggle between light and dark mode
function darkMode() {
    const body = document.body;
    const prompt = document.querySelector('.prompt');
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const images = document.querySelectorAll('.Images div');
    const h2 = document.querySelector('h2');
    const dark =document.querySelector('.dark')

    // Toggle the mode
    isDarkMode = !isDarkMode;

    // Update styles based on the mode
    if (isDarkMode) {
        prompt.style.backgroundColor = '#292c31';
        prompt.style.border = '3px solid #36383d';
        input.style.backgroundColor = '#292c31';
        input.style.color = 'white';
        button.style.backgroundColor = '#36383d';
        button.style.color = '#fff';
        h2.style.color = '#fff';
        h2.style.backgroundColor = '#292c31';
        h2.style.border = '3px solid #36383d';
        h2.style.borderRadius = '10px';
        dark.style.color = '#fff';
        dark.textContent = 'light Mode';
        



        images.forEach(div => {
            div.style.backgroundColor = '#292c31';
            div.style.border = '3px solid #36383d';
        });
    } else {
        // Light mode styles
        // body.style.backgroundColor = '#fff';
        body.style.backgroundImage = ('pexels-baskin-creative-studios-1766838.jpg');
        prompt.style.backgroundColor = '#fff';
        prompt.style.border = '3px solid #292c31';
        input.style.backgroundColor = '#fff';
        input.style.color = '#36383d';
        button.style.backgroundColor = '#36383d';
        button.style.color = '#00BFFF';
        h2.style.color = '#00BFFF';
        dark.style.color = '#00BFFF';
        dark.textContent = 'Dark Mode';


        images.forEach(div => {
            div.style.backgroundColor = '#f0f0f0';
            div.style.border = '3px solid #36383d';
        });
    }
}
