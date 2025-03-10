document.addEventListener("DOMContentLoaded", function () {

    let completeCount = 6;
    function checkCompletion() {
        if (completeCount === 0) {
            alert("Congrats! Successfully completed all tasks!");
        }
    }

    function count() {
        const notificationCountElement = document.getElementById('notification-count');
        const taskCountElement = document.getElementById('task-count');

        let taskCount = parseInt(taskCountElement.innerText);
        let notificationCount = parseInt(notificationCountElement.innerText);

        notificationCount++;
        taskCount--;

        notificationCountElement.innerText = notificationCount;
        taskCountElement.innerText = taskCount;
    }

    // task 1 completed button

    const completed1 = document.getElementById('completed1');

    completed1.addEventListener("click", function () {
        let time = new Date();

        let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const txt = document.getElementById('task1-title');
        const text = txt.innerText;
        alert(`Board updated successfully`);
        const rightSide = document.querySelector('.right-side-log');
        let message = document.createElement("p");
        message.innerText = `You have completed the task ${text} at ${currentTime}`;
        message.style.backgroundColor = "rgb(244, 247, 255)";
        message.style.padding = "20px";
        message.style.margin = "20px";
        message.style.borderRadius = "10px";
        completed1.style.backgroundColor = "#a9a9a9";
        completed1.style.color = "#d3d3d3";
        completed1.disabled = true;
        completeCount--;
        rightSide.appendChild(message);
        checkCompletion();
        count();

    });

    // task 2 completed button

    const completed2 = document.getElementById('completed2');

    completed2.addEventListener("click", function () {
        let time = new Date();

        let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const txt = document.getElementById('task2-title');
        const text = txt.innerText;
        alert(`Board updated successfully`);
        const rightSide = document.querySelector('.right-side-log');
        let message = document.createElement("p");
        message.innerText = `You have completed the task ${text} at ${currentTime}`;

        message.style.backgroundColor = "rgb(244, 247, 255)";

        message.style.padding = "10px";
        message.style.margin = "20px";
        message.style.borderRadius = "10px";
        completed2.style.backgroundColor = "#a9a9a9";
        completed2.style.color = "#d3d3d3";
        completeCount--;
        completed2.disabled = true;
        rightSide.appendChild(message);
        checkCompletion();
        count();

    })

    // task 3 completed button

    const completed3 = document.getElementById('completed3');

    completed3.addEventListener("click", function () {
        let time = new Date();

        let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const txt = document.getElementById('task3-title');
        const text = txt.innerText;
        alert(`Board updated successfully`);
        const rightSide = document.querySelector('.right-side-log');
        let message = document.createElement("p");
        message.innerText = `You have completed the task ${text} at ${currentTime}`;

        message.style.backgroundColor = "rgb(244, 247, 255)";

        message.style.padding = "10px";
        message.style.margin = "20px";
        message.style.borderRadius = "10px";
        completed3.style.backgroundColor = "#a9a9a9";
        completed3.style.color = "#d3d3d3";
        completeCount--;
        completed3.disabled = true;
        rightSide.appendChild(message);
        checkCompletion();
        count();
    });

    // task 4 completed button

    const completed4 = document.getElementById('completed4');

    completed4.addEventListener("click", function () {
        let time = new Date();

        let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const txt = document.getElementById('task4-title');
        const text = txt.innerText;
        alert(`Board updated successfully`);
        const rightSide = document.querySelector('.right-side-log');
        let message = document.createElement("p");
        message.innerText = `You have completed the task ${text} at ${currentTime}`;

        message.style.backgroundColor = "rgb(244, 247, 255)";

        message.style.padding = "10px";
        message.style.margin = "20px";
        message.style.borderRadius = "10px";
        completed4.style.backgroundColor = "#a9a9a9";
        completed4.style.color = "#d3d3d3";
        completeCount--;
        completed4.disabled = true;
        rightSide.appendChild(message);
        checkCompletion();
        count();
    });

    // task 5 completed button

    const completed5 = document.getElementById('completed5');

    completed5.addEventListener("click", function () {
        let time = new Date();

        let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const txt = document.getElementById('task5-title');
        const text = txt.innerText;
        alert(`Board updated successfully`);
        const rightSide = document.querySelector('.right-side-log');
        let message = document.createElement("p");
        message.innerText = `You have completed the task ${text} at ${currentTime}`;

        message.style.backgroundColor = "rgb(244, 247, 255)";

        message.style.padding = "10px";
        message.style.margin = "20px";
        message.style.borderRadius = "10px";
        completed5.style.backgroundColor = "#a9a9a9";
        completed5.style.color = "#d3d3d3";
        completeCount--;
        completed5.disabled = true;
        rightSide.appendChild(message);
        checkCompletion();
        count();
    });

    // task 6 completed button
    const completed6 = document.getElementById('completed6');

    completed6.addEventListener("click", function () {
        let time = new Date();

        let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const txt = document.getElementById('task6-title');
        const text = txt.innerText;
        alert(`Board updated successfully`);
        let rightSide = document.querySelector('.right-side-log');
        let message = document.createElement("p");
        message.innerText = `You have completed the task ${text} at ${currentTime}`;

        message.style.backgroundColor = "rgb(244, 247, 255)";

        message.style.padding = "10px";
        message.style.margin = "20px";
        message.style.borderRadius = "10px";
        completed6.style.backgroundColor = "#a9a9a9";
        completed6.style.color = "#d3d3d3";
        completed6.disabled = true;
        completeCount--;
        rightSide.appendChild(message);
        checkCompletion();
        count();
    });


    const clearHistory = document.getElementById('clear-history');
    clearHistory.addEventListener("click", function () {
        const logContainer = document.querySelector('.right-side-log');
        if (logContainer) {
            logContainer.innerText = "";
        }
    });


    const date = new Date();

    const currentDay = document.getElementById('current-day');
    const currentDate = document.getElementById('current-date');

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    let day = daysOfWeek[date.getDay()];

    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateNum = date.getDate();

    currentDay.innerText = `${day},`;
    currentDate.innerText = `${month} ${dateNum} ${year}`;

    const discoverButton = document.getElementById("discover-button");
    if (discoverButton) {
        discoverButton.addEventListener("click", function () {
            window.location.href = "discover.html";
        });
    }

    const wheel = document.getElementById('wheel-btn');

    const pastelColors = ["#FFACC7", "#8967B3", "#597445", "#FFD966", "#BCCEF8", "#79AC78", "#F6995C", "#92817A"]
    let currentIndex = 0;

    wheel.addEventListener('click', function () {
        document.body.style.backgroundColor = pastelColors[currentIndex];
        currentIndex = (currentIndex + 1) % pastelColors.length;
    })

});