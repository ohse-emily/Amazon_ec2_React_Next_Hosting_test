(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\saeee_z18xmwt\\OneDrive\\\uBB38\uC11C\\amazon_aws_practice\\blog\\front\\pages\\_app.jsx";



 // Redux




const App = ({
  Component
}) => {
  const globalContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default); // context에 있는 값을 그대로 빼와서 담음 

  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(_reducers__WEBPACK_IMPORTED_MODULE_5__.reducer, globalContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
}; // App을 withRedux에 감싸서 보내기 


/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__.default.withRedux(App));

/***/ }),

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //인자값 1개 객체만 받는다. 

const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  //user는 user.js파일에서 미리 함수로 만들어 놓아서 import 함수만 해오면 됨 
  user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
  // == user:user 
  category: _category__WEBPACK_IMPORTED_MODULE_3__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogin_REQUEST": function() { return /* binding */ UserLogin_REQUEST; },
/* harmony export */   "UserLogin_SUCCESS": function() { return /* binding */ UserLogin_SUCCESS; },
/* harmony export */   "UserLogin_ERROR": function() { return /* binding */ UserLogin_ERROR; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  IsLogin: false,
  loadding: false
}; //const USER_LOGIN = "USER_LOGIN"  // 오타 났을 때 대비 

const USER_LOGOUT = "USER_LOGOUT";
const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"; //UserLoginAction 은 middleware thunk 로 인해 사용할 수 있는 것 
// 얘가 실행이 됨
// login.js -> handleSubmit눌렀을 때 실행됨(dispatch) -> 
// user.js -> 아래 코드 실행됨 

const UserLoginAction = data => {
  return async dispatch => {
    dispatch(UserLogin_REQUEST());
    console.log(data, 'data');

    try {
      // fetch or axios 성공 fetch:내장 axios : 코드가져와야함
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        // body 내용은 객체이면 안된다 ! 
        body: JSON.stringify(_objectSpread({}, data))
      });
      const result = await response.json();
      result.result == 'ok' ? dispatch(UserLogin_SUCCESS(result)) : dispatch(UserLogin_ERROR());
    } catch (e) {
      // 실패
      dispatch(UserLogin_ERROR());
    }
  };
};
const UserLogin_REQUEST = data => {
  return {
    type: USER_LOGIN_REQUEST,
    loadding: true
  };
};
const UserLogin_SUCCESS = () => {
  return {
    type: USER_LOGIN_SUCCESS,
    loadding: false
  };
};
const UserLogin_ERROR = () => {
  return {
    type: USER_LOGIN_ERROR,
    loadding: false
  };
};
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread({}, state);

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true
      });

    case USER_LOGIN_ERROR:
      return _objectSpread({}, state);
    // case USER_LOGIN:
    //     console.log('로그인 신호왓다')
    //     return {
    //         ...state,
    //         IsLogin: true
    //     }

    case USER_LOGOUT:
      console.log('로그아웃 ');
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);


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
  const middlewares = [loggerMiddleware, (redux_thunk__WEBPACK_IMPORTED_MODULE_4___default())];
  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));
  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default, enhancer);
  return Store;
}; // Store 자체를 가지는게 아닌 Store를 return해 주는 함수를 담아야함 


const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true //debug:true (개발모드이므로) 와 같은 의미 

});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  IsLogin: false
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiZ2xvYmFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJTdG9yZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJtZW51IiwiaWQiLCJjYXRlZ29yeSIsInVybCIsImFjdGlvbiIsInR5cGUiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsIklzTG9naW4iLCJsb2FkZGluZyIsIlVTRVJfTE9HT1VUIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVzZXJMb2dpbkFjdGlvbiIsImRhdGEiLCJVc2VyTG9naW5fUkVRVUVTVCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwianNvbiIsIlVzZXJMb2dpbl9TVUNDRVNTIiwiVXNlckxvZ2luX0VSUk9SIiwiZSIsIlVzZXJMb2dvdXRBY3Rpb24iLCJsb2dnZXJNaWRkbGV3YXJlIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsInRodW5rTWlkZGxld2FyZSIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUUzQixRQUFNQyxhQUFhLEdBQUdDLGlEQUFVLENBQUNDLG1EQUFELENBQWhDLENBRjJCLENBRWE7O0FBRXhDLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsaURBQVUsQ0FBQ0MsOENBQUQsRUFBVU4sYUFBVixDQUFwQztBQUVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsMkJBQTVCO0FBQXdELG1CQUFXLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQU0sWUFBSSxFQUFDLHNF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Ozs7QUNQQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbmRleC5jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFN0b3JlLCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL2NvbnRleHQnXHJcbmltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuLy8gUmVkdXhcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzJ1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgZ2xvYmFsQ29udGV4dCA9IHVzZUNvbnRleHQoU3RvcmUpIC8vIGNvbnRleHTsl5Ag7J6I64qUIOqwkuydhCDqt7jrjIDroZwg67m87JmA7IScIOuLtOydjCBcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgZ2xvYmFsQ29udGV4dClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytIYW4rU2FucyZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCAvPiB7Lyog7Jqw66as6rCAIOunjOuToCDtjIzsnbwoaW5kZXgsbG9naW4uLinrk6TsnbQg7Jes6riw7JeQIOychOy5mCAqL31cclxuICAgICAgICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4vLyBBcHDsnYQgd2l0aFJlZHV47JeQIOqwkOyLuOyEnCDrs7TrgrTquLAgXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCkiLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID17XHJcbiAgICBtZW51OlsgIC8vIHNlcnZlciBkYiDsl5DshJwg7J2066CH6rKMIOuNsOydtO2EsOqwgCDsmZTri6Tqs6Ag6rCA7KCVIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICfrjIDrtoTrpZjrqZTribQxJyxcclxuICAgICAgICAgICAgdXJsOiAnL3Bvc3RzLzEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAn64yA67aE66WY66mU64m0MicsXHJcbiAgICAgICAgICAgIHVybDogJy9wb3N0cy8yJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ+uMgOu2hOulmOuplOuJtDMnLFxyXG4gICAgICAgICAgICB1cmw6ICcvcG9zdHMvMydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICc0JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICfrjIDrtoTrpZjrqZTribQ0JyxcclxuICAgICAgICAgICAgdXJsOiAnL3Bvc3RzLzQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnNScsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAn64yA67aE66WY66mU64m0NScsXHJcbiAgICAgICAgICAgIHVybDogJy9wb3N0cy81J1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9KHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5cclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCJcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcclxuXHJcbi8v7J247J6Q6rCSIDHqsJwg6rCd7LK066eMIOuwm+uKlOuLpC4gXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6IChzdGF0ZT17fSwgYWN0aW9uKT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL3VzZXLripQgdXNlci5qc+2MjOydvOyXkOyEnCDrr7jrpqwg7ZWo7IiY66GcIOunjOuTpOyWtCDrhpPslYTshJwgaW1wb3J0IO2VqOyImOunjCDtlbTsmKTrqbQg65CoIFxyXG4gICAgdXNlciwgIC8vID09IHVzZXI6dXNlciBcclxuICAgIGNhdGVnb3J5LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciAiLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgSXNMb2dpbjogZmFsc2UsXHJcbiAgICBsb2FkZGluZzpmYWxzZSxcclxufVxyXG5cclxuLy9jb25zdCBVU0VSX0xPR0lOID0gXCJVU0VSX0xPR0lOXCIgIC8vIOyYpO2DgCDrgqzsnYQg65WMIOuMgOu5hCBcclxuY29uc3QgVVNFUl9MT0dPVVQgPSBcIlVTRVJfTE9HT1VUXCJcclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gXCJVU0VSX0xPR0lOX1JFUVVFU1RcIlxyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSBcIlVTRVJfTE9HSU5fU1VDQ0VTU1wiXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSBcIlVTRVJfTE9HSU5fRVJST1JcIlxyXG5cclxuLy9Vc2VyTG9naW5BY3Rpb24g7J2AIG1pZGRsZXdhcmUgdGh1bmsg66GcIOyduO2VtCDsgqzsmqntlaAg7IiYIOyeiOuKlCDqsoMgXHJcbi8vIOyWmOqwgCDsi6TtlonsnbQg65CoXHJcbi8vIGxvZ2luLmpzIC0+IGhhbmRsZVN1Ym1pdOuIjOuggOydhCDrlYwg7Iuk7ZaJ65CoKGRpc3BhdGNoKSAtPiBcclxuLy8gdXNlci5qcyAtPiDslYTrnpgg7L2U65OcIOyLpO2WieuQqCBcclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCk9PntcclxuICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fUkVRVUVTVCgpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEsICdkYXRhJylcclxuICAgICAgICB0cnl7IC8vIGZldGNoIG9yIGF4aW9zIOyEseqztSBmZXRjaDrrgrTsnqUgYXhpb3MgOiDsvZTrk5zqsIDsoLjsmYDslbztlahcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gYm9keSDrgrTsmqnsnYAg6rCd7LK07J2066m0IOyViOuQnOuLpCAhIFxyXG4gICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7Li4uZGF0YX0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgICAgICAgcmVzdWx0LnJlc3VsdD09J29rJyA/IFxyXG4gICAgICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fU1VDQ0VTUyhyZXN1bHQpKVxyXG4gICAgICAgICAgICA6ICBkaXNwYXRjaChVc2VyTG9naW5fRVJST1IoKSlcclxuXHJcbiAgICAgICAgfWNhdGNoKGUpeyAvLyDsi6TtjKhcclxuICAgICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1JFUVVFU1QgPShkYXRhKT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fUkVRVUVTVCxcclxuICAgICAgICBsb2FkZGluZzp0cnVlLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fU1VDQ0VTUz0oKT0+eyBcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX0VSUk9SPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOX0VSUk9SLFxyXG4gICAgICAgIGxvYWRkaW5nOmZhbHNlLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVVNFUl9MT0dPVVRcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbjp0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gY2FzZSBVU0VSX0xPR0lOOlxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygn66Gc6re47J24IOyLoO2YuOyZk+uLpCcpXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgICAgIElzTG9naW46IHRydWVcclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn66Gc6re47JWE7JuDICcpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW46IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycycgICAvL2luZGV4IOyDneuetSDqsIDriqVcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbi8vdGh1bmsgXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcblxyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7ZGlzcGF0Y2gsZ2V0U3RhdGV9KSA9PihuZXh0KT0+KGFjdGlvbik9PntcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhY3Rpb249JyxhY3Rpb24pXHJcbiAgICAvLyBjb25zb2xlLmxvZygnZGlzcGF0Y2g9JywgZGlzcGF0Y2gpXHJcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0U3RhdGU9JywgZ2V0U3RhdGUpXHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pIFxyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKSBcclxufVxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmU9KCk9PntcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW2xvZ2dlck1pZGRsZXdhcmUsdGh1bmtNaWRkbGV3YXJlXSBcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyBcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4gICAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcclxuICAgIHJldHVybiBTdG9yZVxyXG59XHJcblxyXG4vLyBTdG9yZSDsnpDssrTrpbwg6rCA7KeA64qU6rKMIOyVhOuLjCBTdG9yZeulvCByZXR1cm7tlbQg7KO864qUIO2VqOyImOulvCDri7TslYTslbztlaggXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLHsgXHJcbiAgICBkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyBcclxuICAgIC8vZGVidWc6dHJ1ZSAo6rCc67Cc66qo65Oc7J2066+A66GcKSDsmYAg6rCZ7J2AIOydmOuvuCBcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIElzTG9naW46IGZhbHNlLFxyXG59XHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==