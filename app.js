
  let count = 0;
  let laps = 0;

        const counterDisplay = document.querySelector('h2');
        const lapsDisplay = document.querySelector('.laps p');

        function updateCounter(color = 'black') {
            counterDisplay.innerText = count;
            counterDisplay.style.color = color;
        }

        function counterplus() {
            count++;
            updateCounter('green');

            if (count > 10) {
                laps++;
                lapsDisplay.innerText = laps;
                reset();
            }
        }

        function counterminus() {
            count--;
            updateCounter('red');
        }

        function reset() {
            count = 0;
            updateCounter();
        }

        function resetLaps() {
            laps = 0;
            lapsDisplay.innerText = laps;
        }