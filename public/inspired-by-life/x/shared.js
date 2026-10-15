// Shared chrome: chapter nav, narration (sound on/off remembered), captions, reveal-on-scroll, page transitions.
(function(){
  const BASE = "/inspired-by-life/x/";
  const CH = [
    ["quicksand","Quicksand"],["pillars","The Pillars"],["life","LIFE"],["check","Your Check"]
  ];
  const here = document.body.dataset.page;
  let soundOn = false;
  try { soundOn = localStorage.getItem("ibl-sound") === "1"; } catch(e){}

  // header
  const top = document.createElement("header");
  top.className = "top";
  top.innerHTML = `<a href="https://michaeltiger.com/inspired-by-life" aria-label="Inspired by LIFE by Michael Tiger"><img class="logo" src="${BASE}logo.png" alt="The Tiger's Edge"></a>
    <nav aria-label="Chapters"><ol class="chapters">${CH.map((c,i)=>`<li><a href="/inspired-by-life/${c[0]}" ${c[0]===here?'aria-current="page"':''}><span>0${i+1}</span><b class="lbl" style="font-weight:500">${c[1]}</b></a></li>`).join("")}</ol></nav>
    <button class="sound" type="button" aria-pressed="${soundOn}"><i></i><b style="font-weight:500">Narration</b></button>`;
  document.body.prepend(top);
  const sbtn = top.querySelector(".sound");

  const cap = document.createElement("div");
  cap.className = "caption"; cap.setAttribute("aria-live","polite");
  document.body.append(cap);

  let meta = {}; fetch(BASE+"vo/vo.json").then(r=>r.json()).then(j=>meta=j).catch(()=>{});
  let current = null, capTimer = null;
  function say(key, opts={}){
    const text = (meta[key]&&meta[key].text) || opts.text || "";
    if (text && soundOn){ cap.textContent = text; cap.classList.add("on"); clearTimeout(capTimer);
      const dur = ((meta[key]&&meta[key].dur)||5)*1000 + 900; capTimer = setTimeout(()=>cap.classList.remove("on"), dur); }
    if (!soundOn) return Promise.resolve();
    try { if (current) { current.pause(); } } catch(e){}
    current = new Audio(BASE+"vo/"+key+".mp3");
    return current.play().catch(()=>{});
  }
  function setSound(v){
    soundOn = v; sbtn.setAttribute("aria-pressed", String(v));
    try { localStorage.setItem("ibl-sound", v?"1":"0"); } catch(e){}
    if (!v && current) current.pause();
  }
  sbtn.addEventListener("click", ()=>setSound(!soundOn));

  // reveal
  const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }),{threshold:.2});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  // page transition on internal links
  document.addEventListener("click", e=>{
    const a = e.target.closest("a[href^='/inspired-by-life/']");
    if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault(); document.body.classList.add("leaving");
    setTimeout(()=>location.href = a.getAttribute("href"), 320);
  });

  window.IBL = { say, setSound, get soundOn(){ return soundOn; }, BASE };
})();
