import{H,_ as N}from"./HeaderBtn-PyNXf2Fs.js";import{d as U,r as C,o as j,a as Q,x as $,c as h,e as _,f as x,t as P,A as J,T as Y,B as K,C as X,$ as Z,a0 as ee,b as I,h as k,j as E,p as te,l as B,G as W,y as ne,k as oe,Q as ie,i as T,g as D,m as M,F as R,u as re}from"./index-qFNGwHMx.js";import{_ as se}from"./_plugin-vue_export-helper-x3n3nnut.js";import{e as ae,f as le}from"./result-kHM4hRBZ.js";import{u as ue}from"./file--QXUk0A-.js";import{u as ce}from"./exam-KCWDNrcA.js";import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-TKcs1WwL.js";import"./help-Nq3yPxnO.js";const de=w=>(K("data-v-2527179c"),w=w(),X(),w),pe={width:"156",height:"156"},fe=de(()=>x("circle",{cx:"78",cy:"78",r:"72",stroke:"#a6d5c2","stroke-width":"12",fill:"none"},null,-1)),he={class:"text-[#070417] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},ye={class:"text-xs"},me={class:"font-semibold text-lg"},ve=U({__name:"index",props:{time:{},title:{},class:{},ended:{type:Function}},setup(w){const b=C(null),f=C(null),c=C(0),d=w;j(()=>{c.value=d.time,f.value=setInterval(()=>{c.value--,s(),c.value<=0&&(clearInterval(f.value),d.ended())},1e3)}),Q(()=>{clearInterval(f.value),f.value=null});const n=$(()=>Y(c.value)),s=()=>{const e=b.value.r.baseVal.value*2*Math.PI;b.value.style.strokeDasharray=`${e} ${e}`,b.value.style.strokeDashoffset=`${e-c.value/d.time*e}`};return(o,e)=>(h(),_("div",{class:J(["flex justify-center items-center w-[156px] h-[156px]",d.class])},[(h(),_("svg",pe,[fe,x("circle",{cx:"78",cy:"78",r:"72",stroke:"#1B8B8C","stroke-width":"12",fill:"none",ref_key:"timerCircle",ref:b,style:{transform:"rotate(-90deg)","transform-origin":"center"}},null,512)])),x("div",he,[x("p",ye,P(d.title),1),x("b",me,P(n.value),1)])],2))}}),ge=se(ve,[["__scopeId","data-v-2527179c"]]);var G={exports:{}};/*!
 * 
 * js-audio-recorder - js audio recorder plugin
 * 
 * @version v1.0.7
 * @homepage https://github.com/2fps/recorder
 * @author 2fps <echoweb@126.com> (https://www.zhuyuntao.cn)
 * @license MIT
 *         
 */(function(w,b){(function(f,c){w.exports=c()})(Z,function(){return function(f){var c={};function d(n){if(c[n])return c[n].exports;var s=c[n]={i:n,l:!1,exports:{}};return f[n].call(s.exports,s,s.exports,d),s.l=!0,s.exports}return d.m=f,d.c=c,d.d=function(n,s,o){d.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:o})},d.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,s){if(1&s&&(n=d(n)),8&s||4&s&&typeof n=="object"&&n&&n.__esModule)return n;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&s&&typeof n!="string")for(var e in n)d.d(o,e,(function(t){return n[t]}).bind(null,e));return o},d.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(s,"a",s),s},d.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},d.p="",d(d.s=1)}([function(f,c,d){function n(s,o,e){for(var t=0;t<e.length;t++)s.setUint8(o+t,e.charCodeAt(t))}Object.defineProperty(c,"__esModule",{value:!0}),c.compress=function(s,o,e){for(var t=o/e,y=Math.max(t,1),u=s.left,a=s.right,i=Math.floor((u.length+a.length)/t),r=new Float32Array(i),l=0,g=0;l<i;){var p=Math.floor(g);r[l]=u[p],l++,a.length&&(r[l]=a[p],l++),g+=y}return r},c.encodePCM=function(s,o,e){e===void 0&&(e=!0);var t=0,y=s.length*(o/8),u=new ArrayBuffer(y),a=new DataView(u);if(o===8)for(var i=0;i<s.length;i++,t++){var r=(l=Math.max(-1,Math.min(1,s[i])))<0?128*l:127*l;r=+r+128,a.setInt8(t,r)}else for(i=0;i<s.length;i++,t+=2){var l=Math.max(-1,Math.min(1,s[i]));a.setInt16(t,l<0?32768*l:32767*l,e)}return a},c.encodeWAV=function(s,o,e,t,y,u){u===void 0&&(u=!0);var a=e>o?o:e,i=y,r=new ArrayBuffer(44+s.byteLength),l=new DataView(r),g=t,p=0;n(l,p,"RIFF"),p+=4,l.setUint32(p,36+s.byteLength,u),n(l,p+=4,"WAVE"),n(l,p+=4,"fmt "),p+=4,l.setUint32(p,16,u),p+=4,l.setUint16(p,1,u),p+=2,l.setUint16(p,g,u),p+=2,l.setUint32(p,a,u),p+=4,l.setUint32(p,g*a*(i/8),u),p+=4,l.setUint16(p,g*(i/8),u),p+=2,l.setUint16(p,i,u),n(l,p+=2,"data"),p+=4,l.setUint32(p,s.byteLength,u),p+=4;for(var m=0;m<s.byteLength;)l.setUint8(p,s.getUint8(m)),p++,m++;return l}},function(f,c,d){var n,s=this&&this.__extends||(n=function(u,a){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var l in r)r.hasOwnProperty(l)&&(i[l]=r[l])})(u,a)},function(u,a){function i(){this.constructor=u}n(u,a),u.prototype=a===null?Object.create(a):(i.prototype=a.prototype,new i)});Object.defineProperty(c,"__esModule",{value:!0});var o=d(2),e=d(0),t=d(3),y=function(u){function a(i){i===void 0&&(i={});var r=u.call(this,i)||this;return r.isrecording=!1,r.ispause=!1,r.isplaying=!1,r}return s(a,u),a.prototype.setOption=function(i){i===void 0&&(i={}),this.setNewOption(i)},a.prototype.start=function(){return this.isrecording?Promise.reject():(this.isrecording=!0,this.startRecord())},a.prototype.pause=function(){this.isrecording&&!this.ispause&&(this.ispause=!0,this.pauseRecord())},a.prototype.resume=function(){this.isrecording&&this.ispause&&(this.ispause=!1,this.resumeRecord())},a.prototype.stop=function(){this.isrecording&&(this.isrecording=!1,this.ispause=!1,this.stopRecord())},a.prototype.play=function(){this.stop(),this.isplaying=!0,this.onplay&&this.onplay(),t.default.addPlayEnd(this.onplayend);var i=this.getWAV();i.byteLength>44&&t.default.play(i.buffer)},a.prototype.getPlayTime=function(){return t.default.getPlayTime()},a.prototype.pausePlay=function(){!this.isrecording&&this.isplaying&&(this.isplaying=!1,this.onpauseplay&&this.onpauseplay(),t.default.pausePlay())},a.prototype.resumePlay=function(){this.isrecording||this.isplaying||(this.isplaying=!0,this.onresumeplay&&this.onresumeplay(),t.default.resumePlay())},a.prototype.stopPlay=function(){this.isrecording||(this.isplaying=!1,this.onstopplay&&this.onstopplay(),t.default.stopPlay())},a.prototype.destroy=function(){return t.default.destroyPlay(),this.destroyRecord()},a.prototype.getRecordAnalyseData=function(){return this.getAnalyseData()},a.prototype.getPlayAnalyseData=function(){return t.default.getAnalyseData()},a.prototype.getPCM=function(){this.stop();var i=this.getData();return i=e.compress(i,this.inputSampleRate,this.outputSampleRate),e.encodePCM(i,this.oututSampleBits,this.littleEdian)},a.prototype.getPCMBlob=function(){return new Blob([this.getPCM()])},a.prototype.downloadPCM=function(i){i===void 0&&(i="recorder");var r=this.getPCMBlob();o.downloadPCM(r,i)},a.prototype.getWAV=function(){var i=this.getPCM();return e.encodeWAV(i,this.inputSampleRate,this.outputSampleRate,this.config.numChannels,this.oututSampleBits,this.littleEdian)},a.prototype.getWAVBlob=function(){return new Blob([this.getWAV()],{type:"audio/wav"})},a.prototype.downloadWAV=function(i){i===void 0&&(i="recorder");var r=this.getWAVBlob();o.downloadWAV(r,i)},a.prototype.download=function(i,r,l){o.download(i,r,l)},a.prototype.getChannelData=function(){var i=this.getPCM(),r=i.byteLength,l=this.littleEdian,g={left:null,right:null};if(this.config.numChannels===2){var p=new DataView(new ArrayBuffer(r/2)),m=new DataView(new ArrayBuffer(r/2));if(this.config.sampleBits===16)for(var v=0;v<r/2;v+=2)p.setInt16(v,i.getInt16(2*v,l),l),m.setInt16(v,i.getInt16(2*v+2,l),l);else for(v=0;v<r/2;v+=2)p.setInt8(v,i.getInt8(2*v)),m.setInt8(v,i.getInt8(2*v+1));g.left=p,g.right=m}else g.left=i;return g},a}(d(5).default);c.default=y},function(f,c,d){function n(s,o,e){var t=document.createElement("a");t.href=window.URL.createObjectURL(s),t.download=o+"."+e,t.click()}Object.defineProperty(c,"__esModule",{value:!0}),c.downloadWAV=function(s,o){o===void 0&&(o="recorder"),n(s,o,"wav")},c.downloadPCM=function(s,o){o===void 0&&(o="recorder"),n(s,o,"pcm")},c.download=function(s,o,e){return n(s,o,e)}},function(f,c,d){Object.defineProperty(c,"__esModule",{value:!0});var n=d(4),s=null,o=0,e=0,t=null,y=null,u=null,a=!1,i=0,r=function(){};function l(){return a=!1,t.decodeAudioData(u.slice(0),function(m){(s=t.createBufferSource()).onended=function(){a||(i=t.currentTime-e+o,r())},s.buffer=m,s.connect(y),y.connect(t.destination),s.start(0,o),e=t.currentTime},function(m){n.throwError(m)})}function g(){s&&(s.stop(),s=null)}var p=function(){function m(){}return m.play=function(v){return t||(t=new(window.AudioContext||window.webkitAudioContext),(y=t.createAnalyser()).fftSize=2048),this.stopPlay(),u=v,i=0,l()},m.pausePlay=function(){g(),o+=t.currentTime-e,a=!0},m.resumePlay=function(){return l()},m.stopPlay=function(){o=0,u=null,g()},m.destroyPlay=function(){this.stopPlay()},m.getAnalyseData=function(){var v=new Uint8Array(y.frequencyBinCount);return y.getByteTimeDomainData(v),v},m.addPlayEnd=function(v){v===void 0&&(v=function(){}),r=v},m.getPlayTime=function(){var v=a?o:t.currentTime-e+o;return i||v},m}();c.default=p},function(f,c,d){Object.defineProperty(c,"__esModule",{value:!0}),c.throwError=function(n){throw new Error(n)}},function(f,c,d){Object.defineProperty(c,"__esModule",{value:!0});var n=d(0),s=function(){function o(e){e===void 0&&(e={}),this.size=0,this.lBuffer=[],this.rBuffer=[],this.tempPCM=[],this.inputSampleBits=16,this.fileSize=0,this.duration=0,this.needRecord=!0;var t,y=new(window.AudioContext||window.webkitAudioContext);this.inputSampleRate=y.sampleRate,this.setNewOption(e),this.littleEdian=(t=new ArrayBuffer(2),new DataView(t).setInt16(0,256,!0),new Int16Array(t)[0]===256),o.initUserMedia()}return o.prototype.setNewOption=function(e){e===void 0&&(e={}),this.config={sampleBits:~[8,16].indexOf(e.sampleBits)?e.sampleBits:16,sampleRate:~[8e3,11025,16e3,22050,24e3,44100,48e3].indexOf(e.sampleRate)?e.sampleRate:this.inputSampleRate,numChannels:~[1,2].indexOf(e.numChannels)?e.numChannels:1},this.outputSampleRate=this.config.sampleRate,this.oututSampleBits=this.config.sampleBits},o.prototype.startRecord=function(){var e=this;return this.context&&this.destroyRecord(),this.initRecorder(),navigator.mediaDevices.getUserMedia({audio:!0}).then(function(t){e.audioInput=e.context.createMediaStreamSource(t),e.stream=t}).then(function(){e.audioInput.connect(e.analyser),e.analyser.connect(e.recorder),e.recorder.connect(e.context.destination)})},o.prototype.pauseRecord=function(){this.needRecord=!1},o.prototype.resumeRecord=function(){this.needRecord=!0},o.prototype.stopRecord=function(){this.audioInput&&this.audioInput.disconnect(),this.source&&this.source.stop(),this.recorder.disconnect(),this.analyser.disconnect(),this.needRecord=!0},o.prototype.destroyRecord=function(){return this.clearRecordStatus(),this.stopStream(),this.closeAudioContext()},o.prototype.getAnalyseData=function(){var e=new Uint8Array(this.analyser.frequencyBinCount);return this.analyser.getByteTimeDomainData(e),e},o.prototype.getData=function(){return this.flat()},o.prototype.clearRecordStatus=function(){this.lBuffer.length=0,this.rBuffer.length=0,this.size=0,this.fileSize=0,this.PCM=null,this.audioInput=null,this.duration=0},o.prototype.flat=function(){var e=null,t=new Float32Array(0);this.config.numChannels===1?e=new Float32Array(this.size):(e=new Float32Array(this.size/2),t=new Float32Array(this.size/2));for(var y=0,u=0;u<this.lBuffer.length;u++)e.set(this.lBuffer[u],y),y+=this.lBuffer[u].length;for(y=0,u=0;u<this.rBuffer.length;u++)t.set(this.rBuffer[u],y),y+=this.rBuffer[u].length;return{left:e,right:t}},o.prototype.initRecorder=function(){var e=this;this.clearRecordStatus(),this.context=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048;var t=this.context.createScriptProcessor||this.context.createJavaScriptNode;this.recorder=t.apply(this.context,[4096,this.config.numChannels,this.config.numChannels]),this.recorder.onaudioprocess=function(y){if(e.needRecord){var u,a=y.inputBuffer.getChannelData(0),i=null;e.lBuffer.push(new Float32Array(a)),e.size+=a.length,e.config.numChannels===2&&(i=y.inputBuffer.getChannelData(1),e.rBuffer.push(new Float32Array(i)),e.size+=i.length),e.fileSize=Math.floor(e.size/Math.max(e.inputSampleRate/e.outputSampleRate,1))*(e.oututSampleBits/8),u=100*Math.max.apply(Math,a),e.duration+=4096/e.inputSampleRate,e.onprocess&&e.onprocess(e.duration),e.onprogress&&e.onprogress({duration:e.duration,fileSize:e.fileSize,vol:u})}}},o.prototype.stopStream=function(){this.stream&&this.stream.getTracks&&(this.stream.getTracks().forEach(function(e){return e.stop()}),this.stream=null)},o.prototype.closeAudioContext=function(){return this.context&&this.context.close&&this.context.state!=="closed"?this.context.close():new Promise(function(e){e()})},o.initUserMedia=function(){navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise(function(y,u){t.call(navigator,e,y,u)}):Promise.reject(new Error("浏览器不支持 getUserMedia !"))})},o.prototype.transformIntoPCM=function(e,t){var y=new Float32Array(e),u=new Float32Array(t),a=n.compress({left:y,right:u},this.inputSampleRate,this.outputSampleRate);return n.encodePCM(a,this.oututSampleBits,this.littleEdian)},o.getPermission=function(){return this.initUserMedia(),navigator.mediaDevices.getUserMedia({audio:!0}).then(function(e){e&&e.getTracks().forEach(function(t){return t.stop()})})},o}();c.default=s}]).default})})(G);var _e=G.exports,we=_e;const xe=ee(we);let O=null;function be(){if(O)return O;const w=new xe({sampleBits:16,sampleRate:16e3,numChannels:1});return O=w,w}function V(){return be()}function ke(){return V().start()}function Se(){return V().getWAVBlob()}function Pe(){V().destroy(),O=null}function Re(w,b){return new File([w],b,{type:w.type})}const Ae={class:"flex flex-col items-center justify-center"},Be={class:"text-[#475467] py-2"},Ce={class:"text-[#475467] py-2"},Me={class:"w-52 text-center mt-3",style:{border:"1px solid #475467"}},De={class:"bg-[#475467] text-white py-2.5"},qe={class:"text-[#475467] py-3"},q=U({__name:"timeBlock",props:{p:{},r:{},status:{},onended:{type:Function}},setup(w){const b=C(null),f=w,c=C(0),d=$(()=>Y(c.value,"seconds","HH:mm:ss")),n=async()=>{var o;clearInterval(b.value),await((o=f.onended)==null?void 0:o.call(f)),Pe()},s=()=>{n()};return j(()=>{c.value=f.status==="prepare"?f.p:f.r,f.status==="speak"&&ke(),b.value=setInterval(()=>{c.value--,c.value<=0&&n()},1e3)}),Q(()=>{clearInterval(b.value),b.value=null}),(o,e)=>{const t=I("a-button");return h(),_("div",Ae,[x("p",Be,"Preparation Time: "+P(f.p)+" Seconds",1),x("p",Ce,"Response Time: "+P(f.r)+" Seconds",1),x("div",Me,[x("h5",De,P(f.status==="prepare"?"PREPARATION TIME":"RESPONSE TIME"),1),x("p",qe,P(d.value),1)]),f.status==="speak"?(h(),k(t,{key:0,danger:"",type:"primary",class:"w-48 mt-4 h-10",onClick:s},{default:E(()=>[te(" STOP RECORDING ")]),_:1})):B("",!0)])}}}),Ie={class:"flex"},Oe={class:"flex flex-1 justify-center items-center overflow-hidden bg-white"},Te={key:0,class:"px-32 -mt-56"},Ee={class:"text-[#475467] text-xl pb-10 after:content-[''] after:w-[50%] after:h-[1px] after:bg-[#D0D5DD] after:block after:mx-auto after:mt-10"},Ue={key:1,class:"px-32 -mt-56"},je={class:"text-[#21272A] pb-10"},$e={class:"text-[#475467] text-xl pb-10"},Ve={class:"text-[#475467] text-xl pb-10 after:content-[''] after:w-[50%] after:h-[1px] after:bg-[#D0D5DD] after:block after:mx-auto after:mt-10"},Fe={key:2,class:"px-32 -mt-56"},ze={class:"text-[#475467] text-xl pb-10 after:content-[''] after:w-[50%] after:h-[1px] after:bg-[#D0D5DD] after:block after:mx-auto after:mt-10"},Ke=U({__name:"index",setup(w){const b=oe(),{query:f}=ie(),c=C(!0),d=ce(),n=C(),s=C(!1),o=W({horn:{title:"horn",id:"horn",disabled:!0,isShow:!1},continue:{title:"CONTINUE",id:"continue",disabled:!1,isShow:!0,onClick:()=>{n.value===0?n.value=1:t.value.order===1&&t.value.step===2?y():t.value.order===1&&t.value.step===3||t.value.order===2&&t.value.step===4||t.value.order===3&&t.value.step===4?a():t.value.step++,i()}}}),e=W([{type:"info",title:"Speaking",info_title:"Speaking Section Directions",question_title:["In this section, you will be able to demonstrate your ability to speak about a variety of topics. ","You will answer four questions by speaking into the microphone.","For each question, you will have time to prepare before giving your answer."]}]),t=$(()=>e[n.value]),y=()=>{e[n.value].step++;try{console.log("start record")}catch(r){console.error(r)}},u=async r=>{var l,g;await ae({question_id:(l=t.value)==null?void 0:l.question_id,answer_voice_link:r,duration:0,sheet_id:f.id}),await le(f.id,(g=t.value)==null?void 0:g.question_id)},a=async()=>{try{const r=Se(),l=`${t.value.question_id}-answer.wav`,g=Re(r,l),{url:p}=await ue(g);await u(p),n.value<e.length-1&&(n.value++,e[n.value].step=0,i()),s.value&&d.requestSubmitExam(f.id)}catch(r){console.log(r)}},i=()=>{b.replace({query:{...f,step:n.value,questionStep:e[n.value].step}})};return ne(()=>{var r,l;n.value===e.length-1&&((r=e[n.value])==null?void 0:r.step)===((l=e[n.value])==null?void 0:l.maxStep)?(s.value=!0,o.continue.isShow=!1):(s.value=!1,o.continue.isShow=!0)}),j(async()=>{await d.getExamData(f.id),n.value=Number(f.step)||0,d.examing_data.questions.map((r,l)=>{var p,m;const g=l+1;r.order===1?(r.maxStep=3,r.title="Speaking",r.guide={type:"info",title:"Speaking",question:g,info_title:`Question ${r.order} Directions`,question_title:["You will now give your opinion about a familiar topic. ","After you hear the question, you will have 15 seconds to prepare and 45 seconds to speak."]}):r.order===2||r.order===3?(r.maxStep=4,r.title="Speaking",r.guide={type:"info",title:"Listening",question:g,info_title:`Question ${r.order} Directions`,question_title:["Now you will read a passage about a campus situation and then listen to a conversation about the same topic. You will then answer a question, using information from both the reading passage and the conversation. You will have 30 seconds to prepare and 60 seconds to speak."]}):r.order===4&&(r.maxStep=3,r.title="Speaking",r.guide={type:"info",title:"Listening",question:g,info_title:`Question ${r.order} Directions`,question_title:["Now you will listen to a lecture. You will then be asked to summarize the lecture. You will have 20 seconds to prepare and 60 seconds to speak."]}),r.step=0,r.question_title=(p=r.question_title)==null?void 0:p.split(`
`),r.question_content=(m=r.question_content)==null?void 0:m.split(`
`)}),e.push(...d.examing_data.questions),e[n.value].step=Number(f.questionStep)||0,c.value=!1}),(r,l)=>{const g=I("a-spin"),p=I("b-header"),m=I("BQuesTitle"),v=I("a-layout");return c.value?(h(),k(g,{key:0,size:"large",tip:"试题加载中...",class:"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"})):(h(),k(v,{key:1,class:"w-full h-full flex flex-col"},{default:E(()=>{var F,z;return[T(p,{title:((F=re(f))==null?void 0:F.name)||"模拟考试"},{right:E(()=>[x("div",Ie,[(h(!0),_(R,null,D(Object.keys(o),S=>(h(),k(H,M(o[S],{key:S}),null,16))),128))])]),_:1},8,["title"]),((z=t.value)==null?void 0:z.type)==="info"?(h(),k(N,{key:0,title:t.value.title,info_title:t.value.info_title,question_title:t.value.question_title,is_show_footer:!0},null,8,["title","info_title","question_title"])):n.value>0&&t.value.step===0?(h(),k(N,{key:1,title:t.value.guide.title,info_title:t.value.guide.info_title,question_title:t.value.guide.question_title,is_show_footer:!0},null,8,["title","info_title","question_title"])):(h(),_(R,{key:2},[T(m,{title:t.value.title,index:n.value,length:e.length-1},null,8,["title","index","length"]),x("div",Oe,[t.value.order===1?(h(),_("div",Te,[x("div",Ee,[(h(!0),_(R,null,D(t.value.question_title,(S,A)=>(h(),_("p",{key:A},P(S),1))),128))]),t.value.step===2?(h(),k(q,M({key:0},t.value.keywords,{status:"prepare",onended:y}),null,16)):t.value.step===3?(h(),k(q,M({key:1},t.value.keywords,{status:"speak",onended:a}),null,16)):B("",!0)])):t.value.order===2||t.value.order===3?(h(),_("div",Ue,[t.value.step===1?(h(),_(R,{key:0},[x("h2",je,[(h(!0),_(R,null,D(t.value.question_title,(S,A)=>(h(),_("p",{key:A},P(S),1))),128))]),x("div",$e,[(h(!0),_(R,null,D(t.value.question_content,(S,A)=>(h(),_("p",{key:A},P(S),1))),128))]),T(ge,{time:45,title:"Reading time",class:"absolute right-16 bottom-16",ended:()=>{e[n.value].step++,i()}},null,8,["ended"])],64)):t.value.step===2?(h(),k(L,{key:1,title:"Please listen carefully.",url:t.value.voice_link,ended:()=>{e[n.value].step++,i()},img:"2"},null,8,["url","ended"])):t.value.step>2?(h(),_(R,{key:2},[x("div",Ve,[(h(!0),_(R,null,D(t.value.question_title,(S,A)=>(h(),_("p",{key:A},P(S),1))),128))]),t.value.step===3?(h(),k(q,M({key:0},t.value.keywords,{status:"prepare",onended:y}),null,16)):B("",!0),t.value.step===4?(h(),k(q,M({key:1},t.value.keywords,{status:"speak",onended:a}),null,16)):B("",!0)],64)):B("",!0)])):t.value.order===4?(h(),_("div",Fe,[t.value.step===1?(h(),k(L,{key:0,title:"Please listen carefully.",url:t.value.voice_link,img:"2",ended:()=>{e[n.value].step++,i()}},null,8,["url","ended"])):t.value.step>1?(h(),_(R,{key:1},[x("div",ze,[(h(!0),_(R,null,D(t.value.question_title,(S,A)=>(h(),_("p",{key:A},P(S),1))),128))]),t.value.step===2?(h(),k(q,M({key:0},t.value.keywords,{status:"prepare",onended:y}),null,16)):B("",!0),t.value.step===3?(h(),k(q,M({key:1},t.value.keywords,{status:"speak",onended:a}),null,16)):B("",!0)],64)):B("",!0)])):B("",!0)])],64))]}),_:1}))}}});export{Ke as default};
