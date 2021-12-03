class Game{
  constructor(el, hook = ()=> {}){
    this.el = el;
    this.render();
    this.el.addEventListener(('click'), (ev)=> {
      if(ev.target.tagName === 'LI'){
        const over = !![...ev.target.parentNode.children].find(li => {
          return li.style.backgroundColor !== '';
        });
        if(over){
          this.render();
          return;
        }
        const idx = [...ev.target.parentNode.children].indexOf(ev.target);
        if(idx === this.number){
          ev.target.style.backgroundColor = 'green';
        }
        else {
          ev.target.style.backgroundColor = 'red';
        }
        hook(ev.target.style.backgroundColor === 'green');
      }
    });
  }
  render(){
    const numbers = [1, 2, 3];
    this.number = Math.floor(Math.random()*numbers.length);
    const html = `
      <div style='font-family: verdana'>
        <h1>Guess the Number</h1>
        <ul style='display: flex; padding: 0; list-style-type: none;'>
          ${
            numbers.map( num => {
              return `
                <li style='cursor: pointer; flex: 1;border: solid 1px dodgerBlue; padding: 1rem; margin: 1rem; border-radius:50%;text-align: center'>${ num }</li>
              `;
            }).join('')
          }
        </ul>
      </div>
    `;
    this.el.innerHTML = html;
  }
}
