(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`aceUserPrefs`;function t(){return(typeof navigator<`u`&&navigator.language||`en`).toLowerCase().startsWith(`zh`)?`zh`:`en`}var n={theme:`system`,lang:t(),components:{timeline:!0,copy:!0,pet:!0},railPosition:{side:`right`,right:60,vCenter:50}};async function r(){let t=(await chrome.storage.local.get(e))[e];return t?{theme:t.theme??n.theme,lang:t.lang??n.lang,components:{timeline:t.components?.timeline??!0,copy:t.components?.copy??!0,pet:t.components?.pet??!0},railPosition:{side:t.railPosition?.side??`right`,right:t.railPosition?.right??n.railPosition.right,vCenter:t.railPosition?.vCenter??n.railPosition.vCenter}}:{...n,railPosition:{...n.railPosition}}}async function i(t){await chrome.storage.local.set({[e]:t})}var a={common:60,rare:27,legendary:13},o=(e,t,n,r={x:1,y:1})=>`
  <g class="eyes-round">
    <rect x="${e}" y="${n}" width="2" height="2" fill="var(--pet-eye)"/>
    <rect x="${t}" y="${n}" width="2" height="2" fill="var(--pet-eye)"/>
    <rect class="pupil" x="${e+r.x}" y="${n+r.y}" width="1" height="1" fill="var(--pet-pupil)"/>
    <rect class="pupil" x="${t+r.x}" y="${n+r.y}" width="1" height="1" fill="var(--pet-pupil)"/>
  </g>
`,s=(e,t,n)=>`
  <g class="eyes-happy">
    <rect x="${e}" y="${n+1}" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="${e+1}" y="${n}" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="${e+2}" y="${n+1}" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="${t}" y="${n+1}" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="${t+1}" y="${n}" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="${t+2}" y="${n+1}" width="1" height="1" fill="var(--pet-edge)"/>
  </g>
`,c=(e,t,n,r=2)=>`
  <g class="eyes-closed">
    <rect x="${e}" y="${n+1}" width="${r}" height="1" fill="var(--pet-edge)"/>
    <rect x="${t}" y="${n+1}" width="${r}" height="1" fill="var(--pet-edge)"/>
  </g>
`,l=`
  <g class="zzz">
    <rect x="10" y="1" width="2" height="1" fill="var(--pet-cream)" opacity=".85"/>
    <rect x="11" y="2" width="1" height="1" fill="var(--pet-cream)" opacity=".85"/>
    <rect x="10" y="3" width="2" height="1" fill="var(--pet-cream)" opacity=".6"/>
  </g>
`,u=(e,t,n)=>o(e,t,n)+s(e,t,n)+c(e,t,n),d=[{id:`milo`,nameCn:`米洛`,nameEn:`Milo`,species:`Orange Cat`,speciesCn:`橘猫`,tier:`common`,svg:`
    <rect x="1" y="0" width="2" height="2" fill="var(--pet-orange)"/>
    <rect x="9" y="0" width="2" height="2" fill="var(--pet-orange)"/>
    <rect x="0" y="1" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="11" y="1" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="1" y="1" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="10" y="1" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="0" y="2" width="12" height="6" fill="var(--pet-orange)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-orange)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-orange)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-orange)"/>
    ${u(2,8,4)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`honey`,nameCn:`哈尼`,nameEn:`Honey`,species:`Bear`,speciesCn:`小熊`,tier:`common`,svg:`
    <rect x="0" y="1" width="3" height="2" fill="var(--pet-warm)"/>
    <rect x="9" y="1" width="3" height="2" fill="var(--pet-warm)"/>
    <rect x="1" y="0" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="10" y="0" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="1" y="1" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="10" y="1" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="1" y="2" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="3" width="12" height="5" fill="var(--pet-warm)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="6" width="6" height="2" fill="var(--pet-cream)"/>
    <rect x="4" y="8" width="4" height="1" fill="var(--pet-cream)"/>
    ${u(2,8,4)}
    <rect x="5" y="6" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="7" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="6" y="7" width="1" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`mochi`,nameCn:`墨奇`,nameEn:`Mochi`,species:`Shiba`,speciesCn:`柴犬`,tier:`common`,svg:`
    <rect x="1" y="0" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="9" y="0" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="1" width="3" height="2" fill="var(--pet-warm)"/>
    <rect x="9" y="1" width="3" height="2" fill="var(--pet-warm)"/>
    <rect x="1" y="2" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="10" y="2" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="2" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="3" width="12" height="5" fill="var(--pet-warm)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="7" width="6" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="8" width="8" height="1" fill="var(--pet-cream)"/>
    <rect x="3" y="9" width="6" height="1" fill="var(--pet-cream)"/>
    ${u(2,8,4)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`peanut`,nameCn:`皮纳`,nameEn:`Peanut`,species:`Hamster`,speciesCn:`仓鼠`,tier:`common`,svg:`
    <rect x="2" y="1" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="8" y="1" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="2" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="9" y="2" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="1" y="2" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="3" width="12" height="5" fill="var(--pet-warm)"/>
    <rect x="0" y="8" width="12" height="1" fill="var(--pet-warm)"/>
    <rect x="1" y="9" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="10" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="11" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="7" width="6" height="2" fill="var(--pet-cream)"/>
    <rect x="4" y="9" width="4" height="1" fill="var(--pet-cream)"/>
    ${u(2,8,4)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`biscuit`,nameCn:`比斯基`,nameEn:`Biscuit`,species:`Rabbit`,speciesCn:`兔子`,tier:`common`,svg:`
    <rect x="2" y="0" width="2" height="3" fill="var(--pet-cream)"/>
    <rect x="8" y="0" width="2" height="3" fill="var(--pet-cream)"/>
    <rect x="3" y="1" width="1" height="2" fill="var(--pet-warm)"/>
    <rect x="8" y="1" width="1" height="2" fill="var(--pet-warm)"/>
    <rect x="1" y="3" width="10" height="1" fill="var(--pet-cream)"/>
    <rect x="0" y="4" width="12" height="4" fill="var(--pet-cream)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-cream)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-cream)"/>
    ${u(2,8,5)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="4" y="8" width="1" height="1" fill="var(--pet-eye)"/>
    <rect x="7" y="8" width="1" height="1" fill="var(--pet-eye)"/>
    ${l}
  `},{id:`goldie`,nameCn:`戈尔迪`,nameEn:`Goldie`,species:`Retriever`,speciesCn:`金毛`,tier:`common`,svg:`
    <rect x="0" y="1" width="2" height="5" fill="var(--pet-warm)"/>
    <rect x="10" y="1" width="2" height="5" fill="var(--pet-warm)"/>
    <rect x="1" y="6" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="10" y="6" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="1" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="1" y="2" width="10" height="5" fill="var(--pet-warm)"/>
    <rect x="2" y="7" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="8" width="6" height="2" fill="var(--pet-cream)"/>
    <rect x="4" y="10" width="4" height="1" fill="var(--pet-cream)"/>
    ${u(2,8,3)}
    <rect x="5" y="8" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="9" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`eucy`,nameCn:`尤西`,nameEn:`Eucy`,species:`Koala`,speciesCn:`考拉`,tier:`common`,svg:`
    <rect x="0" y="1" width="3" height="3" fill="var(--pet-warm)"/>
    <rect x="9" y="1" width="3" height="3" fill="var(--pet-warm)"/>
    <rect x="1" y="2" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="10" y="2" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="2" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="3" width="8" height="5" fill="var(--pet-warm)"/>
    <rect x="2" y="8" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="9" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="4" y="10" width="4" height="1" fill="var(--pet-warm)"/>
    ${u(3,7,4)}
    <rect x="4" y="7" width="4" height="2" fill="var(--pet-edge)"/>
    <rect x="5" y="6" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`piggy`,nameCn:`皮吉`,nameEn:`Piggy`,species:`Pig`,speciesCn:`小猪`,tier:`common`,svg:`
    <rect x="1" y="0" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="9" y="0" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="0" y="1" width="3" height="1" fill="var(--pet-cream)"/>
    <rect x="9" y="1" width="3" height="1" fill="var(--pet-cream)"/>
    <rect x="1" y="1" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="10" y="1" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="0" y="2" width="12" height="6" fill="var(--pet-cream)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-cream)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-cream)"/>
    ${u(2,8,4)}
    <rect x="4" y="6" width="4" height="2" fill="var(--pet-orange)"/>
    <rect x="5" y="6" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="6" y="6" width="1" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`remy`,nameCn:`雷米`,nameEn:`Remy`,species:`Mouse`,speciesCn:`老鼠`,tier:`common`,svg:`
    <rect x="0" y="0" width="4" height="4" fill="var(--pet-warm)"/>
    <rect x="8" y="0" width="4" height="4" fill="var(--pet-warm)"/>
    <rect x="1" y="1" width="2" height="2" fill="var(--pet-cream)"/>
    <rect x="9" y="1" width="2" height="2" fill="var(--pet-cream)"/>
    <rect x="1" y="4" width="10" height="4" fill="var(--pet-warm)"/>
    <rect x="2" y="8" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="9" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="4" y="10" width="4" height="1" fill="var(--pet-warm)"/>
    <rect x="5" y="11" width="2" height="1" fill="var(--pet-warm)"/>
    ${u(2,8,5)}
    <rect x="5" y="8" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`ducky`,nameCn:`达奇`,nameEn:`Ducky`,species:`Duck`,speciesCn:`小鸭`,tier:`common`,svg:`
    <rect x="2" y="0" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="1" y="1" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="2" width="12" height="4" fill="var(--pet-warm)"/>
    <rect x="1" y="6" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="7" width="8" height="1" fill="var(--pet-warm)"/>
    ${u(2,8,3)}
    <rect x="3" y="6" width="6" height="2" fill="var(--pet-orange)"/>
    <rect x="2" y="7" width="8" height="1" fill="var(--pet-orange)"/>
    <rect x="5" y="6" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="0" y="8" width="12" height="2" fill="var(--pet-cream)"/>
    <rect x="1" y="10" width="10" height="1" fill="var(--pet-cream)"/>
    <rect x="3" y="11" width="2" height="1" fill="var(--pet-orange)"/>
    <rect x="7" y="11" width="2" height="1" fill="var(--pet-orange)"/>
    ${l}
  `},{id:`momo`,nameCn:`莫莫`,nameEn:`Momo`,species:`Monkey`,speciesCn:`猴子`,tier:`common`,svg:`
    <rect x="0" y="2" width="2" height="4" fill="var(--pet-edge)"/>
    <rect x="10" y="2" width="2" height="4" fill="var(--pet-edge)"/>
    <rect x="0" y="3" width="1" height="2" fill="var(--pet-cream)"/>
    <rect x="11" y="3" width="1" height="2" fill="var(--pet-cream)"/>
    <rect x="2" y="1" width="8" height="1" fill="var(--pet-edge)"/>
    <rect x="2" y="2" width="8" height="1" fill="var(--pet-edge)"/>
    <rect x="2" y="3" width="8" height="5" fill="var(--pet-cream)"/>
    <rect x="2" y="8" width="8" height="1" fill="var(--pet-edge)"/>
    <rect x="3" y="9" width="6" height="1" fill="var(--pet-edge)"/>
    <rect x="4" y="10" width="4" height="1" fill="var(--pet-edge)"/>
    ${u(3,7,4)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`wooly`,nameCn:`乌利`,nameEn:`Wooly`,species:`Sheep`,speciesCn:`小羊`,tier:`common`,svg:`
    <rect x="1" y="0" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="4" y="0" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="6" y="0" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="9" y="0" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="0" y="1" width="12" height="2" fill="var(--pet-cream)"/>
    <rect x="0" y="3" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="10" y="3" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="3" width="8" height="5" fill="var(--pet-warm)"/>
    <rect x="2" y="8" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="9" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="4" y="10" width="4" height="1" fill="var(--pet-warm)"/>
    ${u(3,7,4)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`finley`,nameCn:`芬利`,nameEn:`Finley`,species:`Fox`,speciesCn:`狐狸`,tier:`rare`,svg:`
    <rect x="0" y="0" width="2" height="1" fill="var(--pet-orange)"/>
    <rect x="10" y="0" width="2" height="1" fill="var(--pet-orange)"/>
    <rect x="0" y="1" width="2" height="2" fill="var(--pet-orange)"/>
    <rect x="10" y="1" width="2" height="2" fill="var(--pet-orange)"/>
    <rect x="1" y="2" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="10" y="2" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="2" width="8" height="1" fill="var(--pet-orange)"/>
    <rect x="1" y="3" width="10" height="4" fill="var(--pet-orange)"/>
    <rect x="0" y="4" width="1" height="3" fill="var(--pet-cream)"/>
    <rect x="11" y="4" width="1" height="3" fill="var(--pet-cream)"/>
    <rect x="3" y="7" width="6" height="1" fill="var(--pet-cream)"/>
    <rect x="4" y="8" width="4" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="7" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="9" y="7" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="3" y="9" width="6" height="1" fill="var(--pet-orange)"/>
    <rect x="4" y="10" width="4" height="1" fill="var(--pet-orange)"/>
    <rect x="5" y="11" width="2" height="1" fill="var(--pet-orange)"/>
    ${u(2,8,4)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="8" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="6" y="8" width="1" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`oliver`,nameCn:`奥利弗`,nameEn:`Oliver`,species:`Owl`,speciesCn:`猫头鹰`,tier:`rare`,svg:`
    <rect x="0" y="0" width="2" height="2" fill="var(--pet-warm)"/>
    <rect x="10" y="0" width="2" height="2" fill="var(--pet-warm)"/>
    <rect x="2" y="1" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="9" y="1" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="2" width="12" height="7" fill="var(--pet-warm)"/>
    <rect x="1" y="9" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="10" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="11" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="5" y="9" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="4" y="10" width="4" height="1" fill="var(--pet-cream)"/>
    <g class="eyes-round">
      <rect x="1" y="3" width="4" height="4" fill="var(--pet-eye)"/>
      <rect x="7" y="3" width="4" height="4" fill="var(--pet-eye)"/>
      <rect class="pupil" x="2" y="4" width="2" height="2" fill="var(--pet-pupil)"/>
      <rect class="pupil" x="8" y="4" width="2" height="2" fill="var(--pet-pupil)"/>
      <rect x="3" y="4" width="1" height="1" fill="var(--pet-eye)"/>
      <rect x="9" y="4" width="1" height="1" fill="var(--pet-eye)"/>
    </g>
    <g class="eyes-happy">
      <rect x="1" y="5" width="4" height="1" fill="var(--pet-edge)"/>
      <rect x="7" y="5" width="4" height="1" fill="var(--pet-edge)"/>
      <rect x="1" y="4" width="1" height="1" fill="var(--pet-edge)"/>
      <rect x="4" y="4" width="1" height="1" fill="var(--pet-edge)"/>
      <rect x="7" y="4" width="1" height="1" fill="var(--pet-edge)"/>
      <rect x="10" y="4" width="1" height="1" fill="var(--pet-edge)"/>
    </g>
    <g class="eyes-closed">
      <rect x="1" y="5" width="4" height="1" fill="var(--pet-edge)"/>
      <rect x="7" y="5" width="4" height="1" fill="var(--pet-edge)"/>
    </g>
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="8" width="1" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`otis`,nameCn:`奥蒂斯`,nameEn:`Otis`,species:`Otter`,speciesCn:`水獭`,tier:`rare`,svg:`
    <rect x="1" y="1" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="9" y="1" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="2" width="12" height="6" fill="var(--pet-warm)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="6" width="6" height="2" fill="var(--pet-cream)"/>
    <rect x="4" y="8" width="4" height="1" fill="var(--pet-cream)"/>
    ${u(2,8,4)}
    <rect x="5" y="6" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`quilly`,nameCn:`奎利`,nameEn:`Quilly`,species:`Hedgehog`,speciesCn:`刺猬`,tier:`rare`,svg:`
    <rect x="1" y="0" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="3" y="0" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="0" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="7" y="0" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="9" y="0" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="0" y="1" width="12" height="1" fill="var(--pet-edge)"/>
    <rect x="0" y="2" width="12" height="2" fill="var(--pet-warm)"/>
    <rect x="0" y="4" width="12" height="4" fill="var(--pet-cream)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-cream)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-cream)"/>
    ${u(2,8,5)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="8" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`rocky`,nameCn:`洛奇`,nameEn:`Rocky`,species:`Raccoon`,speciesCn:`浣熊`,tier:`rare`,svg:`
    <rect x="0" y="0" width="3" height="2" fill="var(--pet-warm)"/>
    <rect x="9" y="0" width="3" height="2" fill="var(--pet-warm)"/>
    <rect x="1" y="1" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="10" y="1" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="0" y="2" width="12" height="6" fill="var(--pet-warm)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="1" y="4" width="4" height="2" fill="var(--pet-edge)" opacity=".85"/>
    <rect x="7" y="4" width="4" height="2" fill="var(--pet-edge)" opacity=".85"/>
    ${u(2,8,4)}
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`pingu`,nameCn:`平古`,nameEn:`Pingu`,species:`Penguin`,speciesCn:`企鹅`,tier:`rare`,svg:`
    <rect x="2" y="0" width="8" height="1" fill="var(--pet-edge)"/>
    <rect x="1" y="1" width="10" height="2" fill="var(--pet-edge)"/>
    <rect x="0" y="3" width="12" height="2" fill="var(--pet-edge)"/>
    <rect x="2" y="5" width="8" height="5" fill="var(--pet-cream)"/>
    <rect x="0" y="5" width="2" height="4" fill="var(--pet-edge)"/>
    <rect x="10" y="5" width="2" height="4" fill="var(--pet-edge)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="11" width="3" height="1" fill="var(--pet-orange)"/>
    <rect x="7" y="11" width="3" height="1" fill="var(--pet-orange)"/>
    <g class="eyes-round">
      <rect x="3" y="2" width="2" height="2" fill="var(--pet-eye)"/>
      <rect x="7" y="2" width="2" height="2" fill="var(--pet-eye)"/>
      <rect class="pupil" x="4" y="3" width="1" height="1" fill="var(--pet-pupil)"/>
      <rect class="pupil" x="8" y="3" width="1" height="1" fill="var(--pet-pupil)"/>
    </g>
    ${s(3,7,2)}
    ${c(3,7,2)}
    <rect x="5" y="5" width="2" height="1" fill="var(--pet-orange)"/>
    ${l}
  `},{id:`shelly`,nameCn:`谢莉`,nameEn:`Shelly`,species:`Turtle`,speciesCn:`乌龟`,tier:`rare`,svg:`
    <rect x="3" y="1" width="6" height="1" fill="var(--pet-cream)"/>
    <rect x="2" y="2" width="8" height="5" fill="var(--pet-warm)"/>
    <rect x="3" y="3" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="7" y="3" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="5" y="4" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="3" y="5" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="7" y="5" width="2" height="1" fill="var(--pet-cream)"/>
    <rect x="1" y="7" width="10" height="2" fill="var(--pet-cream)"/>
    <rect x="0" y="9" width="3" height="1" fill="var(--pet-cream)"/>
    <rect x="9" y="9" width="3" height="1" fill="var(--pet-cream)"/>
    <rect x="4" y="9" width="4" height="2" fill="var(--pet-cream)"/>
    ${u(3,7,7)}
    <rect x="5" y="10" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`kermit`,nameCn:`柯米特`,nameEn:`Kermit`,species:`Frog`,speciesCn:`青蛙`,tier:`rare`,svg:`
    <rect x="1" y="0" width="3" height="3" fill="var(--pet-warm)"/>
    <rect x="8" y="0" width="3" height="3" fill="var(--pet-warm)"/>
    <rect x="2" y="1" width="1" height="1" fill="var(--pet-eye)"/>
    <rect x="9" y="1" width="1" height="1" fill="var(--pet-eye)"/>
    <rect x="2" y="2" width="1" height="1" fill="var(--pet-pupil)"/>
    <rect x="9" y="2" width="1" height="1" fill="var(--pet-pupil)"/>
    <rect x="0" y="3" width="12" height="5" fill="var(--pet-warm)"/>
    <rect x="1" y="8" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="9" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-warm)"/>
    <g class="eyes-happy">
      <rect x="2" y="2" width="1" height="1" fill="var(--pet-edge)"/>
      <rect x="9" y="2" width="1" height="1" fill="var(--pet-edge)"/>
    </g>
    <g class="eyes-closed">
      <rect x="1" y="2" width="3" height="1" fill="var(--pet-edge)"/>
      <rect x="8" y="2" width="3" height="1" fill="var(--pet-edge)"/>
    </g>
    <rect x="2" y="6" width="8" height="1" fill="var(--pet-edge)"/>
    <rect x="1" y="6" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="10" y="6" width="1" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`echo`,nameCn:`艾寇`,nameEn:`Echo`,species:`Bat`,speciesCn:`蝙蝠`,tier:`rare`,svg:`
    <rect x="1" y="0" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="9" y="0" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="0" y="1" width="3" height="2" fill="var(--pet-edge)"/>
    <rect x="9" y="1" width="3" height="2" fill="var(--pet-edge)"/>
    <rect x="1" y="1" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="10" y="1" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="3" width="12" height="4" fill="var(--pet-warm)"/>
    <rect x="1" y="7" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="8" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="7" width="1" height="2" fill="var(--pet-edge)"/>
    <rect x="11" y="7" width="1" height="2" fill="var(--pet-edge)"/>
    <rect x="0" y="9" width="4" height="1" fill="var(--pet-edge)"/>
    <rect x="8" y="9" width="4" height="1" fill="var(--pet-edge)"/>
    <rect x="1" y="10" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="9" y="10" width="2" height="1" fill="var(--pet-edge)"/>
    ${u(2,8,4)}
    <rect x="5" y="6" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="5" width="1" height="1" fill="var(--pet-eye)"/>
    <rect x="6" y="5" width="1" height="1" fill="var(--pet-eye)"/>
    ${l}
  `},{id:`sleepy`,nameCn:`斯利皮`,nameEn:`Sleepy`,species:`Sloth`,speciesCn:`树懒`,tier:`legendary`,svg:`
    <rect x="2" y="0" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="1" y="1" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="2" width="12" height="7" fill="var(--pet-warm)"/>
    <rect x="1" y="9" width="10" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="10" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="11" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="1" y="3" width="4" height="1" fill="var(--pet-edge)" opacity=".55"/>
    <rect x="7" y="3" width="4" height="1" fill="var(--pet-edge)" opacity=".55"/>
    <rect x="1" y="4" width="4" height="2" fill="var(--pet-edge)" opacity=".85"/>
    <rect x="7" y="4" width="4" height="2" fill="var(--pet-edge)" opacity=".85"/>
    <rect x="1" y="6" width="4" height="1" fill="var(--pet-edge)" opacity=".55"/>
    <rect x="7" y="6" width="4" height="1" fill="var(--pet-edge)" opacity=".55"/>
    <g class="eyes-round">
      <rect x="2" y="4" width="2" height="2" fill="var(--pet-eye)"/>
      <rect x="8" y="4" width="2" height="2" fill="var(--pet-eye)"/>
      <rect class="pupil" x="2" y="5" width="1" height="1" fill="var(--pet-pupil)"/>
      <rect class="pupil" x="9" y="5" width="1" height="1" fill="var(--pet-pupil)"/>
    </g>
    <g class="eyes-happy">
      <rect x="2" y="5" width="2" height="1" fill="var(--pet-eye)"/>
      <rect x="8" y="5" width="2" height="1" fill="var(--pet-eye)"/>
    </g>
    <g class="eyes-closed">
      <rect x="2" y="5" width="2" height="1" fill="var(--pet-eye)"/>
      <rect x="8" y="5" width="2" height="1" fill="var(--pet-eye)"/>
    </g>
    <rect x="5" y="7" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="4" y="8" width="1" height="1" fill="var(--pet-edge)"/>
    <rect x="5" y="8" width="2" height="1" fill="var(--pet-edge)"/>
    <rect x="7" y="8" width="1" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`octavio`,nameCn:`奥克塔维奥`,nameEn:`Octavio`,species:`Octopus`,speciesCn:`章鱼`,tier:`legendary`,svg:`
    <rect x="3" y="0" width="6" height="1" fill="var(--pet-orange)"/>
    <rect x="2" y="1" width="8" height="1" fill="var(--pet-orange)"/>
    <rect x="1" y="2" width="10" height="1" fill="var(--pet-orange)"/>
    <rect x="0" y="3" width="12" height="4" fill="var(--pet-orange)"/>
    <rect x="0" y="7" width="2" height="1" fill="var(--pet-orange)"/>
    <rect x="3" y="7" width="2" height="1" fill="var(--pet-orange)"/>
    <rect x="7" y="7" width="2" height="1" fill="var(--pet-orange)"/>
    <rect x="10" y="7" width="2" height="1" fill="var(--pet-orange)"/>
    <rect x="0" y="8" width="2" height="2" fill="var(--pet-orange)"/>
    <rect x="3" y="8" width="2" height="3" fill="var(--pet-orange)"/>
    <rect x="7" y="8" width="2" height="3" fill="var(--pet-orange)"/>
    <rect x="10" y="8" width="2" height="2" fill="var(--pet-orange)"/>
    <rect x="1" y="10" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="4" y="11" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="7" y="11" width="1" height="1" fill="var(--pet-orange)"/>
    <rect x="10" y="10" width="1" height="1" fill="var(--pet-orange)"/>
    ${u(2,8,3)}
    <rect x="5" y="5" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`pascal`,nameCn:`帕斯卡`,nameEn:`Pascal`,species:`Chameleon`,speciesCn:`变色龙`,tier:`legendary`,svg:`
    <rect x="0" y="2" width="2" height="2" fill="var(--pet-warm)"/>
    <rect x="0" y="1" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="2" width="8" height="5" fill="var(--pet-warm)"/>
    <rect x="1" y="3" width="1" height="3" fill="var(--pet-warm)"/>
    <rect x="10" y="1" width="2" height="4" fill="var(--pet-warm)"/>
    <rect x="9" y="0" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="7" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="8" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="4" y="9" width="4" height="1" fill="var(--pet-warm)"/>
    <rect x="5" y="10" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="5" y="11" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="4" y="11" width="1" height="1" fill="var(--pet-warm)"/>
    <rect x="3" y="10" width="1" height="1" fill="var(--pet-warm)"/>
    <g class="eyes-round">
      <rect x="2" y="3" width="3" height="3" fill="var(--pet-warm)"/>
      <rect x="3" y="4" width="1" height="1" fill="var(--pet-eye)"/>
      <rect class="pupil" x="3" y="4" width="1" height="1" fill="var(--pet-pupil)"/>
      <rect x="7" y="3" width="3" height="3" fill="var(--pet-warm)"/>
      <rect x="8" y="4" width="1" height="1" fill="var(--pet-eye)"/>
      <rect class="pupil" x="8" y="4" width="1" height="1" fill="var(--pet-pupil)"/>
    </g>
    <g class="eyes-happy">
      <rect x="2" y="4" width="3" height="1" fill="var(--pet-edge)"/>
      <rect x="7" y="4" width="3" height="1" fill="var(--pet-edge)"/>
    </g>
    <g class="eyes-closed">
      <rect x="2" y="4" width="3" height="1" fill="var(--pet-edge)"/>
      <rect x="7" y="4" width="3" height="1" fill="var(--pet-edge)"/>
    </g>
    <rect x="5" y="6" width="2" height="1" fill="var(--pet-edge)"/>
    ${l}
  `},{id:`dodie`,nameCn:`朵迪`,nameEn:`Dodie`,species:`Dodo`,speciesCn:`渡渡鸟`,tier:`legendary`,svg:`
    <rect x="2" y="0" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="1" y="1" width="8" height="1" fill="var(--pet-warm)"/>
    <rect x="0" y="2" width="10" height="5" fill="var(--pet-warm)"/>
    <rect x="1" y="7" width="9" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="8" width="8" height="2" fill="var(--pet-warm)"/>
    <rect x="3" y="10" width="6" height="1" fill="var(--pet-warm)"/>
    <rect x="2" y="11" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="8" y="11" width="2" height="1" fill="var(--pet-warm)"/>
    <rect x="9" y="4" width="3" height="2" fill="var(--pet-orange)"/>
    <rect x="11" y="6" width="1" height="1" fill="var(--pet-orange)"/>
    ${u(2,6,3)}
    <rect x="1" y="1" width="1" height="1" fill="var(--pet-cream)"/>
    <rect x="8" y="1" width="1" height="1" fill="var(--pet-cream)"/>
    ${l}
  `}];function f(){let e=Math.random()*100,t;t=e<a.common?`common`:e<a.common+a.rare?`rare`:`legendary`;let n=d.filter(e=>e.tier===t);return n[Math.floor(Math.random()*n.length)]}function p(e){return d.find(t=>t.id===e)??null}var m={common:{zh:`常见`,en:`Common`},rare:{zh:`稀有`,en:`Rare`},legendary:{zh:`传说`,en:`Legendary`}},h={milo:{stats:{int:5,str:4,dex:8},hobbyCn:`打盹晒太阳 · 偶尔追逐光点`,hobbyEn:`Nap in sunbeams, chase laser dots`},honey:{stats:{int:5,str:9,dex:4},hobbyCn:`寻找蜂蜜罐 · 冬眠前疯狂储脂`,hobbyEn:`Hunt honey jars, stock up for winter`},mochi:{stats:{int:6,str:6,dex:7},hobbyCn:`歪头装可爱 · 每天准时叫醒主人`,hobbyEn:`Head-tilt charm, wake owner at sunrise`},peanut:{stats:{int:4,str:2,dex:7},hobbyCn:`往腮帮子塞葵花籽 · 夜跑转轮`,hobbyEn:`Stuff cheeks with seeds, run on the wheel`},biscuit:{stats:{int:5,str:3,dex:9},hobbyCn:`啃胡萝卜 · 在草地上连续跳跃`,hobbyEn:`Nibble carrots, hop across the meadow`},goldie:{stats:{int:7,str:7,dex:7},hobbyCn:`追网球 · 对每个遇见的人摇尾巴`,hobbyEn:`Chase tennis balls, wag at everyone`},eucy:{stats:{int:5,str:5,dex:2},hobbyCn:`抱着树干睡 18 小时 · 只吃桉树叶`,hobbyEn:`Sleep 18h hugging trees, eucalyptus picky-eater`},piggy:{stats:{int:7,str:6,dex:4},hobbyCn:`在泥巴里打滚 · 能记住每个朋友`,hobbyEn:`Roll in mud, remember every friend`},remy:{stats:{int:8,str:2,dex:8},hobbyCn:`偷奶酪 · 对香料敏感（厨神潜质）`,hobbyEn:`Steal cheese, sniff-test every spice`},ducky:{stats:{int:4,str:4,dex:6},hobbyCn:`列队走路 · 在池塘里溅水`,hobbyEn:`Walk in line, splash in the pond`},momo:{stats:{int:8,str:6,dex:9},hobbyCn:`荡秋千 · 用工具撬开香蕉`,hobbyEn:`Swing branches, tool-pry bananas`},wooly:{stats:{int:4,str:5,dex:5},hobbyCn:`咀嚼三叶草 · 睡前数自己的毛`,hobbyEn:`Chew clover, count own fleece before sleep`},finley:{stats:{int:8,str:5,dex:9},hobbyCn:`夜晚漫步 · 收集闪亮的小东西`,hobbyEn:`Night strolls, collect shiny trinkets`},oliver:{stats:{int:10,str:3,dex:5},hobbyCn:`读论文到半夜 · 360 度转头听讲座`,hobbyEn:`Read papers till dawn, 360 degree head-turn at lectures`},otis:{stats:{int:9,str:5,dex:8},hobbyCn:`仰躺着砸贝壳 · 睡觉时拉着朋友的手`,hobbyEn:`Crack shells on belly, hold hands while sleeping`},quilly:{stats:{int:6,str:3,dex:6},hobbyCn:`遇到危险团成球 · 午夜散步吃蘑菇`,hobbyEn:`Curl into ball when startled, midnight mushroom walks`},rocky:{stats:{int:9,str:5,dex:8},hobbyCn:`翻垃圾箱解谜 · 会开家用锁`,hobbyEn:`Trash-can puzzles, picks household locks`},pingu:{stats:{int:6,str:6,dex:5},hobbyCn:`在冰面上滑肚皮 · 用石头筑巢求婚`,hobbyEn:`Belly-slide on ice, propose with pebbles`},shelly:{stats:{int:7,str:5,dex:2},hobbyCn:`慢慢爬 · 活 80 岁的秘密是佛系`,hobbyEn:`Slow and steady, lives 80+ by pure zen`},kermit:{stats:{int:5,str:4,dex:8},hobbyCn:`坐在荷叶上 · 用长舌捕蚊`,hobbyEn:`Sit on lily pads, tongue-snipe mosquitoes`},echo:{stats:{int:8,str:3,dex:9},hobbyCn:`倒挂午睡 · 用声波描摹整个洞穴`,hobbyEn:`Nap upside-down, echo-map the whole cave`},sleepy:{stats:{int:7,str:2,dex:1},hobbyCn:`发呆 8 小时 · 每周下一次树`,hobbyEn:`Stare 8h straight, descend tree once a week`},octavio:{stats:{int:10,str:6,dex:9},hobbyCn:`同时解 8 道题 · 能通过任何缝隙`,hobbyEn:`Solve 8 puzzles at once, squeeze through any gap`},pascal:{stats:{int:8,str:3,dex:10},hobbyCn:`变色融入背景 · 两眼独立转动`,hobbyEn:`Blend into any background, eyes rotate independently`},dodie:{stats:{int:5,str:6,dex:3},hobbyCn:`跑得慢曾被灭绝 · 如今永远陪你`,hobbyEn:`Too slow once, now forever by your side`}};function g(e){return h[e]??{stats:{int:5,str:5,dex:5},hobbyCn:`喜欢陪着你`,hobbyEn:`Enjoys your company`}}var _=`acePetState`;function v(e=Date.now()){let t=new Date(e);return t.setHours(8,0,0,0),t.getTime()<=e&&t.setDate(t.getDate()+1),t.getTime()}async function y(){let e=await chrome.storage.local.get([_,`acePetPosition`]),t=e[_];if(!t?.petId||!p(t.petId))return null;let n=e.acePetPosition,r={petId:t.petId,rerollsLeft:t.rerollsLeft??3,sinceMs:t.sinceMs??Date.now(),cooldownUntil:t.cooldownUntil??0,position:n??t.position??null,hatched:t.hatched??!0,mood:ee(t.mood??50),personalitySeed:t.personalitySeed,totalClicks:t.totalClicks,totalOnlineMs:t.totalOnlineMs,lastSeenMs:t.lastSeenMs,lastOfflineState:t.lastOfflineState,milestones:t.milestones,dailyBriefShownDate:t.dailyBriefShownDate,travel:t.travel},i=Date.now();if(t.cooldownUntil&&t.cooldownUntil>0&&i>=t.cooldownUntil){let e={...r,rerollsLeft:3,cooldownUntil:0};return await chrome.storage.local.set({[_]:e}),e}return r}function b(e,t){let n=2166136261,r=`${e}:${t}`;for(let e=0;e<r.length;e++)n^=r.charCodeAt(e),n=Math.imul(n,16777619);return(n>>>0)/4294967295}function x(e,t){return{personalitySeed:b(e,t),totalClicks:0,totalOnlineMs:0,lastSeenMs:t,milestones:[],travel:null}}function ee(e){return Number.isFinite(e)?Math.max(0,Math.min(100,Math.round(e))):50}async function te(){let e=f(),t=Date.now(),n={petId:e.id,rerollsLeft:3,sinceMs:t,cooldownUntil:0,position:null,hatched:!1,mood:50,...x(e.id,t)};return await chrome.storage.local.set({[_]:n}),{state:n,pet:e}}function ne(e){let t=(t,n)=>{n===`local`&&_ in t&&e(t[_].newValue??null)};return chrome.storage.onChanged.addListener(t),()=>chrome.storage.onChanged.removeListener(t)}function S(e){return e.cooldownUntil&&Date.now()<e.cooldownUntil?!1:e.rerollsLeft>0}async function C(e){if(!S(e))throw Error(`Reroll not allowed (cooldown or no quota)`);let t=f();for(let n=0;n<6&&t.id===e.petId;n++)t=f();let n=e.rerollsLeft-1,r=Date.now(),i={petId:t.id,rerollsLeft:n,sinceMs:r,cooldownUntil:n<=0?v():0,position:e.position,hatched:!1,mood:50,...x(t.id,r)};return await chrome.storage.local.set({[_]:i}),{state:i,pet:t}}function w(){return E(async()=>{let e=await y();!e||e.hatched||await chrome.storage.local.set({[_]:{...e,hatched:!0}})})}var T=Promise.resolve();function E(e){let t=T.then(e);return T=t.catch(()=>null),t}async function D(){let e=await y();if(!e)return null;let t=p(e.petId);if(t)return{state:e,pet:t};let n=f(),r={...e,petId:n.id,sinceMs:Date.now()};return await chrome.storage.local.set({[_]:r}),{state:r,pet:n}}function re(e){return e.cooldownUntil?Math.max(0,e.cooldownUntil-Date.now()):0}function O(e,t=`zh`){let n=Math.floor(e/(60*1e3)),r=Math.floor(n/60),i=n%60;return r>0?t===`en`?`${r}h ${i}m`:`${r} 时 ${i} 分`:i>0?t===`en`?`${i}m`:`${i} 分`:t===`en`?`< 1m`:`< 1 分`}var k={zh:{appearance:`外观`,themeSystem:`跟随系统`,themeLight:`浅色`,themeDark:`深色`,components:`组件`,componentTimeline:`时间线导航`,componentTimelineHint:`长对话轮次快速跳转 + 搜索入口`,componentCopy:`复制增强`,componentCopyHint:`5 类复制目标的图标胶囊`,componentPet:`Gloss Pet · 小宠物`,componentPetHint:`右下角情绪陪伴 · 无任务无通知`,railPosition:`时间线位置`,railSide:`位置`,railSideLeft:`左`,railSideRight:`右`,railRight:`距边框`,railRightHint:`适配宿主页面边栏留白`,railVCenter:`垂直中心`,railVCenterHint:`0 贴顶 · 50 居中 · 100 贴底`,railReset:`恢复默认（右 · 60 px · 50 %）`,companion:`你的同伴`,rarityHint:`一位不常见的朋友来了`,rerollAvailable:`换一只同伴（剩余 {{n}} 次）`,rerollCooldown:`冷却中 · 还剩 {{time}}`,rerollHint:`3 次用完后 · 每日 8 点恢复`,rerollHintCooldown:`等到次日 8 点自动恢复`,welcomeTitle:`欢迎来到 AI Gloss Tab`,welcomeSubtitle:`点击蛋壳，遇见你的第一位同伴`,welcomeDraw:`敲开蛋壳`,welcomeHatching:`正在相遇...`,welcomeStart:`开始使用`,welcomeHobbyLabel:`爱好`,footerFeedback:`反馈建议`,footerPrivacy:`隐私政策`,statusChecking:`检查中...`,statusActive:`已在 {{platform}} 注入`,statusInactive:`当前页面不在支持平台`,statusFailed:`{{platform}} · 选择器失效`,selectorFailedHint:`可能是平台更新了 DOM · `,selectorReport:`点此反馈`,selectorHealthOk:`健康`,selectorHealthFailed:`选择器失效`,diagTitle:`平台体检`,diagCopyJson:`复制自检 JSON`,diagCopyJsonHint:`提交反馈`,diagCopied:`已复制`,diagCopyFailed:`复制失败`,diagRerun:`重新跑体检`,diagRerunning:`正在跑...`,diagInactive:`当前不在支持的平台`,diagInactiveHint:`切到 ChatGPT / Claude / DeepSeek 等再打开`,diagNoReport:`还没有体检数据`,diagNoReportHint:`扩展刚重装时请刷新本平台页面后再试`,diagSummaryAllOk:`所有探针通过`,diagSummaryIssues:`{{danger}} 项失效 · {{warn}} 项告警`,diagGroupSelector:`DOM Selector`,diagGroupFunctional:`Functional`,diagGroupEngine:`Engine`,diagProbeParseMessages:`parseMessages()`,diagProbeFirstCode:`代码块`,diagProbeFirstFormula:`公式`,diagProbeScroll:`滚动容器`,diagProbeInput:`输入框`,diagCodeEngine:`代码块引擎`,diagFormulaEngine:`公式引擎`,diagVirtualList:`虚拟列表`,diagNoCode:`对话内无代码块`,diagNoFormula:`对话内无公式`,diagNotDetected:`未检测到`},en:{appearance:`Appearance`,themeSystem:`System`,themeLight:`Light`,themeDark:`Dark`,components:`Components`,componentTimeline:`Timeline Nav`,componentTimelineHint:`Jump between turns + search entry`,componentCopy:`Copy Enhancer`,componentCopyHint:`5 copy targets · icon capsules`,componentPet:`Gloss Pet · Companion`,componentPetHint:`Bottom-right emotional buddy · no tasks, no alerts`,railPosition:`Rail Position`,railSide:`Side`,railSideLeft:`Left`,railSideRight:`Right`,railRight:`Edge Offset`,railRightHint:`Adapts to host page edge margin`,railVCenter:`Vertical Center`,railVCenterHint:`0 top · 50 middle · 100 bottom`,railReset:`Reset (R · 60 px · 50 %)`,companion:`Your Companion`,rarityHint:`An uncommon friend has arrived`,rerollAvailable:`Swap companion ({{n}} left)`,rerollCooldown:`Cooling down · {{time}} left`,rerollHint:`Rerolls reset daily at 8:00`,rerollHintCooldown:`Resets at next 8:00`,welcomeTitle:`Welcome to AI Gloss Tab`,welcomeSubtitle:`Tap the egg to meet your first companion`,welcomeDraw:`Crack the Egg`,welcomeHatching:`Meeting...`,welcomeStart:`Start Using`,welcomeHobbyLabel:`Hobby`,footerFeedback:`Feedback`,footerPrivacy:`Privacy`,statusChecking:`Checking...`,statusActive:`Active on {{platform}}`,statusInactive:`Not on a supported page`,statusFailed:`{{platform}} · selector failed`,selectorFailedHint:`DOM may have changed · `,selectorReport:`Report`,selectorHealthOk:`OK`,selectorHealthFailed:`Selector failed`,diagTitle:`Platform Health`,diagCopyJson:`Copy Diagnostic JSON`,diagCopyJsonHint:`submit feedback`,diagCopied:`Copied`,diagCopyFailed:`Copy failed`,diagRerun:`Re-run Diagnostic`,diagRerunning:`Running...`,diagInactive:`Not on a supported platform`,diagInactiveHint:`Switch to ChatGPT / Claude / DeepSeek etc to run diagnostic`,diagNoReport:`No diagnostic data yet`,diagNoReportHint:`If the extension was just reloaded, refresh the page and retry`,diagSummaryAllOk:`All probes passed`,diagSummaryIssues:`{{danger}} errors · {{warn}} warnings`,diagGroupSelector:`DOM Selector`,diagGroupFunctional:`Functional`,diagGroupEngine:`Engine`,diagProbeParseMessages:`parseMessages()`,diagProbeFirstCode:`code block`,diagProbeFirstFormula:`formula`,diagProbeScroll:`scroll container`,diagProbeInput:`input element`,diagCodeEngine:`code engine`,diagFormulaEngine:`formula engine`,diagVirtualList:`virtual list`,diagNoCode:`no code blocks in conversation`,diagNoFormula:`no formulas in conversation`,diagNotDetected:`not detected`}},ie={"chatgpt.com":`ChatGPT`,"chat.openai.com":`ChatGPT`,"claude.ai":`Claude`,"gemini.google.com":`Gemini`,"chat.deepseek.com":`DeepSeek`,"kimi.moonshot.cn":`Kimi`,"kimi.com":`Kimi`,"www.kimi.com":`Kimi`,"tongyi.aliyun.com":`通义千问`,"www.tongyi.com":`通义千问`,"www.qianwen.com":`通义千问`,"www.doubao.com":`豆包`,"yuanbao.tencent.com":`元宝`,"yiyan.baidu.com":`文心一言`};function A(e){try{let{hostname:t}=new URL(e);return ie[t]||null}catch{return null}}function j(e){let t;t=e===`system`?window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`:e,document.documentElement.setAttribute(`data-theme`,t),document.documentElement.style.colorScheme=t}function M(e){let t=k[e];document.documentElement.lang=e===`zh`?`zh-CN`:`en`,document.querySelectorAll(`[data-i18n]`).forEach(e=>{let n=e.dataset.i18n;n&&t[n]&&(e.textContent=t[n])}),document.querySelectorAll(`[data-i18n-title]`).forEach(e=>{let n=e.dataset.i18nTitle;n&&t[n]&&(e.title=t[n],e.setAttribute(`aria-label`,t[n]))})}async function ae(){try{let{selectorHealth:e}=await chrome.storage.session.get(`selectorHealth`);return e??null}catch{return null}}var oe=`<polyline points="20 6 9 17 4 12"/>`,se=`<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`;function ce(e,t){let n=CSS?.supports?.(`selector(:has(*))`)??!1,r=navigator.userAgent,i=`[Selector 失效] ${e}`,a=[`平台 / Platform: ${e}`,`原因 / Reason: ${t||`unknown`}`,`:has() 支持 / Supported: ${n}`,`User-Agent: ${r}`,``,`请描述：页面上是否有 AI 回复？复制按钮在哪里缺失？`,`Please describe: Is there AI response on the page? Where are the copy buttons missing?`].join(`
`);return`https://github.com/Godvvs/gloss-tab/issues/new?title=${encodeURIComponent(i)}&body=${encodeURIComponent(a)}`}async function N(e){let t=document.getElementById(`status`),n=document.getElementById(`status-text`),r=document.getElementById(`health-badge`),i=document.getElementById(`health-icon`),a=document.getElementById(`health-label`),o=document.getElementById(`status-feedback`),s=k[e],c=()=>{i.innerHTML=oe,a.textContent=`OK`,r.title=s.selectorHealthOk},l=()=>{i.innerHTML=se,a.textContent=`!`,r.title=s.selectorHealthFailed};try{let[e]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!e?.url){t.classList.add(`inactive`),t.classList.remove(`unhealthy`),n.textContent=s.statusInactive,c();return}let r=A(e.url);if(!r){t.classList.add(`inactive`),t.classList.remove(`unhealthy`),n.textContent=s.statusInactive,c();return}let i=await ae();i&&i.ok===!1?(t.classList.remove(`inactive`),t.classList.add(`unhealthy`),n.innerHTML=s.statusFailed.replace(`{{platform}}`,`<span class="platform">${r}</span>`),l(),o&&(o.href=ce(r,i.reason),o.target=`_blank`,o.rel=`noopener noreferrer`)):(t.classList.remove(`inactive`,`unhealthy`),n.innerHTML=s.statusActive.replace(`{{platform}}`,`<span class="platform">${r}</span>`),c())}catch(e){console.debug(`[AI Gloss Tab Popup] tabs.query 失败:`,e),t.classList.add(`inactive`),t.classList.remove(`unhealthy`),n.textContent=s.statusInactive,c()}}var le={chatgpt:`ChatGPT`,claude:`Claude`,gemini:`Gemini`,deepseek:`DeepSeek`,kimi:`Kimi`,qwen:`通义千问`,doubao:`豆包`,yuanbao:`元宝`,wenxin:`文心一言`};async function P(){try{return(await chrome.storage.session.get(`diagnosticReport`)).diagnosticReport??null}catch{return null}}function F(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function I(e){return e}function L(e,t){let n=document.getElementById(`diag-summary`),r=document.getElementById(`diag-score-fg`),i=document.getElementById(`diag-score-num`),a=document.getElementById(`diag-summary-main`),o=document.getElementById(`diag-summary-sub`);if(n.classList.remove(`ok`,`warn`,`danger`),n.classList.add(e.overallStatus),i.textContent=String(Math.round(e.overallScore)),r){let t=Math.max(0,Math.min(10,e.overallScore))/10;r.setAttribute(`stroke-dasharray`,`${(113.1*t).toFixed(2)} 113.1`)}let s=e.alerts.filter(e=>e.level===`danger`).length,c=e.alerts.filter(e=>e.level===`warn`).length;s===0&&c===0?a.textContent=t.diagSummaryAllOk:a.textContent=t.diagSummaryIssues.replace(`{{danger}}`,String(s)).replace(`{{warn}}`,String(c));let l=new Date(e.ts).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});o.innerHTML=`<code>${F(e.selectorVersion)}</code> · ${F(l)} · ${e.functionalProbes.parseMessages.total} msg`}function R(e){let t=document.getElementById(`diag-alerts`);if(t.innerHTML=``,e.alerts.length!==0)for(let n of e.alerts){let e=document.createElement(`div`);e.className=`alert-card ${n.level}`,e.innerHTML=`
      <svg class="alert-icon" viewBox="0 0 24 24">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13" stroke-linecap="round"/>
        <line x1="12" y1="17" x2="12.01" y2="17" stroke-linecap="round"/>
      </svg>
      <div>
        <span class="alert-title">${F(n.title)}</span>
        <span class="alert-detail">${F(n.detail)}</span>
      </div>
    `,t.appendChild(e)}}function z(e,t,n,r=`ok`){let i=r===`ok`?``:r;return`
    <div class="probe-row">
      <div class="probe-dot ${I(t)}"></div>
      <div class="probe-name">${F(e)}</div>
      <div class="probe-val ${i}">${F(n)}</div>
    </div>
  `}function B(e,t){let n=document.getElementById(`diag-probe-groups`),r=[],i=``;for(let t of e.selectorProbes){let e=t.hits<0?`syntax err`:String(t.hits);i+=z(t.name,t.status,e,t.status)}r.push(`
    <div class="probe-group">
      <div class="probe-group-label">${F(t.diagGroupSelector)}</div>
      ${i}
    </div>
  `);let a=e.functionalProbes,o=a.parseMessages.total===0?`0`:`${a.parseMessages.user}U · ${a.parseMessages.assistant}A`,s=a.firstCodeBlock.found?a.firstCodeBlock.hasBannerLeak?`banner 泄漏`:a.firstCodeBlock.lang??`plaintext`:t.diagNoCode,c=a.firstFormula.found?a.firstFormula.latexPreview?`${a.firstFormula.engine} ok`:`${a.firstFormula.engine} miss`:t.diagNoFormula,l=a.scrollContainer.found?`${a.scrollContainer.scrollGap}px`:t.diagNotDetected,u=a.inputElement.found?a.inputElement.isContentEditable?`ce div`:`textarea`:t.diagNotDetected,d=z(t.diagProbeParseMessages,a.parseMessages.status,o,a.parseMessages.status)+z(t.diagProbeFirstCode,a.firstCodeBlock.status,s,a.firstCodeBlock.status)+z(t.diagProbeFirstFormula,a.firstFormula.status,c,a.firstFormula.status)+z(t.diagProbeScroll,a.scrollContainer.status,l,a.scrollContainer.status)+z(t.diagProbeInput,a.inputElement.status,u,a.inputElement.status);r.push(`
    <div class="probe-group">
      <div class="probe-group-label">${F(t.diagGroupFunctional)}</div>
      ${d}
    </div>
  `);let f=V(e),p=H(e),m=e.engines.virtualList.dataItemKey>0,h=z(t.diagCodeEngine,`ok`,f)+z(t.diagFormulaEngine,`ok`,p)+z(t.diagVirtualList,m?`warn`:`ok`,m?`${e.engines.virtualList.dataItemKey} 项`:`—`,m?`warn`:`ok`);r.push(`
    <div class="probe-group">
      <div class="probe-group-label">${F(t.diagGroupEngine)}</div>
      ${h}
    </div>
  `),n.innerHTML=r.join(``)}function V(e){let t=e.engines.codeBlockProbes;return t.customCodeBlock.length>0?`custom`:t.preCode>0?`pre code (${t.preCode})`:t.pre>0&&t.codeMirror>0?`pre+cm (${t.pre})`:t.pre>0?`pre (${t.pre})`:`—`}function H(e){let t=e.engines.formulaEngines;return t.mjxContainer>0?`MathJax (${t.mjxContainer})`:t.katex>0?`KaTeX (${t.katex})`:`—`}function U(e,t){let n=document.getElementById(`diag-probe-groups`);document.getElementById(`diag-alerts`).innerHTML=``,document.getElementById(`diag-summary`).classList.remove(`ok`,`warn`,`danger`),document.getElementById(`diag-score-num`).textContent=`—`,document.getElementById(`diag-summary-main`).textContent=e,document.getElementById(`diag-summary-sub`).textContent=t,document.getElementById(`diag-score-fg`)?.setAttribute(`stroke-dasharray`,`0 113.1`),n.innerHTML=``}async function W(e){let t=k[e],n=document.getElementById(`diag-platform-pill`),r=null,i=null,a;try{let[e]=await chrome.tabs.query({active:!0,currentWindow:!0});e?.url&&(r=new URL(e.url).hostname,i=A(e.url),a=e.id)}catch{}if(!i){n.textContent=`—`,U(t.diagInactive,t.diagInactiveHint);return}let o=await P();if((!o||o.host!==r)&&a!==void 0)try{let e=await chrome.tabs.sendMessage(a,{type:`runDiagnostic`});o=e?.ok&&e.report?e.report:await P()}catch{}if(n.textContent=o?le[o.platform]??i:i,!o||o.host!==r){U(t.diagNoReport,t.diagNoReportHint);return}L(o,t),R(o),B(o,t)}function ue(){document.querySelector(`.popup-wrapper`)?.classList.add(`mode-diag`)}function de(){document.querySelector(`.popup-wrapper`)?.classList.remove(`mode-diag`)}async function fe(e){let t=k[e],n=document.getElementById(`diag-copy-json`),r=document.getElementById(`diag-copy-label`);if(!n||!r)return;let i=r.textContent,a=await P();if(!a){r.textContent=t.diagCopyFailed,setTimeout(()=>{r.textContent=i},1500);return}try{await navigator.clipboard.writeText(JSON.stringify(a,null,2)),n.classList.add(`copied`),r.textContent=t.diagCopied,setTimeout(()=>{n.classList.remove(`copied`),r.textContent=i},1500)}catch{r.textContent=t.diagCopyFailed,setTimeout(()=>{r.textContent=i},1500)}}async function pe(e){let t=k[e],n=document.getElementById(`diag-rerun`);if(!n)return;let r=n.querySelector(`span`),i=r?.textContent??t.diagRerun;r&&(r.textContent=t.diagRerunning),n.disabled=!0;try{let[t]=await chrome.tabs.query({active:!0,currentWindow:!0});t?.id&&await chrome.tabs.sendMessage(t.id,{type:`runDiagnostic`}).catch(()=>{}),await W(e)}finally{n.disabled=!1,r&&(r.textContent=i)}}function G(e,t){document.querySelectorAll(`[data-seg="${e}"] [data-value]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.value===t)})}function K(e,t){(document.querySelector(`.toggle-row[data-toggle="${e}"]`)?.querySelector(`.toggle-sw`))?.classList.toggle(`on`,t)}function q(){document.getElementById(`welcome-section`)?.classList.remove(`hidden`),document.getElementById(`companion-section`)?.classList.add(`hidden`)}function J(){document.getElementById(`welcome-section`)?.classList.add(`hidden`),document.getElementById(`companion-section`)?.classList.remove(`hidden`)}function Y(e){document.querySelectorAll(`.welcome-stage`).forEach(t=>{t.style.display=t.dataset.stage===e?`flex`:`none`})}function me(){let e=document.getElementById(`hatch-area`);e&&(e.classList.remove(`playing`),e.offsetWidth,e.classList.add(`playing`))}function X(e,t){let n=Math.max(0,Math.min(10,Math.round(t)));return`
    <div class="stat-row">
      <span class="stat-label">${e}</span>
      <div class="stat-bar">${Array.from({length:10},(e,t)=>t<n?`<div class="stat-cell on"></div>`:`<div class="stat-cell"></div>`).join(``)}</div>
      <span class="stat-val">${n}/10</span>
    </div>
  `}function he(e,t){let n=g(e.id),r=k[t],i=t===`zh`?e.speciesCn:e.species,a=t===`zh`?n.hobbyCn:n.hobbyEn,o=m[e.tier][t],s=document.getElementById(`intro-pet-svg`);s&&(s.innerHTML=e.svg);let c=document.getElementById(`intro-name`);c&&(c.textContent=e.nameCn);let l=document.getElementById(`intro-species`);l&&(l.textContent=`${e.nameEn} · ${i} · ${o}`);let u=document.getElementById(`intro-stats`);u&&(u.innerHTML=X(`INT`,n.stats.int)+X(`STR`,n.stats.str)+X(`DEX`,n.stats.dex));let d=document.getElementById(`intro-hobby`);d&&(d.innerHTML=`<span class="label">${r.welcomeHobbyLabel}</span>${a}`)}var Z=null;function Q(e){let t=document.getElementById(`companion-section`),n=document.getElementById(`welcome-section`);e?t?.classList.remove(`hidden`):(t?.classList.add(`hidden`),n?.classList.add(`hidden`))}async function $(e,t=!1){let n=await D();if(!n)return;let{state:r,pet:i}=n,a=k[e],o=document.getElementById(`companion-portrait`);o&&(o.innerHTML=`<svg viewBox="0 0 12 12" shape-rendering="crispEdges">${i.svg}</svg>`);let s=document.getElementById(`companion-name`),c=document.getElementById(`companion-meta`);if(s&&(s.textContent=i.nameCn),c){let t=e===`zh`?i.speciesCn:i.species;c.textContent=`${i.nameEn} · ${t} · ${m[i.tier][e]}`}let l=document.getElementById(`rarity-hint`);l&&(t&&(i.tier===`rare`||i.tier===`legendary`)?(l.classList.remove(`hidden`),Z&&clearTimeout(Z),Z=setTimeout(()=>{l.classList.add(`hidden`)},1800)):t||l.classList.add(`hidden`));let u=document.getElementById(`reroll-btn`),d=document.getElementById(`reroll-label`),f=document.getElementById(`reroll-hint`);if(u&&d&&f)if(S(r))u.disabled=!1,d.textContent=a.rerollAvailable.replace(`{{n}}`,String(r.rerollsLeft)),f.textContent=a.rerollHint;else{u.disabled=!0;let t=O(re(r),e);d.textContent=a.rerollCooldown.replace(`{{time}}`,t),f.textContent=a.rerollHintCooldown}}async function ge(){let e=await r();j(e.theme),M(e.lang),G(`theme`,e.theme),G(`lang`,e.lang),K(`timeline`,e.components.timeline),K(`copy`,e.components.copy),K(`pet`,e.components.pet),await N(e.lang),await y()===null?(q(),Y(`welcome`)):(J(),await $(e.lang)),e.components.pet||Q(!1),document.querySelectorAll(`[data-seg="theme"] [data-value]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=t.dataset.value;e.theme=n,j(n),G(`theme`,n),await i(e)})}),document.querySelectorAll(`[data-seg="lang"] [data-value]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=t.dataset.value;e.lang=n,M(n),G(`lang`,n),await N(n),await y()&&await $(n),d(),await i(e)})}),document.querySelectorAll(`.toggle-row`).forEach(t=>{t.addEventListener(`click`,async n=>{if(n.target instanceof HTMLAnchorElement||n.target instanceof HTMLButtonElement)return;let r=t.dataset.toggle,a=!e.components[r];e.components[r]=a,K(r,a),r===`pet`&&(a?await y()===null?(q(),Y(`welcome`)):(J(),await $(e.lang)):Q(!1)),await i(e)})});let t=document.getElementById(`slider-rail-right`),n=document.getElementById(`slider-rail-v`),a=document.getElementById(`val-rail-right`),o=document.getElementById(`val-rail-v`),s=document.getElementById(`rail-reset`),c=document.getElementById(`rail-section`),l=document.getElementById(`rail-head`),u=document.getElementById(`rail-summary`),d=()=>{if(!u)return;let t=k[e.lang];u.textContent=`${e.railPosition.side===`left`?t.railSideLeft:t.railSideRight} · ${e.railPosition.right} px · ${e.railPosition.vCenter} %`},f=()=>{t.value=String(e.railPosition.right),n.value=String(e.railPosition.vCenter),a.textContent=`${e.railPosition.right} px`,o.textContent=`${e.railPosition.vCenter} %`,G(`side`,e.railPosition.side),d()};f(),l?.addEventListener(`click`,()=>{c?.classList.toggle(`expanded`)});let p=null,m=()=>{p&&clearTimeout(p),p=setTimeout(()=>{i(e)},120)};document.querySelectorAll(`[data-seg="side"] [data-value]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=t.dataset.value;e.railPosition.side=n,G(`side`,n),d(),await i(e)})}),t.addEventListener(`input`,()=>{e.railPosition.right=Number(t.value),a.textContent=`${e.railPosition.right} px`,d(),m()}),n.addEventListener(`input`,()=>{e.railPosition.vCenter=Number(n.value),o.textContent=`${e.railPosition.vCenter} %`,d(),m()}),s.addEventListener(`click`,async()=>{e.railPosition.side=`right`,e.railPosition.right=60,e.railPosition.vCenter=50,f(),await i(e)});let h=document.getElementById(`welcome-draw-btn`);h&&h.addEventListener(`click`,async()=>{try{let{pet:t}=await te(),n=document.getElementById(`hatch-pet-svg`);n&&(n.innerHTML=t.svg),Y(`hatching`),requestAnimationFrame(()=>me()),setTimeout(()=>{he(t,e.lang),Y(`intro`)},1900)}catch(e){console.debug(`[AI Gloss Tab Popup] initial draw failed:`,e)}});let g=document.getElementById(`welcome-finish-btn`);g&&g.addEventListener(`click`,async()=>{await w(),J(),await $(e.lang)});let _=document.getElementById(`welcome-egg`);_&&(_.style.cursor=`pointer`,_.addEventListener(`click`,()=>h?.click()));let v=document.getElementById(`reroll-btn`);v&&v.addEventListener(`click`,async t=>{t.stopPropagation();let n=await D();if(!n)return;let{state:r}=n;if(S(r))try{await C(r),await $(e.lang,!0)}catch(e){console.debug(`[AI Gloss Tab Popup] reroll failed:`,e)}}),ne(t=>{t===null?(q(),Y(`welcome`)):$(e.lang)}),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,()=>{e.theme===`system`&&j(`system`)}),document.getElementById(`health-badge`)?.addEventListener(`click`,async t=>{t.stopPropagation(),ue(),await W(e.lang)}),document.getElementById(`diag-back`)?.addEventListener(`click`,()=>{de()}),document.getElementById(`diag-copy-json`)?.addEventListener(`click`,async()=>{await fe(e.lang)}),document.getElementById(`diag-rerun`)?.addEventListener(`click`,async()=>{await pe(e.lang)}),console.log(`[AI Gloss Tab Popup] ready`,e)}ge();