document.title='韦舒媛｜AI 互动产品与体验设计';
document.querySelector('.mark').textContent='韦舒媛 / AI 互动产品';
document.querySelector('.hero-copy').innerHTML='<strong>AI 互动产品 / 产品体验设计</strong><p>我喜欢从需求拆解到 Agent 与交互链路，再到高保真原型全链路开发与设计。擅长用 AI 把创意做成可体验的产品，用实验与数据持续优化。</p>';
const projects=[
 {id:'hellycat',category:'ai',title:'HellyCat 洗猫猫',description:'个人主导、借助 AI 独立完成的休闲小游戏。从玩法、视觉、代码、音乐，到部署与 APK 打包，完成完整开发流程，支持电脑浏览器与安卓手机。',role:'个人主导 · AI 协作独立开发',date:'个人项目',color:'#b9f227',ink:'#111',url:'https://meowcat.fun/',apkUrl:'https://meowcat.fun/downloads/wash-cat-1.0.5.apk',media:[['video','手机实拍演示','assets/hellycat-mobile-demo.mp4',null,'assets/hellycat-demo-poster.jpg'],['image','猫咪小屋 · 白猫模式','assets/hellycat-preview.png','https://meowcat.fun/']]},
 {id:'kenx',category:'ai',title:'KIN//X AI 动捕系统',cardTitle:'KIN//X AI动捕产品',hoverCover:'assets/kinx-cover.webp',hoverCoverAlt:'KIN//X 抖音 AI 创变者黑客松 A3 项目海报',description:'AI 动捕产品实战。一款轻量化 AI 动捕工具，基于用户自定义素材视频重建 3D 数字分身及还原动作，支持多角度预览、FBX 可编辑导出与图生 3D 模型，集成多个模型一条龙输出，降低 3D 动作动画创作门槛。',cardDescription:'围绕传统动捕软件缺乏一体化导出流程的痛点，构建轻量化 AI 动捕工具。负责用户调研、产品体验、视觉规范、前端原型与路演，晋级华中赛区大区赛。',role:'用户研究 / 视觉定性 / 海报物料 / 产品负责人 / 前端优化 / 答辩路演',cardRole:'产品负责人 · 前端原型',date:'2026.06—2026.07 · 抖音 AI 创变者计划黑客松',cardDate:'2026.06—2026.07 · 抖音 AI 创变者黑客松',award:'抖音 AI 创变者计划黑客松长三角站二等奖；晋级大区赛 · 华中赛区',color:'#fff',ink:'#111',media:[['video','KIN//X 产品演示','assets/kinx-demo.mp4',null,'assets/kinx-demo-poster.jpg','landscape']],slides:[['4','背景调研'],['5','用户研究'],['6','用户分析与落地计划'],['7','用户画像'],['8','产品介绍与功能一览'],['9','创作过程'],['10','海报设计、界面设计与路演现场']]},
 {id:'cat-talk',category:'ai',title:'你说我猜 · 猫语趣味沟通器',hoverCover:'assets/cat-talk-poster-desktop.jpg',hoverCoverAlt:'你说我猜作品海报：蓝色浏览器与猫咪贴纸',description:'面向伴侣、家人和朋友的移动端趣味沟通产品。以猫语音频、贴纸可视化和双人猜谜承载情绪表达，尝试降低直接表达的压力，为关系修复、默契测试和亲子互动创造轻松的沟通入口。',cardDescription:'面向亲密关系中的情绪表达与互动需求，用 AI 猫语、贴纸可视化和双人猜谜设计轻松的沟通体验。负责需求梳理、交互流程与高保真 UI。获抖音 AI 创变者黑客松·游园会之星奖、第 14 届未来设计师大赛省二等奖。',role:'项目负责人 · 体验与交互设计',date:'2026.06—2026.07 · 抖音 AI 创变者黑客松',award:'抖音 AI 创变者黑客松 · 游园会之星奖；第 14 届未来设计师大赛省二等奖',color:'#3155f5',ink:'#fff',media:[['video','你说我猜 · 产品交互演示','assets/cat-talk-demo.mp4',null,'assets/cat-talk-demo-poster.jpg','landscape']]},
 {id:'afk',category:'experience',title:'AFK · AIGC 创意与增长',description:'在莉莉丝《剑与远征》项目组参与角色宣发与广告创意，协作建立 AIGC 素材生产流程；结合多轮 A/B 测试、海外用户洞察与投放复盘迭代创意。',role:'创意策划实习生 · 莉莉丝游戏',date:'2026.02—2026.04 · AFK Arena',color:'#fff',ink:'#111',media:[['video','广告与宣发视频'],['image','热点情报站截图（仅图片展示）'],['image','AIGC 工作流与投放复盘']]},
 {id:'huashan',category:'practice',title:'花山之响',description:'交互艺术装置作品。获第 20 届中国好创意数智声景专项赛全国总决赛数字交互空间类国家二等奖。',role:'交互装置 · 数智声景',date:'2026.08 · 国家二等奖',color:'#3155f5',ink:'#fff',media:[['video','装置现场与交互演示'],['image','空间与装置实拍'],['image','声景与交互设计']]},
 {id:'ancient-type',category:'practice',title:'古世界语的呢喃',description:'实验性字体设计项目。以视频与图片呈现字形实验、动态表达与设计过程。',role:'实验字体设计 · 动态视觉',date:'字体与视觉实验·中国好创意国家级二等奖',award:'中国好创意国家级二等奖',color:'#ff6b35',ink:'#111',media:[['video','字体动态实验'],['image','字形设计'],['image','字体应用与视觉实验']]},
 {id:'digital-equity',category:'practice',title:'裂隙之外：数字公平滑动叙事',description:'以数字公平为主题的 HTML5 交互作品。获 2026 年第 20 届中国好创意省级一等奖。',role:'HTML5 · 交互叙事',date:'2026.08 · 中国好创意省级一等奖',color:'#b9f227',ink:'#111',media:[['video','滑动叙事演示'],['image','交互页面'],['image','叙事结构与体验流程']]},
 {id:'her',category:'practice',title:'Her · 电影网页设计',description:'为喜欢的人工智能叙事电影《Her》创作的网页介绍设计。',role:'电影专题 · 网页设计',date:'个人网页设计项目',color:'#edb5d1',ink:'#111',media:[['image','网页首屏设计'],['image','电影叙事章节'],['image','网页界面与细节']]},
 {id:'cave',category:'practice',title:'CAVE',description:'手绘实验动画作品。获中国好创意省级一等奖。',role:'手绘实验动画',date:'中国好创意省级一等奖',color:'#111',ink:'#fff',media:[['video','动画正片'],['image','手绘分镜'],['image','逐帧画稿与制作过程']]},
 {id:'silent-release',category:'ai',title:'无声的发泄',description:'围绕“隐形崩溃”展开的 AI 数字交互游戏。通过计算机视觉捕捉面部动作，将愤怒、喜悦与悲伤转化为文字弹幕、护盾与能量反馈，让难以言说的压力获得可见、可互动的出口。',cardDescription:'将面部表情转化为弹幕、护盾与能量，让难以言说的压力获得出口。',cover:'assets/silent-venting-cover.jpg',coverAlt:'无声的发泄：微笑触发向日葵与文字粒子的游戏画面',coverBackground:'#f4dc87',role:'概念策划 · 交互设计 · AI 协作开发',date:'AI 交互游戏 · 计算机视觉',color:'#edb5d1',ink:'#111',media:[['video','无声的发泄 · 游戏交互演示','assets/silent-venting-demo.mp4',null,'assets/silent-venting-cover.jpg','landscape',true]]},
 {id:'wow-balloon',category:'practice',title:'哇！气球',description:'一件由我与八岁妹妹共同创作的声控交互装置游戏。从“想在家大喊，却被告知不礼貌”的生活片段出发，将声音转化为气球的膨胀、色彩与飞行，让情绪在安全的游戏空间里得到表达。',cardDescription:'与八岁妹妹共同创作，用声音推动气球飞向太空，探索情绪表达与自我接纳。',cover:'assets/wow-balloon-poster.jpg',coverAlt:'哇！气球作品展板：儿童使用 Arduino 声控装置与气球游戏的现场',coverBackground:'#ffbd2d',role:'共同创作 · 交互设计 · 软硬件实现',date:'声控交互装置 · 儿童情绪表达',color:'#edb5d1',ink:'#111',media:[['video','哇！气球 · 声控交互演示','assets/wow-balloon-demo.mp4',null,'assets/wow-balloon-demo-poster.jpg','landscape',true],['image','哇！气球 · 作品展板','assets/wow-balloon-poster.jpg',null,null,'poster']]}
];
const destinations={afk:'#experience-projects',huashan:'#signals-track','digital-equity':'#signals-track',her:'#signals-track','ancient-type':'#visuals-track',cave:'#visuals-track','silent-release':'#experiment-projects','wow-balloon':'#experiment-projects'};
document.querySelectorAll('#work article').forEach((article,index)=>article.dataset.project=projects[index].id);
projects.slice(3).forEach(p=>{
 const track=document.querySelector(destinations[p.id]);
 const card=document.createElement('article');card.className='card';card.dataset.project=p.id;
 card.innerHTML='<div><span class="eyebrow"></span><h3></h3><p></p></div><div class="card-foot"><span class="tag"></span><i data-lucide="arrow-up-right" aria-hidden="true"></i></div>';
 track.append(card);
});
const articles=[...document.querySelectorAll('article[data-project]')];
articles.forEach(article=>{
 const p=projects.find(project=>project.id===article.dataset.project);article.dataset.category=p.category;
 article.style.backgroundColor=p.color;article.style.color=p.ink;
 article.querySelector('h3').textContent=p.cardTitle||p.title;article.querySelector('p').textContent=p.cardDescription||p.description;
 article.querySelector('.eyebrow').textContent=p.cardDate||p.date;
 if(p.hoverCover){
  article.classList.add('has-hover-cover');
  const cover=document.createElement('div');cover.className='card-hover-cover';cover.setAttribute('aria-hidden','true');
  const image=document.createElement('img');image.src=p.hoverCover;image.alt=p.hoverCoverAlt;image.loading='lazy';image.decoding='async';
  cover.append(image);article.append(cover);
 }
 if(p.cover){
  article.classList.add('has-cover');
  const cover=document.createElement('div');cover.className='card-cover';cover.style.backgroundColor=p.coverBackground;
  const image=document.createElement('img');image.src=p.cover;image.alt=p.coverAlt;image.loading='lazy';image.decoding='async';
  cover.append(image);article.prepend(cover);
 }
 const tag=article.querySelector('.tag');if(tag)tag.textContent=p.cardRole||p.role;
 const detailTrigger=article.querySelector('.project-detail-trigger');
 if(detailTrigger){detailTrigger.addEventListener('click',()=>openProject(article,p));}
 else{
  article.tabIndex=0;article.setAttribute('role','button');article.setAttribute('aria-label','查看'+(p.cardTitle||p.title));article.setAttribute('aria-haspopup','dialog');
  article.addEventListener('click',e=>{e.preventDefault();openProject(article,p);});
  article.addEventListener('keydown',e=>{if(e.target===article&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openProject(article,p);}});
 }
});
document.querySelector('.about h2').innerHTML='理解需求，<br>也把体验做出来。';
document.querySelector('.about p').textContent='我是韦舒媛，四川美术学院数字媒体艺术专业，信息与交互设计方向。关注 AI 互动产品与体验设计，习惯把需求、交互、原型和验证串成一个完整过程。';
const education=document.createElement('div');education.className='education';
education.innerHTML='<div><strong>四川美术学院</strong><span>数字媒体艺术 · 信息与交互设计方向 / 2027 届</span></div><div><strong>北京航空航天大学（推免）</strong><span>信息艺术设计 · 人工智能影像研究 / 2027 年入学</span></div>';
document.querySelector('.about p').after(education);
document.querySelector('.facts').innerHTML='<div><b>2027</b><small>四川美术学院 · 本科毕业届</small></div><div><b>2.6%</b><small>年级排名前列 · 10/378</small></div><div><b>AI × 交互</b><small>求职方向</small></div>';
document.querySelector('footer .link').outerHTML='<a class="link" href="mailto:563428054@qq.com">563428054@qq.com <span>↗</span></a>';
document.querySelector('footer').lastElementChild.lastChild.textContent='© 2026 韦舒媛';
lucide.createIcons();

const reducedMotion=matchMedia('(prefers-reduced-motion:reduce)');
const detail=document.querySelector('#detail');
const surface=detail.querySelector('.project-surface');
const detailContent=detail.querySelector('.detail-content');
let sourceCard=null,sourceFocus=null,surfaceAnimation=null,contentAnimation=null;
function placeholder([type,label]){
 return `<figure class="media-placeholder ${type==='video'?'video-placeholder':'image-placeholder'}"><i data-lucide="${type==='video'?'clapperboard':'image'}" aria-hidden="true"></i><figcaption><strong>${label}</strong><span>${type==='video'?'视频':'图片'}待补充</span></figcaption></figure>`;
}
function projectMedia(media){
 const [type,label,src,href,poster,layout,idlePoster]=media;
 if(!src)return placeholder(media);
 if(type==='video'){
  const video=`<video controls playsinline preload="metadata"${poster?` poster="${poster}"`:''} aria-label="${label}"><source src="${src}" type="video/mp4">你的浏览器无法播放此视频。<a href="${src}">打开演示视频</a></video>`;
  return `<figure class="project-media demo-media${layout==='landscape'?' landscape-media':''}">${idlePoster&&poster?`<div class="video-stage" data-playing="false">${video}<div class="video-idle-poster"><img src="${poster}" alt="${label}封面"><button class="video-poster-play" type="button" aria-label="播放${label}" title="播放视频"><i data-lucide="play" aria-hidden="true"></i></button></div></div>`:video}<figcaption>${label}</figcaption></figure>`;
 }
 const img=`<img src="${src}" alt="${label}" loading="lazy" decoding="async" width="2560" height="1348">`;
 if(layout==='poster')return `<figure class="project-media poster-media"><a href="${src}" target="_blank" rel="noopener noreferrer" aria-label="查看${label}原图（新窗口打开）">${img}</a></figure>`;
 return `<figure class="project-media screenshot-media">${href?`<a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}，在线游玩（新窗口打开）">${img}</a>`:img}<figcaption>${label}${href?' / <a href="'+href+'" target="_blank" rel="noopener noreferrer">meowcat.fun <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>':''}</figcaption></figure>`;
}
function renderDetail(p){
 const headings=p.category==='ai'?['用户与问题','关键决策与交互','验证与复盘']:['创作与背景','设计与制作过程','结果与反思'];
 const body=document.querySelector('#detail-body');
 const playLink=p.url?`<a class="play-project" href="${p.url}" target="_blank" rel="noopener noreferrer">在线游玩 <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>`:'';
 const downloadLink=p.apkUrl?`<a class="play-project" href="${p.apkUrl}" target="_blank" rel="noopener noreferrer">下载安卓 APK <i data-lucide="download" aria-hidden="true"></i></a>`:'';
 let story;
 if(p.id==='hellycat')story=document.querySelector('#hellycat-case').innerHTML;
 else if(p.id==='cat-talk')story=document.querySelector('#cat-talk-case').innerHTML;
 else if(p.id==='silent-release')story=document.querySelector('#silent-venting-case').innerHTML;
 else if(p.id==='wow-balloon')story=`<section class="case-section poster-section"><h3>作品展板</h3>${projectMedia(p.media[1])}</section>`+document.querySelector('#wow-balloon-case').innerHTML;
 else if(p.slides)story=document.querySelector('#kinx-mvp-case').innerHTML+`<section class="kinx-poster-section" aria-label="KIN//X 项目海报">${projectMedia(['image','KIN//X 项目易拉宝海报','assets/kinx-rollup-poster.webp',null,null,'poster'])}</section><section class="case-section poster-section" aria-labelledby="kinx-process-title"><h3 id="kinx-process-title">创作过程</h3><div class="project-slides" aria-label="KIN//X 项目介绍">${p.slides.map(([file,label])=>`<figure class="project-slide"><a href="assets/kinx-${file}.jpg" target="_blank" rel="noopener noreferrer" aria-label="查看${label}原图（新窗口打开）"><img src="assets/kinx-${file}.jpg" alt="${label}" width="2425" height="1364" loading="lazy" decoding="async"></a></figure>`).join('')}</div></section>`;
 else story=`<section class="case-section"><h3>${headings[0]}</h3><p class="copy-placeholder">内容待补充</p></section><div class="media-gallery">${p.media.slice(1).map(projectMedia).join('')}</div><section class="case-section"><h3>${headings[1]}</h3><p class="copy-placeholder">内容待补充</p></section><section class="case-section"><h3>${headings[2]}</h3><p class="copy-placeholder">内容待补充</p></section>`;
 const award=p.award?`<dt>获奖情况</dt><dd>${p.award}</dd>`:'';
 body.innerHTML=`<section class="detail-intro detail-inner"><div><span class="eyebrow">${p.date}</span><h2 id="detail-title">${p.title}</h2><p>${p.description}</p><div class="detail-actions">${playLink}${downloadLink}</div></div><dl class="detail-meta"><dt>${p.category==='ai'||p.id==='afk'?'我的职责':'创作方向'}</dt><dd>${p.role}</dd>${award}<dt>${p.id==='hellycat'?'运行平台':'项目素材'}</dt><dd>${p.id==='hellycat'?'电脑浏览器 / 安卓手机':p.media.some(m=>m[0]==='video')?'视频 / 图片 / 过程记录':'界面图片 / 过程记录'}</dd></dl></section><div class="detail-canvas"><div class="detail-inner">${projectMedia(p.media[0])}${story}</div></div>`;
 const caseMedia=body.querySelector('.case-media');if(caseMedia)caseMedia.innerHTML=projectMedia(p.media[1]);
 body.querySelectorAll('.video-stage').forEach(stage=>{
  const video=stage.querySelector('video');
  const syncPoster=()=>stage.dataset.playing=String(!video.paused&&!video.ended);
  ['play','pause','ended'].forEach(event=>video.addEventListener(event,syncPoster));
  stage.querySelector('.video-poster-play').addEventListener('click',()=>{video.play().catch(()=>video.focus());});
 });
 const posterLink=body.querySelector('.poster-original');
 if(posterLink){
  const posterImage=posterLink.querySelector('img');
  const syncPosterLink=()=>{posterLink.href=posterImage.currentSrc||posterImage.src;};
  posterImage.addEventListener('load',syncPosterLink);if(posterImage.complete)syncPosterLink();
 }
 detail.style.setProperty('--project-bg',p.color);detail.style.setProperty('--project-ink',p.ink);
 lucide.createIcons({root:body});
}
function cardTransform(card){
 const rect=card.getBoundingClientRect();
 const scaleX=rect.width/innerWidth,scaleY=rect.height/innerHeight;
 const radius=parseFloat(getComputedStyle(card).borderTopRightRadius);
 return {transform:`translate(${rect.left}px,${rect.top}px) scale(${scaleX},${scaleY})`,borderTopRightRadius:`${radius/scaleX}px ${radius/scaleY}px`};
}
async function openProject(card,p){
 if(detail.open)return;
 sourceCard=card;sourceFocus=document.activeElement;renderDetail(p);
 const from=cardTransform(card);detail.dataset.state='opening';
 detail.showModal();surface.scrollTop=0;document.body.classList.add('project-open');
 if(!reducedMotion.matches){
  surfaceAnimation=surface.animate([from,{transform:'none',borderTopRightRadius:'0px'}],{duration:640,easing:'cubic-bezier(.2,.85,.2,1)',fill:'both'});
  contentAnimation=detailContent.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'none'}],{duration:360,delay:180,fill:'both',easing:'ease-out'});
  try{await surfaceAnimation.finished;}catch{}
  if(detail.dataset.state!=='opening')return;
  surfaceAnimation.cancel();contentAnimation.cancel();
 }
 detail.dataset.state='open';
}
async function closeProject(){
 if(!detail.open||detail.dataset.state==='closing')return;
 detail.querySelectorAll('video').forEach(video=>video.pause());
 detail.dataset.state='closing';surfaceAnimation?.cancel();contentAnimation?.cancel();
 if(!reducedMotion.matches&&sourceCard?.isConnected){
  surfaceAnimation=surface.animate([{transform:'none',borderTopRightRadius:'0px'},cardTransform(sourceCard)],{duration:440,easing:'cubic-bezier(.5,0,.3,1)',fill:'both'});
  contentAnimation=detailContent.animate([{opacity:1},{opacity:0}],{duration:160,fill:'both'});
  try{await surfaceAnimation.finished;}catch{}
 }
 detail.close();
}
detail.querySelector('.close').addEventListener('click',closeProject);
detail.querySelector('.return-projects').addEventListener('click',closeProject);
detail.addEventListener('cancel',e=>{e.preventDefault();closeProject();});
detail.addEventListener('close',()=>{
 detail.querySelectorAll('video').forEach(video=>video.pause());
 surfaceAnimation?.cancel();contentAnimation?.cancel();detail.dataset.state='closed';
 document.body.classList.remove('project-open');
 const target=sourceFocus?.isConnected?sourceFocus:sourceCard;target?.focus({preventScroll:true});
});

function setupCarousel(carousel){
const track=carousel.querySelector('.carousel-track');
const initialCards=[...track.children];
const prev=carousel.querySelector('[data-carousel-action="prev"]'),next=carousel.querySelector('[data-carousel-action="next"]');
const playback=carousel.querySelector('[data-carousel-action="playback"]');
// A second cycle keeps compact cards moving continuously when only two projects exist.
const copies=initialCards.map(card=>{
 const copy=card.cloneNode(true);const p=projects.find(project=>project.id===card.dataset.project);
 copy.removeAttribute('data-project');copy.dataset.carouselCopy=p.id;copy.tabIndex=-1;
 copy.setAttribute('aria-hidden','true');copy.removeAttribute('role');copy.removeAttribute('aria-label');copy.removeAttribute('aria-haspopup');
 copy.addEventListener('click',e=>{e.preventDefault();openProject(copy,p);});
 track.append(copy);return copy;
});
const loopCards=[...initialCards,...copies];
let carouselFrame=0;
function carouselStops(){
 const viewport=track.getBoundingClientRect();const inset=parseFloat(getComputedStyle(track).paddingLeft);
 const max=Math.max(0,track.scrollWidth-track.clientWidth);
 return [...new Set([...track.querySelectorAll('article:not([hidden])')].map(card=>Math.max(0,Math.min(max,Math.round(card.getBoundingClientRect().left-viewport.left+track.scrollLeft-inset)))).concat(max))];
}
function updateCarousel(){
 carouselFrame=0;if(document.querySelector('#signals').hidden)return;
 const max=Math.max(0,track.scrollWidth-track.clientWidth);prev.disabled=track.scrollLeft<=3;next.disabled=track.scrollLeft>=max-3;
}
function queueCarousel(){if(!carouselFrame)carouselFrame=requestAnimationFrame(updateCarousel);}
function scrollCarousel(direction){
 const stops=carouselStops();const destination=direction>0?stops.find(stop=>stop>track.scrollLeft+8):stops.slice().reverse().find(stop=>stop<track.scrollLeft-8);
 if(destination!==undefined)track.scrollTo({left:destination,behavior:reducedMotion.matches?'instant':'smooth'});
}
prev.addEventListener('click',()=>scrollCarousel(-1));next.addEventListener('click',()=>scrollCarousel(1));
track.addEventListener('scroll',queueCarousel,{passive:true});
track.addEventListener('keydown',e=>{
 if(e.altKey||e.ctrlKey||e.metaKey)return;
 keyboardPaused=true;syncAutoplay();
 if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();scrollCarousel(e.key==='ArrowRight'?1:-1);}
 if(e.key==='Home'||e.key==='End'){e.preventDefault();track.scrollTo({left:e.key==='Home'?0:track.scrollWidth,behavior:reducedMotion.matches?'instant':'smooth'});}
});
// Move a card to the end only after it has completely left the viewport.
let autoFrame=0,lastAutoTime=0,autoPosition=0,loopStep=0;
let inView=false,hoverPaused=false,keyboardPaused=false,touchPaused=false,manualPaused=false,touchTimer=0;
function measureLoop(){const first=track.firstElementChild;return first?first.getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap):0;}
function canAutoplay(){return inView&&!hoverPaused&&!keyboardPaused&&!touchPaused&&!manualPaused&&!detail.open&&!document.hidden&&!reducedMotion.matches&&!document.querySelector('#signals').hidden&&track.scrollWidth>track.clientWidth+1;}
function animateCarousel(time){
 autoFrame=0;if(!canAutoplay()){syncAutoplay();return;}
 if(lastAutoTime){
  autoPosition+=Math.min(time-lastAutoTime,64)*.072;
  while(loopStep>0&&autoPosition>=loopStep){track.append(track.firstElementChild);autoPosition-=loopStep;}
  track.scrollLeft=autoPosition;
 }
 lastAutoTime=time;autoFrame=requestAnimationFrame(animateCarousel);
}
function syncAutoplay(){
 const running=canAutoplay();carousel.dataset.autoplay=running?'running':'paused';
 if(running&&!autoFrame){autoPosition=track.scrollLeft;loopStep=measureLoop();lastAutoTime=0;autoFrame=requestAnimationFrame(animateCarousel);}
 if(!running&&autoFrame){cancelAnimationFrame(autoFrame);autoFrame=0;lastAutoTime=0;}
}
carousel.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){hoverPaused=true;syncAutoplay();}});
carousel.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch'){hoverPaused=false;syncAutoplay();}});
carousel.addEventListener('focusin',e=>{if(e.target.matches(':focus-visible')){keyboardPaused=true;syncAutoplay();}});
carousel.addEventListener('focusout',e=>{if(!carousel.contains(e.relatedTarget)){keyboardPaused=false;syncAutoplay();}});
carousel.addEventListener('pointerdown',e=>{keyboardPaused=false;if(e.pointerType==='touch'){clearTimeout(touchTimer);touchTimer=0;touchPaused=true;}syncAutoplay();});
function resumeAfterTouch(){clearTimeout(touchTimer);touchTimer=setTimeout(()=>{touchTimer=0;touchPaused=false;syncAutoplay();},800);}
addEventListener('pointerup',e=>{if(e.pointerType==='touch'&&touchPaused)resumeAfterTouch();});
addEventListener('pointercancel',e=>{if(e.pointerType==='touch'&&touchPaused)resumeAfterTouch();});
track.addEventListener('scroll',()=>{if(touchTimer)resumeAfterTouch();},{passive:true});
playback.addEventListener('click',()=>{
 manualPaused=!manualPaused;const label=manualPaused?'继续自动轮播':'暂停自动轮播';
 playback.setAttribute('aria-label',label);playback.title=label;playback.setAttribute('aria-pressed',String(manualPaused));
 playback.innerHTML=`<i data-lucide="${manualPaused?'play':'pause'}" aria-hidden="true"></i>`;lucide.createIcons();syncAutoplay();
});
new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;syncAutoplay();},{threshold:.05}).observe(track);
new ResizeObserver(()=>{loopStep=measureLoop();queueCarousel();syncAutoplay();}).observe(track);
new MutationObserver(syncAutoplay).observe(detail,{attributes:true,attributeFilter:['open']});
document.addEventListener('visibilitychange',syncAutoplay);reducedMotion.addEventListener('change',syncAutoplay);
document.fonts.ready.then(()=>{loopStep=measureLoop();queueCarousel();syncAutoplay();});
return {reset(){loopCards.forEach(card=>track.append(card));track.scrollTo({left:0,behavior:'instant'});autoPosition=0;queueCarousel();syncAutoplay();}};
}
const carousels=[...document.querySelectorAll('.carousel')].map(setupCarousel);
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 articles.forEach(article=>article.hidden=filter!=='all'&&article.dataset.category!==filter);
 document.querySelector('#signals').hidden=filter!=='all'&&filter!=='practice';
 document.querySelector('#experience').hidden=filter!=='all'&&filter!=='experience';
 document.querySelector('#experiments').hidden=filter!=='all'&&filter!=='ai';
 document.querySelector('#work > .grid').hidden=filter!=='all'&&filter!=='ai';
 document.querySelector('#hackathon-heading').hidden=filter!=='all'&&filter!=='ai';
 carousels.forEach(carousel=>carousel.reset());
}));

const bar=document.createElement('div');bar.className='progress';bar.setAttribute('aria-hidden','true');document.body.append(bar);
function progress(){const length=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(length?scrollY/length:0)+')';}addEventListener('scroll',progress,{passive:true});progress();
// A manual popover keeps the decorative cursor above native modal dialogs.
const glove=document.createElement('div');glove.className='glove';glove.setAttribute('aria-hidden','true');
if('showPopover' in glove)glove.setAttribute('popover','manual');
glove.innerHTML=`<svg viewBox="0 0 60 72" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
 <g class="cursor-state rest-hand"><path d="M16 54C9 47 3 40 5 36c2-5 7-3 12 2L9 17c-2-6 5-9 8-3l7 15-3-22c-1-6 7-7 8-1l4 22 2-19c1-6 8-5 8 1l-1 22 4-13c2-5 9-2 7 3l-4 23c-1 7-7 12-15 13Z"/><path d="m16 53 23-1 4 12-26 5Z"/><path fill="none" d="m24 37 2 9m7-10 1 9m7-9-1 9"/></g>
 <g class="cursor-state point-hand"><path d="M19 55C13 50 9 45 8 41l-4-9c-2-6 4-9 8-4l7 9L15 9c-1-7 8-8 9-1l5 24c0-7 9-8 10-1 2-7 10-5 10 2 6-4 11 1 9 8l-4 10c-2 5-9 8-16 8Z"/><path fill="#b9f227" d="m18 53 25 1 1 12-25 3Z"/><path fill="none" d="m31 37 2 9m8-10 1 10m7-9-1 9"/></g>
 <g class="cursor-state press-hand"><path d="M17 54C10 50 7 43 8 35l1-11c1-7 10-7 11 0 0-8 10-9 11-1 2-7 11-6 11 2 5-6 12-2 11 6l-1 13c-1 9-8 15-18 15Z"/><path d="M13 40c-5-7-1-13 5-11l15 6c5 2 3 9-2 8l-9-2"/><path fill="#b9f227" d="m17 54 26-1 1 13-25 3Z"/><path fill="none" d="m22 23 1 8m10-8 1 10m9-8 0 11"/></g>
</svg>`;
document.body.append(glove);
let x=-100,y=-100,px=-100,py=-100,frame=0,cursorActive=false;
function liftCursor(){if('showPopover' in glove){if(glove.matches(':popover-open'))glove.hidePopover();glove.showPopover();}}
function tick(){frame=0;if(!cursorActive)return;const ease=reducedMotion.matches?1:.72;px+=(x-px)*ease;py+=(y-py)*ease;glove.style.transform=`translate3d(${px}px,${py}px,0)`;if(Math.abs(x-px)+Math.abs(y-py)>.05)frame=requestAnimationFrame(tick);}
function moveCursor(e){
 if(e.pointerType!=='mouse')return;
 if(e.target.closest('video')){hideCursor();return;}
 x=e.clientX-19;y=e.clientY-8;
 if(!cursorActive){px=x;py=y;cursorActive=true;liftCursor();}
 glove.style.opacity='1';document.body.classList.add('custom-cursor');
 glove.classList.toggle('hover',!!e.target.closest('a,button,[role="button"]'));
 if(!frame)frame=requestAnimationFrame(tick);
}
function hideCursor(){cursorActive=false;glove.style.opacity='0';glove.classList.remove('down');document.body.classList.remove('custom-cursor');if(frame)cancelAnimationFrame(frame);frame=0;}
addEventListener('pointermove',moveCursor);
addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'){moveCursor(e);glove.classList.add('down');}else hideCursor();});
addEventListener('pointerup',()=>glove.classList.remove('down'));
addEventListener('pointercancel',hideCursor);addEventListener('blur',hideCursor);
document.documentElement.addEventListener('pointerleave',hideCursor);
document.addEventListener('visibilitychange',()=>{if(document.hidden)hideCursor();});
new MutationObserver(()=>{if(cursorActive){glove.classList.remove('hover','down');liftCursor();}}).observe(document.querySelector('#detail'),{attributes:true,attributeFilter:['open']});
