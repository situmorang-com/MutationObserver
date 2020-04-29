var mutationObs = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
// 		console.log(mutation.type);
// 		console.log(mutation)
        if(mutation.addedNodes.length) {
console.log("Added: " + mutation.addedNodes[0].textContent);
// console.log(mutation.addedNodes[0]);
data[data.length+1] = {num: mutation.addedNodes[0].querySelector('[dir="auto"]').innerText}
}
//         if(mutation.removedNodes.length) {console.log("Removed: " + mutation.removedNodes[0].textContent);}
//         if (mutation.addedNodes[0].textContent) {console.log(mutation.addedNodes[0].textContent);}
//         if (mutation.removedNodes[0].textContent) {console.log(mutation.removedNodes[0].textContent);}
    });
});
mutationObs.observe(obj, config)
