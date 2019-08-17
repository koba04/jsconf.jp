(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k});var r=n(0),a=n.n(r),o=n(214),i=n(95),l=n(220),c=n(219),m=n(215),s=n(226),d=n(216),u=n(217),p=n(222),f=n(232),b=o.c.div.withConfig({displayName:"schedule__DaysButtonBox",componentId:"sc-1745991-0"})(["display:flex;justify-content:space-between;width:100%;","{flex-direction:column;}"],function(e){return e.theme.breakpoints.mobile}),h=Object(o.c)(s.a).withConfig({displayName:"schedule__SubTitle",componentId:"sc-1745991-1"})(["text-align:left;margin-top:20px;padding:0.2em 1em;border-bottom:1px solid ",";"],function(e){return e.theme.colors.border}),x=o.c.div.withConfig({displayName:"schedule__TimeBox",componentId:"sc-1745991-2"})(['display:grid;width:100%;grid-template:"A B" auto / 1fr 1fr;grid-column-gap:40px;margin-bottom:40px;',"{display:flex;flex-direction:column;}"],function(e){return e.theme.breakpoints.mobile}),y=o.c.div.withConfig({displayName:"schedule__Box",componentId:"sc-1745991-3"})(["grid-column:",";position:relative;width:100%;box-sizing:border-box;padding:1em;background-color:",";border-left:5px solid;border-color:",';::before{content:"";position:absolute;top:-8px;left:-10px;display:inline-block;width:16px;height:16px;border-radius:100%;background-color:',";}"],function(e){return e.area},function(e){var t=e.area,n=e.isBreak,r=e.theme;return n?r.colors.disabled:"A"===t?r.colors.roomA:r.colors.roomB},function(e){var t=e.area,n=e.isBreak,r=e.theme;return n?r.colors.disabledText:"A"===t?r.colors.roomABorder:r.colors.roomBBorder},function(e){var t=e.area,n=e.isBreak,r=e.theme;return n?r.colors.disabledText:"A"===t?r.colors.roomABorder:r.colors.roomBBorder}),g=o.c.span.withConfig({displayName:"schedule__Text",componentId:"sc-1745991-4"})(["display:block;font-size:20px;font-family:",";"],function(e){return e.theme.fonts.text});function k(){var e=Object(i.b)().t,t=[{timebox:"10:00-10:30",items:[{break:!1,room:"A",label:"Doors open"}]},{timebox:"10:30-10:45",items:[{break:!1,room:"A",label:"Keynote"}]},{timebox:"10:45-11:15",items:[{break:!1,room:"A",label:"Offline-First Collaborative Data Structures By Mathias Buus"},{break:!1,room:"B",label:"Let's start machine learning with JavaScript By Shuhei Kitsuka"}]},{timebox:"11:15-11:30",items:[{break:!0,room:"A",label:"Break"},{break:!0,room:"B",label:"Break"}]}],n={day1:t,day2:t};return a.a.createElement(l.a,null,a.a.createElement(c.a,{title:e("schedule"),description:e("schedule.description")})," ",a.a.createElement(d.a,null,a.a.createElement(u.a,{path:[e("schedule")]}),a.a.createElement(m.a,null,e("schedule")),a.a.createElement(b,null,a.a.createElement(f.a,{selector:"#day1"},a.a.createElement(p.a,{color:"secondary",size:"large",to:"/schedule#day1"},e("day1"))),a.a.createElement(f.a,{selector:"#day2"},a.a.createElement(p.a,{color:"secondary",size:"large",to:"/schedule#day2"},e("day2")))),a.a.createElement(h,{id:"day1"},e("day1")),n.day1.map(function(e){return a.a.createElement(x,{key:e.timebox},e.items.map(function(t){return a.a.createElement(y,{key:t.room+"_"+t.label,area:t.room,isBreak:t.break},a.a.createElement(g,null,e.timebox),a.a.createElement(g,null,t.label))}))}),a.a.createElement(h,{id:"day2"},e("day2")),n.day2.map(function(e){return a.a.createElement(x,{key:e.timebox},e.items.map(function(t){return a.a.createElement(y,{key:t.room+"_"+t.label,area:t.room,isBreak:t.break},a.a.createElement(g,null,e.timebox),a.a.createElement(g,null,t.label))}))})))}},215:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n.n(r),o=n(214).c.h1.withConfig({displayName:"Title__Box",componentId:"ic2qmd-0"})(["text-align:center;margin:40px 0 60px;font-size:40px;text-transform:uppercase;font-family:",";"],function(e){return e.theme.fonts.header});function i(e){var t=e.children;return a.a.createElement(o,null,t)}},216:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n.n(r),o=n(214).c.div.withConfig({displayName:"ResponsiveBox__Box",componentId:"s7imgo-0"})(["width:100%;max-width:",";padding:2em 1em 5em;margin:0 auto;box-sizing:border-box;"],function(e){return e.theme.innerWidth});function i(e){var t=e.children;return a.a.createElement(o,null,t)}},217:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),o=n(214),i=n(95),l=n(218),c=o.c.div.withConfig({displayName:"Breadcrumb__Box",componentId:"whtkqw-0"})(["display:flex;"]),m=o.c.span.withConfig({displayName:"Breadcrumb__Text",componentId:"whtkqw-1"})(["margin-right:0.5em;font-size:14px;font-weight:bold;text-transform:uppercase;font-family:",";text-transform:uppercase;"],function(e){return e.theme.fonts.header});function s(e){var t=e.path,n=Object(i.b)().t;return a.a.createElement(c,null,a.a.createElement(l.a,{to:"/"},a.a.createElement(m,null,n("top"))),a.a.createElement(m,null,">"),t.map(function(e){return a.a.createElement(m,{key:e},e)}))}},226:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(214).c.h2.withConfig({displayName:"SubTitle",componentId:"sm3s2-0"})(["text-align:center;text-transform:uppercase;font-family:",";font-size:40px;margin:0 0 1em;"],function(e){return e.theme.fonts.header})}}]);
//# sourceMappingURL=component---src-pages-schedule-tsx-ffbf00d07461cebc609d.js.map