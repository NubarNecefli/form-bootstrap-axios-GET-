//KODA ID-NIN NOMRESIN YAZDIQDA AVATAR GELSIN:

const myform = document.getElementById('myform');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const ageInput = document.getElementById('age');
const studentsInput = document.getElementById('students');
const submitButton = document.getElementById('myform');
const avatarDiv = document.getElementById('avatar'); 

// GET METOD
axios.get('https://655c2ff2ab37729791aa015f.mockapi.io/university/university')
    .then((res) => {
        const university = res.data;
        const avatarUrl = university[4].avatar;
        const avatarImage = document.createElement('img');
        avatarImage.src = avatarUrl;
        avatarImage.alt = 'Avatar';
        avatarDiv.innerHTML = '';
        avatarDiv.appendChild(avatarImage);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });








//NAME,SURNAME-ad yaziqda avatar gelsin:

document.addEventListener('DOMContentLoaded', function () {
    const myform = document.getElementById('myform');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const ageInput = document.getElementById('age');
    const studentsInput = document.getElementById('students');
    const avatarDiv = document.getElementById('avatar');

    myform.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = nameInput.value;
        const surname = surnameInput.value;
        const age = ageInput.value;
        const studentID = studentsInput.value;

        // AXIOS GET METOD:
        axios.get(`https://655c2ff2ab37729791aa015f.mockapi.io/university/university?name=${name}&surname=${surname}&age=${age}&studentID=${studentID}`)
            .then((res) => {
                const userData = res.data;

                if (userData.length > 0) {
                    const avatarUrl = userData[0].avatar;
                    const avatarImage = document.createElement('img');
                    avatarImage.src = avatarUrl;
                    avatarImage.alt = 'Avatar';
                    avatarDiv.innerHTML = '';
                    avatarDiv.appendChild(avatarImage);
                } else {
                    console.log('User not found or avatar not available.');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });
});









