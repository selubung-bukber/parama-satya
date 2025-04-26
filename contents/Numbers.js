export function Numbers() {
    const content = `
      <div class="numbers">
        <div class="container">
          <div class="numbers-row">
            <div class="number-item wow fadeIn" data-wow-delay="0.2s">
              <h3 class="number" data-number="10">0</h3>
              <p class="number-text">Years of experience</p>
            </div>
            <div class="number-item wow fadeIn" data-wow-delay="0.3s">
              <h3 class="number" data-number="100">0</h3>
              <p class="number-text">Projects completed</p>
            </div>
            <div class="number-item wow fadeIn" data-wow-delay="0.4s">
              <h3 class="number" data-number="1000">0</h3>
              <p class="number-text">Happy clients</p>
            </div>
          </div>
        </div>
      </div>
    `;
  
    const event = [
      {
        selector: '.number',
        type: 'animationend',
        handler: (e) => {
          const target = e.target;
          if (!target.classList.contains('animated')) {
            target.classList.add('animated');
            let count = 0;
            const number = target.getAttribute('data-number');
            const interval = setInterval(() => {
              count++;
              target.textContent = count;
              if (count >= number) {
                clearInterval(interval);
              }
            }, 10); // Adjust speed of the number animation
          }
        }
      }
    ];
  
    return { content, event };
  }
  