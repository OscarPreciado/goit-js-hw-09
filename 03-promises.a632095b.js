document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();let o=Number(t.target.elements.delay.value),l=Number(t.target.elements.step.value),n=Number(t.target.elements.amount.value);for(let t=1;t<=n;t++)e(t,o).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),o+=l}));const e=(e,t)=>new Promise(((o,l)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):l({position:e,delay:t})}),t)}));
//# sourceMappingURL=03-promises.a632095b.js.map