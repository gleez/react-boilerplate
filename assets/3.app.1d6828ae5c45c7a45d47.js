webpackJsonp([3],{117:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;s=l=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,a);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},u=n(2),l=r(u),c=n(12),p=r(c),d=n(11),f=r(d),h=n(24),m=r(h),v=n(45),y=r(v),g=function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={data:"",canSubmit:!1}}return a(t,e),i(t,[{key:"componentDidMount",value:function(){document.title="Signup | My App"}},{key:"enableButton",value:function(){this.setState({canSubmit:!0})}},{key:"disableButton",value:function(){this.setState({canSubmit:!1})}},{key:"resetForm",value:function(){this.refs.form.reset()}},{key:"submitForm",value:function(e){console.log(e)}},{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(p["default"],null),l["default"].createElement("div",{className:"container"},l["default"].createElement("div",{className:"row"},l["default"].createElement("div",{className:"col-md-4 col-md-offset-4"},l["default"].createElement("div",{className:"page-header"},l["default"].createElement("h1",null,"Register")),l["default"].createElement(m["default"].Form,{onValidSubmit:this.submitForm.bind(this),onValid:this.enableButton.bind(this),onInvalid:this.disableButton.bind(this),ref:"form"},l["default"].createElement(y["default"],{name:"name",label:"Full Name",type:"text",placeholder:"Your Name",validations:"isWords",validationError:"This is not a valid name",required:!0}),l["default"].createElement(y["default"],{name:"company",label:"Company",type:"text",placeholder:"Your Company",validations:"isWords",validationError:"This is not a valid company",required:!0}),l["default"].createElement(y["default"],{name:"email",label:"Email",type:"text",placeholder:"Your Email",validations:{isEmail:!0,maxLength:50},validationErrors:{isEmail:"You have to type valid email",maxLength:"You can not type in more than 50 characters"},required:!0}),l["default"].createElement(y["default"],{name:"password",label:"Password",type:"password",placeholder:"Your Password",validations:{minLength:5},validationErrors:{minLength:"You can not type less than 5 characters"},required:!0}),l["default"].createElement("button",{type:"submit",disabled:!this.state.canSubmit,className:"btn btn-primary"},"Submit"))))),l["default"].createElement(f["default"],null))}}]),t}(l["default"].Component);t["default"]=g,e.exports=t["default"]}});