"use strict"
	const blocks = document.querySelectorAll('.block');


    blocks.forEach(function(block) {
      const btn = document.createElement('button');
      btn.textContent = 'x';
      btn.className = 'close';

      btn.addEventListener('click', function() {
        block.remove();
      });

      block.appendChild(btn);
    });
