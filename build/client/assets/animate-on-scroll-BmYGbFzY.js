import{r as h,j as s}from"./jsx-runtime-BfF-YriY.js";import{m as N,a as I}from"./transition-DVSgZb6N.js";import{H as v,C as L}from"./custonNavLink-CcJZnLvH.js";import{S as R,a as $}from"./snapScrollPage-pgr6U6lG.js";import{N as C}from"./navContainer-lXWniVTZ.js";import{a as A,R as U,F as b}from"./hStackFull-CFb3YDvE.js";import{B as V}from"./box-BdT0KxCu.js";import{V as D}from"./vStack-xcuHHABo.js";import{F as X}from"./flex-COvQVarW.js";import"./components-BL27QBWM.js";import"./vStackFull-BVjnb3Lo.js";const k=({children:a,animation:o="slideInY",duration:t=1,xOffset:n="40vw",yOffset:c="20vh",zoomInFrom:l=.1,zoomOutFrom:r=2.5,zoomOutXOffset:y="60vw",zoomOutYOffset:p="40vh",delay:e=.2,className:g})=>{const[i,j]=h.useState(!1),m=h.useRef(null),f={slideInX:{hidden:{x:n,opacity:0},visible:{x:0,opacity:1,transition:{duration:t,delay:i?e:0}}},slideInY:{hidden:{y:c,opacity:0},visible:{y:0,opacity:1,transition:{duration:t,delay:i?e:0}}},fadeIn:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:t,delay:i?e:0}}},fadeSlideUpperRight:{hidden:{x:n,y:`-${c}`,opacity:0},visible:{x:0,y:0,opacity:1,transition:{duration:t,delay:i?e:0}}},fadeSlideUpperLeft:{hidden:{x:`-${n}`,y:`-${c}`,opacity:0},visible:{x:0,y:0,opacity:1,transition:{duration:t,delay:i?e:0}}},fadeSlideLowerRight:{hidden:{x:n,y:c,opacity:0},visible:{x:0,y:0,opacity:1,transition:{duration:t,delay:i?e:0}}},fadeSlideLowerLeft:{hidden:{x:`-${n}`,y:c,opacity:0},visible:{x:0,y:0,opacity:1,transition:{duration:t,delay:i?e:0}}},flipUp:{hidden:{rotateX:90,opacity:0,transformOrigin:"center bottom"},visible:{rotateX:0,opacity:1,transition:{duration:t,delay:i?e:0}}},flipDown:{hidden:{rotateX:-90,opacity:0,transformOrigin:"center top"},visible:{rotateX:0,opacity:1,transition:{duration:t,delay:i?e:0}}},flipRight:{hidden:{rotateY:90,opacity:0,transformOrigin:"left center"},visible:{rotateY:0,opacity:1,transition:{duration:t,delay:i?e:0}}},flipLeft:{hidden:{rotateY:-90,opacity:0,transformOrigin:"right center"},visible:{rotateY:0,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomIn:{hidden:{scale:l,opacity:0},visible:{scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomInUp:{hidden:{y:p,scale:l,opacity:0},visible:{y:0,scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomInDown:{hidden:{y:`-${p}`,scale:l,opacity:0},visible:{y:0,scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomInLeft:{hidden:{x:`-${n}`,scale:l,opacity:0},visible:{x:0,scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomInRight:{hidden:{x:n,scale:l,opacity:0},visible:{x:0,scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomOut:{hidden:{scale:r,opacity:0},visible:{scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomOutUp:{hidden:{scale:r,opacity:0,y:p},visible:{y:0,scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomOutDown:{hidden:{scale:r,opacity:0,y:`-${p}`},visible:{y:0,scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomOutLeft:{hidden:{scale:r,opacity:0,x:`-${y}`},visible:{x:0,scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}},zoomOutRight:{hidden:{scale:r,opacity:0,x:y},visible:{x:0,scale:1,opacity:1,transition:{duration:t,delay:i?e:0}}}};h.useEffect(()=>{const d=m.current,x=new IntersectionObserver(([w])=>{j(w.isIntersecting)},{threshold:.1});return d&&x.observe(d),()=>{d&&x.unobserve(d)}},[]);const S=f[o];return s.jsx(N.div,{ref:m,initial:"hidden",animate:i?"visible":"hidden",variants:S,className:g,children:a})},u=k;function M(){return s.jsxs(R,{children:[s.jsxs(C,{bg:"bg-col-990",children:[s.jsx(V,{className:"w-[6vw] absolute top-[0.7vh] left-[1vh]",children:s.jsx(A,{icon:U,to:"/design#components"})}),s.jsx(b,{className:"justify-center pl-[6vh]",children:s.jsx(I,{className:"font-semibold text-md-tight md:text-xl-tight text-col-200",children:"Snap Scroll Animate-On-Scroll Duration"})})]}),s.jsx(X,{className:"fixed top-[6vh] left-0 px-[1vh]",children:s.jsxs(D,{className:"h-[92vh] justify-around p-[1.5vh] bg-col-150 shadowWideLoose",align:"items-start ",children:[" ",v.map((a,o)=>s.jsx(L,{to:`#${a}`,useHash:!0,linkText:a,className:"text-sm-tight md:text-md-tight"},o))]})}),v.map((a,o)=>s.jsx($,{className:"w-screen h-screen bg-col-300",id:a,children:s.jsx(b,{className:"justify-center pl-[20vh]",children:s.jsx(u,{animation:a,className:"bg-col-970 p-[1.5vh] text-col-100 shadowWideLoose",delay:.4,duration:1,children:s.jsxs("h1",{className:"text-sm-tight md:text-xl-tight font-bold textShadow",children:['animationName="',a,'"']})})})},o))]})}export{M as default};
