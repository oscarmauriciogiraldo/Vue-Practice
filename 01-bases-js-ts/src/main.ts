import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
/* import { setupCounter } from './counter.ts' */

//import "./bases/01-const-let"
//import "./bases/02-object"
//import "./bases/03-arrays"
//import "./bases/04-functions"
import "./bases/06-desestructuracion"
/*import "./bases/07-desestructuracionArreglos"
import "./bases/08-importacionesExport"
import "./bases/09-tipadoDatos"
import "./bases/10-promesas"
import "./bases/11-argumentosPromesas"
import "./bases/12-fetchApi"
import "./bases/13-interfacesTs"
import "./bases/14-axios"
import "./bases/15-asyncAwait" */

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`
/* console.log("Hola Mundo") */

/* setupCounter(document.querySelector<HTMLButtonElement>('#counter')!) */
