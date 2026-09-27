const projects = [
{type:'ground',year:'2026',title:['Landfill rehabilitation, Aceh','Rehabilitasi TPA, Aceh'],company:'PT. Nindya Karya (Persero)',metric:'FoS 1.7',label:'SLOPE / EARTHWORKS',body:['Site layout, landscape design, and earthwork analysis for two landfill facilities.','Tata letak, desain lanskap, dan analisis pekerjaan tanah untuk dua fasilitas TPA.'],detail:['Contributed to post-disaster waste management infrastructure rehabilitation in Bireuen, Pidie Jaya, and Bener Meriah. Civil 3D supported land-use planning and cut-and-fill calculations; PLAXIS 2D analysis achieved a 1:1.5 landfill slope ratio with a factor of safety of 1.7.','Berkontribusi pada rehabilitasi infrastruktur persampahan pascabencana di Bireuen, Pidie Jaya, dan Bener Meriah. Civil 3D digunakan untuk penataan lahan dan perhitungan cut and fill; analisis PLAXIS 2D menghasilkan rasio lereng TPA 1:1,5 dengan faktor keamanan 1,7.'],art:'slope'},
{type:'road',year:'2025',title:['Fly Over Jetty Moronopo','Fly Over Jetty Moronopo'],company:'PT. Nusa Karya Arindo',metric:'560 m',label:'ALIGNMENT / CIVIL 3D',body:['Horizontal and vertical road alignment supporting jetty and mining haul operations.','Alinyemen horizontal dan vertikal jalan untuk operasi jetty dan angkutan tambang.'],detail:['Designed 560 m of alignment using Civil 3D and calculated 195,710 m³ of cut-and-fill volume for earthwork estimation, applying mining road design principles.','Merancang alinyemen sepanjang 560 m menggunakan Civil 3D dan menghitung volume cut and fill 195.710 m³ untuk estimasi pekerjaan tanah dengan prinsip desain jalan tambang.'],art:'road'},
{type:'ground',year:'2025–2026',title:['Foundation recommendations','Rekomendasi pondasi'],company:'PT. Bintang Pondasi Borpile',metric:'150+',label:'SUBSURFACE / CPT & SPT',body:['Subsurface data analysis to inform safe, cost-efficient foundation recommendations.','Analisis data bawah permukaan untuk rekomendasi pondasi yang aman dan efisien.'],detail:['Analyzed more than 150 CPT/SPT datasets with conventional calculations and geotechnical software in accordance with SNI 8460:2017 and relevant ASTM standards. Monitored foundation works for constructability and project compliance.','Menganalisis lebih dari 150 dataset CPT/SPT melalui perhitungan konvensional dan perangkat lunak geoteknik sesuai SNI 8460:2017 dan ASTM terkait. Memantau pekerjaan pondasi untuk memastikan keterbangunan dan kesesuaian proyek.'],art:'ground'},
{type:'water',year:'2023–2024',title:['Water planning & drainage','Perencanaan air & drainase'],company:'Institut Teknologi Sumatera',metric:'2,350 m',label:'HYDROLOGY / DRAINAGE',body:['Community-focused water studies and drainage design across villages in Lampung.','Studi air dan desain drainase berbasis kebutuhan masyarakat di sejumlah desa di Lampung.'],detail:['Assessed rainfall and water availability for 845.81 ha in Sumber Rejo and effective rainfall for 543.2 ha in Giriklopomulyo. Developed a 2,350 m drainage design valued at IDR 2.55 billion in Putra Buyut. Separately conducted 10-year hydrologic and hydraulic analysis for Sidorejo.','Mengkaji curah hujan dan ketersediaan air pada 845,81 ha di Sumber Rejo serta hujan efektif untuk 543,2 ha di Giriklopomulyo. Menyusun desain drainase 2.350 m senilai Rp2,55 miliar di Putra Buyut. Secara terpisah melakukan analisis hidrologi dan hidraulika 10 tahun untuk Sidorejo.'],art:'water'},
{type:'road',year:'2024',title:['Road reconstruction — R.207','Rekonstruksi jalan — R.207'],company:'PT. Djuri Teknik',metric:'6.2 km',label:'SITE / QUALITY CONTROL',body:['Site supervision for Margo Lestari–Sukamaju road reconstruction in Jati Agung.','Pengawasan rekonstruksi jalan Margo Lestari–Sukamaju di Jati Agung.'],detail:['Supervised 6.2 km of road reconstruction and 2 km of drainage, with quantity verification alongside the inspector across three major work segments.','Mengawasi rekonstruksi jalan sepanjang 6,2 km dan drainase 2 km, serta memverifikasi kuantitas bersama inspektur pada tiga segmen pekerjaan utama.'],art:'road'}
];
const jobs = [
[['Jun 2026 — Present','Jun 2026 — Sekarang'],'Engineering Staff','PT. Nindya Karya (Persero)',['Contract','Kontrak'],['Site layouts, earthwork volumes, and slope stability for post-disaster landfill rehabilitation in Aceh.','Tata letak, volume pekerjaan tanah, dan stabilitas lereng untuk rehabilitasi TPA pascabencana di Aceh.']],
[['Aug 2025 — Jun 2026','Agu 2025 — Jun 2026'],'Geotechnical Engineer','PT. Bintang Pondasi Borpile',['Full-time','Penuh waktu'],['150+ CPT/SPT datasets analyzed for foundation recommendations and construction monitoring.','Analisis 150+ dataset CPT/SPT untuk rekomendasi pondasi dan pemantauan konstruksi.']],
[['Apr 2025 — Jun 2025','Apr 2025 — Jun 2025'],'Associate Road Engineer','PT. Nusa Karya Arindo',['Project','Proyek'],['560 m road alignment and 195,710 m³ cut-and-fill calculations for Fly Over Jetty Moronopo.','Alinyemen jalan 560 m dan perhitungan cut and fill 195.710 m³ untuk Fly Over Jetty Moronopo.']],
[['Jul 2024 — Sep 2024','Jul 2024 — Sep 2024'],'Site Supervisor','PT. Djuri Teknik',['Internship','Magang'],['Supervision of 6.2 km road reconstruction and 2 km drainage, including quantity verification.','Pengawasan rekonstruksi jalan 6,2 km dan drainase 2 km, termasuk verifikasi kuantitas.']],
[['Feb 2023 — Nov 2024','Feb 2023 — Nov 2024'],'Hydrologist & Estimator','Institut Teknologi Sumatera',['Project','Proyek'],['Rainfall analysis, agricultural water planning, drainage design, and community engagement in Lampung.','Analisis hujan, perencanaan air pertanian, desain drainase, dan pelibatan masyarakat di Lampung.']]
];
function graphic(type){
const grid='<defs><pattern id="grid-'+type+'" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="currentColor" stroke-opacity=".08"/></pattern></defs><rect width="600" height="240" fill="url(#grid-'+type+')"/>';
const drawings={slope:'<path d="M-20 185H120L245 95H355L465 165H620V240H-20Z" fill="#bdcbd8"/><path d="M-20 185H120L245 95H355L465 165H620" fill="none" stroke="#47617d" stroke-width="2"/><path d="M95 194Q290 250 435 153" fill="none" stroke="#927344" stroke-dasharray="5 5"/><path d="M245 95V185H120" fill="none" stroke="#47617d" stroke-dasharray="3 5"/>',road:'<path d="M-50 225C120 240 95 35 270 105S425 215 650 25" fill="none" stroke="#c3ccd7" stroke-width="72"/><path d="M-50 225C120 240 95 35 270 105S425 215 650 25" fill="none" stroke="#334d69" stroke-width="40"/><path d="M-50 225C120 240 95 35 270 105S425 215 650 25" fill="none" stroke="#edf1f6" stroke-width="2" stroke-dasharray="12 12"/>',ground:'<path d="M0 105Q110 75 220 110T600 100V240H0Z" fill="#ced6df"/><path d="M0 160Q180 130 340 168T600 160V240H0Z" fill="#a9b8c9"/><g fill="#455f7b"><rect x="165" y="75" width="12" height="123"/><rect x="290" y="75" width="12" height="140"/><rect x="415" y="75" width="12" height="112"/><rect x="140" y="65" width="310" height="14"/></g><path d="M100 110L110 137 98 155 115 184 105 210" fill="none" stroke="#927344" stroke-width="2"/>',water:'<path d="M0 70Q130 130 250 65T600 85M0 120Q150 170 280 120T600 135M0 180Q120 210 280 170T600 195" fill="none" stroke="#b6c4d2" stroke-width="2"/><path d="M-30 65C190 20 200 210 350 150S490 45 650 90" fill="none" stroke="#849fb9" stroke-width="27"/><path d="M-30 65C190 20 200 210 350 150S490 45 650 90" fill="none" stroke="#edf3f8" stroke-width="2" stroke-dasharray="7 9"/>'};
return '<svg viewBox="0 0 600 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'+grid+drawings[type]+'</svg>';
}
let lang='en',filter='all';
try{lang=localStorage.getItem('portfolio-language')==='id'?'id':'en';}catch{}
function render(){const n=lang==='en'?0:1;document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[lang]);const toggle=document.getElementById('language');toggle.textContent=n?'EN':'ID';toggle.setAttribute('aria-label',n?'Switch to English':'Ganti ke bahasa Indonesia');document.getElementById('projects-list').innerHTML=projects.map((p,i)=>`<article class="project" data-type="${p.type}" ${filter!=='all'&&filter!==p.type?'hidden':''}><div class="art">${graphic(p.art).replaceAll('grid-'+p.art,'grid-'+i)}<span class="art-label">${p.label}</span><span class="art-metric">${p.metric}</span></div><div class="project-meta"><span>${p.company}</span><span>${p.year}</span></div><h3>${p.title[n]}</h3><p>${p.body[n]}</p><details><summary>${n?'Lingkup & kontribusi':'Scope & contribution'}</summary><p>${p.detail[n]}</p></details></article>`).join('');

document.getElementById('timeline').innerHTML=jobs.map((j,i)=>`<article><p class="date">${j[0][n]}${i===0?'<span>'+(n?'Saat ini':'Current')+'</span>':''}</p><h3>${j[1]}</h3><p class="company">${j[2]} · ${j[3][n]}</p><p class="desc">${j[4][n]}</p></article>`).join('');}
render();
document.getElementById('language').addEventListener('click',()=>{lang=lang==='en'?'id':'en';try{localStorage.setItem('portfolio-language',lang)}catch{}render();closeMenu()});
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{filter=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});document.querySelectorAll('.project').forEach(p=>p.hidden=filter!=='all'&&p.dataset.type!==filter)}));
const menu=document.getElementById('menu'),nav=document.getElementById('nav');function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';menu.setAttribute('aria-label',lang==='en'?'Open navigation':'Buka navigasi')}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';menu.setAttribute('aria-label',lang==='en'?(open?'Close navigation':'Open navigation'):(open?'Tutup navigasi':'Buka navigasi'))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});


// Interaction motion respects OS accessibility preferences.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
function enter(elements) {
  if (reducedMotion.matches) return;
  elements.forEach((el, i) => {
    el.getAnimations().forEach(animation => animation.cancel());
    el.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],
      {duration:420,delay:Math.min(i,5)*45,easing:'cubic-bezier(.22,1,.36,1)'});
  });
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  enter([...document.querySelectorAll('.project:not([hidden])')]);
}));
document.getElementById('language').addEventListener('click', () => {
  enter([...document.querySelectorAll('.statement,.intro,.heading h2,.project:not([hidden])')]);
});
document.addEventListener('click', event => {
  const control = event.target.closest('.button,.filters button,#language,#menu,.arrow');
  if (control && !reducedMotion.matches) {
    const rect = control.getBoundingClientRect();
    const wave = document.createElement('span');
    wave.className = 'click-wave';
    wave.setAttribute('aria-hidden','true');
    wave.style.left = (event.detail ? event.clientX - rect.left : rect.width / 2) + 'px';
    wave.style.top = (event.detail ? event.clientY - rect.top : rect.height / 2) + 'px';
    control.append(wave);
    wave.addEventListener('animationend', () => wave.remove(), {once:true});
    setTimeout(() => wave.remove(), 650);
  }
  const summary = event.target.closest('summary');
  if (!summary || reducedMotion.matches) return;
  event.preventDefault();
  const details = summary.parentElement;
  if (details.dataset.animating) return;
  const opening = !details.open;
  const from = details.getBoundingClientRect().height;
  if (opening) details.open = true;
  const to = opening ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + parseFloat(getComputedStyle(details).paddingTop) + parseFloat(getComputedStyle(details).borderTopWidth);
  details.dataset.animating = 'true';
  details.style.overflow = 'hidden';
  const animation = details.animate([{height:from+'px'},{height:to+'px'}],{duration:280,easing:'cubic-bezier(.22,1,.36,1)'});
  const finish = () => {
    details.open = opening;
    details.style.overflow = '';
    delete details.dataset.animating;
  };
  animation.onfinish = finish;
  animation.oncancel = finish;
});
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  const href = link.getAttribute('href');
  const section = href === '#' ? document.querySelector('.hero') : document.querySelector(href);
  if (!section) return;
  nav.querySelectorAll('a').forEach(item => {
    if (item.getAttribute('href') === href) item.setAttribute('aria-current','location');
    else item.removeAttribute('aria-current');
  });
  if (!reducedMotion.matches) {
    const title = section.querySelector('h1,h2') || section;
    title.animate([{opacity:.45,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:550,easing:'cubic-bezier(.22,1,.36,1)'});
  }
}));
enter([...document.querySelectorAll('.hero>div,.metrics')]);

