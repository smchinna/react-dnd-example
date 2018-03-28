webpackJsonp([2],{

/***/ "./app/containers/NotFoundPage/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/react/react.js
var react = __webpack_require__("./node_modules/react/react.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 14 modules
var index_es = __webpack_require__("./node_modules/react-intl/lib/index.es.js");

// CONCATENATED MODULE: ./app/containers/NotFoundPage/messages.js
/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */


/* harmony default export */ var messages = (Object(index_es["d" /* defineMessages */])({
  header: {
    id: 'app.components.NotFoundPage.header',
    defaultMessage: 'This is NotFoundPage component!'
  }
}));
// CONCATENATED MODULE: ./app/containers/NotFoundPage/index.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */






var NotFoundPage_NotFound = function (_React$PureComponent) {
  _inherits(NotFound, _React$PureComponent);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return react_default.a.createElement(
        'h1',
        null,
        react_default.a.createElement(index_es["a" /* FormattedMessage */], messages.header)
      );
    }
  }]);

  return NotFound;
}(react_default.a.PureComponent);

/* harmony default export */ var NotFoundPage = __webpack_exports__["default"] = (NotFoundPage_NotFound);

/***/ })

});