import{a as u}from"./button.esm-CN5yvFR4.js";import{s as m}from"./toast.esm-58rpTpt_.js";import{_ as p,c as f,a as r,b as e,g as n,H as a,d as i,o as h}from"./index-Bbdn3TmC.js";const _={name:"Login",components:{Button:u,Toast:m},data(){return{username:"",password:""}},methods:{checkLogin(){this.username==""||this.password==""?this.$toast.add({severity:"error",summary:"Error",detail:"Rellena ambos campos",life:3e3}):this.username!=="usuario"||this.password!=="usuario"?this.$toast.add({severity:"error",summary:"Error",detail:"Credenciales Incorrectas",life:3e3}):this.$router.push({name:"clientes"})}}},g={class:"mx-auto flex min-h-screen w-full h-full items-center justify-center bg-gray-900 text-white"},b={class:"flex w-[30rem] flex-col space-y-10"},x=e("div",{class:"text-center text-4xl tracking-widest"},"Seguros Do Carmo S.L",-1),w=e("div",{class:"text-center text-4xl font-medium"},"Iniciar Sesión ",-1),v=e("div",{class:"text-center"}," (user:usuario | password: usuario) ",-1),y={class:"w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"},k={class:"w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"};function B(C,s,L,T,o,l){const c=i("Toast"),d=i("Button");return h(),f("main",g,[r(c),e("section",b,[x,w,v,e("div",y,[n(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>o.username=t),placeholder:"Usuario",class:"w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"},null,512),[[a,o.username]])]),e("div",k,[n(e("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=t=>o.password=t),placeholder:"Contraseña",class:"w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"},null,512),[[a,o.password]])]),r(d,{class:"transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400",label:"LOGIN",onClick:l.checkLogin},null,8,["onClick"])])])}const N=p(_,[["render",B]]);export{N as default};
