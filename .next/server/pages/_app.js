(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// NAMESPACE OBJECT: ./reducers/index.js
var reducers_namespaceObject = {};
__webpack_require__.r(reducers_namespaceObject);
__webpack_require__.d(reducers_namespaceObject, {
  "Z": function() { return reducers; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./store/context.jsx
var context = __webpack_require__(2741);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__(8226);
;// CONCATENATED MODULE: ./reducers/category.js
const initialState = {
  menu: [// server db 에서 이렇게 데이터가 왔다고 가정 
  {
    id: '1',
    category: '대분류메뉴1',
    url: '/posts/1'
  }, {
    id: '2',
    category: '대분류메뉴2',
    url: '/posts/2'
  }, {
    id: '3',
    category: '대분류메뉴3',
    url: '/posts/3'
  }, {
    id: '4',
    category: '대분류메뉴4',
    url: '/posts/4'
  }, {
    id: '5',
    category: '대분류메뉴5',
    url: '/posts/5'
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ var category = (reducer);
;// CONCATENATED MODULE: ./reducers/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //인자값 1개 객체만 받는다. 

const reducers_reducer = (0,external_redux_namespaceObject.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case external_next_redux_wrapper_namespaceObject.HYDRATE:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  //user는 user.js파일에서 미리 함수로 만들어 놓아서 import 함수만 해오면 됨 
  user: user/* default */.ZP,
  // == user:user 
  category: category
});
/* harmony default export */ var reducers = (reducers_reducer);
;// CONCATENATED MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./store/configureStore.js


 //index 생략 가능

 //thunk 



const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  // console.log('action=',action)
  // console.log('dispatch=', dispatch)
  // console.log('getState=', getState)
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const middlewares = [loggerMiddleware, (external_redux_thunk_default())];
  const enhancer =  true ? (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middlewares)) : 0;
  const Store = (0,external_redux_namespaceObject.createStore)(reducers, enhancer);
  return Store;
}; // Store 자체를 가지는게 아닌 Store를 return해 주는 함수를 담아야함 


const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(configureStore, {
  debug: false //debug:true (개발모드이므로) 와 같은 의미 

});
/* harmony default export */ var store_configureStore = (wrapper);
;// CONCATENATED MODULE: ./pages/_app.jsx






 // Redux




const App = ({
  Component
}) => {
  const globalContext = (0,external_react_.useContext)(context/* default */.Z); // context에 있는 값을 그대로 빼와서 담음 

  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(reducers_namespaceObject.reducer, globalContext);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(context/* default.Provider */.Z.Provider, {
      value: {
        state,
        dispatch
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(Component, {}), " "]
    })]
  });
}; // App을 withRedux에 감싸서 보내기 


/* harmony default export */ var _app = (store_configureStore.withRedux(App));

/***/ }),

/***/ 2741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  IsLogin: false
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);
/* harmony default export */ __webpack_exports__["Z"] = (Store);

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [226], function() { return __webpack_exec__(2871); });
module.exports = __webpack_exports__;

})();