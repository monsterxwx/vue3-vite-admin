import{br as xe,aJ as A,aN as ye,i as Ce,bs as Ie,aV as ee,v as N,aW as Se,aX as Le,O as y,ag as j,P as X,L as K,aT as q,j as D,aa as w,bt as Ee,w as ne,D as ae,S as te,_ as M,f as R,b1 as le,u as U,l as x,z as oe,A as se,y as J,q as g,s as a,X as G,m as S,b as T,bu as $,n as W,ac as Be,ai as re,C as ie,$ as O,B as ue,Y as Ge,p as Te,x as $e,F as Fe,G as de}from"./index-27329970.js";import{c as ce}from"./el-button-a17208c5.js";import{U as F,h as be}from"./el-popper-e731d890.js";var Ve=/\s/;function Ne(e){for(var n=e.length;n--&&Ve.test(e.charAt(n)););return n}var ze=/^\s+/;function Ae(e){return e&&e.slice(0,Ne(e)+1).replace(ze,"")}var Y=0/0,De=/^[-+]0x[0-9a-f]+$/i,we=/^0b[01]+$/i,Oe=/^0o[0-7]+$/i,Me=parseInt;function Q(e){if(typeof e=="number")return e;if(xe(e))return Y;if(A(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=A(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ae(e);var t=we.test(e);return t||Oe.test(e)?Me(e.slice(2),t?2:8):De.test(e)?Y:+e}var Re=function(){return ye.Date.now()};const z=Re;var Ue="Expected a function",We=Math.max,He=Math.min;function fn(e,n,t){var r,d,f,m,b,i,c=0,l=!1,p=!1,u=!0;if(typeof e!="function")throw new TypeError(Ue);n=Q(n)||0,A(t)&&(l=!!t.leading,p="maxWait"in t,f=p?We(Q(t.maxWait)||0,n):f,u="trailing"in t?!!t.trailing:u);function o(k){var C=r,E=d;return r=d=void 0,c=k,m=e.apply(E,C),m}function s(k){return c=k,b=setTimeout(B,n),l?o(k):m}function v(k){var C=k-i,E=k-c,P=n-C;return p?He(P,f-E):P}function h(k){var C=k-i,E=k-c;return i===void 0||C>=n||C<0||p&&E>=f}function B(){var k=z();if(h(k))return H(k);b=setTimeout(B,v(k))}function H(k){return b=void 0,u&&r?o(k):(r=d=void 0,m)}function ke(){b!==void 0&&clearTimeout(b),c=0,r=i=d=b=void 0}function ge(){return b===void 0?m:H(z())}function V(){var k=z(),C=h(k);if(r=arguments,d=this,i=k,C){if(b===void 0)return s(i);if(p)return clearTimeout(b),b=setTimeout(B,n),o(i)}return b===void 0&&(b=setTimeout(B,n)),m}return V.cancel=ke,V.flush=ge,V}const I=new Map;let Z;Ce&&(document.addEventListener("mousedown",e=>Z=e),document.addEventListener("mouseup",e=>{for(const n of I.values())for(const{documentHandler:t}of n)t(e,Z)}));function _(e,n){let t=[];return Array.isArray(n.arg)?t=n.arg:Ie(n.arg)&&t.push(n.arg),function(r,d){const f=n.instance.popperRef,m=r.target,b=d==null?void 0:d.target,i=!n||!n.instance,c=!m||!b,l=e.contains(m)||e.contains(b),p=e===m,u=t.length&&t.some(s=>s==null?void 0:s.contains(m))||t.length&&t.includes(b),o=f&&(f.contains(m)||f.contains(b));i||c||l||p||u||o||n.value(r,d)}}const vn={beforeMount(e,n){I.has(e)||I.set(e,[]),I.get(e).push({documentHandler:_(e,n),bindingFn:n.value})},updated(e,n){I.has(e)||I.set(e,[]);const t=I.get(e),r=t.findIndex(f=>f.bindingFn===n.oldValue),d={documentHandler:_(e,n),bindingFn:n.value};r>=0?t.splice(r,1,d):t.push(d)},unmounted(e){I.delete(e)}},Pe={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:ee,id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},me={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ee,tabindex:[String,Number]},L=()=>{const e=N(Se,{}),n=N(Le,{}),t=N("CheckboxGroup",{}),r=y(()=>t&&(t==null?void 0:t.name)==="ElCheckboxGroup"),d=y(()=>n.size);return{isGroup:r,checkboxGroup:t,elForm:e,elFormItemSize:d,elFormItem:n}},je=(e,{elFormItem:n})=>{const{inputId:t,isLabeledByFormItem:r}=ce(e,{formItemContext:n});return{isLabeledByFormItem:r,groupId:t}},Xe=e=>{const n=D(!1),{emit:t}=ae(),{isGroup:r,checkboxGroup:d,elFormItem:f}=L(),m=D(!1);return{model:y({get(){var i,c;return r.value?(i=d.modelValue)==null?void 0:i.value:(c=e.modelValue)!=null?c:n.value},set(i){var c;r.value&&Array.isArray(i)?(m.value=d.max!==void 0&&i.length>d.max.value,m.value===!1&&((c=d==null?void 0:d.changeEvent)==null||c.call(d,i))):(t(F,i),n.value=i)}}),isGroup:r,isLimitExceeded:m,elFormItem:f}},Ke=(e,n,{model:t})=>{const{isGroup:r,checkboxGroup:d}=L(),f=D(!1),m=w(d==null?void 0:d.checkboxGroupSize,{prop:!0}),b=y(()=>{const l=t.value;return Ee(l)==="[object Boolean]"?l:Array.isArray(l)?l.includes(e.label):l!=null?l===e.trueLabel:!!l}),i=w(y(()=>{var l;return r.value?(l=d==null?void 0:d.checkboxGroupSize)==null?void 0:l.value:void 0})),c=y(()=>!!(n.default||e.label));return{isChecked:b,focus:f,size:m,checkboxSize:i,hasOwnLabel:c}},qe=(e,{model:n,isChecked:t})=>{const{elForm:r,isGroup:d,checkboxGroup:f}=L(),m=y(()=>{var i,c;const l=(i=f.max)==null?void 0:i.value,p=(c=f.min)==null?void 0:c.value;return!!(l||p)&&n.value.length>=l&&!t.value||n.value.length<=p&&t.value});return{isDisabled:y(()=>{var i,c;const l=e.disabled||(r==null?void 0:r.disabled);return(c=d.value?((i=f.disabled)==null?void 0:i.value)||l||m.value:l)!=null?c:!1}),isLimitDisabled:m}},Je=(e,{model:n})=>{function t(){Array.isArray(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&t()},Ye=(e,{model:n,isLimitExceeded:t,hasOwnLabel:r,isDisabled:d,isLabeledByFormItem:f})=>{const{elFormItem:m}=L(),{emit:b}=ae();function i(u){var o,s;return u===e.trueLabel||u===!0?(o=e.trueLabel)!=null?o:!0:(s=e.falseLabel)!=null?s:!1}function c(u,o){b("change",i(u),o)}function l(u){if(t.value)return;const o=u.target;b("change",i(o.checked),u)}async function p(u){t.value||!r.value&&!d.value&&f.value&&(n.value=i([!1,e.falseLabel].includes(n.value)),await te(),c(n.value,u))}return ne(()=>e.modelValue,()=>{var u;(u=m==null?void 0:m.validate)==null||u.call(m,"change").catch(o=>be())}),{handleChange:l,onClickRoot:p}},fe={[F]:e=>j(e)||X(e)||K(e),change:e=>j(e)||X(e)||K(e)},Qe={[F]:e=>q(e),change:e=>q(e)},ve=(e,n)=>{const{model:t,isGroup:r,isLimitExceeded:d,elFormItem:f}=Xe(e),{focus:m,size:b,isChecked:i,checkboxSize:c,hasOwnLabel:l}=Ke(e,n,{model:t}),{isDisabled:p}=qe(e,{model:t,isChecked:i}),{inputId:u,isLabeledByFormItem:o}=ce(e,{formItemContext:f,disableIdGeneration:l,disableIdManagement:r}),{handleChange:s,onClickRoot:v}=Ye(e,{model:t,isLimitExceeded:d,hasOwnLabel:l,isDisabled:p,isLabeledByFormItem:o});return Je(e,{model:t}),{elFormItem:f,inputId:u,isLabeledByFormItem:o,isChecked:i,isDisabled:p,isGroup:r,checkboxSize:c,hasOwnLabel:l,model:t,handleChange:s,onClickRoot:v,focus:m,size:b}},Ze=["tabindex","role","aria-checked"],_e=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],en=["id","aria-hidden","disabled","value","name","tabindex"],nn={name:"ElCheckbox"},an=R({...nn,props:me,emits:fe,setup(e){const n=e,t=le(),{inputId:r,isLabeledByFormItem:d,isChecked:f,isDisabled:m,checkboxSize:b,hasOwnLabel:i,model:c,handleChange:l,onClickRoot:p,focus:u}=ve(n,t),o=U("checkbox");return(s,v)=>(x(),oe(ue(!a(i)&&a(d)?"span":"label"),{class:g([a(o).b(),a(o).m(a(b)),a(o).is("disabled",a(m)),a(o).is("bordered",s.border),a(o).is("checked",a(f))]),"aria-controls":s.indeterminate?s.controls:null,onClick:a(p)},{default:se(()=>[J("span",{class:g([a(o).e("input"),a(o).is("disabled",a(m)),a(o).is("checked",a(f)),a(o).is("indeterminate",s.indeterminate),a(o).is("focus",a(u))]),tabindex:s.indeterminate?0:void 0,role:s.indeterminate?"checkbox":void 0,"aria-checked":s.indeterminate?"mixed":void 0},[s.trueLabel||s.falseLabel?G((x(),S("input",{key:0,id:a(r),"onUpdate:modelValue":v[0]||(v[0]=h=>T(c)?c.value=h:null),class:g(a(o).e("original")),type:"checkbox","aria-hidden":s.indeterminate?"true":"false",name:s.name,tabindex:s.tabindex,disabled:a(m),"true-value":s.trueLabel,"false-value":s.falseLabel,onChange:v[1]||(v[1]=(...h)=>a(l)&&a(l)(...h)),onFocus:v[2]||(v[2]=h=>u.value=!0),onBlur:v[3]||(v[3]=h=>u.value=!1)},null,42,_e)),[[$,a(c)]]):G((x(),S("input",{key:1,id:a(r),"onUpdate:modelValue":v[4]||(v[4]=h=>T(c)?c.value=h:null),class:g(a(o).e("original")),type:"checkbox","aria-hidden":s.indeterminate?"true":"false",disabled:a(m),value:s.label,name:s.name,tabindex:s.tabindex,onChange:v[5]||(v[5]=(...h)=>a(l)&&a(l)(...h)),onFocus:v[6]||(v[6]=h=>u.value=!0),onBlur:v[7]||(v[7]=h=>u.value=!1)},null,42,en)),[[$,a(c)]]),J("span",{class:g(a(o).e("inner"))},null,2)],10,Ze),a(i)?(x(),S("span",{key:0,class:g(a(o).e("label"))},[W(s.$slots,"default"),s.$slots.default?O("v-if",!0):(x(),S(Be,{key:0},[re(ie(s.label),1)],64))],2)):O("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var tn=M(an,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ln=["name","tabindex","disabled","true-value","false-value"],on=["name","tabindex","disabled","value"],sn={name:"ElCheckboxButton"},rn=R({...sn,props:me,emits:fe,setup(e){const n=e,t=le(),{focus:r,isChecked:d,isDisabled:f,size:m,model:b,handleChange:i}=ve(n,t),{checkboxGroup:c}=L(),l=U("checkbox"),p=y(()=>{var u,o,s,v;const h=(o=(u=c==null?void 0:c.fill)==null?void 0:u.value)!=null?o:"";return{backgroundColor:h,borderColor:h,color:(v=(s=c==null?void 0:c.textColor)==null?void 0:s.value)!=null?v:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}});return(u,o)=>(x(),S("label",{class:g([a(l).b("button"),a(l).bm("button",a(m)),a(l).is("disabled",a(f)),a(l).is("checked",a(d)),a(l).is("focus",a(r))])},[u.trueLabel||u.falseLabel?G((x(),S("input",{key:0,"onUpdate:modelValue":o[0]||(o[0]=s=>T(b)?b.value=s:null),class:g(a(l).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:a(f),"true-value":u.trueLabel,"false-value":u.falseLabel,onChange:o[1]||(o[1]=(...s)=>a(i)&&a(i)(...s)),onFocus:o[2]||(o[2]=s=>r.value=!0),onBlur:o[3]||(o[3]=s=>r.value=!1)},null,42,ln)),[[$,a(b)]]):G((x(),S("input",{key:1,"onUpdate:modelValue":o[4]||(o[4]=s=>T(b)?b.value=s:null),class:g(a(l).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:a(f),value:u.label,onChange:o[5]||(o[5]=(...s)=>a(i)&&a(i)(...s)),onFocus:o[6]||(o[6]=s=>r.value=!0),onBlur:o[7]||(o[7]=s=>r.value=!1)},null,42,on)),[[$,a(b)]]),u.$slots.default||u.label?(x(),S("span",{key:2,class:g(a(l).be("button","inner")),style:Ge(a(d)?a(p):void 0)},[W(u.$slots,"default",{},()=>[re(ie(u.label),1)])],6)):O("v-if",!0)],2))}});var pe=M(rn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const un={name:"ElCheckboxGroup"},dn=R({...un,props:Pe,emits:Qe,setup(e,{emit:n}){const t=e,{elFormItem:r}=L(),{groupId:d,isLabeledByFormItem:f}=je(t,{elFormItem:r}),m=w(),b=U("checkbox"),i=l=>{n(F,l),te(()=>{n("change",l)})},c=y({get(){return t.modelValue},set(l){i(l)}});return Te("CheckboxGroup",{name:"ElCheckboxGroup",modelValue:c,...$e(t),checkboxGroupSize:m,changeEvent:i}),ne(()=>t.modelValue,()=>{var l;(l=r.validate)==null||l.call(r,"change").catch(p=>be())}),(l,p)=>(x(),oe(ue(l.tag),{id:a(d),class:g(a(b).b("group")),role:"group","aria-label":a(f)?void 0:l.label||"checkbox-group","aria-labelledby":a(f)?a(r).labelId:void 0},{default:se(()=>[W(l.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"]))}});var he=M(dn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const pn=Fe(tn,{CheckboxButton:pe,CheckboxGroup:he});de(pe);const hn=de(he);export{vn as C,pn as E,hn as a,fn as d};