const counters = document.querySelectorAll('.numbers');
const speed = 200;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.textContent;
        
        const inc = target / speed;
        const convert = numberWithCommas(target);
        console.log(convert);
        if(count < target) {
            counter.textContent = count + inc;
            setTimeout(updateCount, 40);
        } else {
             counter.textContent = convert;
             console.log(convert);
        }
        
    }
    updateCount();
    
})