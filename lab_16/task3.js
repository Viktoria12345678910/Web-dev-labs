const toggleBtn = document.getElementById('toggleBtn');
        const elements = document.querySelectorAll('.element');


        toggleBtn.addEventListener('click', function() {
            elements.forEach(element => {
                element.classList.toggle('hidden');
            });
        });
