import{S as r,i as a,s as e,e as t,t as s,a as c,w as o,c as l,b as n,d as i,f as h,g as u,h as v,D as f,E as d,j as E,k,v as T,B as w,r as p,C as N,q as g,F as A,G as R,m,n as W,u as D,H as b}from"./index.1069f788.js";import{g as I,f as _}from"./common.137a4ef0.js";import{S as H}from"./Spinner.e8f12525.js";function L(r,a,e){const t=Object.create(r);return t.worker=a[e],t.i=e,t}function U(r){var a,e=new H({});return{c(){e.$$.fragment.c()},l(r){e.$$.fragment.l(r)},m(r,t){m(e,r,t),a=!0},p:W,i(r){a||(g(e.$$.fragment,r),a=!0)},o(r){p(e.$$.fragment,r),a=!1},d(r){D(e,r)}}}function F(r){var a,e,c;return{c(){a=t("div"),e=t("h2"),c=s("There is no Workers matching your criteria")},l(r){a=l(r,"DIV",{},!1);var t=n(a);e=l(t,"H2",{},!1);var s=n(e);c=i(s,"There is no Workers matching your criteria"),s.forEach(h),t.forEach(h)},m(r,t){E(r,a,t),k(a,e),k(e,c)},p:W,i:W,o:W,d(r){r&&h(a)}}}function G(r){var a,e,o,f,d,T,w,p,N,g,A,R,m,D,I,_,H,U,F,G,S,O,V,x,y,B,$,j,C,J,Y,q,K,z,M,Q,X;let Z=r.workers,rr=[];for(let a=0;a<Z.length;a+=1)rr[a]=P(L(r,Z,a));return{c(){a=t("div"),e=t("div"),o=t("div"),f=t("table"),d=t("thead"),T=t("tr"),w=t("th"),p=s("#"),N=c(),g=t("th"),A=s("State"),R=c(),m=t("th"),D=s("Halt"),I=c(),_=t("th"),H=s("Pid"),U=c(),F=t("th"),G=s("Current Job"),S=c(),O=t("th"),V=s("Last Update"),x=c(),y=t("th"),B=s("Time Start"),$=c(),j=t("th"),C=s("Timeout"),J=c(),Y=t("th"),q=s("Type"),K=c(),z=t("th"),M=s("Error"),Q=c(),X=t("tbody");for(let r=0;r<rr.length;r+=1)rr[r].c();this.h()},l(r){a=l(r,"DIV",{},!1);var t=n(a);e=l(t,"DIV",{class:!0},!1);var s=n(e);o=l(s,"DIV",{class:!0},!1);var c=n(o);f=l(c,"TABLE",{class:!0},!1);var v=n(f);d=l(v,"THEAD",{},!1);var E=n(d);T=l(E,"TR",{},!1);var k=n(T);w=l(k,"TH",{scope:!0},!1);var W=n(w);p=i(W,"#"),W.forEach(h),N=u(k),g=l(k,"TH",{scope:!0},!1);var b=n(g);A=i(b,"State"),b.forEach(h),R=u(k),m=l(k,"TH",{scope:!0},!1);var L=n(m);D=i(L,"Halt"),L.forEach(h),I=u(k),_=l(k,"TH",{scope:!0},!1);var P=n(_);H=i(P,"Pid"),P.forEach(h),U=u(k),F=l(k,"TH",{scope:!0},!1);var Z=n(F);G=i(Z,"Current Job"),Z.forEach(h),S=u(k),O=l(k,"TH",{scope:!0},!1);var ar=n(O);V=i(ar,"Last Update"),ar.forEach(h),x=u(k),y=l(k,"TH",{scope:!0},!1);var er=n(y);B=i(er,"Time Start"),er.forEach(h),$=u(k),j=l(k,"TH",{scope:!0},!1);var tr=n(j);C=i(tr,"Timeout"),tr.forEach(h),J=u(k),Y=l(k,"TH",{scope:!0},!1);var sr=n(Y);q=i(sr,"Type"),sr.forEach(h),K=u(k),z=l(k,"TH",{scope:!0},!1);var cr=n(z);M=i(cr,"Error"),cr.forEach(h),k.forEach(h),E.forEach(h),Q=u(v),X=l(v,"TBODY",{},!1);var or=n(X);for(let r=0;r<rr.length;r+=1)rr[r].l(or);or.forEach(h),v.forEach(h),c.forEach(h),s.forEach(h),t.forEach(h),this.h()},h(){v(w,"scope","col"),v(g,"scope","col"),v(m,"scope","col"),v(_,"scope","col"),v(F,"scope","col"),v(O,"scope","col"),v(y,"scope","col"),v(j,"scope","col"),v(Y,"scope","col"),v(z,"scope","col"),v(f,"class","table table-striped"),v(o,"class","col-sm-12"),v(e,"class","row mt-5")},m(r,t){E(r,a,t),k(a,e),k(e,o),k(o,f),k(f,d),k(d,T),k(T,w),k(w,p),k(T,N),k(T,g),k(g,A),k(T,R),k(T,m),k(m,D),k(T,I),k(T,_),k(_,H),k(T,U),k(T,F),k(F,G),k(T,S),k(T,O),k(O,V),k(T,x),k(T,y),k(y,B),k(T,$),k(T,j),k(j,C),k(T,J),k(T,Y),k(Y,q),k(T,K),k(T,z),k(z,M),k(f,Q),k(f,X);for(let r=0;r<rr.length;r+=1)rr[r].m(X,null)},p(r,a){if(r.workers||r.state){let e;for(Z=a.workers,e=0;e<Z.length;e+=1){const t=L(a,Z,e);rr[e]?rr[e].p(r,t):(rr[e]=P(t),rr[e].c(),rr[e].m(X,null))}for(;e<rr.length;e+=1)rr[e].d(1);rr.length=Z.length}},i:W,o:W,d(r){r&&h(a),b(rr,r)}}}function S(r){var a,e,c,o=r.worker.state+"";return{c(){a=t("td"),e=t("span"),c=s(o),this.h()},l(r){a=l(r,"TD",{},!1);var t=n(a);e=l(t,"SPAN",{class:!0},!1);var s=n(e);c=i(s,o),s.forEach(h),t.forEach(h),this.h()},h(){v(e,"class","badge badge-warning")},m(r,t){E(r,a,t),k(a,e),k(e,c)},p(r,a){r.workers&&o!==(o=a.worker.state+"")&&T(c,o)},d(r){r&&h(a)}}}function O(r){var a,e,c,o=r.worker.state+"";return{c(){a=t("td"),e=t("span"),c=s(o),this.h()},l(r){a=l(r,"TD",{},!1);var t=n(a);e=l(t,"SPAN",{class:!0},!1);var s=n(e);c=i(s,o),s.forEach(h),t.forEach(h),this.h()},h(){v(e,"class","badge badge-dark")},m(r,t){E(r,a,t),k(a,e),k(e,c)},p(r,a){r.workers&&o!==(o=a.worker.state+"")&&T(c,o)},d(r){r&&h(a)}}}function V(r){var a,e,c,o=r.worker.state+"";return{c(){a=t("td"),e=t("span"),c=s(o),this.h()},l(r){a=l(r,"TD",{},!1);var t=n(a);e=l(t,"SPAN",{class:!0},!1);var s=n(e);c=i(s,o),s.forEach(h),t.forEach(h),this.h()},h(){v(e,"class","badge badge-secondary")},m(r,t){E(r,a,t),k(a,e),k(e,c)},p(r,a){r.workers&&o!==(o=a.worker.state+"")&&T(c,o)},d(r){r&&h(a)}}}function x(r){var a,e,c,o=r.worker.state+"";return{c(){a=t("td"),e=t("span"),c=s(o),this.h()},l(r){a=l(r,"TD",{},!1);var t=n(a);e=l(t,"SPAN",{class:!0},!1);var s=n(e);c=i(s,o),s.forEach(h),t.forEach(h),this.h()},h(){v(e,"class","badge badge-info")},m(r,t){E(r,a,t),k(a,e),k(e,c)},p(r,a){r.workers&&o!==(o=a.worker.state+"")&&T(c,o)},d(r){r&&h(a)}}}function y(r){var a,e,c,o=r.worker.state+"";return{c(){a=t("td"),e=t("span"),c=s(o),this.h()},l(r){a=l(r,"TD",{},!1);var t=n(a);e=l(t,"SPAN",{class:!0},!1);var s=n(e);c=i(s,o),s.forEach(h),t.forEach(h),this.h()},h(){v(e,"class","badge badge-primary")},m(r,t){E(r,a,t),k(a,e),k(e,c)},p(r,a){r.workers&&o!==(o=a.worker.state+"")&&T(c,o)},d(r){r&&h(a)}}}function B(r){var a,e,c,o=r.worker.state+"";return{c(){a=t("td"),e=t("span"),c=s(o),this.h()},l(r){a=l(r,"TD",{},!1);var t=n(a);e=l(t,"SPAN",{class:!0},!1);var s=n(e);c=i(s,o),s.forEach(h),t.forEach(h),this.h()},h(){v(e,"class","badge badge-danger")},m(r,t){E(r,a,t),k(a,e),k(e,c)},p(r,a){r.workers&&o!==(o=a.worker.state+"")&&T(c,o)},d(r){r&&h(a)}}}function $(r){var a,e,c,o=r.worker.state+"";return{c(){a=t("td"),e=t("span"),c=s(o),this.h()},l(r){a=l(r,"TD",{},!1);var t=n(a);e=l(t,"SPAN",{class:!0},!1);var s=n(e);c=i(s,o),s.forEach(h),t.forEach(h),this.h()},h(){v(e,"class","badge badge-success")},m(r,t){E(r,a,t),k(a,e),k(e,c)},p(r,a){r.workers&&o!==(o=a.worker.state+"")&&T(c,o)},d(r){r&&h(a)}}}function P(r){var a,e,o,v,f,d,w,p,N,g,A,R,m,W,D,b,I,_,H,L,U,F,G,P,j,C,J,Y,q,K=r.worker.id+"",z=r.worker.halt+"",M=r.worker.pid+"",Q=r.worker.current_job+"",X=r.worker.last_update+"",Z=r.worker.time_start+"",rr=r.worker.timeout+"",ar=r.worker.type+"",er=r.worker.error+"";function tr(r,a){return a.worker.state==a.state.RESULT?$:a.worker.state==a.state.ERROR?B:a.worker.state==a.state.NEW?y:a.worker.state==a.state.RUNNING?x:a.worker.state==a.state.HALTED?V:a.worker.state==a.state.WAITING?O:S}var sr=tr(0,r),cr=sr(r);return{c(){a=t("tr"),e=t("td"),o=s(K),v=c(),cr.c(),f=c(),d=t("td"),w=s(z),p=c(),N=t("td"),g=s(M),A=c(),R=t("td"),m=s(Q),W=c(),D=t("td"),b=s(X),I=c(),_=t("td"),H=s(Z),L=c(),U=t("td"),F=s(rr),G=c(),P=t("td"),j=s(ar),C=c(),J=t("td"),Y=s(er),q=c()},l(r){a=l(r,"TR",{},!1);var t=n(a);e=l(t,"TD",{},!1);var s=n(e);o=i(s,K),s.forEach(h),v=u(t),cr.l(t),f=u(t),d=l(t,"TD",{},!1);var c=n(d);w=i(c,z),c.forEach(h),p=u(t),N=l(t,"TD",{},!1);var E=n(N);g=i(E,M),E.forEach(h),A=u(t),R=l(t,"TD",{},!1);var k=n(R);m=i(k,Q),k.forEach(h),W=u(t),D=l(t,"TD",{},!1);var T=n(D);b=i(T,X),T.forEach(h),I=u(t),_=l(t,"TD",{},!1);var S=n(_);H=i(S,Z),S.forEach(h),L=u(t),U=l(t,"TD",{},!1);var O=n(U);F=i(O,rr),O.forEach(h),G=u(t),P=l(t,"TD",{},!1);var V=n(P);j=i(V,ar),V.forEach(h),C=u(t),J=l(t,"TD",{},!1);var x=n(J);Y=i(x,er),x.forEach(h),q=u(t),t.forEach(h)},m(r,t){E(r,a,t),k(a,e),k(e,o),k(a,v),cr.m(a,null),k(a,f),k(a,d),k(d,w),k(a,p),k(a,N),k(N,g),k(a,A),k(a,R),k(R,m),k(a,W),k(a,D),k(D,b),k(a,I),k(a,_),k(_,H),k(a,L),k(a,U),k(U,F),k(a,G),k(a,P),k(P,j),k(a,C),k(a,J),k(J,Y),k(a,q)},p(r,e){r.workers&&K!==(K=e.worker.id+"")&&T(o,K),sr===(sr=tr(0,e))&&cr?cr.p(r,e):(cr.d(1),(cr=sr(e))&&(cr.c(),cr.m(a,f))),r.workers&&z!==(z=e.worker.halt+"")&&T(w,z),r.workers&&M!==(M=e.worker.pid+"")&&T(g,M),r.workers&&Q!==(Q=e.worker.current_job+"")&&T(m,Q),r.workers&&X!==(X=e.worker.last_update+"")&&T(b,X),r.workers&&Z!==(Z=e.worker.time_start+"")&&T(H,Z),r.workers&&rr!==(rr=e.worker.timeout+"")&&T(F,rr),r.workers&&ar!==(ar=e.worker.type+"")&&T(j,ar),r.workers&&er!==(er=e.worker.error+"")&&T(Y,er)},d(r){r&&h(a),cr.d()}}}function j(r){var a,e,R,m,W,D,b,I,_,H,L,S,O,V,x,y,B,$,P,j,C,J,Y,q,K,z,M,Q,X,Z,rr,ar,er,tr,sr,cr,or,lr,nr,ir,hr,ur,vr,fr,dr,Er,kr,Tr,wr,pr,Nr,gr,Ar,Rr,mr,Wr,Dr,br,Ir,_r,Hr,Lr,Ur,Fr,Gr,Sr,Or,Vr,xr,yr,Br,$r,Pr,jr,Cr,Jr,Yr,qr,Kr,zr,Mr,Qr,Xr,Zr,ra,aa,ea,ta,sa,ca,oa,la,na,ia,ha,ua,va,fa=r.workers.length+"",da=r.counters.new+"",Ea=r.counters.success+"",ka=r.counters.error+"",Ta=r.counters.warning+"",wa=r.counters.running+"",pa=r.counters.halted+"",Na=r.counters.waiting+"",ga=[G,F,U],Aa=[];function Ra(r,a){return(null==oa||r.filteredWorkers||r.isAllWorkersAvailable)&&(oa=!!(a.filteredWorkers()&&a.filteredWorkers().length>0&&a.isAllWorkersAvailable)),oa?0:((null==la||r.filteredWorkers||r.isAllWorkersAvailable)&&(la=!(0!=a.filteredWorkers().length||!a.isAllWorkersAvailable)),la?1:a.isAllWorkersAvailable?-1:2)}return~(na=Ra(null,r))&&(ia=Aa[na]=ga[na](r)),{c(){a=t("h1"),e=s("Workers"),R=c(),m=t("div"),W=t("div"),D=t("button"),b=s("All"),I=c(),_=t("div"),H=t("button"),L=s("New"),S=c(),O=t("div"),V=t("button"),x=s("Success"),y=c(),B=t("div"),$=t("button"),P=s("Failure"),j=c(),C=t("div"),J=t("button"),Y=s("Warning"),q=c(),K=t("div"),z=t("button"),M=s("Running"),Q=c(),X=t("div"),Z=t("button"),rr=s("Halted"),ar=c(),er=t("div"),tr=t("button"),sr=s("Waiting"),cr=c(),or=t("div"),lr=t("div"),nr=t("table"),ir=t("thead"),hr=t("tr"),ur=t("th"),vr=s("Total"),fr=c(),dr=t("th"),Er=s("New"),kr=c(),Tr=t("th"),wr=s("Success"),pr=c(),Nr=t("th"),gr=s("Failure"),Ar=c(),Rr=t("th"),mr=s("Warning"),Wr=c(),Dr=t("th"),br=s("Running"),Ir=c(),_r=t("th"),Hr=s("Halted"),Lr=c(),Ur=t("th"),Fr=s("Waiting"),Gr=c(),Sr=t("tbody"),Or=t("td"),Vr=s(fa),xr=c(),yr=t("td"),Br=s(da),$r=c(),Pr=t("td"),jr=s(Ea),Cr=c(),Jr=t("td"),Yr=s(ka),qr=c(),Kr=t("td"),zr=s(Ta),Mr=c(),Qr=t("td"),Xr=s(wa),Zr=c(),ra=t("td"),aa=s(pa),ea=c(),ta=t("td"),sa=s(Na),ca=c(),ia&&ia.c(),ha=o(),this.h()},l(r){a=l(r,"H1",{},!1);var t=n(a);e=i(t,"Workers"),t.forEach(h),R=u(r),m=l(r,"DIV",{class:!0},!1);var s=n(m);W=l(s,"DIV",{class:!0},!1);var c=n(W);D=l(c,"BUTTON",{class:!0},!1);var v=n(D);b=i(v,"All"),v.forEach(h),c.forEach(h),I=u(s),_=l(s,"DIV",{class:!0},!1);var f=n(_);H=l(f,"BUTTON",{class:!0},!1);var d=n(H);L=i(d,"New"),d.forEach(h),f.forEach(h),S=u(s),O=l(s,"DIV",{class:!0},!1);var E=n(O);V=l(E,"BUTTON",{class:!0},!1);var k=n(V);x=i(k,"Success"),k.forEach(h),E.forEach(h),y=u(s),B=l(s,"DIV",{class:!0},!1);var T=n(B);$=l(T,"BUTTON",{class:!0},!1);var w=n($);P=i(w,"Failure"),w.forEach(h),T.forEach(h),j=u(s),C=l(s,"DIV",{class:!0},!1);var p=n(C);J=l(p,"BUTTON",{class:!0},!1);var N=n(J);Y=i(N,"Warning"),N.forEach(h),p.forEach(h),q=u(s),K=l(s,"DIV",{class:!0},!1);var g=n(K);z=l(g,"BUTTON",{class:!0},!1);var A=n(z);M=i(A,"Running"),A.forEach(h),g.forEach(h),Q=u(s),X=l(s,"DIV",{class:!0},!1);var U=n(X);Z=l(U,"BUTTON",{class:!0},!1);var F=n(Z);rr=i(F,"Halted"),F.forEach(h),U.forEach(h),ar=u(s),er=l(s,"DIV",{class:!0},!1);var G=n(er);tr=l(G,"BUTTON",{class:!0},!1);var oa=n(tr);sr=i(oa,"Waiting"),oa.forEach(h),G.forEach(h),s.forEach(h),cr=u(r),or=l(r,"DIV",{class:!0},!1);var la=n(or);lr=l(la,"DIV",{class:!0},!1);var na=n(lr);nr=l(na,"TABLE",{class:!0},!1);var ua=n(nr);ir=l(ua,"THEAD",{},!1);var va=n(ir);hr=l(va,"TR",{},!1);var ga=n(hr);ur=l(ga,"TH",{class:!0,scope:!0},!1);var Aa=n(ur);vr=i(Aa,"Total"),Aa.forEach(h),fr=u(ga),dr=l(ga,"TH",{class:!0,scope:!0},!1);var Ra=n(dr);Er=i(Ra,"New"),Ra.forEach(h),kr=u(ga),Tr=l(ga,"TH",{class:!0,scope:!0},!1);var ma=n(Tr);wr=i(ma,"Success"),ma.forEach(h),pr=u(ga),Nr=l(ga,"TH",{class:!0,scope:!0},!1);var Wa=n(Nr);gr=i(Wa,"Failure"),Wa.forEach(h),Ar=u(ga),Rr=l(ga,"TH",{class:!0,scope:!0},!1);var Da=n(Rr);mr=i(Da,"Warning"),Da.forEach(h),Wr=u(ga),Dr=l(ga,"TH",{class:!0,scope:!0},!1);var ba=n(Dr);br=i(ba,"Running"),ba.forEach(h),Ir=u(ga),_r=l(ga,"TH",{class:!0,scope:!0},!1);var Ia=n(_r);Hr=i(Ia,"Halted"),Ia.forEach(h),Lr=u(ga),Ur=l(ga,"TH",{class:!0,scope:!0},!1);var _a=n(Ur);Fr=i(_a,"Waiting"),_a.forEach(h),ga.forEach(h),va.forEach(h),Gr=u(ua),Sr=l(ua,"TBODY",{class:!0},!1);var Ha=n(Sr);Or=l(Ha,"TD",{},!1);var La=n(Or);Vr=i(La,fa),La.forEach(h),xr=u(Ha),yr=l(Ha,"TD",{},!1);var Ua=n(yr);Br=i(Ua,da),Ua.forEach(h),$r=u(Ha),Pr=l(Ha,"TD",{},!1);var Fa=n(Pr);jr=i(Fa,Ea),Fa.forEach(h),Cr=u(Ha),Jr=l(Ha,"TD",{},!1);var Ga=n(Jr);Yr=i(Ga,ka),Ga.forEach(h),qr=u(Ha),Kr=l(Ha,"TD",{},!1);var Sa=n(Kr);zr=i(Sa,Ta),Sa.forEach(h),Mr=u(Ha),Qr=l(Ha,"TD",{},!1);var Oa=n(Qr);Xr=i(Oa,wa),Oa.forEach(h),Zr=u(Ha),ra=l(Ha,"TD",{},!1);var Va=n(ra);aa=i(Va,pa),Va.forEach(h),ea=u(Ha),ta=l(Ha,"TD",{},!1);var xa=n(ta);sa=i(xa,Na),xa.forEach(h),Ha.forEach(h),ua.forEach(h),na.forEach(h),la.forEach(h),ca=u(r),ia&&ia.l(r),ha=o(),this.h()},h(){v(D,"class","btn"),f(D,"active",r.currentFilter===r.state.ALL),v(W,"class","mr-3"),v(H,"class","btn"),f(H,"active",r.currentFilter===r.state.NEW),v(_,"class","mr-3"),v(V,"class","btn"),f(V,"active",r.currentFilter===r.state.RESULT),v(O,"class","mr-3"),v($,"class","btn"),f($,"active",r.currentFilter===r.state.ERROR),v(B,"class","mr-3"),v(J,"class","btn"),f(J,"active",r.currentFilter===r.state.WARNING),v(C,"class","mr-3"),v(z,"class","btn"),f(z,"active",r.currentFilter===r.state.RUNNING),v(K,"class","mr-3"),v(Z,"class","btn"),f(Z,"active",r.currentFilter===r.state.HALTED),v(X,"class","mr-3"),v(tr,"class","btn"),f(tr,"active",r.currentFilter===r.state.WAITING),v(er,"class","mr-3"),v(m,"class","d-flex justify-content-start"),v(ur,"class","text-center"),v(ur,"scope","col"),v(dr,"class","text-center"),v(dr,"scope","col"),v(Tr,"class","text-center"),v(Tr,"scope","col"),v(Nr,"class","text-center"),v(Nr,"scope","col"),v(Rr,"class","text-center"),v(Rr,"scope","col"),v(Dr,"class","text-center"),v(Dr,"scope","col"),v(_r,"class","text-center"),v(_r,"scope","col"),v(Ur,"class","text-center"),v(Ur,"scope","col"),v(Sr,"class","text-center"),v(nr,"class","table table-striped"),v(lr,"class","col-sm-12"),v(or,"class","row mt-5"),va=[d(D,"click",r.click_handler),d(H,"click",r.click_handler_1),d(V,"click",r.click_handler_2),d($,"click",r.click_handler_3),d(J,"click",r.click_handler_4),d(z,"click",r.click_handler_5),d(Z,"click",r.click_handler_6),d(tr,"click",r.click_handler_7)]},m(r,t){E(r,a,t),k(a,e),E(r,R,t),E(r,m,t),k(m,W),k(W,D),k(D,b),k(m,I),k(m,_),k(_,H),k(H,L),k(m,S),k(m,O),k(O,V),k(V,x),k(m,y),k(m,B),k(B,$),k($,P),k(m,j),k(m,C),k(C,J),k(J,Y),k(m,q),k(m,K),k(K,z),k(z,M),k(m,Q),k(m,X),k(X,Z),k(Z,rr),k(m,ar),k(m,er),k(er,tr),k(tr,sr),E(r,cr,t),E(r,or,t),k(or,lr),k(lr,nr),k(nr,ir),k(ir,hr),k(hr,ur),k(ur,vr),k(hr,fr),k(hr,dr),k(dr,Er),k(hr,kr),k(hr,Tr),k(Tr,wr),k(hr,pr),k(hr,Nr),k(Nr,gr),k(hr,Ar),k(hr,Rr),k(Rr,mr),k(hr,Wr),k(hr,Dr),k(Dr,br),k(hr,Ir),k(hr,_r),k(_r,Hr),k(hr,Lr),k(hr,Ur),k(Ur,Fr),k(nr,Gr),k(nr,Sr),k(Sr,Or),k(Or,Vr),k(Sr,xr),k(Sr,yr),k(yr,Br),k(Sr,$r),k(Sr,Pr),k(Pr,jr),k(Sr,Cr),k(Sr,Jr),k(Jr,Yr),k(Sr,qr),k(Sr,Kr),k(Kr,zr),k(Sr,Mr),k(Sr,Qr),k(Qr,Xr),k(Sr,Zr),k(Sr,ra),k(ra,aa),k(Sr,ea),k(Sr,ta),k(ta,sa),E(r,ca,t),~na&&Aa[na].m(r,t),E(r,ha,t),ua=!0},p(r,a){(r.currentFilter||r.state)&&(f(D,"active",a.currentFilter===a.state.ALL),f(H,"active",a.currentFilter===a.state.NEW),f(V,"active",a.currentFilter===a.state.RESULT),f($,"active",a.currentFilter===a.state.ERROR),f(J,"active",a.currentFilter===a.state.WARNING),f(z,"active",a.currentFilter===a.state.RUNNING),f(Z,"active",a.currentFilter===a.state.HALTED),f(tr,"active",a.currentFilter===a.state.WAITING)),ua&&!r.workers||fa===(fa=a.workers.length+"")||T(Vr,fa),ua&&!r.counters||da===(da=a.counters.new+"")||T(Br,da),ua&&!r.counters||Ea===(Ea=a.counters.success+"")||T(jr,Ea),ua&&!r.counters||ka===(ka=a.counters.error+"")||T(Yr,ka),ua&&!r.counters||Ta===(Ta=a.counters.warning+"")||T(zr,Ta),ua&&!r.counters||wa===(wa=a.counters.running+"")||T(Xr,wa),ua&&!r.counters||pa===(pa=a.counters.halted+"")||T(aa,pa),ua&&!r.counters||Na===(Na=a.counters.waiting+"")||T(sa,Na);var e=na;(na=Ra(r,a))===e?~na&&Aa[na].p(r,a):(ia&&(w(),p(Aa[e],1,1,()=>{Aa[e]=null}),N()),~na?((ia=Aa[na])||(ia=Aa[na]=ga[na](a)).c(),g(ia,1),ia.m(ha.parentNode,ha)):ia=null)},i(r){ua||(g(ia),ua=!0)},o(r){p(ia),ua=!1},d(r){r&&(h(a),h(R),h(m),h(cr),h(or),h(ca)),~na&&Aa[na].d(r),r&&h(ha),A(va)}}}function C(r,a,e){const t={RESULT:"OK",ERROR:"ERROR",NEW:"NEW",HALTED:"HALTED",WAITING:"WAITING",RUNNING:"RUNNING",WARNING:"WARNING",ALL:"all"};let s=!1,c={success:0,error:0,new:0,running:0,halted:0,waiting:0,warning:0},o=t.ALL,l=[];function n(){l.forEach(r=>{r.state==t.RESULT?e("counters",c.success++,c):r.state==t.ERROR?e("counters",c.error++,c):r.state==t.NEW?e("counters",c.new++,c):r.state==t.RUNNING?e("counters",c.running++,c):r.state==t.HALTED?e("counters",c.halted++,c):r.state==t.WAITING?e("counters",c.waiting++,c):r.state==t.WARNING&&e("counters",c.warning++,c)})}function i(r){e("currentFilter",o=r)}function h(r){let a=[];return l.forEach(e=>{e.state==r&&a.push(e)}),a}R(async()=>{e("isAllWorkersAvailable",s=!1),I().then(function(r){r&&(e("isAllWorkersAvailable",s=!0),e("workers",l=r.data.workers),l.forEach(r=>{r.state=r.state.toUpperCase(),r.error&&(r.error=JSON.stringify(r.error)),r.time_start=_(r.time_start),r.last_update=_(r.last_update)}),n())}).catch(r=>{console.log(r)})});let u;return r.$$.update=((r={currentFilter:1,workers:1})=>{(r.currentFilter||r.workers)&&e("filteredWorkers",u=(()=>(e("counters",c={success:0,error:0,new:0,running:0,halted:0,waiting:0,warning:0}),n(),o==t.ALL?l:o==t.RESULT?h(t.RESULT):o==t.ERROR?h(t.ERROR):o==t.NEW?h(t.NEW):o==t.RUNNING?h(t.RUNNING):o==t.HALTED?h(t.HALTED):o==t.WARNING?h(t.WARNING):o==t.WAITING?h(t.WAITING):void 0)))}),{state:t,isAllWorkersAvailable:s,counters:c,currentFilter:o,workers:l,updateFilter:i,filteredWorkers:u,click_handler:()=>i(t.ALL),click_handler_1:()=>i(t.NEW),click_handler_2:()=>i(t.RESULT),click_handler_3:()=>i(t.ERROR),click_handler_4:()=>i(t.WARNING),click_handler_5:()=>i(t.RUNNING),click_handler_6:()=>i(t.HALTED),click_handler_7:()=>i(t.WAITING)}}class J extends r{constructor(r){super(),a(this,r,C,j,e,[])}}export{J as W};
