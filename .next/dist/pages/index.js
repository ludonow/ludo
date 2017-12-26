'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _Header = require('../components/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _NavBar = require('../components/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Tabs = require('../components/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\huang yung yu\\Desktop\\github\\ssr-redux\\pages\\index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #ffc645;\n'], ['\n  background-color: #ffc645;\n']);

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  (0, _reactTapEventPlugin2.default)();
  process.tapEventInjected = true;
}

var tabTitles = ['我的模板', '模板引用'];

var MainWrapper = _styledComponents2.default.div(_templateObject);

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var userAgent = this.props.userAgent;

      return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: (0, _getMuiTheme2.default)({ userAgent: userAgent }), __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(MainWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_Tabs2.default, { tabTitles: tabTitles, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_NavBar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      // Ensures material-ui renders the correct css prefixes server-side
      var userAgent = void 0;
      if (process.browser) {
        userAgent = navigator.userAgent;
      } else {
        userAgent = req.headers['user-agent'];
      }

      return { userAgent: userAgent };
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  userAgent: _propTypes2.default.string.isRequired
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImdldE11aVRoZW1lIiwiaW5qZWN0VGFwRXZlbnRQbHVnaW4iLCJNdWlUaGVtZVByb3ZpZGVyIiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiSGVhZCIsIkhlYWRlciIsIk5hdkJhciIsIlRhYnMiLCJwcm9jZXNzIiwidGFwRXZlbnRJbmplY3RlZCIsInRhYlRpdGxlcyIsIk1haW5XcmFwcGVyIiwiZGl2IiwiSW5kZXgiLCJ1c2VyQWdlbnQiLCJwcm9wcyIsInJlcSIsImJyb3dzZXIiLCJuYXZpZ2F0b3IiLCJoZWFkZXJzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7O0FBRWpCO0FBQ0E7QUFDQSxJQUFJLENBQUMsUUFBTCxBQUFhLGtCQUFrQixBQUM3QjtBQUNBO1VBQUEsQUFBUSxtQkFBUixBQUEyQixBQUM1Qjs7O0FBRUQsSUFBTSxZQUFZLENBQUEsQUFBQyxRQUFuQixBQUFrQixBQUFTOztBQUUzQixJQUFNLGNBQWMsMkJBQWQsQUFBcUIsSUFBM0I7O0lBSU0sQTs7Ozs7Ozs7Ozs7NkJBYUs7VUFBQSxBQUNDLFlBQWMsS0FEZixBQUNvQixNQURwQixBQUNDLEFBQ1I7OzZCQUNFLEFBQUMsNENBQWlCLFVBQVUsMkJBQVksRUFBRSxXQUExQyxBQUE0QixBQUFZO29CQUF4QztzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0MsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxnQ0FBSyxXQUFOLEFBQWlCO29CQUFqQjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFQUixBQUNFLEFBQ0UsQUFHRSxBQUVFLEFBS1Q7QUFMUztBQUFBOzs7OzBDQXJCc0I7VUFBUCxBQUFPLFdBQVAsQUFBTyxBQUM5Qjs7QUFDQTtVQUFJLGlCQUFKLEFBQ0E7VUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtvQkFBWSxVQUFaLEFBQXNCLEFBQ3ZCO0FBRkQsYUFFTyxBQUNMO29CQUFZLElBQUEsQUFBSSxRQUFoQixBQUFZLEFBQVksQUFDekI7QUFFRDs7YUFBTyxFQUFFLFdBQVQsQUFBTyxBQUNSOzs7OztBQVhpQixBOztBQThCcEIsTUFBQSxBQUFNO2FBQ08sb0JBQUEsQUFBVSxPQUR2QixBQUFrQixBQUNZLEFBRzlCO0FBSmtCLEFBQ2hCOztrQkFHRixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2h1YW5nIHl1bmcgeXUvRGVza3RvcC9naXRodWIvc3NyLXJlZHV4In0=