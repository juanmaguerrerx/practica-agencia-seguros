import{b as y,d as F,s as v,a as z,e as P,f as h}from"./service-BrmabQ8p.js";import{s as E}from"./calendar.esm-CvvWoFlh.js";import{a as D}from"./button.esm-CN5yvFR4.js";import{_ as R,c as I,b as t,a,w as p,F as V,d as u,o as C,t as b}from"./index-Bbdn3TmC.js";const M={name:"Filtros",components:{InputNumber:y,Button:D,Calendar:E,Dropdown:F,DataTable:v,Column:z,Tag:P},data(){return{idMin:null,idMax:null,selectedEstado:null,estado:["Todos","a cuenta","cobrada","liquidada","anulada","pre anulada"],fechaInicio:null,fechaFin:null,expandedRows:[],expandedRowsPagos:[],clientesFiltrados:[],polizasFiltradas:[],maxDate:new Date}},methods:{applyfiltros(){this.fetchClientes()},getSeverityPago(i){switch(i){case"a cuenta":return"contrast";case"anulada":return"danger";case"liquidada":return"success";case"pre anulada":return"warning"}},getSeverity(i){return i=="Empresa"?"success":"warning"},async fetchClientes(){try{let s=(await h.get("/clientes")).data;for(const e of s)e.empresa==0?e.empresa="Paricular":e.empresa="Empresa";if(s=s.filter(e=>e.id>=this.idMin&&e.id<=this.idMax),this.selectedEstado=="Todos"&&(this.selectedEstado=null),!this.selectedEstado){this.clientesFiltrados=s,await this.fecthPolizas(),await this.fetchPagos();return}const d=s.map(e=>e.id);let o=[];this.selectedEstado&&(o=(await h.get("/polizas")).data.filter(m=>m.estado===this.selectedEstado&&d.includes(m.cliente_id))),s=s.filter(e=>o.some(r=>r.cliente_id===e.id)),this.clientesFiltrados=s,this.polizasFiltradas=o,await this.fetchPagos()}catch(i){console.error("Error al obtener los clientes:",i.message)}},async fetchPagos(){try{const i=this.polizasFiltradas.map(o=>o.numero),d=(await h.get("/pagos")).data;if(this.fechaInicio&&this.fechaFin){const o=d.filter(e=>{const r=new Date(e.fecha_pago);return r>=this.fechaInicio&&r<=this.fechaFin});this.polizasFiltradas.forEach(e=>{e.pagos=o.filter(r=>r.num_poliza===e.numero)}),this.polizasFiltradas=this.polizasFiltradas.filter(e=>e.pagos.length>0)}else this.polizasFiltradas.forEach(o=>{o.pagos=d.filter(e=>e.num_poliza===o.numero)});console.log(this.polizasFiltradas)}catch(i){console.error("Error al obtener los pagos:",i.message)}},async fecthPolizas(){try{const s=(await h.get("/polizas")).data,d=this.clientesFiltrados.map(o=>o.id);this.selectedEstado?this.polizasFiltradas=s.filter(o=>o.estado===this.selectedEstado&&d.includes(o.cliente_id)):this.polizasFiltradas=s.filter(o=>d.includes(o.cliente_id)),console.log(this.polizasFiltradas)}catch(i){console.error("Error al obtener las pólizas:",i.message)}},getPolizas(i){return this.polizasFiltradas.filter(s=>s.cliente_id===i)}}},B={class:"container mx-auto p-8"},N=t("h2",{class:"text-4xl mb-3"},"Filtros",-1),T={class:"mb-4"},k=t("label",{class:"block mb-2 text-sm font-bold text-gray-700",for:"idMin"},"Rango Numérico:",-1),S={class:"flex w-44"},U=t("span",{class:"text-gray-500"},"-",-1),O={class:"mb-4"},q=t("label",{class:"block mb-2 text-sm font-bold text-gray-700",for:"state"},"Estado:",-1),j={class:"mb-4"},A=t("label",{class:"block mb-2 text-sm font-bold text-gray-700",for:"dateRange"},"Rango de Fechas:",-1),G={class:"flex w-auto"},H=t("span",{class:"text-gray-500"},"-",-1),J={class:"mb-4"},K={class:"container p-4"},L=t("h2",{class:"text-center text-2xl mb-4"},"Resultados:",-1),Q={class:"w-full flex justify-center"},W={class:"p-4 bg-blue-900 bg-opacity-80 rounded-md"},X={class:"text-white"},Y={class:"p-2 bg-slate-600 bg-opacity-80 rounded-md"},Z={class:"text-white"};function $(i,s,d,o,e,r){const m=u("InputNumber"),w=u("Dropdown"),g=u("Calendar"),x=u("Button"),n=u("Column"),_=u("Tag"),f=u("DataTable");return C(),I(V,null,[t("div",B,[N,t("div",T,[k,t("div",S,[a(m,{modelValue:e.idMin,"onUpdate:modelValue":s[0]||(s[0]=l=>e.idMin=l),controls:!1,class:"w-min mr-2",placeholder:"Mínimo"},null,8,["modelValue"]),U,a(m,{modelValue:e.idMax,"onUpdate:modelValue":s[1]||(s[1]=l=>e.idMax=l),controls:!1,class:"w-min ml-2",placeholder:"Máximo"},null,8,["modelValue"])])]),t("div",O,[q,a(w,{modelValue:e.selectedEstado,"onUpdate:modelValue":s[2]||(s[2]=l=>e.selectedEstado=l),options:e.estado,placeholder:"Selecciona un estado"},null,8,["modelValue","options"])]),t("div",j,[A,t("div",G,[a(g,{modelValue:e.fechaInicio,"onUpdate:modelValue":s[3]||(s[3]=l=>e.fechaInicio=l),showButtonBar:"",showIcon:"",iconDisplay:"input",inputId:"icondisplay",maxDate:e.maxDate,class:"mr-2 pr-14",placeholder:"Inicio"},null,8,["modelValue","maxDate"]),H,a(g,{modelValue:e.fechaFin,"onUpdate:modelValue":s[4]||(s[4]=l=>e.fechaFin=l),class:"pr-14 ml-2",placeholder:"Fin",showButtonBar:"",showIcon:"",minDate:e.fechaInicio,maxDate:e.maxDate,iconDisplay:"input",inputId:"icondisplay"},null,8,["modelValue","minDate","maxDate"])])]),t("div",J,[a(x,{label:"Aplicar filtros",onClick:r.applyfiltros,class:"text-green-600"},null,8,["onClick"])])]),t("div",K,[L,t("div",Q,[a(f,{value:e.clientesFiltrados,expandedRows:e.expandedRows,"onUpdate:expandedRows":s[6]||(s[6]=l=>e.expandedRows=l),paginator:"",stripedRows:"",rows:5,rowsPerPageOptions:[5,10,20,50],tableStyle:"",class:"w-auto"},{expansion:p(l=>[t("div",W,[t("h5",X,"Polizas de "+b(l.data.nombre),1),a(f,{value:r.getPolizas(l.data.id),expandedRows:e.expandedRowsPagos,"onUpdate:expandedRows":s[5]||(s[5]=c=>e.expandedRowsPagos=c),paginator:"",stripedRows:"",rows:5,rowsPerPageOptions:[5,10,20,50]},{expansion:p(c=>[t("div",Y,[t("h5",Z,"Pagos de "+b(c.data.numero),1),a(f,{value:c.data.pagos,paginator:"",stripedRows:"",rows:5,rowsPerPageOptions:[5,10,20,50]},{default:p(()=>[a(n,{field:"importe",header:"Importe",sortable:""}),a(n,{field:"fecha_pago",header:"Fecha de Pago",sortable:""}),a(n,{field:"notas",header:"Notas",sortable:""})]),_:2},1032,["value"])])]),default:p(()=>[a(n,{expander:"",style:{width:"5rem"}}),a(n,{field:"numero",header:"Nombre",sortable:""}),a(n,{field:"estado",header:"Estado",sortable:""},{body:p(c=>[a(_,{value:c.data.estado,severity:r.getSeverityPago(c.data.estado)},null,8,["value","severity"])]),_:2},1024),a(n,{field:"notas",header:"Notas",sortable:""}),a(n,{field:"importe",header:"Importe",sortable:""})]),_:2},1032,["value","expandedRows"])])]),default:p(()=>[a(n,{expander:"",style:{width:"5rem"}}),a(n,{field:"id",header:"#",sortable:""}),a(n,{field:"nombre",header:"Nombre",sortable:""}),a(n,{field:"email",header:"Email",sortable:""}),a(n,{field:"telefono",header:"Telefono",sortable:""}),a(n,{field:"ciudad",header:"Ciudad",sortable:""}),a(n,{field:"empresa",header:"Tipo",sortable:""},{body:p(l=>[a(_,{value:l.data.empresa,severity:r.getSeverity(l.data.empresa)},null,8,["value","severity"])]),_:1})]),_:1},8,["value","expandedRows"])])])],64)}const oe=R(M,[["render",$]]);export{oe as default};
