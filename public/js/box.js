const arrSession1=[
    {
        "time":"9:00 AM-10:00 AM",
        "what to do":"Entry at the Venue",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"10 AM-10:30 AM",
        "what to do":"Start welcome ceremony",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"10:30 AM-11:00 AM",
        "what to do":"Induction",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"11:00 AM-NOON",
        "what to do":"Coding Round",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"2:30 PM-2:45 PM",
        "what to do":"LUNCH BREAK",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"2:45 PM-3:00 PM",
        "what to do":"Speaker Intro",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"3:00 PM-5:00 PM",
        "what to do":"Speaker Session",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"5:00 PM-6:30 PM",
        "what to do":"Ideation Submission",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"9:00 PM",
        "what to do":"Hack Begins",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
]
const arrSession2=[
    {
        "time":"MidNight",
        "what to do":"Review 1 starts ",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"2:00 AM-3:00 AM",
        "what to do":"Jamming Session ",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"4:30 AM-5:30 AM",
        "what to do":"Review 2 Starts",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"6:00 AM",
        "what to do":"Rest",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
    {
        "time":"9:00 AM",
        "what to do":"Calling Time",
        'action':"Lakshit Pant(ONLINE SPEAKER SESSION)"
    },
]

function showDay(day) {
    const selectedGenerator = document.getElementById(day);
    const allGenerators = document.querySelectorAll('.timeline-content > .generator');

    // Check if the clicked day is currently visible
    const isVisible = selectedGenerator.style.display !== 'none';

    // Hide all generators
    allGenerators.forEach(generator => {
        generator.style.display = 'none';
    });

    // If the clicked day is not currently visible, show it
    if (!isVisible) {
        selectedGenerator.style.display = 'block';
        
        // Apply the gap property to maintain spacing between small boxes
        selectedGenerator.style.setProperty('gap', '40px', 'important');
    }
}


function generateSmallBoxes(dataArray, day) {
    const generatorContainer = document.querySelector(`.generator[data-day="${day}"]`);
    generatorContainer.innerHTML = '';

    dataArray.forEach(item => {
        const smallBox = document.createElement('div');
        smallBox.classList.add('small-boxes');

        const timeDiv = document.createElement('div');
        timeDiv.classList.add('small-boxes-s1-time');
        timeDiv.innerHTML = `
            <div class="dots"></div>
            <div class="text1">${item['what to do']}<br>${item.time}</div>
        `;

        const detailDiv = document.createElement('div');
        detailDiv.classList.add('small-boxes-s1-detail');
        detailDiv.textContent = `${item.action}`;
        detailDiv.style.display = 'none';

        smallBox.appendChild(timeDiv);
        smallBox.appendChild(detailDiv);
        generatorContainer.appendChild(smallBox);
    });
}

generateSmallBoxes(arrSession1, 'day1');

generateSmallBoxes(arrSession2, 'day2');



function toggleDetail() {
    const detailDivs = document.querySelectorAll('.small-boxes-s1-detail');
    detailDivs.forEach(detailDiv => {
        if (detailDiv.style.display === 'none' || detailDiv.style.display === '') {
            detailDiv.style.display = 'block';
        } else {
            detailDiv.style.display = 'none';
        }
    });
}
function gone() {
    const detailDiv = document.querySelector('.small-boxes-s1-detail');
    detailDiv.style.display = 'none';
}
