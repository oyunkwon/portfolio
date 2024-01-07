document.addEventListener('DOMContentLoaded', () => {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');
    const text5 = document.getElementById('text5');

    let toggle = 0;

    setInterval(() => {
        if (toggle === 0) {
            text1.style.opacity = '1';
            text2.style.opacity = '0';
            text3.style.opacity = '0';
            text4.style.opacity = '0';
            text5.style.opacity = '0';
            text1.textContent = 'Product Manager'; // Change the text
        } else if (toggle === 1) {
            text1.style.opacity = '0';
            text2.style.opacity = '1';
            text3.style.opacity = '0';
            text4.style.opacity = '0';
            text5.style.opacity = '0';
            text2.textContent = 'ML Engineer'; // Change the text
        }  else if (toggle === 2) {
            text1.style.opacity = '0';
            text2.style.opacity = '0';
            text3.style.opacity = '1';
            text4.style.opacity = '0';
            text5.style.opacity = '0';
            text3.textContent = 'Physicist'; // Change the text
        }  else if (toggle === 3) {
            text1.style.opacity = '0';
            text2.style.opacity = '0';
            text3.style.opacity = '0';
            text4.style.opacity = '1';
            text5.style.opacity = '0';
            text4.textContent = 'UI/UX Designer'; // Change the text
        }  else if (toggle === 4) {
            text1.style.opacity = '0';
            text2.style.opacity = '0';
            text3.style.opacity = '0';
            text4.style.opacity = '0';
            text5.style.opacity = '1';
            text5.textContent = 'Entrepreneur'; // Change the text
    }
        toggle += 1
        toggle = toggle % 5
    }, 1000); // Adjust time for flickering speed
});