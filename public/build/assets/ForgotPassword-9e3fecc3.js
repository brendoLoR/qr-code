import{T as d,o as l,c as u,w as i,a as t,u as s,Z as c,f as _,t as f,g as p,b as a,d as w,n as g,e as x}from"./app-e80bbe94.js";import{_ as y}from"./GuestLayout-2554d565.js";import{_ as b}from"./InputError-fc9e566d.js";import{_ as k,a as h}from"./TextInput-66daef1f.js";import{_ as V}from"./PrimaryButton-4107cd19.js";import"./ApplicationLogo-6f67b5db.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(S,r)=>(l(),u(y,null,{default:i(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(l(),_("div",N,f(o.status),1)):p("",!0),a("form",{onSubmit:x(m,["prevent"])},[a("div",null,[t(k,{for:"email",value:"Email"}),t(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(b,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",B,[t(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{z as default};