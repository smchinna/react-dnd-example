webpackJsonp([3],{

/***/ "./app/containers/HomePage/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/react/react.js
var react = __webpack_require__("./node_modules/react/react.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 14 modules
var index_es = __webpack_require__("./node_modules/react-intl/lib/index.es.js");

// CONCATENATED MODULE: ./app/containers/HomePage/messages.js
/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */


/* harmony default export */ var messages = (Object(index_es["d" /* defineMessages */])({
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'This is HomePage component!'
  }
}));
// CONCATENATED MODULE: ./app/containers/HomePage/index.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */





var HomePage_HomePage = function (_React$PureComponent) {
  _inherits(HomePage, _React$PureComponent);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
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

  return HomePage;
}(react_default.a.PureComponent);

/* harmony default export */ var containers_HomePage = __webpack_exports__["default"] = (HomePage_HomePage);

/***/ })

});