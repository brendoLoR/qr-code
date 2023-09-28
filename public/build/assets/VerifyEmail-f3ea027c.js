import{T as f,h as m,o as a,c as g,w as s,a as o,u as e,Z as _,f as p,g as y,b as i,d as r,n as h,j as k,e as x}from"./app-e80bbe94.js";import{_ as v}from"./GuestLayout-2554d565.js";import{_ as b}from"./PrimaryButton-4107cd19.js";import"./ApplicationLogo-6f67b5db.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=i("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},$={__name:"VerifyEmail",props:{status:String},setup(n){const c=n,t=f({}),d=()=>{t.post(route("verification.send"))},u=m(()=>c.status==="verification-link-sent");return(l,N)=>(a(),g(v,null,{default:s(()=>[o(e(_),{title:"Email Verification"}),w,u.value?(a(),p("div",V," A new verification link has been sent to the email address you provided during registration. ")):y("",!0),i("form",{onSubmit:x(d,["prevent"])},[i("div",E,[o(b,{class:h({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[r(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(k),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:s(()=>[r("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{$ as default};
